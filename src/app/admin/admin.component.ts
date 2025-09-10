import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectDepartments } from '../store/selector';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-admin',
  imports: [AsyncPipe],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  
  private store = inject(Store);

  departments$ = this.store.select(selectDepartments);
}
