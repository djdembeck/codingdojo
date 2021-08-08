using System;

class SpiceHound : Ninja
{
    public override bool IsFull
    {
        get { return this.calorieIntake > 1200 ? true : false;}
    }
    public override void Consume(IConsumable item)
    {
        if (!IsFull)
        {
            calorieIntake += item.Calories;
            if (item.IsSpicy)
            {
                calorieIntake -= 5;
            }
            ConsumptionHistory.Add(item);
            item.GetInfo();
        }
        
        if (IsFull)
        {
            Console.WriteLine("SpiceHound is full and cannot eat anymore");
        }
    }
}