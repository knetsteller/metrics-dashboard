import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxmasterComponent } from './boxmaster.component';

describe('BoxmasterComponent', () => {
  let component: BoxmasterComponent;
  let fixture: ComponentFixture<BoxmasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoxmasterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BoxmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
