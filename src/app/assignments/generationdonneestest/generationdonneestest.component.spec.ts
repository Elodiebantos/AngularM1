import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerationdonneestestComponent } from './generationdonneestest.component';

describe('GenerationdonneestestComponent', () => {
  let component: GenerationdonneestestComponent;
  let fixture: ComponentFixture<GenerationdonneestestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerationdonneestestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerationdonneestestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
