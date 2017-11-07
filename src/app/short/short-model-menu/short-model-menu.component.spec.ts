import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortModelMenuComponent } from './short-model-menu.component';

describe('ShortModelMenuComponent', () => {
  let component: ShortModelMenuComponent;
  let fixture: ComponentFixture<ShortModelMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortModelMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortModelMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
