//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace dal
{
    using System;
    using System.Collections.Generic;
    
    public partial class disposableRent
    {
        public int rentID { get; set; }
        public Nullable<int> carID { get; set; }
        public Nullable<bool> gas { get; set; }
        public string location { get; set; }
        public Nullable<int> state { get; set; }
        public Nullable<System.DateTime> dateFrom { get; set; }
        public Nullable<System.DateTime> dateTo { get; set; }
        public string hourFrom { get; set; }
        public string hourTo { get; set; }
        public Nullable<int> minPercentageForRent { get; set; }
    
        public virtual Cars Cars { get; set; }
    }
}
