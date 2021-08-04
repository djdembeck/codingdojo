using System;

namespace WizardNinjaSamurai
{
    class Human
    {
        public string Name;
        public int Strength;
        public int Intelligence;
        public int Dexterity;
        protected int health;

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

        public int TakeDamage(int damage)
        {
            health -= damage;
            return health;
        }

        public virtual int Attack(Human target)
        {
            Console.WriteLine("Attack");
            int damage = 5 * Strength;
            TakeDamage(damage);
            Console.WriteLine($"Health of target is now {target.health}");
            return target.Health;
        }
    }
}