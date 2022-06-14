import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuctionPhotoComponent } from './auction-photo.component';

describe('AuctionPhotoComponent', () => {
  let component: AuctionPhotoComponent;
  let fixture: ComponentFixture<AuctionPhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuctionPhotoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuctionPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
