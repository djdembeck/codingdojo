using System;
using System.ComponentModel.DataAnnotations;
namespace BankAccounts.Models
{
    public class Transaction
    {
        [Key]
        public int TransactionId { get; set; }
        [Required]
        public int Amount { get; set; }
        [Required]
        public int UserId { get; set; }
        public User OrigUser { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public DateTime UpdatedAt { get; set; } = DateTime.Now;
    }
}