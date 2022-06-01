const eraseButton = document.querySelector('.eraseButton');
const sendButton = document.querySelectorAll('.sendButton');

eraseButton.addEventListener('click', function (originEvent) {
    let name = document.querySelector('.name');
    let email = document.querySelector('.email');
    let reason = document.querySelector('#reason');
    let destination = document.querySelector('.destination');
    let data = document.querySelector('.data');
    let shareImg = document.querySelector('#shareImg');
    let receiveInfo = document.querySelector('#receiveInfo');

    originEvent.preventDefault();

    email.value = '';
    name.value = '';
    reason.value = '';
    destination.click();
    destination.checked = false;
    data.value = '';
    shareImg.click();
    receiveInfo.click();
})