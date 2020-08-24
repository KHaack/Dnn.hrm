Type.registerNamespace("DnnHrm.DnnModules.Mitarbeiter");
DnnHrm.DnnModules.Mitarbeiter.MitarbeiterViewModel = function () {
    var self = this;

    this.id = ko.observable();
    this.nummer = ko.observable();
    this.name = ko.observable();
    this.vorname = ko.observable();
    this.telefon = ko.observable();
    this.email = ko.observable();

    this.kostenstelle = ko.observable();
    this.geschlecht = ko.observable();
    this.vertrag = ko.observable();

    // saved state for undo editing
    var savedState = {};

    // indicates whether the editing is enabled
    this.inEditing = ko.observable(false);

    /*
     * start the editing
     */
    this.startEditing = function () {
        savedState = self.toObject();
        self.inEditing(true);
    };

    /*
     * undo the changes
     */
    this.undoChanges = function () {
        self.fromObject(savedState);

        self.inEditing(false);
    };

    /* 
     * creates an object from the knockout view model.
     */
    this.toObject = function () {
        return {
            id: self.id(),
            nummer: self.nummer(),
            name: self.name(),
            vorname: self.vorname(),
            telefon: self.telefon(),
            email: self.email(),

            kostenstelle: self.kostenstelle().toObject(),
            geschlecht: self.geschlecht().toObject(),
            vertrag: self.vertrag().toObject()
        };
    }

    /*
     * load the passed object into the knockout view model.
     */
    this.fromObject = function (obj) {
        self.id(obj.id);
        self.nummer(obj.nummer);
        self.name(obj.name);
        self.vorname(obj.vorname);
        self.telefon(obj.telefon);
        self.email(obj.email);

        var geschlecht = new DnnHrm.DnnModules.Mitarbeiter.GeschlechtViewModel();
        geschlecht.fromObject(obj.geschlecht);
        self.geschlecht(geschlecht);

        var vertrag = new DnnHrm.DnnModules.Mitarbeiter.VertragViewModel();
        vertrag.fromObject(obj.vertrag);
        self.vertrag(vertrag);

        var kostenstelle = new DnnHrm.DnnModules.Mitarbeiter.KostenstelleViewModel();
        kostenstelle.fromObject(obj.kostenstelle);
        self.kostenstelle(kostenstelle);
    }
}