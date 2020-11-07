let today = moment().format('MMMM Do YYYY');
$("#currentDay").text(today);
let startTime = 9;
let endTime = 17;

//timeblock display
function timeBlock(){
    let i = startTime;
    while(i <= endTime){
        let j = moment(`${i}:00`, `HH:mm`).format(`hh a`);
        console.log(j);
        $(".container").append(`<div class="row time-block"><div class="col-2 hour">${j}</div><div class="col-8" id="${i}"><textarea></textarea></div><div class="col-2"><button class="saveBTN">Save</button></div></div>`);
        i++;
    }
    colorCode();
}

//timeblock color coding (past, present, future)
function colorCode(){
    let rows = document.querySelectorAll(".col-8");
    let current = moment().format('HH');
    console.log(current);
    rows.forEach(element => {
        if(element.id < current){
            element.setAttribute("class", "col-8 past");
        } else if (element.id > current){
            element.setAttribute("class", "col-8 future");
        } else {
            element.setAttribute("class", "col-8 present")
        }
    })
}

//timeblock click control + edit

//timeblock edit save to local storage

//local storage pull on page reload

timeBlock();