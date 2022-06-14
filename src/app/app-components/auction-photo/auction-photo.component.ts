import {Component, Input} from '@angular/core';
import {IAuctionItem} from "../../app-types/IAuctionItem";

@Component({
  selector: 'app-auction-photo',
  templateUrl: './auction-photo.component.html',
  styleUrls: ['./auction-photo.component.scss']
})
export class AuctionPhotoComponent {

  private _auction: IAuctionItem;

  constructor() {
  }

  @Input()
  public grayScaleMode: boolean;

  @Input()
  set auction(value: IAuctionItem) {
    console.log(value);
    this._auction = value;
  }

  get auction(): IAuctionItem {
    return this._auction;
  }

  get auctionImageURL(): string {
    return this._auction.images.lists.medium[0].url;
  }

  get auctionName(): string {
    return this._auction.name;
  }

  get auctionType(): string {
    return this._auction.itemTypeEnumCode;
  }

}
