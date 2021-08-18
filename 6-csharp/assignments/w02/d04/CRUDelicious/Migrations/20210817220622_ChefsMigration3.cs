using Microsoft.EntityFrameworkCore.Migrations;

namespace CRUDelicious.Migrations
{
    public partial class ChefsMigration3 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Dish_Chef_OrigChefChefId",
                table: "Dish");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Dish",
                table: "Dish");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Chef",
                table: "Chef");

            migrationBuilder.RenameTable(
                name: "Dish",
                newName: "Dishes");

            migrationBuilder.RenameTable(
                name: "Chef",
                newName: "Chefs");

            migrationBuilder.RenameIndex(
                name: "IX_Dish_OrigChefChefId",
                table: "Dishes",
                newName: "IX_Dishes_OrigChefChefId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Dishes",
                table: "Dishes",
                column: "DishId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Chefs",
                table: "Chefs",
                column: "ChefId");

            migrationBuilder.AddForeignKey(
                name: "FK_Dishes_Chefs_OrigChefChefId",
                table: "Dishes",
                column: "OrigChefChefId",
                principalTable: "Chefs",
                principalColumn: "ChefId",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Dishes_Chefs_OrigChefChefId",
                table: "Dishes");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Dishes",
                table: "Dishes");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Chefs",
                table: "Chefs");

            migrationBuilder.RenameTable(
                name: "Dishes",
                newName: "Dish");

            migrationBuilder.RenameTable(
                name: "Chefs",
                newName: "Chef");

            migrationBuilder.RenameIndex(
                name: "IX_Dishes_OrigChefChefId",
                table: "Dish",
                newName: "IX_Dish_OrigChefChefId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Dish",
                table: "Dish",
                column: "DishId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Chef",
                table: "Chef",
                column: "ChefId");

            migrationBuilder.AddForeignKey(
                name: "FK_Dish_Chef_OrigChefChefId",
                table: "Dish",
                column: "OrigChefChefId",
                principalTable: "Chef",
                principalColumn: "ChefId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
