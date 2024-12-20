import {
  Component,
  EventEmitter,
  Input,
  input,
  model,
  output,
  Output,
} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css',
})
export class SearchBarComponent {
  search = model<string>('Initial');

  searchButtonClicked = output({ alias: 'submit' });

  searchClick() {
    this.searchButtonClicked.emit();
  }
  updateSearch(value: string) {
    this.search.set(value);
  }
}
