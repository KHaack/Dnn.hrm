Type.registerNamespace("DnnHrm.DnnModules.Kostenstellen");
DnnHrm.DnnModules.Kostenstellen.Site = function (portalId, moduleId) {
    /**
     * The API service framework. 
     */
    var serviceFramework = $.ServicesFramework(moduleId);

    /**
     * The API service root.
     */
    var serviceRoot = serviceFramework.getServiceRoot('Kostenstellen') + 'Service/';

    /**
     * the settings. 
     */
    var settings = {
        url: {
            GetKostenstellen: 'GetKostenstellen'
        }
    }

    /**
     * The knockout view model.
     */
    var viewModel = new DnnHrm.DnnModules.Kostenstellen.ViewModel();

    // search
    viewModel.filteredKostenstellen = ko.dependentObservable(function () {
        var filter = viewModel.searchTerm().toLowerCase();
        if (!filter) {
            return viewModel.kostenstellen();
        } else {
            return ko.utils.arrayFilter(viewModel.kostenstellen(), function (item) {
                return item.name().toLowerCase().includes(filter);
            });
        }
    }, viewModel);

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
                    var k = new DnnHrm.DnnModules.Kostenstellen.KostenstelleViewModel();
                    k.fromObject(data[i])
                    viewModel.kostenstellen.push(k);
                }
            }
        });
    }
}