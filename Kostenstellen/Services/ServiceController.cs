using DnnHrm.DnnHrmLib.Models;
using DotNetNuke.Security;
using DotNetNuke.Web.Api;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace DnnHrm.DnnModules.Kostenstellen.Services
{
    public class ServiceController : DnnApiController
    {
        private static IEnumerable<Kostenstelle> list = new List<Kostenstelle> {
            new Kostenstelle { id = 1, name = "Paul-Gerhardt-Schule", nummer = "K10002", erstelltAm = new DateTime(2020, 4, 1)},
            new Kostenstelle { id = 2, name = "Grundschule Pavenstädt", nummer = "K10003", erstelltAm = new DateTime(2020, 4, 13)},
            new Kostenstelle { id = 3, name = "Altstadtschule Gütersloh", nummer = "K10004", erstelltAm = new DateTime(2020, 4, 14) }
        };

        [HttpGet]
        [ValidateAntiForgeryToken]
        [DnnModuleAuthorize(AccessLevel = SecurityAccessLevel.View)]
        public IEnumerable<Kostenstelle> GetKostenstellen()
        {
            return ServiceController.list.ToList();
        }

        [HttpGet]
        [ValidateAntiForgeryToken]
        [DnnModuleAuthorize(AccessLevel = SecurityAccessLevel.View)]
        public HttpResponseMessage RemoveKostenstellen(Kostenstelle kostenstelle)
        {
            return Request.CreateResponse(HttpStatusCode.OK);
        }
    }
}