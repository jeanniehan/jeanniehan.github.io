document.addEventListener('DOMContentLoaded', function() {

    function displayDate() {
        const dateContainer = document.body;
        const dateDiv = document.createElement("div");
        dateDiv.classList.add("date-class");


        dateContainer.innerHTML = '';

        dateContainer.appendChild(dateDiv);

  
        const options = { timeZone: 'America/New_York', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
        const easternDate = new Date().toLocaleString('en-US', options);


        dateDiv.innerHTML = easternDate;
    }

    setInterval(displayDate, 1000);


    displayDate();
});
