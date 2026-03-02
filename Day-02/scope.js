let fuel = "Full"; // Global Scope

function startEngine() {
  let fuel = "Empty"; // Local (Function) Scope
  console.log("Inside the engine, fuel is:", fuel);
}

startEngine();
console.log("Outside the engine, fuel is:", fuel);


/* const (Your Default): Use this for everything. If the value doesn't need to change 
(like a function, a Map, or a fixed configuration), use const. It makes your code "read-only" and safer.

 let (The Iterator): Use this only when you know the value will change, 
 like a counter in a for loop or a toggle.

 var (The Legacy): Avoid this entirely in modern code. 
 It’s the "Old Way" and leads to the scope bugs we discussed earlier.*/