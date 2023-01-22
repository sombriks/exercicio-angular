import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PessoasComponent} from './pessoas.component';
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {SearchboxComponent} from "../../shared/searchbox/searchbox.component";
import {TableModule} from "primeng/table";
import {InputTextModule} from "primeng/inputtext";
import {FormsModule} from "@angular/forms";

describe('PessoasComponent', () => {
  let component: PessoasComponent;
  let fixture: ComponentFixture<PessoasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        TableModule,
        InputTextModule,
        FormsModule
      ],
      declarations: [PessoasComponent, SearchboxComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PessoasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
