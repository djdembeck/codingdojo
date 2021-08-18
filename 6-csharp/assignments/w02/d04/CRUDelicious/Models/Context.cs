using Microsoft.EntityFrameworkCore;
namespace CRUDelicious.Models
{ 
    // the MyContext class representing a session with our MySQL 
    // database allowing us to query for or save data
    public class Context : DbContext 
    { 
        public Context(DbContextOptions options) : base(options) { }
        // the "CRUDelicious" table name will come from the DbSet variable name
        public DbSet<Dish> Dishes { get; set; }
        public DbSet<Chef> Chefs { get; set; }
    }
}