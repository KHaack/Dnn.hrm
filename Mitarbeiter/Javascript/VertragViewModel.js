Type.registerNamespace("DnnHrm.DnnModules.Mitarbeiter");
DnnHrm.DnnModules.Mitarbeiter.VertragViewModel = function () {
    var self = this;

    this.id = ko.observable();
    this.vertragsForm = ko.observable();

    this.stunden = ko.observable();
    this.von = ko.observable();
    this.bis = ko.observable();

    /* 
     * creates an object from the knockout view model.
     */
    this.toObject = function () {
        return {
            id: self.id(),
            vertragsForm: self.vertragsForm(),
            stunden: self.stunden(),
            von: self.von(),
            bis: self.bis()
        };
    }

    /*
     * load the passed object into the knockout view model.
     */
    this.fromObject = function (obj) {
        self.id(obj.id);
        self.vertragsForm(obj.vertragsForm);
        self.stunden(Number(obj.stunden));
        self.von(obj.von);
        self.bis(obj.bis);
    }
}