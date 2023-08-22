// 1.) Write a Pseudo code for the given scenario: (Try to create maximum
//     scenarios)
//     There are two elevators A and B in a building. A takes energy 'X' and B takes energy 'Y' ('X' >
//     'Y' for identical travel). Both the lifts are operated by a single button. Create a pseudo code to
//     install energy efficient system.
//     (Length of building travel = 100 storeys, parameters can be assumed).
//     Write appropriate comments throughout your pseudo code.

//Define the energy value
const energy_A = 100;
const energy_B = 80;

//travel space of elevator
const travelDistance = 10;

//function to calculate the energy Consumption of A.B elevators
const calculateEnergy = (elevator, distance) => {
  if (elevator === "A") {
    energyConsumptionA = energy_A * distance;
    return energyConsumptionA;
  } else if (elevator === "B") {
    energyConsumptionB = energy_B * distance;
    return energyConsumptionB;
  } else {
    return -1;
  }
};

//store the energy consumption of elevator A
const elevatorA = calculateEnergy("A", travelDistance);
//store the energy consumption of elevator B
const elevatorB = calculateEnergy("B", travelDistance);

//Calculate Which elevator is more efficient for energy consumption
if (elevatorA > elevatorB) {
  return "A";
} else {
  return "B";
}
