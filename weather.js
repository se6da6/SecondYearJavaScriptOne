//Assignment1
//Seda Dadak

let KingstonWeather = {
  monday: {
    name: "Monday",
    heat: 24,
    wind: "24sw",
    detail: "Risk of strong thunderstorms",
    hrsOfSun: 3,
  },
  tuesday: {
    name: "Tuesday",
    heat: 22,
    wind: "13sw",
    detail: "Chance of a shower",
    hrsOfSun: 7,
  },
  wednesday: {
    name: "Wednesday",
    heat: 22,
    wind: "24sw",
    detail: "Risk of strong thunderstorm",
    hrsOfSun: 3,
  },
  thursday: {
    name: "Thursday",
    heat: 18,
    wind: "21sw",
    detail: "Chance of a shower",
    hrsOfSun: 3,
  },
  friday: {
    name: "Friday",
    heat: 15,
    wind: "20w",
    detail: "A mix of sun and clouds",
    hrsOfSun: 6,
  },
  saturday: {
    name: "Saturday",
    heat: 15,
    wind: "14N",
    detail: "A mix of sun and clouds",
    hrsOfSun: 6,
  },
  sunday: {
    name: "Sunday",
    heat: 23,
    wind: "24sw",
    detail: "Risk of strong thunderstorm",
    hrsOfSun: 3,
  },
};

let TorontoWeather = {
  monday: {
    name: "Monday",
    heat: 20,
    wind: "15sw",
    detail: "Sunny",
    hrsOfSun: 5,
  },
  tuesday: {
    name: "Tuesday",
    heat: 19,
    wind: "25sw",
    detail: "Chance of a shower",
    hrsOfSun: 7,
  },
  wednesday: {
    name: "Wednesday",
    heat: 15,
    wind: "10sw",
    detail: "Sunny",
    hrsOfSun: 7,
  },
  thursday: {
    name: "Thursday",
    heat: 20,
    wind: "12sw",
    detail: "Chance of a shower",
    hrsOfSun: 4,
  },
  friday: {
    name: "Friday",
    heat: 24,
    wind: "20w",
    detail: "A mix of sun and clouds",
    hrsOfSun: 6,
  },
  saturday: {
    name: "Saturday",
    heat: 18,
    wind: "14N",
    detail: "A mix of sun and clouds",
    hrsOfSun: 4,
  },
  sunday: {
    name: "Sunday",
    heat: 20,
    wind: "26sw",
    detail: "Risk of strong thunderstorm",
    hrsOfSun: 5,
  },
};

let OttowaWeather = {
  monday: {
    name: "Monday",
    heat: 13,
    wind: "15sw",
    detail: "Sunny",
    hrsOfSun: 5,
  },
  tuesday: {
    name: "Tuesday",
    heat: 17,
    wind: "24sw",
    detail: "Chance of a shower",
    hrsOfSun: 7,
  },
  wednesday: {
    name: "Wednesday",
    heat: 19,
    wind: "10sw",
    detail: "Sunny and partly cloudy",
    hrsOfSun: 5,
  },
  thursday: {
    name: "Thursday",
    heat: 17,
    wind: "12sw",
    detail: "Chance of a shower",
    hrsOfSun: 4,
  },
  friday: {
    name: "Friday",
    heat: 17,
    wind: "25w",
    detail: "A mix of sun and clouds",
    hrsOfSun: 6,
  },
  saturday: {
    name: "Saturday",
    heat: 18,
    wind: "18ws",
    detail: "A mix of sun and clouds",
    hrsOfSun: 4,
  },
  sunday: {
    name: "Sunday",
    heat: 15,
    wind: "26sw",
    detail: "Risk of strong thunderstorm",
    hrsOfSun: 5,
  },
};


let locationWeather = {
    kingston: KingstonWeather, 
    ottowa: OttowaWeather, 
    toronto: TorontoWeather
}


module.exports = {
  locationWeather: locationWeather,
};
