<script type="text/javascript">
const select = document.querySelector(".select")
const select_btn = select.querySelector(".select-btn")
const options = select.querySelector(".options")
const search_country = document.getElementById("search-country")
var option = document.getElementsByClassName("option")
let data;
var home_chart = document.getElementById("home-chart")

fetch("https://api.covid19api.com/summary")
  .then((res) => {
    if (!res.ok) {
      showError()
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

document.querySelector("#search-country").addEventListener("keyup", (e) => {
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

const buttonClicked = (id, e) => {
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
  document.getElementById("con-total").innerText = data.TotalConfirmed
  document.getElementById("dea-total").innerText = data.TotalDeaths
  chart_drawing(data)
};
//select
console.log(select_btn);
select_btn.addEventListener("click", function () {
  select.classList.toggle("active")
})
//chart load
function chart_drawing(e) { 
  google.charts.load("current", {packages:['corechart']});
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
      var data = google.visualization.arrayToDataTable([
        ["Element", "Particular_number", { role: "style" } ],
        ["Confirmed", e.TotalConfirmed, "red"],
        ["Deaths", e.TotalDeaths, "#7326EF"],
      ]);

      var view = new google.visualization.DataView(data);
      view.setColumns([0, 1,
                       { calc: "stringify",
                         sourceColumn: 1,
                         type: "string",
                         role: "annotation" },
                       2]);
      var widthvar; 
      if(document.body.clientWidth <= 877){
        widthvar = 500
      }else {
        widthvar = 1000
      }
      
      var options = {
        title: "Particular amount of Deaths and Confirmed In ",
        width: widthvar,
        height: 400,
        bar: {groupWidth: "50%"},
        legend: { position: "none" },
      };
      var chart = new google.visualization.ColumnChart(document.getElementById("google-chart"));
      chart.draw(view, options);
  }
  console.log(e.TotalConfirmed);
  if(e.TotalConfirmed >= 2000000){
    document.getElementById("country-desc").innerText = "This country has a lot of Victim of covid-19 and has a high infection rate. Suggest : Wear mask when you are outside and don't forget to obey the 5k rules"
  }else{
    document.getElementById("country-desc").innerText = "This country has a decent covid-19's victim and has a low infection rate currently. Suggest : Its has a low rate doesn't mean that you won't be covid-19's victim so keep positions with others people and you should wear mask if you feel sick"
  }
  if(e.NewDeaths == 0){
    document.getElementById("rate").innerText  = "This country is safe currently."
  }else if(e.NewDeaths < 10){
    document.getElementById("rate").innerText  = Math.round(((e.TotalConfirmed-e.TotalDeaths)/e.NewConfirmed)/100)+"%"
  }else if(e.NewDeaths < 5){
    document.getElementById("rate").innerText  = "This country is safe currently."
  }
}
</script>