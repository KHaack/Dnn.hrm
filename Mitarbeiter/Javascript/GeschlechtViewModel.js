Type.registerNamespace("DnnHrm.DnnModules.Mitarbeiter");
DnnHrm.DnnModules.Mitarbeiter.GeschlechtViewModel = function () {
    var self = this;

    this.id = ko.observable();
    this.geschlecht = ko.observable();

    /* 
     * creates an object from the knockout view model.
     */
    this.toObject = function () {
        return {
            id: self.id(),
            geschlecht: self.geschlecht()
        };
    }

    /*
     * load the passed object into the knockout view model.
     */
    this.fromObject = function (obj) {
        self.id(obj.id);
        self.geschlecht(obj.geschlecht);
    }
}