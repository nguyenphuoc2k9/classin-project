const select = document.querySelector(".select")
const select_btn = select.querySelector(".select-btn")
const options = select.querySelector(".options")
const search_country = document.getElementById("search-country")
var option = document.getElementsByClassName("option")
let data;

fetch("https://api.covid19api.com/summary")
  .then((res) => {
    if (!res.ok) {
      showError();
    } else {
      res.json().then((info) => {
        data = info;

        if (info.Message === "Caching in progress") {
          showError(info.Message);
        } else {
          console.log(info);
          document.querySelector(".options").innerHTML = `
            <li onclick="buttonClicked('World',this)" class='option'>World</li>
            ${info.Countries.map(
              (country) =>
                `<li  class='option'onclick="buttonClicked('${country.Country}',this)">${country.Country}</li>`
            ).join("")}
          `;

          showContent(info.Global);
        }
      });
    }
  })
  .catch((err) => {
    console.log(err);
    showError();
  });

document.querySelector("input").addEventListener("keyup", (e) => {
  const value = e.target.value;
  document.querySelectorAll(".options li").forEach((item) => {
    if (value.trim() === "") {
      item.style.display = "flex";
    } else {
      if (item.innerText.toLowerCase().includes(value.trim().toLowerCase())) {
        item.style.display = "flex";
      } else {
        item.style.display = "none";
      }
    }
  });
});

const showError = (message = "") => {
  document.querySelector(".loading").style.display = "none";
  document.querySelector(".error").style.display = "flex";
  document.querySelector(".content").style.display = "none";
  if (message) {
    document.querySelector(
      ".error"
    ).innerText = `Failed to load data. "${message}"`;
  }
};

const buttonClicked = (id,e) => {
  if (id === "World") {
    showContent(data.Global);
  } else {
    showContent(data.Countries.find((country) => country.Country === id));
  }
  select_btn.firstElementChild.innerText = e.innerText;

};

const showContent = (data) => {
  document.querySelector(".loading").style.display = "none";
  document.querySelector(".error").style.display = "none";
  document.querySelector(".content").style.display = "block";

  // document.querySelector(".content").innerHTML = `
  //   <p>New Confirmed: ${data.NewConfirmed}. New Deaths: ${data.NewDeaths}. New Recovered: ${data.NewRecovered}</p>
  //   <p>Total Confirmed: ${data.TotalConfirmed}. Total Deaths: ${data.TotalDeaths}. Total Recovered: ${data.TotalRecovered}</p>
  // `;
  document.getElementById("con-today").innerText = data.NewConfirmed
  document.getElementById("dea-today").innerText = data.NewDeaths
  document.getElementById("con-total").innerText= data.TotalConfirmed
  document.getElementById("dea-total").innerText = data.TotalDeaths
};
//select
console.log(select_btn);
select_btn.addEventListener("click", function () {
    select.classList.toggle("active")
})

