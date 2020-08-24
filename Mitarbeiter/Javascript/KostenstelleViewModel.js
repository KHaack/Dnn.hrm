Type.registerNamespace("DnnHrm.DnnModules.Mitarbeiter");
DnnHrm.DnnModules.Mitarbeiter.KostenstelleViewModel = function () {
    var self = this;

    this.id = ko.observable();
    this.nummer = ko.observable();
    this.name = ko.observable();
    this.erstelltAm = ko.observable();

    /* 
     * creates an object from the knockout view model.
     */
    this.toObject = function () {
        return {
            id: self.id(),
            nummer: self.nummer(),
            name: self.name(),
            erstelltAm: self.erstelltAm()
        };
    }

    /*
     * load the passed object into the knockout view model.
     */
    this.fromObject = function (obj) {
        self.id(obj.id);
        self.nummer(obj.nummer);
        self.name(obj.name);
        self.erstelltAm(obj.erstelltAm);
    }
}