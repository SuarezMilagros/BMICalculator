import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { CommonModule } from "@angular/common";
import { InicioComponent } from "./components/inicio/inicio.component";
import { ResultadoComponent } from "./components/resultado/resultado.component";

@NgModule({
    declarations: [
        AppComponent,
        InicioComponent,
        ResultadoComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        InicioComponent,
        ResultadoComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
