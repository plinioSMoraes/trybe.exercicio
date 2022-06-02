const eraseButton = document.querySelector('.btn .btn-success');
const sendButton = document.querySelectorAll('.btn .btn-danger');

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
    destination.click(); // seleciona a primeira opçao
    destination.checked = false; // e limpa a primeira opçao
    data.value = '';
    shareImg.checked = false;
    receiveInfo.checked = false;
})

