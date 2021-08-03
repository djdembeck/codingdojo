using System;
using System.Collections.Generic;

namespace puzzles
{
    class Program
    {
        public static int[] RandomArray()
        {
            int[] returnArray = new int[10];
            Random randidx = new Random();
            for (int i = 0; i < 10; i++)
            {
                returnArray[i] = randidx.Next(5,25);
            }

            int min = 0;
            int max = 0;
            int sum = 0;
            foreach (int num in returnArray)
            {
                if (num < min)
                {
                    min = num;
                }
                if (num > max)
                {
                    max = num;
                }
                sum += num;
                Console.WriteLine(num);
            }
            Console.WriteLine($"Min: {min}, Max: {max}, Sum: {sum}");

            return returnArray;
        }

        public static string TossCoin()
        {
            Console.WriteLine("Tossing a coin!");

            Random randidx = new Random();
            int flipResult = randidx.Next(0, 2);

            Dictionary<int, string> coin = new Dictionary<int, string>();
            coin.Add(0, "Heads");
            coin.Add(1, "Tails");

            Console.WriteLine(coin[flipResult]);
            return coin[flipResult];
        }

        public static double TossMultipleCoins(int num)
        {
            int countHeads = 0;
            for (int idx = 0; idx <= num; idx++)
            {
                string call = TossCoin();
                if (call == "Heads")
                {
                    countHeads++;
                }
            }

            double resultRatio = (double)num/countHeads;
            Console.WriteLine($"Ratio of head toss: {resultRatio}");
            return resultRatio;
        }

        public static List<string> Names()
        {
            List<string> nameList = new List<string>();
            nameList.Add("Todd");
            nameList.Add("Tiffany");
            nameList.Add("Charlie");
            nameList.Add("Geneva");
            nameList.Add("Sydney");

            Random random = new Random();
            int n = nameList.Count;

            for(int i = nameList.Count - 1; i > 1; i--)
            {
                int rnd = random.Next(i + 1);

                string value = nameList[rnd];
                nameList[rnd] = nameList[i];
                nameList[i] = value;
            }

            foreach (string name in nameList)
            {
                Console.WriteLine(name);
            }

            nameList.RemoveAll(item => item.Length <= 5);

            return nameList;
        }

        static void Main(string[] args)
        {
            RandomArray();
            TossCoin();
            TossMultipleCoins(15);
            Names();
        }
    }
}
