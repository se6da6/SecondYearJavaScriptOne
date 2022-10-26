//Assignment1
//Seda Dadak

const express = require ('express');
const weather = require('./weather');
const app = express();

app.listen(3000);
app.set('view engine', 'ejs');


app.get("/weather", (request, response)=>{
    
    let currentWeather = weather.locationWeather
    response.render('allWeather', { allWeather : currentWeather });

});

app.get("/weather/:location", (request, response)=>{
    let location = request.params.location.toLowerCase();
    response.render("singleLocationWeather", {singleLocationWeather: weather.locationWeather[location], location: location});
});

app.get("/weather/:location/:day", (request, response)=>{
    let location = request.params.location.toLowerCase();
    let day = request.params.day.toLowerCase();
    
    response.render("dailyWeather", {dailyWeather: weather.locationWeather[location][day], location: location});
});

app.get("/warmestLocation/:day", (request, response)=>{
    let day = request.params.day.toLowerCase();
    let maxHeat = -1
    let maxLocation = ""

    for(const location in weather.locationWeather){
        let currentHeat = weather.locationWeather[location][day].heat;
        if(currentHeat > maxHeat) {
            maxHeat = currentHeat 
            maxLocation = location
        }
    }
    console.log("maxLocation", maxLocation)
    response.render("warmestLocation", {maxLocation: maxLocation, day: day});

});

app.get("/warmestDay/:location", (request, response)=>{
    
    let location = request.params.location.toLowerCase();
    let locationWeather = weather.locationWeather[location]
    let maxHeat = -1
    let maxDay = ""

    for(const day in locationWeather){
        let currentHeat = locationWeather[day].heat;
        if(currentHeat > maxHeat) {
            maxHeat = currentHeat 
            maxDay = day
        }
    }
    console.log("maxDay", maxDay)
    response.render("warmestDay", {maxDay: maxDay, location: location});
});

app.get("/average", (request, response)=>{
    
    let averages = {}

    for(const location in weather.locationWeather){
        let singleLocations = weather.locationWeather[location]
        let sum = 0
        for(const day in singleLocations){
            let currentHeat = singleLocations[day].heat;
            sum += currentHeat;
        }
        sum /= 7
        averages[location] = sum
    }
    response.render("average", {averages: averages});
});

app.get("/sunnyDay/:location", (request, response)=>{
    
    let location = request.params.location.toLowerCase();
    let locationWeather = weather.locationWeather[location]
    let sunnyDays = []

    for(const day in locationWeather){
        let currentDetail = locationWeather[day].detail;
        if(currentDetail === "Sunny" ) {
            sunnyDays.push(day)
        }
    }
    
    response.render("sunnyDay", {sunnyDays:sunnyDays, location: location});
});


