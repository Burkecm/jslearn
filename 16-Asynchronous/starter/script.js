'use strict';
// Countries API URL: https://restcountries.com/v3.1/name/{name}
const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

/////////////////////////////////////
const getCountryAndNeighbor = function (country) {
  const req = new XMLHttpRequest();
  req.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  req.send();
  req.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    // Render data
    renderCountry(data);
    // get first neighboring country
    const [neighbor] = data.borders;
    if (!neighbor) return;
    const req2 = new XMLHttpRequest();
    req2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbor}`);
    req2.send();
    req2.addEventListener('load', function () {
      const [data2] = JSON.parse(this.responseText);
      console.log(data2);
      renderCountry(data2, 'neighbour');
    });
    countriesContainer.style.opacity = 1;
  });
};

// getCountryAndNeighbor('portugal');
// getCountryAndNeighbor('usa');
// const req = fetch(`https://restcountries.com/v3.1/name/portugal`);
// console.log(req);

const renderCountry = function (data, className = '') {
  const html = `<article class="country ${className}">
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} million</p>
      <p class="country__row"><span>🗣️</span>${
        Object.values(data.languages)[0]
      }</p>
      <p class="country__row"><span>💰</span>${
        Object.values(data.currencies)[0].name
      }</p>
    </div>
  </article>`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
};

const getJSON = function (url, errMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(`${errMsg} ${response.status}`);
    }
    return response.json();
  });
};

// const getCountryData = function (country) {
//   getJSON(`https://restcountries.com/v3.1/name/${country}`, 'Country Not Found')
//     .then(data => {
//       renderCountry(data[0]);
//       // Get Neighbor
//       console.log(data[0]);
//       const neighbor = Object.hasOwn(data, 'borders') ? data[0].borders[0] : '';
//       console.log(neighbor);
//       if (!neighbor) throw new Error('No Neighbor Found!');

//       return getJSON(
//         `https://restcountries.com/v3.1/name/${neighbor}`,
//         'Country Not Found'
//       );
//     })
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//       // Only catches on failed requests
//       console.log(err.message);
//       renderError(`Something went wrong! ${err.message}`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener('click', function () {
//   getCountryData('australia');
// });

// console.log('Testing');
// setTimeout(() => {
//   console.log('0 sec timer');
// }, 0);
// Promise.resolve('Resolved promise 1').then(res => console.log(res));
// Promise.resolve('Resolve Promise 2').then(res => {
//   for (let i = 0; i < 100; i++) {}
//   console.log(res);
// });
// console.log('Test End');

// const lottery = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     if (Math.random() >= 0.5) {
//       resolve('You Win!');
//     } else {
//       reject('You get nothing! You Lose!');
//     }
//   }, 2000);
// });
// lottery.then(res => console.log(res)).catch(err => console.error(err));

// wait(2)
//   .then(res => {
//     console.log('I waited');
//     return wait(1);
//   })
//   .then(() => console.log('I waited again'));

// const whereAmI = async function (country) {
//   try {
//     const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
//     if (!res.ok) throw new Error('Borked it');
//     const data = await res.json();
//     renderCountry(data[0]);
//     // console.log(data);
//     return `Your money is in ${Object.values(data[0].currencies)[0].name}`;
//   } catch (err) {
//     console.error(err.message);
//     renderError('Something Went Wrong');
//     throw err;
//   }
//   countriesContainer.style.opacity = 1;
// };
// whereAmI('portugal');

// (async function () {
//   try {
//     console.log('1. Retrieving Primary Currency');
//     const curr = await whereAmI('portugal');
//     console.log(`2. ${curr}`);
//   } catch (err) {
//     console.log(`2. Unable to determine primary currency: ${err.message}`);
//     throw err;
//   }
//   console.log(`3. Finished Currency Retrieval`);
// })();

// // Parallel Promises
// const rendercapitals = async function (c1, c2, c3) {
//   try {
//     // const [data1] = await getJSON(`https://restcountries.com/v3.1/name/${c1}`);
//     // const [data2] = await getJSON(`https://restcountries.com/v3.1/name/${c2}`);
//     // const [data3] = await getJSON(`https://restcountries.com/v3.1/name/${c3}`);
//     const data = await Promise.all([
//       getJSON(`https://restcountries.com/v3.1/name/${c1}`),
//       getJSON(`https://restcountries.com/v3.1/name/${c2}`),
//       getJSON(`https://restcountries.com/v3.1/name/${c3}`),
//     ]);
//     console.log(data.map(d => d[0].capital[0]));
//   } catch (err) {
//     console.error(err);
//   }
// };
// rendercapitals('usa', 'portugal', 'japan');

// // Promise.race() settles when the first promise settles
// // Useful for timing out web calls
// (async function () {
//   const res = await Promise.race([
//     getJSON(`https://restcountries.com/v3.1/name/italy`),
//     getJSON(`https://restcountries.com/v3.1/name/egypt`),
//     getJSON(`https://restcountries.com/v3.1/name/mexico`),
//   ]);
//   console.log(res[0]);
// })();
// const timeout = function (s) {
//   return new Promise(function (_, reject) {
//     setTimeout(() => {
//       reject(new Error('Request timed out'));
//     }, s * 1000);
//   });
// };
// Promise.race([
//   getJSON(`https://restcountries.com/v3.1/name/tanzania`),
//   timeout(0.001),
// ])
//   .then(res => console.log(res[0]))
//   .catch(err => console.error(err));

// // Promise.allSettled() takes an array of promises and returns array of all settled promises
// Promise.allSettled([
//   Promise.resolve('Success'),
//   Promise.reject('Failed'),
//   Promise.resolve('Great Success!'),
// ]).then(res => console.log(res));

const imgContainer = document.querySelector('.images');
const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;
    img.addEventListener('load', function () {
      imgContainer.append(img);
      resolve(img);
    });
    img.addEventListener('error', function () {
      reject(new Error('Image Not found'));
    });
  });
};
//Promis-ifying setTimeout
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};
let currImg;
// createImage('img/img-1.jpg')
//   .then(img => {
//     currImg = img;
//     console.log('Image 1 Loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currImg.style.display = 'none';
//     return createImage('img/img-2.jpg');
//   })
//   .then(img => {
//     currImg = img;
//     console.log('Image 2 Loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currImg.style.display = 'none';
//     return createImage('blank'); // simulate a failure
//   })
//   .catch(err => console.error(err));
// const loadNPause = (async function () {
//   try {
//     // Load image 1
//     let img = await createImage('img/img-1.jpg');
//     await wait(2);
//     img.style.display = 'none';
//     // Load Image 2
//     img = await createImage('img/img-2.jpg');
//     await wait(2);
//     img.style.display = 'none';
//   } catch (err) {
//     console.error(err);
//   }
// };
// loadNPause()

const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async img => await createImage(img));
    const imgsEl = await Promise.all(imgs);
    console.log(imgsEl);
    imgsEl.forEach(img => img.classList.add('parallel'));
  } catch (err) {
    console.error(err);
  }
};
loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);
