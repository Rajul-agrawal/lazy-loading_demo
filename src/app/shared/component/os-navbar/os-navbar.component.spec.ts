import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OsNavbarComponent } from './os-navbar.component';

describe('OsNavbarComponent', () => {
  let component: OsNavbarComponent;
  let fixture: ComponentFixture<OsNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OsNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OsNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
