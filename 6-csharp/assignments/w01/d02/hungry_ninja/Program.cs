using System;
using System.Collections.Generic;

namespace hungry_ninja
{
    class Buffet
    {
        public List<IConsumable> Menu;

        public Buffet()
        {
            Menu = new List<IConsumable>()
            {
                new Food("Chicken fingers", 1000, false, false),
                new Food("Salad", 400, false, false),
                new Food("Chocolate covered almonds", 130, false, true),
                new Food("Chips and Queso", 600, true, false),
                new Food("Cereal", 300, false, true),
                new Food("French fries", 500, false, false),
                new Food("Steak", 250, false, false),
                new Food("Rice", 300, false, false),
                new Drink("Water", 0, false, false),
                new Drink("Sweet tea", 120, false, true),
                new Drink("Lemonade", 100, false, true),
                new Drink("Soda", 200, false, true),
            };
        }

        public IConsumable Serve()
        {
            Random randidx = new Random();
            return Menu[randidx.Next(0,Menu.Count)];
        }
    }

    class Program
    {
        static void Main(string[] args)
        {
            Buffet Chicago = new Buffet();
            SweetTooth ST = new SweetTooth();
            SpiceHound SH = new SpiceHound();
            while (!ST.IsFull)
            {
                ST.Consume(Chicago.Serve());
            }
            while (!SH.IsFull)
            {
                SH.Consume(Chicago.Serve());
            }
            
            int STCount = ST.ConsumptionHistory.Count;
            int SHCount = SH.ConsumptionHistory.Count;

            if (STCount > SHCount)
            {
                Console.WriteLine($"Sweet tooth ate the most items ({STCount})");
            }
            else
            {
                Console.WriteLine($"Spice Hound ate the most items ({SHCount})");
            }
        }
    }
}
