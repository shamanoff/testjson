import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonworkComponent } from './jsonwork.component';

describe('JsonworkComponent', () => {
  let component: JsonworkComponent;
  let fixture: ComponentFixture<JsonworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsonworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
