<%@ Control Language="C#" Inherits="DnnHrm.DnnModules.Kostenstellen.View" AutoEventWireup="true" CodeBehind="View.ascx.cs" %>
<%@ Register TagPrefix="dnn" Namespace="DotNetNuke.Web.Client.ClientResourceManagement" Assembly="DotNetNuke.Web.Client" %>
<%@ Register TagPrefix="dnn" Namespace="DotNetNuke.Web.UI.WebControls" Assembly="DotNetNuke.Web" %>
<%@ Register TagPrefix="dnn" TagName="Label" Src="../../controls/LabelControl.ascx" %>

<dnn:DnnJsInclude runat="server" FilePath="~/Resources/Shared/scripts/knockout.js" />
<dnn:DnnJsInclude runat="server" FilePath="~/DesktopModules/Kostenstellen/Javascript/KostenstelleViewModel.js" />
<dnn:DnnJsInclude runat="server" FilePath="~/DesktopModules/Kostenstellen/Javascript/ViewModel.js" />
<dnn:DnnJsInclude runat="server" FilePath="~/DesktopModules/Kostenstellen/Javascript/Site.js" />

<script>
    Sys.WebForms.PageRequestManager.getInstance().add_pageLoaded(function () {
        var site = new DnnHrm.DnnModules.Kostenstellen.Site(<%= this.PortalSettings.PortalId %>, <%= this.ModuleId %>);
        site.OnDocumentReady();
    });
</script>

<div class="container-fluid">
    <div class="row">
        <div class="col-lg-12">
            <div class="btn-group btn-group-sm right" role="group" aria-label="...">
                <button type="button" class="btn btn-default" aria-label="Left Align">
                    Kostenstelle hinzufügen <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
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
            <table class="table table-bordered table-responsive-md table-striped text-center">
                <thead>
                    <tr>
                        <th class="text-center col-md-2">Nummer</th>
                        <th class="text-center col-md-4">Kostenstelle</th>
                        <th class="text-center col-md-2">Erstellt am</th>
                        <th class="text-center col-md-4"></th>
                    </tr>
                </thead>
                <tbody data-bind="foreach: filteredKostenstellen">
                    <tr data-bind="ifnot: inEditing">
                        <td data-bind="text: nummer"></td>
                        <td data-bind="text: name"></td>
                        <td data-bind="text: (new Date(erstelltAm())).toLocaleDateString()"></td>
                        <td>
                            <div class="btn-group btn-group-sm" role="group" aria-label="...">
                                <button type="button"
                                    class="btn btn-default"
                                    data-bind="click: startEditing">
                                    Bearbeiten <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>
                                </button>
                                <a class="btn btn-default" data-bind="attr: {href: mitarbeiterLink}">
                                    Mitarbeiter <span class="glyphicon glyphicon-user" aria-hidden="true"></span>
                                </a>
                                <button type="button"
                                    class="btn btn-danger"
                                    data-bind="click: $parent.removeKostenstelle">
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
                            - automatisch generiert -
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