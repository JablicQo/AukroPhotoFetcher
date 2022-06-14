import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { IAuctionItem } from "../app-types/IAuctionItem";
import { Range } from "../app-types/Range";

@Injectable({
  providedIn: 'root'
})
export class AuctionService {


  constructor(
    private http: HttpClient,
  ) {
  }

  /**
   * Returns an Array of IAuctionItems, fetched from given source randomly
   */
  public async fetchRandomAuctions(quantity: Range<1, 15>): Promise<IAuctionItem[] | void> {
    const url: string = 'https://aukro.cz/backend/api/homepage';

    // here is any, cuz I didn't want to write interface for the whole api data (too much time)
    return this.http.get(url).toPromise().then((data: any) => {
      const result: IAuctionItem[] = [];
      while (result.length < quantity) {
        const item: IAuctionItem = data.introPart[1][1].content.items[this.numberBetween(0, 14)];
        if (!result.includes(item)) {
          result.push(item);
        }
      }

      return result;
    }).catch((e) => {
      console.error('Error when getting data', e);
    });
  }

  /**
   * Return number between given values (included)
   * @param min
   * @param max
   * @private
   */
  private numberBetween(min: number, max: number): number {
    return Math.floor(
      Math.random() * (max - min + 1) + min
    )
  }
}
