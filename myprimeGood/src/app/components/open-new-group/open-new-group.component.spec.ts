import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenNewGroupComponent } from './open-new-group.component';

describe('OpenNewGroupComponent', () => {
  let component: OpenNewGroupComponent;
  let fixture: ComponentFixture<OpenNewGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenNewGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenNewGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
