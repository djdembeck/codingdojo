using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace CRUDelicious.Migrations
{
    public partial class ChefsMigration2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Age",
                table: "Chef");

            migrationBuilder.DropColumn(
                name: "Name",
                table: "Chef");

            migrationBuilder.AddColumn<DateTime>(
                name: "BirthDate",
                table: "Chef",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<string>(
                name: "FirstName",
                table: "Chef",
                nullable: false);

            migrationBuilder.AddColumn<string>(
                name: "LastName",
                table: "Chef",
                nullable: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "BirthDate",
                table: "Chef");

            migrationBuilder.DropColumn(
                name: "FirstName",
                table: "Chef");

            migrationBuilder.DropColumn(
                name: "LastName",
                table: "Chef");

            migrationBuilder.AddColumn<int>(
                name: "Age",
                table: "Chef",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "Name",
                table: "Chef",
                type: "longtext CHARACTER SET utf8mb4",
                nullable: false,
                defaultValue: "");
        }
    }
}
