<%@ Control Language="C#" Inherits="DnnHrm.DnnModules.Mitarbeiter.View" AutoEventWireup="true" CodeBehind="View.ascx.cs" %>
<%@ Register TagPrefix="dnn" Namespace="DotNetNuke.Web.Client.ClientResourceManagement" Assembly="DotNetNuke.Web.Client" %>
<%@ Register TagPrefix="dnn" Namespace="DotNetNuke.Web.UI.WebControls" Assembly="DotNetNuke.Web" %>
<%@ Register TagPrefix="dnn" TagName="Label" Src="../../controls/LabelControl.ascx" %>

<dnn:DnnJsInclude runat="server" FilePath="~/Resources/Shared/scripts/knockout.js" />
<dnn:DnnJsInclude runat="server" FilePath="~/DesktopModules/Mitarbeiter/Javascript/GeschlechtViewModel.js" />
<dnn:DnnJsInclude runat="server" FilePath="~/DesktopModules/Mitarbeiter/Javascript/KostenstelleViewModel.js" />
<dnn:DnnJsInclude runat="server" FilePath="~/DesktopModules/Mitarbeiter/Javascript/VertragViewModel.js" />
<dnn:DnnJsInclude runat="server" FilePath="~/DesktopModules/Mitarbeiter/Javascript/MitarbeiterViewModel.js" />
<dnn:DnnJsInclude runat="server" FilePath="~/DesktopModules/Mitarbeiter/Javascript/ViewModel.js" />
<dnn:DnnJsInclude runat="server" FilePath="~/DesktopModules/Mitarbeiter/Javascript/Site.js" />

<script>
    Sys.WebForms.PageRequestManager.getInstance().add_pageLoaded(function () {
        var site = new DnnHrm.DnnModules.Mitarbeiter.Site(<%= this.PortalSettings.PortalId %>, <%= this.ModuleId %>);
        site.OnDocumentReady();
    });
</script>

<div class="container-fluid">
    <div class="form-group">
        <label>Kostenstelle</label>
        <select class="form-control"
            data-bind="options: kostenstellen,
                optionsText: 'name',
                value: selectedKostenstelle,
                optionsValue: 'id',
                optionsCaption: 'Bitte wählen...'">
        </select>
    </div>

    <div data-bind="ifnot: selectedKostenstelle">
        <div class="dnnFormMessage dnnFormInfo" role="alert">
            Bitte wählen Sie eine Kostenstelle aus, um die entsprechenden Mitarbeiter anzuzeigen.
        </div>
    </div>

    <div class="form-group" data-bind="if: selectedKostenstelle">
        <label>Nummer</label>
        <input type="text" class="form-control" disabled />
    </div>

    <div class="form-group" data-bind="if: selectedKostenstelle">
        <label>Stunden &Oslash;</label>
        <input type="text" class="form-control" disabled data-bind="value: stundenDurchschnitt" />
    </div>

    <div class="form-group" data-bind="if: selectedKostenstelle">
        <label>Mitarbeiter Anzahl</label>
        <input type="text" class="form-control" disabled data-bind="value: mitarbeiter().length" />
    </div>
</div>
<div class="container-fluid" data-bind="if: selectedKostenstelle">
    <hr />
    <div class="row">
        <div class="col-lg-12">
            <div class="btn-group btn-group-sm right" role="group" aria-label="...">
                <button type="button" class="btn btn-default" aria-label="Left Align">
                    Mitarbeiter hinzufügen <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
                </button>
            </div>
            <br />
            <br />
            <input class="form-control"
                type="text"
                placeholder="Suchen"
                aria-label="Suchen"
                data-bind="value: searchTerm, valueUpdate: 'afterkeydown'" />
            <br />
            <table class="table table-bordered table-striped text-center">
                <thead>
                    <tr>
                        <th class="text-center col-lg-1">Nummer</th>
                        <th class="text-center col-lg-1">Name</th>
                        <th class="text-center col-lg-1">Vorname</th>
                        <th class="text-center col-lg-2">Kontakt</th>
                        <th class="text-center col-lg-1">Kostenstelle</th>
                        <th class="text-center col-lg-1">Geschlecht</th>
                        <th class="text-center col-lg-2">Vertrag</th>
                        <th class="text-center col-lg-3"></th>
                    </tr>
                </thead>
                <tbody data-bind="foreach: filteredMitarbeiter">
                    <tr data-bind="ifnot: inEditing">
                        <td data-bind="text: nummer"></td>
                        <td data-bind="text: name"></td>
                        <td data-bind="text: vorname"></td>
                        <td>
                            <span data-bind="text: telefon"></span>
                            <br />
                            <a data-bind="text: email, attr: {href: email}"></a>
                        </td>
                        <td data-bind="text: kostenstelle().nummer"></td>
                        <td data-bind="text: geschlecht().geschlecht"></td>
                        <td>
                            <span data-bind="text: vertrag().vertragsForm"></span>
                            <br />
                            (<span data-bind="text: vertrag().stunden"></span>h)
                        </td>
                        <td>
                            <div class="btn-group btn-group-sm" role="group" aria-label="...">
                                <button type="button"
                                    class="btn btn-default"
                                    data-bind="click: startEditing">
                                    Bearbeiten <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>
                                </button>
                                <button type="button"
                                    class="btn btn-danger"
                                    data-bind="click: $parent.removeMitarbeiter">
                                    Entfernen <span class="glyphicon glyphicon-trash" aria-hidden="true"></span>
                                </button>
                            </div>
                        </td>
                    </tr>
                    <tr data-bind="if: inEditing">
                        <td>
                            <input class="form-control"
                                type="text"
                                placeholder="Nummer"
                                aria-label="Nummer"
                                data-bind="value: nummer" />
                        </td>
                        <td>
                            <input class="form-control"
                                type="text"
                                placeholder="Name"
                                aria-label="Name"
                                data-bind="value: name" />
                        </td>
                        <td>
                            <input class="form-control"
                                type="text"
                                placeholder="Telefon"
                                aria-label="Telefon"
                                data-bind="value: telefon" /><br />
                            <input class="form-control"
                                type="text"
                                placeholder="E-Mail"
                                aria-label="E-Mail"
                                data-bind="value: email" />
                        </td>
                        <td>

                        </td>
                        <td>

                        </td>
                        <td>

                        </td>
                        <td>

                        </td>
                        <td>
                            <div class="btn-group btn-group-sm" role="group" aria-label="...">
                                <button type="button"
                                    class="btn btn-success">
                                    Speichern <span class="glyphicon glyphicon-ok" aria-hidden="true"></span>
                                </button>
                                <button type="button"
                                    class="btn btn-secondary"
                                    data-bind="click: undoChanges">
                                    Abbrechen <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>
                                </button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
