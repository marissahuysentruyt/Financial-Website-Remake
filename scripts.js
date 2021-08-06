// modal scripts 
// all forms go to thank you modal

// main cta schedule modal variables
let ctaSchedule = document.getElementById("ctaSchedule");

// schedule modal variables
let scheduleModal = document.getElementById("scheduleModal");
let schedule = document.getElementById("schedule");
let send = document.getElementById("send");
let closeSchedule = document.getElementsByClassName("close-schedule")[0];

// contact form modal variables
let modal = document.getElementById("modal");
let button = document.getElementById("submit");
let close = document.getElementsByClassName("close")[0];

schedule.onclick = function() {
    scheduleModal.style.display = "block";
    console.log("start scheduling");
};

ctaSchedule.onclick = function() {
    scheduleModal.style.display = "block";
    console.log("start scheduling");
};

send.onclick = function() {
    scheduleModal.style.display = "none";
    modal.style.display = "block";
    console.log("schedule sent");
};

closeSchedule.onclick = function() {
    scheduleModal.style.display = "none";
    console.log("done scheduling");
};

window.onclick = function(event) {
    if(event.target == scheduleModal || event.target == modal) {
        scheduleModal.style.display = "none";
        modal.style.display = "none";
    }
};

// onclick of button, css needs to change to display: block;
// button.onclick = function() {
//     modal.style.display = "block";
//     console.log("message submitted!");
// };

close.onclick = function() {
    modal.style.display = "none";
    console.log("closed");
};
