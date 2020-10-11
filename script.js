//Part 1: Create hotel object and write offer details
//it has 3 properties: name, room rate & discount + a method to 
//calculate the offer price which is shown to the user
//script is places within an IFFE
(function(){
    var hotel = {      //object created using object literal - curly braces
        name: 'Park',
        roomRate: 240,
        discount: 15,
        offerPrice: function() {
            this.roomRate * ((100 - this.discount) / 100);
            return this.offerRate;
        }
};
//write out hotel name, standard rate and the special rate
//declare variables & get elements
var hotelName, roomRate, specialRate;
hotelName = document.getElementById('hotelName');
roomRate = document.getElementById('roomRate');
specialRate = document.getElementById('specialRate');
//write name rate and offer price
hotelName.textContent = hotel.name;
roomRate.textContent = '$' + hotel.roomRate.toFixed(2); //rounds to 2 decimal places
specialRate = '$' = hotel.offerPrice();

//Part 2 calculate and write out the expiry details for the offer
var expiryMsg; //displayed to users
var today; // todays date
var elEnds; // element that shows msg about offer ending

function offerExpires(today){
//declare variables within function for local scope
    var weekFromToday, day, date, month, year, dayNames, monthNames;
//add 7 days time (milliseconds)
    weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 *1000);
//create array to hold the name of dates/months
    dayNames = ["sunday", "monday", "tuesday", "wednesday", "thursday",
        "friday", "saturday"];
    monthNames = ["january", "february", "march", "april", "may", "june",
        "july", "august", "september", "october", "november", "december"];
//collect parts of the data to show on the page
    day = dayNames[weekFromToday.getDay()];
    date = weekFromToday.getDate();
    month = monthNames[weekFromToday.getMonth()];
    year = weekFromToday.getFullYear();
// create message
    expiryMsg = 'Offer expires next ';
    expiryMsg += day + '<br />(' + date + ' ' + month + ' ' + year +')'; //what??
    return expiryMsg;
}
today = new Date(); //put todays date in variable
elEnds = document.getElementById('offerEnds'); //get offerEnds element
elEnds.innerHTML = offerExpires(today); //add expiry message

 }());


