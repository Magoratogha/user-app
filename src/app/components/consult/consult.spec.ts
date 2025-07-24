import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Consult } from './consult';

describe('Consult', () => {
  let component: Consult;
  let fixture: ComponentFixture<Consult>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Consult]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Consult);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
