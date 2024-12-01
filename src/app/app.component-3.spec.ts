import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MobileService } from './services/mobile.service';

let fixture: ComponentFixture<AppComponent>;
let appComponent: AppComponent;

describe('App Component 3', () => {
  //   beforeAll(() => {});

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [MobileService],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    appComponent = fixture.componentInstance;
  });

  //   afterEach(() => {});

  //   afterAll(() => {});

  it('should have an h1', async () => {
    const h1 = fixture.nativeElement.querySelector('h1');

    // expect(h1).toBe(true);
    // expect(!!h1).toBeTrue();
    expect(h1).toBeTruthy();
  });

  it('should have h1 with font-size: 32px', () => {
    const h1: HTMLHeadingElement = fixture.nativeElement.querySelector('h1');

    fixture.detectChanges();

    const fontSize = getComputedStyle(h1)?.fontSize;

    expect(fontSize).toBe('32px');
  });

  it('should have a span', async () => {
    const span = fixture.nativeElement.querySelector(
      'span[data-test-id=is-mobile]'
    );

    expect(span).toBeTruthy();
  });

  it('should set title when called', () => {
    // Arrange
    expect(appComponent?.title).toBe('unit-testing');

    // Act
    appComponent.setTitle('new-title');

    //Assert
    expect(appComponent?.title).toBe('new-title');
  });
});

describe('Integration App Component', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [MobileService],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    appComponent = fixture.componentInstance;
  });

  it('should have span text content to true, when calling mobileService.setIsMobile', () => {
    // Arrange
    const span = fixture.nativeElement.querySelector(
      'span[data-test-id=is-mobile]'
    );
    fixture.detectChanges();
    expect(span?.textContent).toBe('false');

    // Act
    (appComponent as any).mobileService?.setIsMobile(true);
    fixture.detectChanges();
    
    // Assert
    expect(span?.textContent).toBe('true');
  });
});
