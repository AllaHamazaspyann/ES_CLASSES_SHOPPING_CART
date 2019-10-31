const billingHtml = () => {
    return (`<div class='item__actions--shipping'>
    <h2>Billing Information</h2>
    <form class='item__actions__form' onsubmit='checkIfEmptyBilling(event)'>
      <span>Billing Contact</span>
      <input name='fullName'
             type='text'
             placeholder='Full Name'
             class='item__actions__form__input--block'
             onkeypress='handleChangeBilling(event)'/>
      <div id='fullName' class='item__actions__form__error'></div>
      <input type='text'
             placeholder='Email Address'
             name='email_address'
             onkeypress='handleChangeBilling(event)'/>
      <div id='email_address' class='item__actions__form__error'></div>
      <span>Billing Address</span>
      <input type='text' 
             placeholder='Street Address'
             class='item__actions__form__input--block'
             onkeypress='handleChangeBilling(event)'
             name='street_address'/>
      <div id='street_address' class='item__actions__form__error'></div>       
      <input type='text'
             placeholder='Apt, Suite, Bidg, Gate, Code. (Optional)' 
             class='item__actions__form__input--block'
            />
      <input type='text' 
             placeholder='City' 
             name='city'
             class='item__actions__form__input--block'
             onkeypress='handleChangeBilling(event)'/>
      <div id='city' class='item__actions__form__error'></div>          
      <select name='country' id=''>
        <option value=''>Country</option>
      </select>
      <div id='country' class='item__actions__form__error'></div> 
      <input type='text' name='zip' placeholder='ZIP' onkeypress='handleChangeBilling(event)'/>
      <div id='zip' class='item__actions__form__error'></div> 
      <input id='continue'
             type='submit'
             value='Continue'
             onclick='checkIfEmptyBilling(event)'/>
    </form>
  </div>`)
}


const state = {
  fullName: '',
  street_address: '',
  email_address: '',
  city: '',
  phone: '',
  zip: '',
  Country: ''
}

const handleChangeBilling = (e) => {
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

const checkIfEmptyBilling = (e) => {
  e.preventDefault();
  for(let key in state){
    const elementErr = document.getElementById(`${key}`);
    if(state[key] == ''){
      elementErr.innerHTML = `Please enter ${key}`; 
      false && handlePageChange(event, "payment");
    }else if(state[key]){
      elementErr.innerHTML = ''; 
      handlePageChange(event, "payment")
    }
  }
  return false;
}

window.handleChangeBilling  = handleChangeBilling;
window.checkIfEmptyBilling = checkIfEmptyBilling;

export default billingHtml;