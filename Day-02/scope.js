let fuel = "Full"; // Global Scope

function startEngine() {
  let fuel = "Empty"; // Local (Function) Scope
  console.log("Inside the engine, fuel is:", fuel);
}

startEngine();
console.log("Outside the engine, fuel is:", fuel);