import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MariaWidgetsComponent } from './maria-widgets.component';

describe('MariaWidgetsComponent', () => {
  let component: MariaWidgetsComponent;
  let fixture: ComponentFixture<MariaWidgetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MariaWidgetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MariaWidgetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
