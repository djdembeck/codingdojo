using System;
using System.Collections.Generic;

namespace boxing
{
    class Program
    {
        static void Main(string[] args)
        {
            // Empty list
            List<object> somelist = new List<object>();
            // List of type object
            somelist.Add(7);
            somelist.Add(28);
            somelist.Add(-1);
            somelist.Add(true);
            somelist.Add("chair");

            int sum = 0;
            foreach (object item in somelist)
            {
                if (item is int)
                {
                    sum += (int)item;
                }
                Console.WriteLine(item);

            }
            Console.WriteLine($"The sum of all ints is {sum}");
        }
    }
}
