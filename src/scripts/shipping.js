 const shippingHtml = () => {
    return (`<div class='item__actions--shipping'>
    <h2>Shipping Info</h2>
    <form class='item__actions__form'>
      <span>Recepient</span>
      <input type='text' placeholder='Full Name' class='item__actions__form__input--block'/>
      <input type='text' placeholder='Daytime phone'/>
      <p>For delivery questions only</p>
      <span>Address</span>
      <input type='text' placeholder='Street Address' class='item__actions__form__input--block'/>
      <input type='text' placeholder='Apt, Suite, Bidg, Gate, Code. (Optional)' class='item__actions__form__input--block'/>
      <input type='text' placeholder='City' class='item__actions__form__input--block'>
      <select name='' id=''>
        <option value=''>Country</option>
      </select>
      <input type='text' placeholder='ZIP'>
      <button>Continue</button>
    </form>
  </div>`)
}

export default shippingHtml;