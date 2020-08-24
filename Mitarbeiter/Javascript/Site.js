Type.registerNamespace("DnnHrm.DnnModules.Mitarbeiter");
DnnHrm.DnnModules.Mitarbeiter.Site = function (portalId, moduleId) {
    var self = this;

    /**
     * The API service framework. 
     */
    var serviceFramework = $.ServicesFramework(moduleId);

    /**
     * The API service root.
     */
    var serviceRoot = serviceFramework.getServiceRoot('Mitarbeiter') + 'Service/';

    /**
     * the settings. 
     */
    var settings = {
        url: {
            GetMitarbeiter: 'GetMitarbeiter',
            GetKostenstellen: 'GetKostenstellen',
            RemoveMitarbeiter: 'RemoveMitarbeiter'
        }
    }

    /**
     * The knockout view model.
     */
    var viewModel = new DnnHrm.DnnModules.Mitarbeiter.ViewModel();

    /**
     * search
     **/
    viewModel.filteredMitarbeiter = ko.dependentObservable(function () {
        var filter = viewModel.searchTerm().toLowerCase();
        if (!filter) {
            return viewModel.mitarbeiter();
        } else {
            return ko.utils.arrayFilter(viewModel.mitarbeiter(), function (item) {
                return item.name().toLowerCase().includes(filter);
            });
        }
    }, this);

    /*
     * on kostenstelle changed
     */
    viewModel.selectedKostenstelle.subscribe(function (id) {
        if (!id) {
            return;
        } 

        $.ajax({
            type: "GET",
            url: serviceRoot + settings.url.GetMitarbeiter,
            beforeSend: serviceFramework.setModuleHeaders,
            data: {
                kostenstelle: id
            },
            cache: false,
            error: function (request, status, error) {
                alert(request.responseText);
            },
            success: function (data) {
                viewModel.mitarbeiter.removeAll();
                for (i = 0; i < data.length; i++) {
                    var mitarbeiter = new DnnHrm.DnnModules.Mitarbeiter.MitarbeiterViewModel();
                    mitarbeiter.fromObject(data[i])
                    viewModel.mitarbeiter.push(mitarbeiter);
                }
            }
        });
    });

    /**
     * remove Mitarbeiter.
     */
    viewModel.removeMitarbeiter = function (mitarbeiter) {
        $.ajax({
            type: "GET",
            url: serviceRoot + settings.url.RemoveMitarbeiter,
            beforeSend: serviceFramework.setModuleHeaders,
            data: {
                mitarbeiter: mitarbeiter.toObject()
            },
            cache: false,
            error: function (request, status, error) {
                alert(request.responseText);
            },
            success: function () {
                viewModel.mitarbeiter.remove(mitarbeiter);
            }
        });
    }

    // bind
    ko.applyBindings(viewModel);

    /**
     * Method to be called on document ready.
     */
    this.OnDocumentReady = function () {
        $.ajax({
            type: "GET",
            url: serviceRoot + settings.url.GetKostenstellen,
            beforeSend: serviceFramework.setModuleHeaders,
            data: {
            },
            cache: false,
            error: function (request, status, error) {
                alert(request.responseText);
            },
            success: function (data) {
                for (i = 0; i < data.length; i++) {
                    var kostenstelle = new DnnHrm.DnnModules.Mitarbeiter.KostenstelleViewModel();
                    kostenstelle.fromObject(data[i])
                    viewModel.kostenstellen.push(kostenstelle);
                }
            }
        });
    };
}