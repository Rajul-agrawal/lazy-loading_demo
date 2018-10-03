import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OsFooterComponent } from './os-footer.component';

describe('OsFooterComponent', () => {
  let component: OsFooterComponent;
  let fixture: ComponentFixture<OsFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OsFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OsFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
