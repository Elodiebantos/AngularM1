import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListedesdevoirsComponent } from './listedesdevoirs.component';

describe('ListedesdevoirsComponent', () => {
  let component: ListedesdevoirsComponent;
  let fixture: ComponentFixture<ListedesdevoirsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListedesdevoirsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListedesdevoirsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
