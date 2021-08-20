using System.ComponentModel.DataAnnotations;
namespace WeddingPlanner.Models
{
    public class RSVP
    {
        [Key]
        public int RSVPId { get; set; }
        public int WeddingId { get; set; }
        public Wedding WeddingToRSVP { get; set; }
        public int UserId { get; set; }
        public User UserRSVPing { get; set; }
    }
}