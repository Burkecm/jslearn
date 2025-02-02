// Remember, we're gonna use strict mode in all scripts now!
"use strict";

const Data1 = [17, 21, 23];
const Data2 = [12, 5, -5, 0, 4];

function forecast(temps) {
  for (let t = 0; t < temps.length; t++) {
    console.log(`${temps[t]}ºC in ${t + 1} days`);
  }
}

forecast(Data1);
forecast(Data2);
