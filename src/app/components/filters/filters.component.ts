import {Component, EventEmitter, Output} from '@angular/core';
import {Subscription} from "rxjs";


@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent {
  @Output() showCategory = new EventEmitter<string>();
  categories= ['shoes', 'sports'];
  categoriesSubscription: Subscription | undefined;

  constructor(/*private storeService: StoreService*/) {}

  ngOnInit(): void {
    /*
    this.categoriesSubscription = this.storeService
      .getAllCategories()
      .subscribe((response: Array<string>) => {
        this.categories = response;
      });

     */
  }

  onShowCategory(category: string) {
    this.showCategory.emit(category);
  }
}
