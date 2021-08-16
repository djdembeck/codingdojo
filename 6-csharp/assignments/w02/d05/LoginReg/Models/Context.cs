using Microsoft.EntityFrameworkCore;
namespace LoginReg.Models
{ 
    // the MyContext class representing a session with our MySQL 
    // database allowing us to query for or save data
    public class Context : DbContext 
    { 
        public Context(DbContextOptions options) : base(options) { }
        // the "LoginReg" table name will come from the DbSet variable name
        public DbSet<User> Users { get; set; }
    }
}