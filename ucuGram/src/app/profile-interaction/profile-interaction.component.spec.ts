import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileInteractionComponent } from './profile-interaction.component';

describe('ProfileInteractionComponent', () => {
  let component: ProfileInteractionComponent;
  let fixture: ComponentFixture<ProfileInteractionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileInteractionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileInteractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
