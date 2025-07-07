import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-fixed-header-menu',
  imports: [],
  templateUrl: './fixed-header-menu.component.html',
  styleUrl: './fixed-header-menu.component.css'
})
export class FixedHeaderMenuComponent implements AfterViewInit {
  @ViewChild('header', { static: true }) header!: ElementRef;

  ngAfterViewInit() {
    const headerHeight = this.header.nativeElement.offsetHeight;
    document.documentElement.style.setProperty('--header-height', `${headerHeight}px`);
  }
}
