Type.registerNamespace("DnnHrm.DnnModules.Kostenstellen");
DnnHrm.DnnModules.Kostenstellen.ViewModel = function () {
    this.searchTerm = ko.observable("");
    this.kostenstellen = ko.observableArray();
}

DnnHrm.DnnModules.Kostenstellen.KostenstelleViewModel = function () {
    var self = this;

    this.id = ko.observable();
    this.nummer = ko.observable();
    this.name = ko.observable();
    this.erstelltAm = ko.observable();

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