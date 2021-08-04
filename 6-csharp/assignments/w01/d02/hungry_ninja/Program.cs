using System;
using System.Collections.Generic;

namespace hungry_ninja
{
    class Food
    {
        public string Name;
        public int Calories;
        // Foods can be Spicy and/or Sweet
        public bool IsSpicy; 
        public bool IsSweet; 
        public Food(string name, int calories, bool isspicy, bool issweet)
        {
            Name = name;
            Calories = calories;
            IsSpicy = isspicy;
            IsSweet = issweet;
        }
    }

    class Buffet
    {
        public List<Food> Menu;

        //constructor
        public Buffet()
        {
            Menu = new List<Food>()
            {
                new Food("Chicken fingers", 1000, false, false),
                new Food("Salad", 400, false, false),
                new Food("Chocolate covered almonds", 130, false, true),
                new Food("Chips and Queso", 600, true, false),
                new Food("Cereal", 300, false, true),
                new Food("French fries", 500, false, false),
                new Food("Steak", 250, false, false),
                new Food("Water", 0, false, false),
                new Food("Sweet tea", 120, false, true),
                new Food("Rice", 300, false, false),
            };
        }

        public Food Serve()
        {
            Random randidx = new Random();
            return Menu[randidx.Next(0,Menu.Count)];
        }
    }

class Ninja
    {
        private int calorieIntake;
        // public List<Food> FoodHistory;

        public Ninja()
        {
            int calorieIntake = 0;
            List<Food> FoodHistory = new List<Food>();
        }

        public bool IsFull
        {
            get { return this.calorieIntake > 1200 ? true : false;}
        }

        public void Eat(Food item)
        {
            if (!IsFull)
            {
                this.calorieIntake += item.Calories;
                this.FoodHistory.Add(item);
                Console.WriteLine($"Ninja ate {item.Name}");
                if (item.IsSweet && !item.IsSpicy)
                {
                    Console.WriteLine("It was sweet!");
                }
                else if (item.IsSpicy && !item.IsSweet)
                {
                    Console.WriteLine("It was spicy!");
                }
                else if (item.IsSweet && item.IsSpicy)
                {
                    Console.WriteLine("It was sweet AND spicy");
                }
            }
            else
            {
                Console.WriteLine("Ninja is too full!");
            }
        }
    }

    class Program
    {
        static void Main(string[] args)
        {
            Buffet Chicago = new Buffet();
            Ninja Turtle = new Ninja();
            while (!Turtle.IsFull)
            {
                // Console.WriteLine(Chicago.Serve().Name);
                Turtle.Eat(Chicago.Serve());
            }
        }
    }
}
