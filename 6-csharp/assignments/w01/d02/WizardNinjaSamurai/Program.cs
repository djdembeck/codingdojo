using System;

namespace WizardNinjaSamurai
{
    class Wizard : Human
    {
        public Wizard(string name) : base(name)
        {
            health = 50;
            Intelligence = 25;
        }

        public override int Attack(Human target)
        {
            Console.WriteLine("Attack");
            int damage = 5 * Intelligence;
            TakeDamage(damage);
            // Heal self
            health += damage;
            Console.WriteLine($"Health of target is now {target.Health}");
            return target.Health;
        }
    }

    class Ninja : Human
    {
        public Ninja(string name) : base(name)
        {
            Dexterity = 175;
        }
    }

    class Samurai : Human
    {
        public Samurai(string name) : base(name)
        {
            health = 200;
        }
    }
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
        }
    }
}
