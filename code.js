let date = new Date();
let dayOfWeekNumber = date.getDay();
let nameOfDay;
let quote;
switch(dayOfWeekNumber){
    case 0: 
        nameOfDay = 'Sunday';
        quote = 'Hell yeah its Holiday';
        break;
    case 1:
        nameOfDay = 'Monday';
        quote = 'Time for some work!';
        break;
    case 2:
        nameOfDay = 'Tuesday';
        quote = 'Still working!';
        break;
    case 3:
        nameOfDay = 'Wednesday';
        quote = 'Again still working.';
        break;
    case 4:
        nameOfDay = 'Thursday';
        quote = 'Just survive for more 2 days';
        break;
    case 5:
        nameOfDay = 'Friday';
        quote = 'One day left now!';
        break;
    case 6:
        nameOfDay = 'Saturday';
        quote = 'Yes its weekend!';
        break;

}
let weekdayDiv = document.getElementById('weekday');
weekdayDiv.innerHTML = `${nameOfDay}`;
let quoteDiv = document.getElementById('phrase');
quoteDiv.innerHTML = `${quote}`


