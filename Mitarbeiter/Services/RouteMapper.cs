using DotNetNuke.Web.Api;

namespace DnnHrm.DnnModules.Mitarbeiter.Services
{
    public class RouteMapper : IServiceRouteMapper
    {
        public void RegisterRoutes(IMapRoute mapRouteManager)
        {
            mapRouteManager.MapHttpRoute("Mitarbeiter",
                                         "default",
                                         "{controller}/{action}",
                                         new[] { "DnnHrm.DnnModules.Mitarbeiter.Services" });
        }
    }
}