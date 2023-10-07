import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapglBoxComponent } from './mapgl-box.component';

describe('MapglBoxComponent', () => {
  let component: MapglBoxComponent;
  let fixture: ComponentFixture<MapglBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MapglBoxComponent]
    });
    fixture = TestBed.createComponent(MapglBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
