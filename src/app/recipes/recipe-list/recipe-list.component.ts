import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is simple a test', 'https://www.foxandbriar.com/wp-content/uploads/2019/04/Creamy-Shrimp-with-basil-and-roasted-Red-peppers-3-of-7.jpg'),
    new Recipe('A test recipe', 'This is simple a test', 'https://pinchofyum.com/wp-content/uploads/Buffalo-Cauliflower-Tacos-with-Avocado-Crema-Recipe.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
