// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
console.log("sat");

// link
// http://www.omdbapi.com/?i=tt3896198&apikey=983f5710

var wallet = JSON.parse(localStorage.getItem("amount"));
console.log(wallet);

var walletMoney = document.querySelector("#wallet");
// walletMoney.innerText = wallet;
console.log(walletMoney);

let id;

async function searchMovies() {
  try {
    const q = document.querySelector("#search").value;

    const res = await fetch(
      `http://www.omdbapi.com/?i=tt3896198&apikey=983f5710&s=${q}`
    );

    const data = await res.json();

    const movies = data.search;

    return movies;
  } catch (err) {
    console.log("err:", err);
  }
}

function appendMovies(data) {
  data.forEach(function (ele) {
    let box = document.createElement("div");

    //   let image=document.createElement('img')
    //   image.src=

    let title = document.createElement("h4");
    title.innerText = ele.Title;

    box.append(title);

    document.querySelector("#movies").append(box);
  });
}

async function main() {
  let data = await searchMovies();

  if (data == undefined) {
    return false;
  }

  appendMovies(data);

  console.log("ss");
}

function debounce(func, delay) {
  if (id) {
    clearTimeout(id);
  }
  id = setTimeout(function () {
    main();
  }, delay);
}
