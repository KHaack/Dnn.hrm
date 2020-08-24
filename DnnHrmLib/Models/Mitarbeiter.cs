using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DnnHrm.DnnHrmLib.Models
{
    public class Mitarbeiter
    {
        public int id { get; set; }
        public string nummer { get; set; }
        public string name { get; set; }
        public string vorname { get; set; }
        public string telefon { get; set; }
        public string email { get; set; }

        public Kostenstelle kostenstelle { get; set; }
        public Vertrag vertrag { get; set; }
        public Geschlecht geschlecht { get; set; }
    }
}
