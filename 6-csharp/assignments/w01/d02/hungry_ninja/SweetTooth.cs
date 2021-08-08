using System;

class SweetTooth : Ninja
{
    public override bool IsFull
    {
        get { return this.calorieIntake > 1500 ? true : false;}
    }
    public override void Consume(IConsumable item)
    {
        if (!IsFull)
        {
            calorieIntake += item.Calories;
            if (item.IsSweet)
            {
                calorieIntake += 10;
            }
            ConsumptionHistory.Add(item);
            item.GetInfo();
        }
        
        if (IsFull)
        {
            Console.WriteLine("SweetTooth is full and cannot eat anymore");
        }
    }
}