import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchNotfoundComponent } from './search-notfound.component';

describe('SearchNotfoundComponent', () => {
  let component: SearchNotfoundComponent;
  let fixture: ComponentFixture<SearchNotfoundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchNotfoundComponent]
    });
    fixture = TestBed.createComponent(SearchNotfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
