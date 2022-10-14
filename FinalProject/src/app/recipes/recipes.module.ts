import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";


import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeItemComponent } from "./recipe-list/recipe-item/recipe-item.component";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { RecipeStartComponent } from "./recipe-start/recipe-start.component";
import { RecipesComponent } from "./recipes.component";
import { RecipesRoutingModule } from "./recipes-routing.module";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations:[
        RecipesComponent,
        RecipeListComponent,
        RecipeDetailComponent,
        RecipeItemComponent, 
        RecipeStartComponent,
        RecipeEditComponent
    ],
    //Todo lo que usemos en las declaraciones debe ser 
    //importado para su correcto funcionamiento(components,Directive,Pipes)
    //Excepto los servicios que se configuran en app.module
    imports:[RouterModule,         // arregla el error de enrutamiento
            //  CommonModule,      // arregla problemas de ngFor,ngIf y otros
             ReactiveFormsModule,  // arregla problemas con Forms
             RecipesRoutingModule, // Importa el nuevo Recipes Routing Module
             SharedModule]
    //Nota: No hay razon para exportar los componentes de Recipes porque ahora todos
    //se usan en otro componentes en imports o en cargandolos en RecipesRoutingModule
})
export class RecipesModule{

}