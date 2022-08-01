
//////////////////////////////////Static variables///////////////////////////////////////
const Bantham = { lat: 50.279121, lng: -3.884438, degN: 225 };
console.log(Bantham);
const Bantham_JSON = JSON.stringify(Bantham);
console.log(Bantham_JSON);

const Gwenver = { lat: 50.089757, lng: -5.691629, degN: 270};
console.log(Gwenver);
const Gwenver_JSON = JSON.stringify(Gwenver);
console.log(Gwenver_JSON);

const Test = {lat: 0, lng: 0, degN: 0};
const Test2 = JSON.stringify(Test);
console.log(Test2);







////////////////////////////////// main variables /////////////////////////////////////////


var currentdate = new Date();
console.log(currentdate);

const currentYear = currentdate.getFullYear();
console.log(currentYear);

const currentMonth = currentdate.getMonth() + 1;
console.log(currentMonth);

const currentDay = currentdate.getDate();
console.log(currentDay);

const currentHour = currentdate.getHours();
console.log(currentHour);

const currentMins = currentdate.getMinutes();
console.log(currentMins);

const TimeAndDate = currentHour + ":" + currentMins + "  " + currentDay + "/" + currentMonth + "/" + currentYear;
console.log(TimeAndDate);

document.querySelector(".time").innerHTML = TimeAndDate;



let beach = Object.values(Bantham);
console.log(beach);

function Select_beach(obj) { 
    result = Object.values(obj);
        return result;    
};

// Select_beach(Gwenver);

// console.log(Select_beach(Gwenver));



let lat = beach[0];
console.log(lat);

let lng = beach[1];
console.log(lng);

let Deg_N_correct = beach[3];

let N = document.documentElement.style.setProperty('--rotateN', Deg_N_correct + 'deg');



function getAverage(obj) {

    let values = Object.values(obj);
    let sum = 0;

    for (let i = 0; i < values.length; i++) {
        sum = sum + values[i]
    };
    const result = sum / values.length;

    return (result);

};

function SetImage (Name) {
    document.documentElement.style.setProperty("--BeachImage", "url(images/"+Name+"SVG.svg)");
};

/////////////////////////////////////Beach Menu////////////////////////////////

function getNewBeach_data() {

    const newBeach_Name = document.getElementById("newBeach").value;
    const newBeach_Lat = document.getElementById("lat").value;
    const newBeach_Lng = document.getElementById("lng").value;
    const newBeach_DegN = document.getElementById("deg_to_North").value;

    console.log(newBeach_Name+" "+newBeach_Lat+" "+newBeach_Lng+" "+newBeach_DegN);

}

const newBeach_submit = document.getElementById("submit_new_beach");
newBeach_submit.addEventListener("click", function(){
    getNewBeach_data();


});



function newBeach(newName, newValue) {
    const Beach = document.createElement("p");
    Beach.setAttribute("id", newName);
    Beach.setAttribute("value", newValue);
    Beach.innerHTML = newName;

    document.querySelector("#menu_list").appendChild(Beach);
};


newBeach("Bantham",  Bantham_JSON);
newBeach("Gwenver", Gwenver_JSON);
newBeach("test", Test2);


/////////////////Form create option (problematic on submit)/////////////////////////////////

// function beachOption(newName) {
//     const option = document.createElement("option");
//     option.setAttribute("value", newName);
//     option.innerHTML = newName;

//     document.querySelector("#beach_dropdown").appendChild(option);
// }

// beachOption("Bantham");
// beachOption("Gwenver");



const Nav = document.querySelector(".nav");
const Menu = document.querySelector(".nav_window");
const Submit = document.querySelector("#submit_beach");



Nav.addEventListener("click", function () {
    Menu.classList.add("active");
});

// Submit.addEventListener("click", function () {
//     Menu.classList.remove("active");
//     // loadSelected();
// });



//////////////////////////////////////Beach Selecter/////////////////////////////
// mk1

let menu_select = document.querySelector("#menu_list");

let Selector = menu_select.addEventListener("click", function (event) {
    Menu.classList.remove("active");  
      
    // let test = Array.from(menu_select.children);
    // console.log(test);

    event.target.classList.toggle("selected");

    

    let element = event.target;
    console.log(element);
    let title_Name = document.getElementById("beach");
    let Name_selected = element.getAttribute("id");    
    title_Name.innerHTML = Name_selected;

    
  

    SetImage(Name_selected);



    let value = element.getAttribute("Value");    
    console.log(value);

    let valueObj = JSON.parse(value);
    console.log(valueObj);

    let selected_Prameters = Select_beach(valueObj);
    console.log(selected_Prameters);

    let lat = selected_Prameters[0];
    console.log(lat);

    let lng = selected_Prameters[1];
    console.log(lng);

    let Deg_N_correct =selected_Prameters[2];
    console.log(Deg_N_correct);

    let N = document.documentElement.style.setProperty('--rotateN', Deg_N_correct + 'deg');
    console.log(N);

    
    var params = 'windSpeed,windDirection,swellHeight,waveDirection,swellPeriod';

    async function getResponse() {

        const response = await fetch(`https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${params}`, {
            headers: {
                'Authorization': 'd8910aa4-f855-11ec-956e-0242ac130002-d8910b12-f855-11ec-956e-0242ac130002'
            }
        })


            .then((response) => response.json()).then((data) => {
                console.log(data);

                let currentData = data.hours[currentHour];
                console.log(currentData);

                let swell = currentData.swellHeight;
                console.log(swell);
                const Swell_Height = getAverage(swell);
                const Swell_Height_rounded = Swell_Height.toFixed(2);

                let period = currentData.swellPeriod;
                console.log(period);
                const swell_Period = getAverage(period);
                const Swell_Period_rounded = swell_Period.toFixed(2);

                const Swell_Data = document.querySelector(".swell");
                Swell_Data.innerHTML = "Swell is:" + " " + Swell_Period_rounded + "s" + " " + "@" + " " + Swell_Height_rounded + "ft"

                const waveDir = currentData.waveDirection;
                const wavArrow = getAverage(waveDir);
                const wavArrow_rounded = wavArrow.toFixed(0);
                document.documentElement.style.setProperty('--wavDir', wavArrow + 'deg');
                const wav_deg = document.querySelector(".wav__Degrees");
                wav_deg.innerHTML = wavArrow_rounded + "deg";


                const windDir = currentData.windDirection;
                console.log(windDir);
                const windArrow = getAverage(windDir);
                console.log(windArrow);
                document.documentElement.style.setProperty('--windDir', windArrow + 'deg');

                let windVel = currentData.windSpeed;
                console.log(windVel);
                const wind_velocity = getAverage(windVel);
                const vel_data = document.querySelector(".windVelocity");
                vel_data.innerHTML = wind_velocity + "mph";


            });

    };

    getResponse();


    
    
    

});





////////////////////form (dont think this is the most straight foward approach => as page reload is problematic) //////////////////////////////////////////

// function loadSelected() {

//     let formData = document.getElementById("beach_form");
    
//     console.log(formData);

// };

// loadSelected();





///////////////////////////////////////////////API handling///////////////////////////////////////

//////////////////////////Defult API Call///////////////////////////////////////////
// var params = 'windSpeed,windDirection,swellHeight,waveDirection,swellPeriod';

// async function getResponse() {

//     const response = await fetch(`https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${params}`, {
//         headers: {
//             'Authorization': 'd8910aa4-f855-11ec-956e-0242ac130002-d8910b12-f855-11ec-956e-0242ac130002'
//         }
//     })


//         .then((response) => response.json()).then((data) => {
//             console.log(data);

//             let currentData = data.hours[currentHour];
//             console.log(currentData);

//             let swell = currentData.swellHeight;
//             console.log(swell);
//             const Swell_Height = getAverage(swell);
//             console.log(Swell_Height);
//             const Swell_Height_rounded = Swell_Height.toFixed(2);

//             let period = currentData.swellPeriod;
//             console.log(period);
//             const swell_Period = getAverage(period);
//             console.log(swell_Period);
//             const Swell_Period_rounded = swell_Period.toFixed(2);

//             const Swell_Data = document.querySelector(".swell");
//             Swell_Data.innerHTML = "Swell is:" + " " + Swell_Period_rounded + "s" + " " + "@" + " " + Swell_Height_rounded + "ft"

//             const waveDir = currentData.waveDirection;
//             const wavArrow = getAverage(waveDir);
//             console.log(wavArrow);
//             const wavArrow_rounded = wavArrow.toFixed(0);
//             const wavDir = document.documentElement.style.setProperty('--wavDir', wavArrow + 'deg');
//             const wav_deg = document.querySelector(".wav__Degrees");
//             wav_deg.innerHTML = wavArrow_rounded + "deg";


//             const windDir = currentData.windDirection;
//             console.log(windDir);
//             const windArrow = getAverage(windDir);
//             console.log(windArrow);
//             const windDirr = document.documentElement.style.setProperty('--windDir', windArrow + 'deg');

//             let windVel = currentData.windSpeed;
//             console.log(windVel);
//             const wind_velocity = getAverage(windVel);
//             console.log(wind_velocity);
//             const wind_velocity_rounded = wind_velocity.toFixed(0);
//             const vel_data = document.querySelector(".windVelocity");
//             vel_data.innerHTML = wind_velocity_rounded + "mph";


//         });

// };

// getResponse();

      
        

