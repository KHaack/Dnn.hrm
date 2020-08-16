using DnnHrm.DnnHrmLib.Models;
using DotNetNuke.Security;
using DotNetNuke.Web.Api;
using System;
using System.Collections.Generic;
using System.Web.Http;

namespace DnnHrm.DnnModules.Kostenstellen.Services
{
    public class ServiceController : DnnApiController
    {
        [HttpGet]
        [ValidateAntiForgeryToken]
        [DnnModuleAuthorize(AccessLevel = SecurityAccessLevel.View)]
        public IEnumerable<Kostenstelle> GetKostenstellen()
        {
            List<Kostenstelle> list = new List<Kostenstelle>();

            list.Add(new Kostenstelle { id = 1, name = "Paul-Gerhardt-Schule", nummer = "K10002" , erstelltAm = new DateTime(2020, 4, 1) });
            list.Add(new Kostenstelle { id = 2, name = "Grundschule Pavenstädt", nummer = "K10003", erstelltAm = new DateTime(2020, 4, 13) });
            list.Add(new Kostenstelle { id = 3, name = "Altstadtschule Gütersloh", nummer = "K10004", erstelltAm = new DateTime(2020, 4, 14) });

            return list;
        }
    }
}