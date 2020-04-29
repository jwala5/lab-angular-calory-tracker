import { Component, OnInit } from '@angular/core';
import List from '../food';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  foods: Object[];
  myList: {
    name: string;
    calories: number;
    quantity: number;
    image: string;
  }[] = [];
  pattern: string;
  isEditing: boolean = false;
  newFoodName: string = 'Example Name';
  newFoodCalories: number = 250;
  newFoodImage: string =
    'https://pngimg.com/uploads/kfc_food/kfc_food_PNG57.png';
  quantity: number;
  totalCalories: number = 0;

  constructor() {}

  ngOnInit() {
    this.foods = List;
  }

  enableUserToAddFood() {
    this.isEditing = !this.isEditing;
  }

  newFood() {
    const newFood = {
      name: this.newFoodName,
      calories: this.newFoodCalories,
      image: this.newFoodImage,
      quantity: 0,
    };

    this.foods.unshift(newFood);

    this.isEditing = true;
    this.newFoodName = '';
    this.newFoodCalories = null;
    this.newFoodImage = '';
  }

  addList(food, quantityInput) {
    const existingFood = this.myList.find((item) => item.name === food.name);
    const quantity = Number(quantityInput.value);

    if (existingFood) {
      existingFood.quantity += quantity;
    } else {
      food.quantity = quantity;
      this.myList.push(food);
    }
    this.totalCalories += food.calories * quantity;
    this.quantity = 1;
  }
}
