import {Component, OnInit} from '@angular/core';
import {sha1} from '@angular/compiler/src/i18n/digest';
import {ChartDataSets, ChartOptions} from 'chart.js';
import {Color, Label} from 'ng2-charts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isMobile = false;
  stat = [
    {name: 'Pending Orders', count: 0, icon_url: 'assets/pending-orders.svg', color: ''},
    {name: 'Today\'s Visitors', count: 0, icon_url: 'assets/visittors.svg', color: ''},
    {name: 'Items in Stock', count: 0, icon_url: 'assets/stock.svg', color: ''},
    {name: 'Total Sales', count: 0, icon_url: 'assets/total-sales.svg', color: ''},
  ];

  recentBuyers = [
    {image: 'assets/store-profile.png', name: 'Saint Morris', description: '2019 New Design light Sneakers Mesh Latest Men sport Shoes'},
    {image: 'assets/store-profile.png', name: 'Saint Morris', description: 'Fashion Women PU Leather Messenger Handbag Shoulder B…'},
    {image: 'assets/store-profile.png', name: 'Saint Morris', description: 'new ladies mini bucket bag female shoulder slung Bad'},
    {image: 'assets/store-profile.png', name: 'Saint Morris', description: 'Samsung Galaxy Note 10+ Plus 5G (512GB/12GB, Tel) - Aura …'},
  ];

  bestSelling = [
    {
      name: 'Nike Air Max 2090 - Limited Edition 2021',
      sold: '200,000',
      total: '2,100,000',
      image: 'assets/max.png',
      image_2: 'assets/max@2x.png'
    },
    {
      name: 'Nike Air Max 2090 - Limited Edition 2021',
      sold: '200,000',
      total: '2,100,000',
      image: 'assets/product1.png',
      image_2: 'assets/product1@2x.png'
    },
    {
      name: 'Nike Air Max 2090 - Limited Edition 2021',
      sold: '200,000',
      total: '2,100,000',
      image: 'assets/product2.png',
      image_2: 'assets/product2@2x.png'
    },
    {
      name: 'Nike Air Max 2090 - Limited Edition 2021',
      sold: '200,000',
      total: '2,100,000',
      image: 'assets/product3.png',
      image_2: 'assets/product3@2x.png'
    },
  ];
  showSidebar = false;

  public lineChartData: ChartDataSets[] = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
  ];
  public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    annotation: undefined,
    responsive: true
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType = <any>'line';
  public lineChartPlugins = [];

  constructor() {
  }

  ngOnInit(): void {
    const checkMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (checkMobile) {
      /* your code here */
      this.isMobile = true;
    }
  }

  // tslint:disable-next-line:typedef
  onShowNav() {
    this.showSidebar = !this.showSidebar;
  }

}
