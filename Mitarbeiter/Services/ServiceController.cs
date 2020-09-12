using DnnHrm.DnnHrmLib.Models;
using DotNetNuke.Security;
using DotNetNuke.Web.Api;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace DnnHrm.DnnModules.Mitarbeiter.Services
{
    public class ServiceController : DnnApiController
    {
        
        [HttpGet]
        [ValidateAntiForgeryToken]
        [DnnModuleAuthorize(AccessLevel = SecurityAccessLevel.View)]
        public IEnumerable<Kostenstelle> GetKostenstellen()
        {
            IEnumerable<Kostenstelle> list = new List<Kostenstelle> {
            new Kostenstelle { id = 1, name = "Paul-Gerhardt-Schule", nummer = "K10002", erstelltAm = new DateTime(2020, 4, 1)},
            new Kostenstelle { id = 2, name = "Grundschule Pavenstädt", nummer = "K10003", erstelltAm = new DateTime(2020, 4, 13)},
            new Kostenstelle { id = 3, name = "Altstadtschule Gütersloh", nummer = "K10004", erstelltAm = new DateTime(2020, 4, 14) }
        };

            return list.ToList();
        }

        [HttpGet]
        [ValidateAntiForgeryToken]
        [DnnModuleAuthorize(AccessLevel = SecurityAccessLevel.View)]
        public IEnumerable<DnnHrmLib.Models.Mitarbeiter> GetMitarbeiter(int kostenstelle)
        {
            List< DnnHrmLib.Models.Mitarbeiter > list = new List<DnnHrmLib.Models.Mitarbeiter>();

            DnnHrmLib.Models.Mitarbeiter m = new DnnHrmLib.Models.Mitarbeiter();
            m.nummer = "M3711";
            m.id = 1;
            m.name = "Haack";
            m.vorname = "Kevin";
            m.telefon = "01525 700 33 10";
            m.email = "kevin.haack@live.de";

            m.kostenstelle = new Kostenstelle { id = 1, nummer = "K10002" };
            m.vertrag = new Vertrag { id = 1, vertragsForm = "Vollzeit - Unbefristet", stunden = 38.0 };
            m.geschlecht = new Geschlecht { id = 1, geschlecht = "männlich" };
            list.Add(m);

            m = new DnnHrmLib.Models.Mitarbeiter();
            m.nummer = "M3737";
            m.id = 1;
            m.name = "Bergmann";
            m.vorname = "Simone";
            m.telefon = "01525 700 33 10";
            m.email = "email@dump.de";

            m.kostenstelle = new Kostenstelle { id = 1, nummer = "K10002" };
            m.vertrag = new Vertrag { id = 1, vertragsForm = "Teilzeit - Befristet", stunden = 28.0 };
            m.geschlecht = new Geschlecht { id = 1, geschlecht = "weiblich" };
            list.Add(m);

            return list;
        }

        [HttpGet]
        [ValidateAntiForgeryToken]
        [DnnModuleAuthorize(AccessLevel = SecurityAccessLevel.View)]
        public HttpResponseMessage RemoveMitarbeiter(DnnHrmLib.Models.Mitarbeiter mitarbeiter)
        {
            return Request.CreateResponse(HttpStatusCode.OK);
        }
    }
}