Type.registerNamespace("DnnHrm.DnnModules.Mitarbeiter");
DnnHrm.DnnModules.Mitarbeiter.ViewModel = function () {
    var self = this;

    this.kostenstellen = ko.observableArray();

    this.searchTerm = ko.observable("");

    this.selectedKostenstelle = ko.observable();
    this.mitarbeiter = ko.observableArray();
    this.stundenDurchschnitt = ko.computed(function () {
        var total = 0

        ko.utils.arrayForEach(self.mitarbeiter(), function (m) {
            total += m.vertrag().stunden();
        });
        return total / self.mitarbeiter().length;
    }, this);
}