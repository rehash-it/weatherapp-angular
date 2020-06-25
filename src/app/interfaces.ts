export interface ICurrentWeather {
  city: String;
  country: String;
  date: number;
  image: String;
  temperature: number;
  description: String;
}
export interface ICurrentWeatherData {
  name: String;
  sys: {
    country: String;
  };
  weather: Array<{ description: String; icon: String }>;
  main: {
    temp: number;
  };
  dt: number;
}
