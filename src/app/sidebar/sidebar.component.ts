import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  nav = [
    {name: 'Dashboard', icon_link: 'assets/user_icon.svg', active: true, dropdown: false, add: 'assets/icon-add-product.svg'},
    {name: 'Add Product', icon_link: 'assets/icon-products.svg', active: false, dropdown: true, add: 'assets/icon-add-product.svg'},
    {name: 'Orders', icon_link: 'assets/icon-order.svg', active: false, dropdown: false, add: 'assets/icon-add-product.svg'},
    {name: 'Messages', icon_link: 'assets/icon-message.svg', active: false, dropdown: false, add: 'assets/icon-add-product.svg'},
    {name: 'Manage Products', icon_link: 'assets/icon-products.svg', active: false, dropdown: false, add: 'assets/icon-add-product.svg'},
    {name: 'Coupon', icon_link: 'assets/icon-coupon.svg', active: false, dropdown: false, add: 'assets/icon-add-product.svg'},
    {name: 'Advertise', icon_link: 'assets/icon-advertise.svg', active: false, dropdown: false, add: 'assets/icon-add-product.svg'},
    {name: 'Settings', icon_link: 'assets/icon-settings.svg', active: false, dropdown: false, add: 'assets/icon-add-product.svg'},
  ];
  isMobile = false;

  constructor() {
  }

  ngOnInit(): void {
    const checkMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (checkMobile) {
      /* your code here */
      this.isMobile = true;
    }

  }

}
