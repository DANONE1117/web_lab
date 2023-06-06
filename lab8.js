function showDate () {
    let RU = document.getElementById("current-dateRU");
    let todayRU = new Date();
    RU.innerHTML = 'Дата и время для русской локали: ' + todayRU.toLocaleString("ru-RU");
    
    let ZA = document.getElementById("current-dateZA");
    let todayZA = new Date();
    ZA.innerHTML = 'Дата и время для африканской локали: ' + todayZA.toLocaleString("af-ZA");

    let CA = document.getElementById("current-dateCA");
    let todayCA = new Date();
    CA.innerHTML = 'Дата и время для британской  локали: ' + todayCA.toLocaleString("en-CA");

    let PA = document.getElementById("current-datePA");
    let todayPA = new Date();
    PA.innerHTML = 'Дата и время для испанской локали: ' + todayPA.toLocaleString("es-PA");

    let EE = document.getElementById("current-dateEE");
    let todayEE = new Date();
    EE.innerHTML = 'Дата и время для эстонской локали: ' + todayEE.toLocaleString("et-EE");

    let BE = document.getElementById("current-dateBE");
    let todayBE = new Date();
    BE.innerHTML = 'Дата и время для бельгийской локали: ' + todayBE.toLocaleString("fr-BE");
}
function showDaysCount () {
    let today = new Date();
    let inputDate = document.querySelector("input[type=date]");
    let DR = new Date(inputDate.value);
    let daysCount = (today - DR)/1000/60/60/24;
    document.getElementById("day").innerHTML = 'Количество дней с даты рождения: ' + daysCount.toFixed(0);
    
}