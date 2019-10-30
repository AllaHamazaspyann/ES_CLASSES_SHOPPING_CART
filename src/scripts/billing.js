const billingHtml = () => {
    return (`<div class='item__actions--shipping'>
    <h2>Billing Information</h2>
    <form class='item__actions__form'>
      <span>Billing Contact</span>
      <input type='text' placeholder='Full Name' class='item__actions__form__input--block'/>
      <input type='text' placeholder='Email Address'/>
      <span>Billing Address</span>
      <input type='text' placeholder='Street Address' class='item__actions__form__input--block'/>
      <input type='text' placeholder='Apt, Suite, Bidg, Gate, Code. (Optional)' class='item__actions__form__input--block'/>
      <input type='text' placeholder='City' class='item__actions__form__input--block'>
      <select name='' id=''>
        <option value=''>Country</option>
      </select>
      <input type='text' placeholder='ZIP'>
      <input id='continue' type='submit' value='Continue' onclick='handlePageChange(event, "payment")'/>
    </form>
  </div>`)
}




export default billingHtml;