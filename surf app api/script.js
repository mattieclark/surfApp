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


const Bantham = { lat: 50.279121, lng: -3.884438 };
console.log(Bantham);
const BanthamDeg_N_correct = 225;

const Gwenver = { lat: 50.089757, lng: -5.691629 };
console.log(Gwenver);
const GwenverDeg_N_correct = 270;

let gwenver = true;

let beach = Object.values(Bantham);
console.log(beach);

// if (bantham = true) {
//     let beach = Object.values(Bantham);
//     console.log(beach + "bantham");
// }

// if (gwenver = true) {
//     let beach = Object.values(Gwenver);
//     console.log(beach + "gwenver");
// };




const lat = beach[0];
console.log(lat);

const lng = beach[1];
console.log(lng);

function getAverage(obj) {

    let values = Object.values(obj);
    let sum = 0;

    for (let i = 0; i < values.length; i++) {
        sum = sum + values[i]
    };
    const result = sum / values.length;

    return (result);

};


/////////////////////////////////////Beach Menu////////////////////////////////
function newBeach(newName) {
    const Beach = document.createElement("p");
    Beach.setAttribute("id", newName);
    Beach.innerHTML = newName;

    document.querySelector("#menu_list").appendChild(Beach);
};

newBeach("Bantham");
newBeach("Gwenver");




function beachOption(newName) {
    const option = document.createElement("option");
    option.setAttribute("value", newName);
    option.innerHTML = newName;

    document.querySelector("#beach_dropdown").appendChild(option);
}

beachOption("Bantham");
beachOption("Gwenver");



const Nav = document.querySelector(".nav");
const Menu = document.querySelector(".nav_window");
// const list = Menu.children;



Nav.addEventListener("click", function () {
    Menu.classList.add("active");
});

Menu.addEventListener("click", function () {
    Menu.classList.remove("active");
});



//////////////////////////////////////Beach Selecter/////////////////////////////

let menu_select = document.querySelector("#menu_list");




menu_select.addEventListener("click", function (event) {

    let test = Array.from(menu_select.children);
    console.log(test);

    event.target.classList.toggle("selected");


});




///////////////////////////////////////////////API handling///////////////////////////////////////


        // var params = 'windSpeed,windDirection,swellHeight,waveDirection,swellPeriod';

        // async function getResponse() {

        //     // const response = await fetch(`https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${params}`, {
        //     //     headers: {
        //     //         'Authorization': 'd8910aa4-f855-11ec-956e-0242ac130002-d8910b12-f855-11ec-956e-0242ac130002'
        //     //     }
        //     // })


        //         .then((response) => response.json()).then((data) => {
        //             console.log(data);

        //             let currentData = data.hours[currentHour];
        //             console.log(currentData);

        //             let swell = currentData.swellHeight;
        //             console.log(swell);
        //             const Swell_Height = getAverage(swell);
        //             const Swell_Height_rounded = Swell_Height.toFixed(2);

        //             let period = currentData.swellPeriod;
        //             console.log(period);
        //             const swell_Period = getAverage(period);
        //             const Swell_Period_rounded = swell_Period.toFixed(2);

        //             const Swell_Data = document.querySelector(".swell");
        //             Swell_Data.innerHTML = "Swell is:" + " " + Swell_Period_rounded + "s" + " " + "@" + " " + Swell_Height_rounded + "ft"

        //             const waveDir = currentData.waveDirection;
        //             const wavArrow = getAverage(waveDir);
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
        //             const vel_data = document.querySelector(".windVelocity");
        //             vel_data.innerHTML = wind_velocity + "mph";


        //         });

        // };

        // getResponse();


