
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService{
    ingredientsChanged = new Subject<Ingredient[]>;//emite el ingrediente[]
    startedEditing = new Subject<number>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
      ];
      getIngredients(){
        return this.ingredients.slice();
      }
      getIngredient(index:number){
        return this.ingredients[index];
      }
      addIngredient(Ingredient:Ingredient){
        this.ingredients.push(Ingredient );
        this.ingredientsChanged.next(this.ingredients.slice());
      }
      addIngredients(ingredients:Ingredient[]){
        // for (let ingredient of this.ingredients){
        //     this.addIngredient(ingredient); 
        // }
         this.ingredients.push(...ingredients);
         this.ingredientsChanged.next(this.ingredients.slice());
      }
    updateIngredient(index:number, newIngredient:Ingredient){
      this.ingredients[index] = newIngredient;
      this.ingredientsChanged.next(this.ingredients.slice());
    }
    deleteIngredient(index:number){
      this.ingredients.splice(index,1);
      this.ingredientsChanged.next(this.ingredients.slice());
    }
}