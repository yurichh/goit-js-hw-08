import throttle from 'lodash.throttle';
import lodash from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input[name=email]');
const messageInput = document.querySelector('textarea[name=message]');

function saveInfo() {
  const data = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem('user-data', JSON.stringify(data));
}

function returnInfo() {
  const savedInfo = localStorage.getItem('user-data');
  if (savedInfo) {
    const data = JSON.parse(savedInfo);
    emailInput.value = data.email;
    messageInput.value = data.message;
  }
}
emailInput.addEventListener('input', throttle(saveInfo, 500));
messageInput.addEventListener('input', throttle(saveInfo, 500));

window.addEventListener('load', returnInfo);

form.addEventListener('submit', function (event) {
  event.preventDefault();
  localStorage.removeItem('user-data');
  const data = {
    email: emailInput.value,
    message: messageInput.value,
  };
  console.log(data);
  form.reset();
});
