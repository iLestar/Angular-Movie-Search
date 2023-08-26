import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSkeletonComponent } from './search-skeleton.component';

describe('SearchSkeletonComponent', () => {
  let component: SearchSkeletonComponent;
  let fixture: ComponentFixture<SearchSkeletonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchSkeletonComponent]
    });
    fixture = TestBed.createComponent(SearchSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
