import validator from 'validator';

const paymentHtml = () => {
    return (`<div class='item__actions--shipping'>
    <h2>Payment</h2>
    <div class='payment-info'>
    <svg xmlns="http://www.w3.org/2000/svg" height="12px" width="12px" version="1.1" viewBox="-38 0 511 511.99956" >
      <g id="surface1">
      <path d="M 413.476562 341.910156 C 399.714844 379.207031 378.902344 411.636719 351.609375 438.289062 C 320.542969 468.625 279.863281 492.730469 230.699219 509.925781 C 229.085938 510.488281 227.402344 510.949219 225.710938 511.289062 C 223.476562 511.730469 221.203125 511.96875 218.949219 512 L 218.507812 512 C 216.105469 512 213.691406 511.757812 211.296875 511.289062 C 209.605469 510.949219 207.945312 510.488281 206.339844 509.9375 C 157.117188 492.769531 116.386719 468.675781 85.289062 438.339844 C 57.984375 411.6875 37.175781 379.277344 23.433594 341.980469 C -1.554688 274.167969 -0.132812 199.464844 1.011719 139.433594 L 1.03125 138.511719 C 1.261719 133.554688 1.410156 128.347656 1.492188 122.597656 C 1.910156 94.367188 24.355469 71.011719 52.589844 69.4375 C 111.457031 66.152344 156.996094 46.953125 195.90625 9.027344 L 196.246094 8.714844 C 202.707031 2.789062 210.847656 -0.117188 218.949219 0.00390625 C 226.761719 0.105469 234.542969 3.007812 240.773438 8.714844 L 241.105469 9.027344 C 280.023438 46.953125 325.5625 66.152344 384.429688 69.4375 C 412.664062 71.011719 435.109375 94.367188 435.527344 122.597656 C 435.609375 128.386719 435.757812 133.585938 435.988281 138.511719 L 436 138.902344 C 437.140625 199.046875 438.554688 273.898438 413.476562 341.910156 Z M 413.476562 341.910156 " style=" stroke:none;fill-rule:nonzero;fill:rgb(0%,86.666667%,50.196078%);fill-opacity:1;" />
      <path d="M 413.476562 341.910156 C 399.714844 379.207031 378.902344 411.636719 351.609375 438.289062 C 320.542969 468.625 279.863281 492.730469 230.699219 509.925781 C 229.085938 510.488281 227.402344 510.949219 225.710938 511.289062 C 223.476562 511.730469 221.203125 511.96875 218.949219 512 L 218.949219 0.00390625 C 226.761719 0.105469 234.542969 3.007812 240.773438 8.714844 L 241.105469 9.027344 C 280.023438 46.953125 325.5625 66.152344 384.429688 69.4375 C 412.664062 71.011719 435.109375 94.367188 435.527344 122.597656 C 435.609375 128.386719 435.757812 133.585938 435.988281 138.511719 L 436 138.902344 C 437.140625 199.046875 438.554688 273.898438 413.476562 341.910156 Z M 413.476562 341.910156 " style=" stroke:none;fill-rule:nonzero;fill:rgb(0%,66.666667%,38.823529%);fill-opacity:1;" />
      <path d="M 346.101562 256 C 346.101562 326.207031 289.097656 383.355469 218.949219 383.605469 L 218.5 383.605469 C 148.144531 383.605469 90.894531 326.359375 90.894531 256 C 90.894531 185.644531 148.144531 128.398438 218.5 128.398438 L 218.949219 128.398438 C 289.097656 128.648438 346.101562 185.796875 346.101562 256 Z M 346.101562 256 " style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" />
      <path d="M 346.101562 256 C 346.101562 326.207031 289.097656 383.355469 218.949219 383.605469 L 218.949219 128.398438 C 289.097656 128.648438 346.101562 185.796875 346.101562 256 Z M 346.101562 256 " style=" stroke:none;fill-rule:nonzero;fill:rgb(88.235294%,92.156863%,94.117647%);fill-opacity:1;" />
      <path d="M 276.417969 237.625 L 218.949219 295.101562 L 206.53125 307.519531 C 203.597656 310.453125 199.75 311.917969 195.90625 311.917969 C 192.058594 311.917969 188.214844 310.453125 185.277344 307.519531 L 158.578125 280.808594 C 152.710938 274.941406 152.710938 265.4375 158.578125 259.566406 C 164.4375 253.699219 173.953125 253.699219 179.820312 259.566406 L 195.90625 275.652344 L 255.175781 216.382812 C 261.042969 210.511719 270.558594 210.511719 276.417969 216.382812 C 282.285156 222.25 282.285156 231.765625 276.417969 237.625 Z M 276.417969 237.625 " style=" stroke:none;fill-rule:nonzero;fill:rgb(70.588235%,82.352941%,84.313725%);fill-opacity:1;" />
      <path d="M 276.417969 237.625 L 218.949219 295.101562 L 218.949219 252.605469 L 255.175781 216.382812 C 261.042969 210.511719 270.558594 210.511719 276.417969 216.382812 C 282.285156 222.25 282.285156 231.765625 276.417969 237.625 Z M 276.417969 237.625 " style=" stroke:none;fill-rule:nonzero;fill:rgb(43.529412%,64.705882%,66.666667%);fill-opacity:1;" />
      </g>
    </svg>
    This is a secure 128-bit SSL encrypted payment</div>
    <form class='item__actions__form' onsubmit='checkIfEmptyPayment(event)'>
      <span>Cardholder Name</span>
      <input type='text' 
             name='cardholder_name' 
             placeholder='Name as it appears on your card' 
             class='item__actions__form__input--block'
             onkeypress='handleChangePayment(event)'/>
      <div id='cardholder_name' class='item__actions__form__error'></div>
      <span>Card Number</span>
      <input type='numer' 
             name='card_number' 
             id='card_number_input'
             placeholder='XXXX XXXX XXXX XXXX XXXX' 
             pattern="[0-9.]+"
             class='item__actions__form__input--block'
             onkeypress='handleChangePayment(event);cc_format(event)'/>
      <div id='card_number' class='item__actions__form__error'></div>
      <input type='text' 
             name='empire_date' 
             placeholder='Empire Date'
             onkeypress='handleChangePayment(event)'>
      <div id='empire_date' class='item__actions__form__error'></div>      
      <input type='text' 
             name='security_code'
             placeholder='Security Code'
             onkeypress='handleChangePayment(event)'>
      <div id='security_code' class='item__actions__form__error'></div>    
      <input id='continue'
        type='submit' 
        value='Pay Securely'
        onclick='checkIfEmptyPayment(event)'/>
    </form>
  </div>`)
}

const state = {
  security_code: '',
  empire_date: '',
  card_number: '',
  cardholder_name: '',
}

const handleChangePayment = (e) => {

  const name = e.target.name;
  const value = e.target.value;
  state[name] = value;
  for(let key in state){
    const elementErr = document.getElementById(`${key}`);
    if(state[key]){
      elementErr.innerHTML = '';
    }
  }
}

const checkIfEmptyPayment = (e) => {
  e.preventDefault();
  for(let key in state){
    const elementErr = document.getElementById(`${key}`);
    if(state[key] == ''){
      elementErr.innerHTML = `Please enter ${key}`; 
      false && handlePageChange(event, "details");
    }else if(state[key]){
      elementErr.innerHTML = ''; 
      handlePageChange(event, "details")
    }
  }
  return false;
}

// const replaceWith = (e) => {
//  const input =  document.getElementById('card_number');
//   input.value.replace(/[\D\s\._\-]+/g, e.target.value);
// }

const cc_format = (e) => {
  const value = e.target.value
  let v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '')
  let matches = v.match(/\d{4,16}/g);
  let match = matches && matches[0] || ''
  let parts = []

  for (let i=0, len=match.length; i<len; i+=4) {
      parts.push(match.substring(i, i+4))
  }
  if (parts.length) {
    console.log(parts.join(' '))
    const cardNumber = document.getElementById('card_number_input');
    const finalValue = parts.join(' ');
    cardNumber.value = finalValue;
  } else {
      return value
  }
}



window.handleChangePayment  = handleChangePayment;
window.checkIfEmptyPayment = checkIfEmptyPayment;
window.cc_format = cc_format;
export default paymentHtml;