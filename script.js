function convertTemp() {
    let inputTemp = parseFloat(document.getElementById("inputTemp").value);
    let tempType = document.getElementById("tempType").value;
    let output = document.getElementById("output");
  
    if (tempType === "celsius") {
      let fahrenheit = (inputTemp * 9) / 5 + 32;
      let kelvin = inputTemp + 273.15;
      output.innerHTML = `${inputTemp} &deg;C is equal to ${fahrenheit.toFixed(
        2
      )} &deg;F and ${kelvin.toFixed(2)} K`;
    } else if (tempType === "fahrenheit") {
      let celsius = ((inputTemp - 32) * 5) / 9;
      let kelvin = ((inputTemp - 32) * 5) / 9 + 273.15;
      output.innerHTML = `${inputTemp} &deg;F is equal to ${celsius.toFixed(
        2
      )} &deg;C and ${kelvin.toFixed(2)} K`;
    } else if (tempType === "kelvin") {
      let celsius = inputTemp - 273.15;
    }
}