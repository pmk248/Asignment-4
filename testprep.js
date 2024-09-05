const armyUnit = {
    name: "Special Forces Unit 101",
    commanders: [
      { rank: "Colonel", name: "John Smith", role: "Chief of staff", phoneNumber: "123-456-7890" },
      { rank: "Major", name: "Sarah Johnson", role: "Operations Officer", phoneNumber: "234-567-8901" }
    ],
    soldiers: {
      officers: 15,
      ncos: 30,
      privates: 150
    },
    currentDeployment: {
      location: "Northern Border",
      startDate: "2024-01-01",
      endDate: "2024-06-30"
    },
    deploymentHistory: [
      { location: "Southern Desert", startDate: "2023-07-01", endDate: "2023-12-31" }
    ],
    equipment: {
      firearms: [
        { type: "Rifle", model: "M4", status: "Operational", quantity: 180 },
        { type: "Pistol", model: "Glock 19", status: "Operational", quantity: 200 }
      ]
    },
    training: [
      { name: "Basic Combat Training", duration: 10 },
      { name: "Advanced Infantry Course", duration: 8 },
      { name: "Special Operations Training", duration: 12 }
    ]
  };
  
  // Tasks:
  // 1. Create a function that returns the Chief of staff's details (rank, name, phone number)
  function getChiefOfStaffDetails(unit) {
    let chief = unit.commanders.find(a => a.role == "Chief of staff");
    return chief;
  }
  
  // 2. Create a function that returns the total number of soldiers in the unit
  function getTotalSoldiers(unit) {
    let {officers, ncos, privates} = unit.soldiers;
    return officers + ncos + privates;
  }
  
  // 3. Create a function that updates the current deployment and moves the old one to history
  function updateDeployment(unit, newDeployment) {
    let {location, startDate, endDate} = unit.currentDeployment;
    unit.deploymentHistory.push({location, startDate, endDate});
    return unit.currentDeployment = newDeployment;
  }
  
  // 4. Create a function that adds a new firearm to the equipment or updates its quantity
  function addOrUpdateFirearm(unit, newFirearm) {
    let firearmCur = unit.equipment.firearms.find(f => f.type === newFirearm.type);

    if (firearmCur){
        let newQuant = newFirearm.quantity;
        return firearmCur.quantity += newQuant;
    }
    unit.equipment.firearms.push(newFirearm);
    return unit.equipment.firearms;
  }
  
  // 5. Create a function that calculates the total duration of all training courses
  function getTotalTrainingDuration(unit) {
    let allTrainingList = unit.training;
    let totalDuration = allTrainingList.reduce((total, training) => total + training.duration, 0);
    return totalDuration; 
  }
  
  // Test your functions here
  console.log(getChiefOfStaffDetails(armyUnit));
  console.log(getTotalSoldiers(armyUnit));
  
  const newDeployment = { location: "Eastern Front", startDate: "2024-07-01", endDate: "2024-12-31" };
  console.log(updateDeployment(armyUnit, newDeployment));
  
  const newFirearm = { type: "Sniper Rifle", model: "M24", status: "Operational", quantity: 10 };
  console.log(addOrUpdateFirearm(armyUnit, newFirearm));
  
  console.log(getTotalTrainingDuration(armyUnit));