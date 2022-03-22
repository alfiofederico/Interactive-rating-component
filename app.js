const rating = document.querySelector('.rating')
const radioInputs = document.querySelectorAll(".form-rating");
const card = document.querySelector(".card");


let ratingValue;

radioInputs.forEach(input => {
  input.addEventListener('change', e =>{
    ratingValue = e.target.value
  })
})

rating.addEventListener('submit', e => {
  e.preventDefault()

  if(!ratingValue) return;
  displayThankYouCard(card, ratingValue)
})

function displayThankYouCard(container, ratingValue) {
  container.innerHTML = `
    <div class="thankyou">
      <img src="./images/illustration-thank-you.svg" alt="thanks" class="thankyou-img">
      <p class="result">You selected ${ratingValue} out of 5</p>
      <h1 class="thankyou-title">Thank you!</h1>
      <p class="thankyou-description">We appreciate you taking the time to give a rating. If you ever need more support,
        don’t hesitate to get in touch!</p>
    </div
  `;
} 