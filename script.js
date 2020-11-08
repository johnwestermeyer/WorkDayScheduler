let today = moment().format('MMMM Do YYYY');
$("#currentDay").text(today);
let startTime = 09;
let endTime = 17;

//timeblock display
function timeBlock(){
    let i = startTime;
    while(i <= endTime){
        let j = moment(`${i}:00`, `HH:mm`).format(`hh a`);
        $(".container").append(`<div class="row time-block"><div class="col-2 hour">${j}</div><div class="col-8" id="${i}"><textarea id="${i}"></textarea></div><div class="col-2 saveBtn" id="${i}">Save</div></div>`);
        i++;
    }
    colorCode();
}

//timeblock color coding (past, present, future)
function colorCode(){
    let rows = document.querySelectorAll(".col-8");
    let current = parseInt(moment().format('HH'));
    rows.forEach(element => {
        if(parseInt(element.id) < current){
            element.setAttribute("class", "col-8 past");
        } else if (parseInt(element.id) > current){
            element.setAttribute("class", "col-8 future");
        } else {
            element.setAttribute("class", "col-8 present")
        }
    })
}

//timeblock click control + edit + save to local storage
$(document).ready(function(){
$(".saveBtn").on("click", function(event){
    event.preventDefault();
    let j = -1;
    let storageObject = [];
    let currentTime = event.target.id;
    if(localStorage.getItem("schedule") !== null){
        storageObject = JSON.parse(localStorage.getItem("schedule"));
        for(let i = 0; i < storageObject.length; i++){
            if(storageObject[i].date === today){
                j = i;
            }
        }
        if (j === -1){
            j = storageObject.length;
            storageObject[j] = {date:today};
        }
    } else{
        j = 0;
        storageObject[j] = {
            date: today
            };
        
    }
    storageObject[j][currentTime] = $("textarea", `#${currentTime}`).val();
    localStorage.setItem("schedule", JSON.stringify(storageObject))
});})


//local storage pull on page reload

timeBlock();