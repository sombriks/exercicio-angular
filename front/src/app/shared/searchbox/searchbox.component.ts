import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.scss']
})
export class SearchboxComponent {
  text = ""
  @Output() onSearch = new EventEmitter<string>();

  doSearch(){
    // TODO implementar debounce
    this.onSearch.emit(this.text);
  }
}
