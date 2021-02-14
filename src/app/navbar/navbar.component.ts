import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Output() clicked = new EventEmitter<any>();

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

  // tslint:disable-next-line:typedef
  onClick() {
    this.clicked.emit('yes');
  }

}
