import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

import { AuthComponent } from "./auth/auth.component";


const appRoutes: Routes = [
    {path: '', redirectTo: '/recipes', pathMatch: 'full'},
    {path:'recipes', loadChildren: () => import('./recipes/recipes.module').then(m => m.RecipesModule) },
    {path:'shopping-list', loadChildren: () => import('./shopping-list/shopping-list.module').then(m => m.ShoppingListModule) },
    {path:'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) }
];//LazyLoaded
//si se provee un servicio en modulo lazy se crea instancia diferente cada vez que se carga en este modulo.

@NgModule({
    imports: [RouterModule.forRoot(appRoutes,{preloadingStrategy: PreloadAllModules})],
    exports: [RouterModule]
})

export class AppRoutingModule {

} 