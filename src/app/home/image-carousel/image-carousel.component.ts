import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.scss']
})
export class ImageCarouselComponent implements OnInit {

  public imageUrlArray = [
    '../../assets/img/how-it-works/airdrop.png',
    '../../assets/img/how-it-works/airdrop.png',
    '../../assets/img/how-it-works/airdrop.png'
  ];

  constructor() { }

  ngOnInit() {
  }

}
