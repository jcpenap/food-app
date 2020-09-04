import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipesService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is simple a test',
    'https://www.foxandbriar.com/wp-content/uploads/2019/04/Creamy-Shrimp-with-basil-and-roasted-Red-peppers-3-of-7.jpg'),
    new Recipe('Another test recipe', 'This is simple a test',
    'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2015/11/shakshuka-11.jpg')
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
