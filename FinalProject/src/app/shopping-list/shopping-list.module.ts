
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { LoggingService } from "../logging.service";
import { SharedModule } from "../shared/shared.module";
import { ShoppingEditComponent } from "./shopping-edit/shopping-edit.component";
import { ShoppingListComponent } from "./shopping-list.component";

@NgModule({
    declarations:[
        ShoppingListComponent,
        ShoppingEditComponent,
    ],
    imports:[
        // CommonModule,          // arregla problemas de ngFor,ngIf y otros(se comparte ahora desde Shared)
        FormsModule,           // arregla problemas con uso de Formularios
        RouterModule.forChild([
            {path: '', component: ShoppingListComponent},
        ]),
        SharedModule
    ],
    // providers:[LoggingService]
})
export class ShoppingListModule{

}