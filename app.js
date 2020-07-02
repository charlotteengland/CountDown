const timerDayEl = document.querySelector(".timer__day");
const timerHourEl = document.querySelector(".timer__hour");
const timerMinEl = document.querySelector(".timer__min");
const timerSecEl = document.querySelector(".timer__sec");

function getTimeDifference(start, end) {
  //console.log(new Date().getTime());
  let miliseconds = Math.floor(end - start);
  let seconds = Math.floor(miliseconds / 1000); // total miliseconds
  let minutes = Math.floor(seconds / 60); //total minutes
  let hours = Math.floor(minutes / 60); // total hours
  let days = Math.floor( hours / 24); // total days

  // console.log(days + " " + hours + " " + minutes + " " + seconds)
 
  // 1 37 2224
    // 1 13 4

  hours = hours - (days * 24);
  minutes = minutes - (days * 24 * 60) - (hours * 60);
  seconds = seconds - (days * 24 * 60 * 60) - (hours * 60 * 60) - (minutes * 60);

  // console.log(days + " " + hours + " " + minutes + " " + seconds)


  return {
    rDays: days,
    rHours: hours,
    rMinutes: minutes,
    rSeconds: seconds
  }
  
 
}

// 

let timer = setInterval(function() {
      const startDate = new Date();
      const endDate = new Date("July 3, 2020 08:00:00");

      let timeDifferenceObj = getTimeDifference(startDate, endDate);
      
      let displayDays = timeDifferenceObj.rDays;
      if (displayDays < 10) {
        displayDays = "0" + displayDays;
      }

      let displayHours = timeDifferenceObj.rHours;
      if (displayHours < 10) {
        displayHours = "0" + displayHours;
      }

      let displayMins = timeDifferenceObj.rMinutes;
      if (displayMins < 10) {
        displayMins = "0" + displayMins;
      }

      let displaySecs = timeDifferenceObj.rSeconds;
      if (displaySecs  < 10) {
        displaySecs = "0" + displaySecs ;
      }

      timerDayEl.textContent =  displayDays;
      timerHourEl.textContent = displayHours;
      timerMinEl.textContent = displayMins;
      timerSecEl.textContent = displaySecs;

  }, 1000)
