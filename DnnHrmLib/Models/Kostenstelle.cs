using System;

[assembly: CLSCompliant(true)]
namespace DnnHrm.DnnHrmLib.Models
{
    public class Kostenstelle
    {
        public int id { get; set; }
        public string nummer { get; set; }
        public string name { get; set; }
        public DateTime erstelltAm { get; set; }
    }
}
