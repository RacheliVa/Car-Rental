import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupDitailsComponent } from './group-ditails.component';

describe('GroupDitailsComponent', () => {
  let component: GroupDitailsComponent;
  let fixture: ComponentFixture<GroupDitailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupDitailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupDitailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
