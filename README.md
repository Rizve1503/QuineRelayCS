# QuineRelayCS

A C# console “quine relay” that outputs JavaScript which, when run, regenerates the original C# source.

## How It Works

1. You run the C# program:  
   
   dotnet run > bootstrap.js

2. It prints a single JS statement to bootstrap.js:

	console.log(`…full C# source…`);

3. You run the JS:

	node bootstrap.js > regenerated.cs

regenerated.cs matches exactly the original Program.cs.