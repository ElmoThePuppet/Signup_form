const name = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const form = document.getElementById('form');
const error = document.getElementById('error');

form.addEventListener('submit', e => {
  let messages = [];
  if (name.value === '' || name.value === null) {
    messages.push('Name is required');
  }

  if (lastName.value === '' || lastName.value === null) {
    messages.push('Last name is required');
  }

  if (email.value === '' || email.value === null) {
    messages.push('Your E-mail is required');
  }

  if (password.value.length <= 6) {
    messages.push('Password must be longer than 6 characters');
  }

  if (password.value === 'password') {
    messages.push('Password cannot be password');
  }

  if (
    (password.value !== undefined && password2.value === '') ||
    password2.value === null
  ) {
    messages.push('Confirm your password');
  }

  if (password.value !== password2.value) {
    messages.push("Your password isn't matching");
  }

  if (messages.length > 0) {
    e.preventDefault();
    error.innerText = messages.join(', ');
  }
});
