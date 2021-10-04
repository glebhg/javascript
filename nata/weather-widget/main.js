// const msg = document.querySelector(".top-banner .msg");
// const input = document.querySelector(".top-banner input");
// const list = document.querySelector(".ajax-section .cities");

const weather = [];
const cities = [];

const handleCityNameInput = (eventTarget) =>
  eventTarget.querySelector("input[name=city]").value;

const showWeather = () => {};

const form = document.querySelector(".top-banner form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const cityName = handleCityNameInput(e.target);
  console.log(cityName);
});
/*form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputVal = input.value;
  const listItemsArray = Array.from(
    list.querySelectorAll(".ajax-section .city")
  );

  if (listItemsArray.length > 0) {
    const filteredArray = listItemsArray.filter((el) => {
      let content = "";
      if (inputVal.includes(",")) {
        if (inputVal.split(",")[1].length > 2) {
          inputVal = inputVal.split(",")[0];
          content = el
            .querySelector(".city-name span")
            .textContent.toLowerCase();
        } else {
          content = el.querySelector(".city-name").dataset.name.toLowerCase();
        }
      } else {
        content = el.querySelector(".city-name span").textContent.toLowerCase();
      }
      return content == inputVal.toLowerCase();
    });
    if (filteredArray.length > 0) {
      msg.textContent = `You already know the weather for ${
        filteredArray[0].querySelector(".city-name span").textContent
      } ...otherwise be more specific by providing the country code as well 😉`;
      form.reset();
      input.focus();
      return;
    }
  }

  async function myFetch() {
    try {
      let response = await fetch(url);
      let data = await response.json();
      const { main, name, sys, weather } = data;
      const icon = `https://openweathermap.org/img/wn/${weather[0]["icon"]}@2x.png`;

      const li = document.createElement("li");
      li.classList.add("city");
      const markup = `
  <h2 class="city-name" data-name="${name},${sys.country}">
    <span>${name}</span>
    <sup>${sys.country}</sup>
  </h2>
  <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup>
  </div>
  <figure>
    <img class="city-icon" src=${icon} alt=${weather[0]["main"]}>
    <figcaption>${weather[0]["description"]}</figcaption>
  </figure>
`;
      li.innerHTML = markup;
      list.appendChild(li);
    } catch {
      msg.textContent = "Please search for a valid city 😩";
    }
  }
  myFetch();
  msg.textContent = "";
  form.reset();
  input.focus();
});
*/
