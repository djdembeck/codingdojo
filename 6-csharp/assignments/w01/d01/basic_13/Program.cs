using System;
using System.Collections.Generic;

namespace basic_13
{
    class Program
    {
        public static void PrintNumbers()
        {
            for (int i = 1; i <= 255; i++) {
                Console.WriteLine(i);
            }
        }

        public static void PrintOdds()
        {
            for (int i = 1; i <= 255; i++)
            {
                if (i % 3 == 0)
                {
                    Console.WriteLine(i);
                }
            }
        }

        public static void PrintSum()
        {
            int sum = 0;
            for (int i = 1; i <= 255; i++) {
                sum += i;
                Console.WriteLine($"Num: {i}, Sum: {sum}");
            }
        }

        public static void LoopArray(int[] numbers)
        {
            foreach (int num in numbers)
            {
                Console.WriteLine(num);
            }
        }

        public static int FindMax(int[] numbers)
        {
            int max = 0;
            foreach (int num in numbers)
            {
                if (num > max)
                {
                    max = num;
                }
            }
            Console.WriteLine(max);
            return max;
        }

        public static void GetAverage(int[] numbers)
        {
            int sum = 0;
            foreach (int num in numbers)
            {
                sum += num;
            }
            int average = sum / numbers.Length;
            Console.WriteLine(average);
        }

        public static int[] OddArray()
        {
            int[] numArray = new int[255/2];
            int idxCount = 0;
            for (int i = 1; i <= 255; i++)
            {
                if (i % 3 == 0)
                {
                    numArray[idxCount] = i;
                    idxCount++;
                }
            }
            return numArray;
        }

        public static int GreaterThanY(int[] numbers, int y)
        {
            int total = 0;
            foreach (int num in numbers)
            {
                if (num > y)
                {
                    total++;
                }
            }
            return total;
        }

        public static void SquareArrayValues(int[] numbers)
        {
            for (int i = 0; i < numbers.Length; i++)
            {
                numbers[i] *= numbers[i];
            }
        }

        public static void EliminateNegatives(int[] numbers)
        {
            for (int i = 0; i < numbers.Length; i++)
            {
                if (numbers[i] < 0)
                {
                    numbers[i] = 0;
                }
            }
        }

        public static void MinMaxAverage(int[] numbers)
        {
            int min = 0;
            int max = 0;
            int sum = 0;
            foreach (int num in numbers)
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
            int average = sum / numbers.Length;
            Console.WriteLine($"Min: {min}, Max: {max}, Average: {average}");
        }

        public static void ShiftValues(int[] numbers)
        {
            for (int i = 0; i < numbers.Length; i++)
            {
                if (i < numbers.Length - 1)
                {
                    numbers[i] = numbers[i+1];
                }
                else
                {
                    numbers[i] = 0;
                }
            }
        }

        public static object[] NumToString(int[] numbers)
        {
            object[] objNumbers = new object[numbers.Length];
            for (int i = 0; i < numbers.Length; i++)
            {
                if (numbers[i] < 0)
                {
                    objNumbers[i] = "Dojo";
                }
                else
                {
                    objNumbers[i] = numbers[i];
                }
            }
            return objNumbers;
        }
        static void Main(string[] args)
        {
            int[] theArray = {1, 5, 10, -2};
            PrintNumbers();
            PrintOdds();
            PrintSum();
            LoopArray(theArray);
            FindMax(theArray);
            GetAverage(theArray);
            OddArray();
            GreaterThanY(theArray, 3);
            SquareArrayValues(theArray);

            int[] otherArray = {1, 5, 10, -2};
            EliminateNegatives(otherArray);
            MinMaxAverage(otherArray);

            int[] anotherArray = {1, 5, 10, 7, -2};
            ShiftValues(anotherArray);

            int[] someArray = {-1, -3, 2};
            NumToString(someArray);
        }
    }
}
