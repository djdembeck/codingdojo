using System;
using System.Collections.Generic;

namespace collections_practice
{
    class Program
    {
        static void Main(string[] args)
        {
            // Number array
            int[] numArray = {0, 1, 2 , 3, 4, 5, 6, 7, 8 ,9};
            for (int idx = 0; idx < numArray.Length; idx++)
            {
                Console.WriteLine(numArray[idx]);
            }
            // Name array
            string[] nameArray = {"Tim", "Martin", "Nikki", "Sara"};
            foreach (string name in nameArray)
            {
                Console.WriteLine(name);
            }
            // Boolean array
            bool[] boolArray = {true, false, true, false, true, false, true, false, true, false};
            for (int idx = 0; idx < boolArray.Length; idx++)
            {
                Console.WriteLine(boolArray[idx]);
            }
            // Ice Cream flavors
            List<string> flavors = new List<string>();
            flavors.Add("Caramel");
            flavors.Add("Chocolate");
            flavors.Add("Vanilla");
            flavors.Add("Mint");
            flavors.Add("Strawberry");
            // Print length of list
            Console.WriteLine(flavors.Count);
            // Print 3rd flavor
            Console.WriteLine(flavors[2]);
            // Remove 3rd flavor
            flavors.RemoveAt(2);
            // New count
            Console.WriteLine(flavors.Count);
            // User Info Dictionary
            Dictionary<string, string> user = new Dictionary<string, string>();
            Random randidx = new Random();
            foreach (string name in nameArray)
            {
                user.Add(name, flavors[randidx.Next(0,flavors.Count)]);
            }
            // Print key values
            foreach (KeyValuePair<string,string> entry in user)
            {
                Console.WriteLine(entry.Key + " - " + entry.Value);
            }
        }
    }
}
