import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoPrestacionesComponent } from './listado-prestaciones.component';

describe('ListadoPrestacionesComponent', () => {
  let component: ListadoPrestacionesComponent;
  let fixture: ComponentFixture<ListadoPrestacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListadoPrestacionesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListadoPrestacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
