import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubirFotoInteractionComponent } from './subir-foto-interaction.component';

describe('SubirFotoInteractionComponent', () => {
  let component: SubirFotoInteractionComponent;
  let fixture: ComponentFixture<SubirFotoInteractionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubirFotoInteractionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubirFotoInteractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
