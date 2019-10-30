import shippingHtml from './shipping';

console.log(shippingHtml())



const rootEl = document.getElementById('root');

class navBar {
  constructor(active, page, root){
    this.active = active;
    this.page = page;
    this.root = root;
  }
  returnHtml() {
    this.root.insertAdjacentHTML('beforeend', this.page);
  }
}

const shippingActiveElement = new navBar('shipping', '<p>Shipping</p>', rootEl);
const billingActiveElement = new navBar('billing', '<p>Billing</p>', rootEl);
const paymentActiveElement = new navBar('payment', '<p>Payment</p>', rootEl);


const handleClick = (arg) => {
  if(arg == 'shipping'){
    shippingActiveElement.returnHtml();
  }else if(arg == 'billing'){
    billingActiveElement.returnHtml()
  }else if(arg == 'payment'){
    paymentActiveElement.returnHtml()
  }
}



 






