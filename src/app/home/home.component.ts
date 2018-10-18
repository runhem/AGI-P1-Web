import { trigger, style, state, transition, animate } from '@angular/animations';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('zoom', [
      state('init', style({
        transform: 'scale(1)',
      })),
      state('transition', style({
        transform: 'scale(2)',
        opacity: '0'
      })),
      transition('init <=> transition', animate('2s linear'))
    ]),
    trigger('fade', [
      state('init', style({
        opacity: '0.8',
      })),
      state('transition', style({
        opacity: '0',
      })),
      transition('init <=> transition', animate('2s linear'))
    ]),
    trigger('fadeIn', [
      state('init', style({
        opacity: '0',
      })),
      state('transition', style({
        opacity: '1',
      })),
      transition('init <=> transition', animate('2s linear'))
    ]),
  ]
})
export class HomeComponent implements OnInit, OnDestroy {
  private _onDestroy = new Subject();
  public animationState = 'init';
  public transitionDone = false;
  public scroll: number;

  constructor() { }
  ngOnInit() {
    // window.scrollTo(0, 0);
    fromEvent(window, 'scroll')
    // .pipe(takeUntil(this._onDestroy))
    .subscribe(() => {
      this.scroll = (document.documentElement.scrollTop || document.body.scrollTop);
      console.log(this.scroll);
      if (this.animationState !== 'init' && this.scroll === 0) {
        this.animationState = 'init';
      } else if (this.animationState === 'init' && this.scroll > 0 && this.scroll < 5) {
        this.animationState = 'transition';
      }
      // else if (this.animationState === 'transition' && this.scroll > 5 && this.scroll < 10) {
      //   this.animationState = 'transition2';
      // } else if (this.animationState === 'transition2' && this.scroll > 10 && this.scroll < 15) {
      //   this.animationState = 'transition3';
      // }
    });
  }

  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }
}
