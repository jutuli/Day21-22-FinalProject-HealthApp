function calcCalorieRequirement() {
  event.preventDefault();
  const bodySize = document.getElementById("bodySize").valueAsNumber;
  const age = document.getElementById("age").valueAsNumber;
  const weight = document.getElementById("weight").valueAsNumber;
  const activityLevel = Number(document.getElementById("activityLevel").value);
  const gender = document.querySelector("input[name='gender']:checked").id;
  let metabolicKcal = document.querySelector(".metabolic-kcal");
  let metabolicKj = document.querySelector(".metabolic-kj");
  let dailyKcal = document.querySelector(".daily-kcal");
  let dailyKj = document.querySelector(".daily-kj");

  let metabolicKcalCalc;
  if (gender === "female") {
    metabolicKcalCalc = 655.1 + 9.6 * weight + 1.8 * bodySize - 4.7 * age;
  } else {
    metabolicKcalCalc = 66.47 + 13.7 * weight + 5 * bodySize - 6.8 * age;
  }
  let metabolicKjCalc = metabolicKcalCalc * 4.184;
  let dailyKcalCalc = metabolicKcalCalc * activityLevel;
  let dailyKjCalc = metabolicKjCalc * activityLevel;
  console.log(dailyKcalCalc);
  metabolicKcal.innerText = metabolicKcalCalc.toFixed(2);
  metabolicKj.innerText = metabolicKjCalc.toFixed(2);
  dailyKcal.innerText = dailyKcalCalc.toFixed(2);
  dailyKj.innerText = dailyKjCalc.toFixed(2);
}
