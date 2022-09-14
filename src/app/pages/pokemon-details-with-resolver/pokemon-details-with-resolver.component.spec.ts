import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonDetailsWithResolverComponent } from './pokemon-details-with-resolver.component';

describe('PokemonDetailsWithResolverComponent', () => {
  let component: PokemonDetailsWithResolverComponent;
  let fixture: ComponentFixture<PokemonDetailsWithResolverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonDetailsWithResolverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonDetailsWithResolverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
