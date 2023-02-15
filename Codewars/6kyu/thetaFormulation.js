/* 
There were days in math class when I wished I had a simple way to quickly solve for any given variable in a formula and check my answers accordingly. If only I had a time machine...

Oh well! Anyhow, using the following formula:

Angle (in Radians) === Arc length / Radius length
Write a function thetaFormula:

When given two of the values and "?" returns the number value of the missing one.
When given all three values returns a boolean value verifying if the statement is true or false.
When given one or no values as arguments or invalid arguments returns null.
For Example:

    thetaFormula("?", 12, 35)        -->    0.343
    thetaFormula(3, "?", 14)         -->    42
    thetaFormula(5, 16, "?")         -->    3.2

    thetaFormula(2, 5, 7)            -->    false
    thetaFormula(2, 20, 10)          -->    true
    thetaFormula( -1, 1, -1)         -->    true

    thetaFormula(1, 2)               -->   null
    thetaFormula(1)                  -->   null
    thetaFormula()                   -->   null
    thetaFormula("?", "?", 2)        -->   null
If the returned value contains more than three numbers after the decimal it should be fixed to three decimal places. The function should be able to return negative values, they will be tested for.
*/
function thetaFormula(radius, arc, angle) {
  if (arguments.length != 2 && arguments.length != 3) {
    return null;
  }

  const numMissing = [radius, arc, angle].reduce(
    (acc, curr) => acc + (curr === "?" ? 1 : 0),
    0
  );

  if (numMissing === 0) {
    const calcAngle = arc / radius;
    return Math.abs(calcAngle - angle) < 1e-3;
  } else if (numMissing === 1) {
    if (radius === "?") {
      return parseFloat((arc / angle).toFixed(3));
    } else if (arc === "?") {
      return parseFloat((radius * angle).toFixed(3));
    } else {
      return parseFloat((arc / radius).toFixed(3));
    }
  } else {
    return null;
  }
}

console.log(thetaFormula(3, 1));
console.log(thetaFormula("?", "?", "?"));
console.log(thetaFormula(92, 6));
console.log(thetaFormula(26, 4));
console.log(thetaFormula("?", 40, 10));
console.log(thetaFormula(8, "?", 7));
console.log(thetaFormula(-4, 4, -4));
