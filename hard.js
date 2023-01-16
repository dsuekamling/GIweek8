//Part 1 Hard Challenge//
var tomh = 9
var tomw = 8
var jerryh = 10
var jerryw = 45

//Part 2 Hard Challenge//
const tomBmi = bmi(tomw, tomh)
const jerryBmi = bmi(jerryw, jerryh)
function bmi(weight, height) {
  return (weight / height / height) * 703
}
//Part 3 Hard Challenge
console.log(tomBmi)
console.log(jerryBmi)
const tomBmiHigherThanjerryBmi = tomBmi > jerryBmi
console.log(tomBmiHigherThanjerryBmi)
//Part 4 Hard Challenge//
console.log('is Toms BMI higher than Jerrys? ' + tomBmiHigherThanjerryBmi )