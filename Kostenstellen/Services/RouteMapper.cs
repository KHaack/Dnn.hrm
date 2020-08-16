using DotNetNuke.Web.Api;

namespace DnnHrm.DnnModules.Kostenstellen.Services
{
    public class RouteMapper : IServiceRouteMapper
    {
        public void RegisterRoutes(IMapRoute mapRouteManager)
        {
            mapRouteManager.MapHttpRoute("Kostenstellen",
                                         "default",
                                         "{controller}/{action}",
                                         new[] { "DnnHrm.DnnModules.Kostenstellen.Services" });
        }
    }
}