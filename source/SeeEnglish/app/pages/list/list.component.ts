import { Component, ViewChild, ElementRef } from '@angular/core';
import { Grocery } from '../../shared/grocery/grocery'; 
import { TextField } from "ui/text-field";

@Component({
  selector: 'list',
  moduleId: module.id,
  templateUrl: './list.html',
  styleUrls: ['./list-common.css', './list.css']
})
export class ListComponent {
  groceryList: Array<Grocery>;
  isLoading: boolean;
  listLoaded: boolean;

  @ViewChild('groceryTextField') groceryTextField: ElementRef;

  constructor() {
    this.groceryList = [];
    this.isLoading = true;
    this.listLoaded = false;

    setTimeout(
      ()=> {
        this.groceryList.push(new Grocery('banana', 100));
      },
      2000
    );
    setTimeout(
      ()=> {
        this.groceryList.push(new Grocery('orange', 200));
      },
      3000
    );
    setTimeout(
      ()=> {
        this.groceryList.push(new Grocery('melon', 500));
        this.isLoading = false;
        this.listLoaded = true;
      },
      4000
    );
  }

  addItem(itemText):void {

      // Dismiss the keyboard
    let textField = <TextField>this.groceryTextField.nativeElement;
    textField.dismissSoftInput();

    this.groceryList.push(new Grocery(textField.text, 200));
    textField.text = '';
  }
}