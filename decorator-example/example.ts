// based on https://blog.logrocket.com/a-practical-guide-to-typescript-decorators/#:~:text=Automatic%20error%20guard

const minimumFuel = (fuel: number) => (
  target: Object,
  propertyKey: string,
  descriptor: PropertyDescriptor
) => {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args) {
    if (this.fuel > fuel) {
      originalMethod.apply(this, args);
    } else {
      console.log("Not enough fuel!");
    }
  };

  return descriptor;
}; 

class Rocket {
  fuel = 50;

  @minimumFuel(100) // <- this is the decorator
  launchToMars() {
    console.log("Launching to Mars in 3... 2... 1... 🚀");
  }
}

console.log('Building rocket.')
const rocket = new Rocket();
rocket.launchToMars();
console.log('Setting fuel to 101.')
rocket.fuel = 101;
rocket.launchToMars();
