function handleSubmit(event) {
  event.preventDefault();
  const title = document.getElementById('signup-form__title');
  if (!event.target.email.value) {
      title.innerText = 'Email cannot be empty. Try again!'
      return false;
  }
  fetch(event.srcElement.action, {
      mode: 'no-cors', 
      headers: {
          'Accept': event.target.encoding,
          'Content-Type': event.target.encoding
      },
      method: event.target.method,
      body: JSON.stringify({email: event.target.email.value})
  }).then(
      () => {title.innerHTML = "<b>Thank you</b> for your subscription!"},
      () => {title.innerHTML = '<b>Something went wrong.</b> Please, try again.'}
  )
}
const form = document.getElementById('signup-form');
form.addEventListener('submit', handleSubmit)