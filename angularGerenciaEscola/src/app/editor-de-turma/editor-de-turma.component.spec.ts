import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorDeTurmaComponent } from './editor-de-turma.component';

describe('EditorDeTurmaComponent', () => {
  let component: EditorDeTurmaComponent;
  let fixture: ComponentFixture<EditorDeTurmaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorDeTurmaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorDeTurmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
