export interface IAuctionItem {
  aukroPlus: boolean,
  biddingPrice: number,
  buyNowPrice: number,
  endingTime: string,
  freeShipping: boolean,
  id: number,
  images: IAuctionItemImages,
  itemTypeEnumCode: string,
  name: string,
  paymentOnline: boolean,
  paymentViaAukro: boolean,
  priceWithShipping: number,
  seoUrl: string,
  statusAdultContent: boolean,
}

export interface IAuctionItemImages {
  lists: {
    large: [IAuctionItemImageList],
    medium: [IAuctionItemImageList],
    original: [IAuctionItemImageList],
    small: [IAuctionItemImageList],
  }
}

export interface IAuctionItemImageList {
  aukroImage: boolean,
  id: number,
  position: number,
  thumbnailReady: boolean,
  titleImage: boolean,
  url: string,
}
