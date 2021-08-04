using System;

namespace human
{
    class Human
    {
        public string Name;
        public int Strength;
        public int Intelligence;
        public int Dexterity;
        private int health;

        public int Health
        {
            get { return health; }
        }

        public Human(string name)
        {
            Name = name;
            Strength = 3;
            Intelligence = 3;
            Dexterity = 3;
            health = 100;
        }

        public Human(string name, int strength, int intelligence, int dexterity, int he)
        {
            Name = name;
            Strength = strength;
            Intelligence = intelligence;
            Dexterity = dexterity;
            health = he;
        }

        public int Attack(Human target)
        {
            Console.WriteLine("Attack");
            target.health -= 5 * this.Strength;
            Console.WriteLine($"Health of target is now {target.health}");
            return target.Health;
        }
    }
    class Program
    {
        static void Main(string[] args)
        {
            Human Carl = new Human("Carl");
            Human Bob = new Human("Bob");
            Bob.Attack(Carl);
        }
    }
}
