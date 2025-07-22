console.log(`using System;
using System.Text;

class Program
{
    static void Main()
    {
        // The C# source template with a placeholder for the C# source itself
        string cs = @\"using System;
using System.Text;

class Program
{
    static void Main()
    {
        // The C# source template with a placeholder for the C# source itself
        string cs = @\""REPLACE_C_S_SOURCE\"";
        string js = ""console.log(\`"" + cs.Replace(""\`"", ""\\\`"") + ""\`);"";
        Console.WriteLine(js);
    }
}\";
        string js = "console.log(\`" + cs.Replace("\`", "\\\`") + "\`);";
        Console.WriteLine(js);
    }
}`);
