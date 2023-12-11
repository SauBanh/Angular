// // import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
// import { Component, ElementRef, ViewChild } from '@angular/core';
// import { Ingredient } from '../../shared/ingredient.model';
// import { ShoppingListService } from '../shopping-list.service';
// import { FormsModule } from '@angular/forms';

// @Component({
//   selector: 'app-shopping-edit',
//   templateUrl: './shopping-edit.component.html',
//   styleUrl: './shopping-edit.component.css',
// })
// export class ShoppingEditComponent {
//   @ViewChild('nameInput', { static: false }) nameInputRef: ElementRef;
//   @ViewChild('amountInput', { static: false }) amountInputRef: ElementRef;
//   // @Output() ingredientAdded: EventEmitter<Ingredient> =
//   //   new EventEmitter<Ingredient>();

//   constructor(private shoppingListService: ShoppingListService) {}

//   onAddItem(form: FormsModule) {
//     const ingName = this.nameInputRef.nativeElement.value;
//     const ingAmount = this.amountInputRef.nativeElement.value;
//     const newIngredient = new Ingredient(ingName, ingAmount);
//     // this.ingredientAdded.emit(newIngredient);
//     this.shoppingListService.addIngredient(newIngredient);
//   }
// }

// import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css',
})
export class ShoppingEditComponent {
  // @Output() ingredientAdded: EventEmitter<Ingredient> =
  //   new EventEmitter<Ingredient>();
  @ViewChild('f') slForm: NgForm;
  subscription: Subscription;
  editMode: boolean = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  constructor(private slService: ShoppingListService) {}

  ngOnInit() {
    this.subscription = this.slService.startedEditing.subscribe(
      (index: number) => {
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.slService.getIngredient(index);
        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount,
        });
      }
    );
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      this.slService.updateIngredient(this.editedItemIndex, newIngredient);
    } else {
      // this.ingredientAdded.emit(newIngredient);
      this.slService.addIngredient(newIngredient);
    }
    this.editMode = false;
    form.reset();
  }

  onClear() {
    this.slForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.slService.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
