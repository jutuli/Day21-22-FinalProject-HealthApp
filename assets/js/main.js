function calcCalorieRequirement() {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Retrieve input values from the form fields
  const bodySize = document.getElementById("bodySize").valueAsNumber;
  const age = document.getElementById("age").valueAsNumber;
  const weight = document.getElementById("weight").valueAsNumber;
  const activityLevel = Number(document.getElementById("activityLevel").value);
  const gender = document.querySelector("input[name='gender']:checked").id;

  // Get references to the output elements in the HTML
  let metabolicKcal = document.querySelector(".metabolic-kcal");
  let metabolicKj = document.querySelector(".metabolic-kj");
  let dailyKcal = document.querySelector(".daily-kcal");
  let dailyKj = document.querySelector(".daily-kj");

  // Calculate the metabolic rate in kcal based on gender
  let metabolicKcalCalc;
  if (gender === "female") {
    // Formula for women: 655.1 + (9.6 × weight) + (1.8 × height) - (4.7 × age)
    metabolicKcalCalc = 655.1 + 9.6 * weight + 1.8 * bodySize - 4.7 * age;
  } else {
    // Formula for men: 66.47 + (13.7 × weight) + (5 × height) - (6.8 × age)
    metabolicKcalCalc = 66.47 + 13.7 * weight + 5 * bodySize - 6.8 * age;
  }

  // Convert the metabolic rate from kcal to kJ
  let metabolicKjCalc = metabolicKcalCalc * 4.184;

  // Calculate the daily calorie requirement based on activity level
  let dailyKcalCalc = metabolicKcalCalc * activityLevel;
  let dailyKjCalc = metabolicKjCalc * activityLevel;

  // Log the daily calorie requirement to the console for debugging
  console.log(dailyKcalCalc);

  // Update the HTML with the calculated values
  metabolicKcal.innerText = metabolicKcalCalc.toFixed(2);
  metabolicKj.innerText = metabolicKjCalc.toFixed(2);
  dailyKcal.innerText = dailyKcalCalc.toFixed(2);
  dailyKj.innerText = dailyKjCalc.toFixed(2);
}
