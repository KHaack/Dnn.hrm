using DotNetNuke.Entities.Modules;
using DotNetNuke.Framework;
using System;

namespace DnnHrm.DnnModules.Kostenstellen
{
    public partial class View : PortalModuleBase
    {
        #region Event Handlers

        private void Page_Load(object sender, EventArgs e)
        {
            try
            {
                ServicesFramework.Instance.RequestAjaxAntiForgerySupport();
                
            }
            catch (Exception ex)
            {

            }
        }

        #endregion
    }
}
