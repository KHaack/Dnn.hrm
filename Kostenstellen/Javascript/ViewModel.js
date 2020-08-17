Type.registerNamespace("DnnHrm.DnnModules.Kostenstellen");
DnnHrm.DnnModules.Kostenstellen.ViewModel = function () {
    var self = this;

    this.searchTerm = ko.observable("");
    this.kostenstellen = ko.observableArray();
}