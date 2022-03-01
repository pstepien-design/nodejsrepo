const fetch = require('node-fetch');

const fetchData = () => {
  fetch('http://worldtimeapi.org/api/timezone/Europe/Copenhagen')
    .then((response) => response.json())
    .then((info) => {
      console.log(info.datetime);
      const dateText = info.datetime.split('');
      let todayDate = '';
      let currentTime = '';
      for (let i = 0; i < 10; i++) {
        todayDate += dateText[i];
      }
      for (let i = 11; i < 19; i++) {
        currentTime += dateText[i];
      }
      console.log(todayDate);

      const ip = document.getElementById('ip');
      const timeZone = document.getElementById('timeZone');
      const date = document.getElementById('date');
      const weekDay = document.getElementById('weekDay');
      const weekNumber = document.getElementById('weekNumber');
      const yearDay = document.getElementById('yearDay');

      ip.innerHTML = info.client_ip;
      timeZone.innerHTML = info.timezone;
      date.innerHTML = todayDate + ' ' + currentTime;
      weekDay.innerHTML = info.day_of_week;
      weekNumber.innerHTML = info.week_number;
      yearDay.innerHTML = info.day_of_year;
    });
};
fetchData();
