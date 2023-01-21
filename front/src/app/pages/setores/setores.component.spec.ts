import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetoresComponent } from './setores.component';

describe('SetoresComponent', () => {
  let component: SetoresComponent;
  let fixture: ComponentFixture<SetoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
