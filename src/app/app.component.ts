import { Component } from '@angular/core';
import {AuctionService} from "./app-services/auction.service";
import {IAuctionItem} from "./app-types/IAuctionItem";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    public photoService: AuctionService,
  ) {
  }

  public fetchedData: IAuctionItem[] = [];
  public grayScaleMode: boolean = false;

  public async fetchData(): Promise<void> {
    this.fetchedData = await this.photoService.fetchRandomAuctions(4) as IAuctionItem[];
  }

}
