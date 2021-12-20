import { createAction, props } from '@ngrx/store';
import { Recipe } from '../recipe.model';
 
 
export const addRecipe = createAction(
  '[Recipe] Add Recipe',
  props<{
    recipe: Recipe
  }>()
);
 
 
export const updateRecipe = createAction(
  '[Recipe] Update Recipe',
  props<{
    index: number,
    recipe: Recipe
  }>()
);
 
 
export const deleteRecipe = createAction(
  '[Recipe] Delete Recipe',
  props<{
    index: number
  }>()
);
 
 
export const setRecipes = createAction(
  '[Recipe] Set Recipes',
  props<{
    recipes: Recipe[]
  }>()
);
 
 
export const fetchRecipes = createAction(
  '[Recipe] Fetch Recipes'
);
 
 
export const storeRecipes = createAction(
  '[Recipe] Store Recipes'
);




// import { Action } from '@ngrx/store';

// import { Recipe } from '../recipe.model';

// export const SET_RECIPES = '[Recipes] Set Recipes';
// export const FETCH_RECIPES = '[Recipes] Fetch Recipes';
// export const ADD_RECIPE = '[Recipe] Add Recipe';
// export const UPDATE_RECIPE = '[Recipe] Update Recipe';
// export const DELETE_RECIPE = '[Recipe] Delete Recipe';
// export const STORE_RECIPES = '[Recipe] Store Recipes';

// export class SetRecipes implements Action {
//   readonly type = SET_RECIPES;

//   constructor(public payload: Recipe[]) {}
// }

// export class FetchRecipes implements Action {
//   readonly type = FETCH_RECIPES;
// }

// export class AddRecipe implements Action {
//   readonly type = ADD_RECIPE;

//   constructor(public payload: Recipe) {}
// }

// export class UpdateRecipe implements Action {
//   readonly type = UPDATE_RECIPE;

//   constructor(public payload: { index: number; newRecipe: Recipe }) {}
// }

// export class DeleteRecipe implements Action {
//   readonly type = DELETE_RECIPE;

//   constructor(public payload: number) {}
// }

// export class StoreRecipes implements Action {
//   readonly type = STORE_RECIPES;
// }

// export type RecipesActions =
//   | SetRecipes
//   | FetchRecipes
//   | AddRecipe
//   | UpdateRecipe
//   | DeleteRecipe
//   | StoreRecipes;
