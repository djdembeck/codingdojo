using System.ComponentModel.DataAnnotations;

namespace ProductsCategories.Models
{
    public class Association
    {
        [Key]
        public int AssociationId { get; set; }
        public int ProductId { get; set; }
        public Product ProductInCateogry { get; set; }
        public int CategoryId { get; set; }
        public Category CategoryOfProduct { get; set; }
    }
}