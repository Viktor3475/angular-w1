import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  public visibleInfo: Boolean = false;
  public visibleHobby: Boolean = false;
  public visibleLink: Boolean = false;
  public visibleChannelInfo: Boolean = false;
  public visibleServicePrice: Boolean = false;

  public contentInfo: String = 'Аз съм Борко и съм млад врабец.';
  public contentHobby: String = 'Тенис на маса и футбол.';
  public contentLink: String = 'WebDevSimplified';
  public contentChannelInfo: String = 'Моят канал е мястото, където мога да ви запозная с най-интересните и малко познати факти.';
  public contentServicePrice: String = 'Моите услуги ще струват около 20 стотинки.';

  toggleDisplayInfo(){
    this.visibleInfo = !this.visibleInfo;
    this.visibleHobby = false;
    this.visibleLink = false;
    this.visibleChannelInfo = false;
    this.visibleServicePrice = false;
  }

  toggleDisplayHobby(){
    this.visibleInfo = false;
    this.visibleHobby = !this.visibleHobby;
    this.visibleLink = false;
    this.visibleChannelInfo = false;
    this.visibleServicePrice = false;
  }

  toggleDisplayLink(){
    this.visibleInfo = false;
    this.visibleHobby = false;
    this.visibleLink = !this.visibleLink;
    this.visibleChannelInfo = false;
    this.visibleServicePrice = false;
  }

  toggleDisplayChannelInfo(){
    this.visibleInfo = false;
    this.visibleHobby = false;
    this.visibleLink = false;
    this.visibleChannelInfo = !this.visibleChannelInfo;
    this.visibleServicePrice = false;
  }

  toggleDisplayServicePrice(){
    this.visibleInfo = false;
    this.visibleHobby = false;
    this.visibleLink = false;
    this.visibleChannelInfo = false;
    this.visibleServicePrice = !this.visibleServicePrice;
  }

}
