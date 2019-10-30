import '../styles/index.scss';

import {shippingHtml} from './shipping';
import {orderDetails} from './orderDetails';
import billingHtml from './billing';
import paymentHtml from './payment';
import {render} from './ordered-items';

const rootEl = document.getElementById('root');
const rootElDetails = document.getElementById('details-root');
const ordersEl = document.getElementById('orders');

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

const shippingActiveElement = new navBar('shipping', shippingHtml(), rootEl);
const billingActiveElement = new navBar('billing', billingHtml(), rootEl);
const paymentActiveElement = new navBar('payment', paymentHtml(), rootEl);
const detailsActiveElement = new navBar('details', orderDetails(), rootElDetails)

shippingActiveElement.returnHtml();

const handleClick = (arg) => {
  rootElDetails.innerHTML = '';
  ordersEl.style.opacity = '1';
  if(arg == 'shipping'){
    shippingActiveElement.returnHtml();
  }else if(arg == 'billing'){
    billingActiveElement.returnHtml()
  }else if(arg == 'payment'){
    paymentActiveElement.returnHtml();
    
  }
}


const handlePageChange = (e, type) => {
  e.preventDefault();
  if(type == 'shipping'){
    shippingActiveElement.returnHtml();
  }else if(type == 'billing'){
    billingActiveElement.returnHtml()
  }else if(type == 'payment'){
    paymentActiveElement.returnHtml()
  }else if(type='details'){
    detailsActiveElement.returnHtml();
    rootEl.innerHTML = '';
    ordersEl.style.opacity = '0.55';
  }
}


const renderOrderDetails = () => {

}

window.handlePageChange  = handlePageChange;


window.handleClick = handleClick;
window.render = render;
render();


