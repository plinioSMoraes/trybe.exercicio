
var picker = new Pikaday(
    {
        field: document.getElementById('datepicker'),
        firstDay: 1,
        minDate: new Date(),
        maxDate: new Date(2020, 12, 31),
        yearRange: [2000,2020]
    });
    

//
// Custom Class Validation Example
//
validation.init("form");
var enabled = false;
validation.addClassValidation("#customClassValidation", ".my-class-invalid", "Field is invalid");
document.getElementById("customClassValidation").addEventListener("click", function(e){
    if (enabled){
    e.target.className = e.target.className.replace(/my-class-invalid$/, "");
    } else {
    e.target.className += " my-class-invalid";
    }
    enabled = !enabled;
});

//
// Manual Validation Example
//
// document.getElementById("manualValidation").addEventListener("click", function(e) {
//     validation.show("#manualValidation", "My custom message");
// });

const eraseButton = document.querySelector('#erase');

eraseButton.addEventListener('click', function (originEvent) {
    originEvent.preventDefault();
    
});
