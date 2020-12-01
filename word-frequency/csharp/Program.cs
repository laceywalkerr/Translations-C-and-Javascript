using System;
using System.Collections.Generic;
using System.Text.RegularExpressions;

namespace WordFreq
{
    class Program
    {
        static void Main(string[] args)
        {
            string text = GetText();
            Regex rgx = new Regex("[^a-zA-Z]");
            string[] words = words = rgx.Replace(text, "").Split("");
            Dictionary<string, int> freqCount = new Dictionary<string, int>();

            foreach (string word in words)
            {
                if (words.Trim() == "")
                {
                    continue;
                }

                if (freqCount.ContainsKey(word))
                {
                    freqCount[word] += 1;
                }

                else
                {
                    freqCount[word] = 1;
                }
            }

            foreach (var KeyValuePair in freqCount)
            {
                Console.WriteLine($"Word: {KeyValuePair.Key}, Count: {keyValuePair.Value}");
            }

        }

        static string GetText()
        {
            return "Look again at that dot. That's here. That's home.";
        }
    }
}