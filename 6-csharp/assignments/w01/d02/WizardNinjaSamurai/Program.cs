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
            target.TakeDamage(damage);
            // Heal self
            health += damage;
            Console.WriteLine($"Health of target is now {target.Health}");
            return target.Health;
        }

        public void Heal(Human target)
        {
            Console.WriteLine("Healing...");
            // Nifty trick to instead add to health :)
            int amountToHeal = Intelligence * 10;
            target.TakeDamage(amountToHeal * -1);
        }
    }

    class Ninja : Human
    {
        public Ninja(string name) : base(name)
        {
            Dexterity = 175;
        }

        public override int Attack(Human target)
        {
            Random rand = new Random();
            int randidx = rand.Next(1,11);
            if (randidx < 2)
            {
                Console.WriteLine("Dealing extra damage!");
                target.TakeDamage(10);
            }
            Console.WriteLine("Attack");
            int damage = 5 * Dexterity;
            target.TakeDamage(damage);
            // Heal self
            health += damage;
            Console.WriteLine($"Health of target is now {target.Health}");
            return target.Health;
        }

        public void Steal(Human target)
        {
            Console.WriteLine("Swiper no swiping!");
            target.TakeDamage(5);
            health += 5;
        }
    }

    class Samurai : Human
    {
        public Samurai(string name) : base(name)
        {
            health = 200;
        }

        public override int Attack(Human target)
        {
            base.Attack(target);
            if (target.Health < 50)
            {
                target.TakeDamage(target.Health);
            }
            return target.Health;
        }

        public void Meditate()
        {
            Console.WriteLine("Hummmmmmmmm");
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
