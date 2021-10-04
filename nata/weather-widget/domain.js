export class Country {
  #name;
  #code;

  constructor(name, code) {
    this.#name = name;
    this.#code = code;
  }

  get name() {
    return this.#name;
  }

  get code() {
    return this.#code;
  }
}

export class City {
  #name;
  #country;
  #weather;

  /**
   *
   * @param {string} name
   * @param {Country} country
   * @param {Weather} weather
   */
  constructor(name, country, weather) {
    this.#name = name;
    this.#country = country;
    this.#weather = weather;
  }

  get name() {
    return this.#name;
  }

  get country() {
    return this.#country;
  }

  get weather() {
    return this.#weather;
  }

  set weather(newWeather) {
    this.#weather = newWeather;
  }
}

export class Weather {
  #temperature;
  #icon;
  #description;

  constructor(temperature, icon, description) {
    this.#temperature = temperature;
    this.#icon = icon;
    this.#description = description;
  }

  get temperature() {
    return this.#temperature;
  }

  get icon() {
    return this.#icon;
  }

  get description() {
    return this.#description;
  }
}
