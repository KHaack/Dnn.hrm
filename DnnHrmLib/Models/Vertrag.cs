using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DnnHrm.DnnHrmLib.Models
{
    public class Vertrag
    {
        public int id { get; set; }
        public string vertragsForm { get; set; }
        public double stunden { get; set; }
        public DateTime? von { get; set; }
        public DateTime? bis { get; set; }
    }
}
