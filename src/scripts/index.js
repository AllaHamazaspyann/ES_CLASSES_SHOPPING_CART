import '../styles/index.scss';

import shippingHtml from './shipping';
import billingHtml from './billing';
import paymentHtml from './payment';
import {render} from './ordered-items';

const rootEl = document.getElementById('root');

class navBar {
  constructor(active, page, root){
    this.active = active;
    this.page = page;
    this.root = root;
  }
  returnHtml() {
    this.root.innerHTML = this.page;
  }
}
console.log(rootEl);
const shippingActiveElement = new navBar('shipping', shippingHtml(), rootEl);
const billingActiveElement = new navBar('billing', billingHtml(), rootEl);
const paymentActiveElement = new navBar('payment', paymentHtml(), rootEl);


const handleClick = (arg) => {
  if(arg == 'shipping'){
    shippingActiveElement.returnHtml();
  }else if(arg == 'billing'){
    billingActiveElement.returnHtml()
  }else if(arg == 'payment'){
    paymentActiveElement.returnHtml()
  }
}



window.handleClick = handleClick;
window.render = render;
render();


