import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SupplierComponent } from './Supplier.SupplierComponent';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        SupplierComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(SupplierComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'sample-project'`, () => {
    const fixture = TestBed.createComponent(SupplierComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('sample-project');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(SupplierComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('sample-project app is running!');
  });
});
