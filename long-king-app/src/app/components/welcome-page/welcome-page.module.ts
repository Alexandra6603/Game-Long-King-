import { CommonModule } from "@angular/common";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { RouterModule } from "@angular/router";
import { WelcomePageComponent } from "./welcome-page.component";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ButtonModule} from 'primeng/button';

export const importModules = [
	CommonModule,
	FormsModule,
	ReactiveFormsModule,
    ButtonModule,
];
@NgModule({
	declarations: [WelcomePageComponent],
	providers: [],
	exports: [WelcomePageComponent],
  imports: [
    ...importModules,
    RouterModule.forChild([
      {
        path: '',
        component: WelcomePageComponent,
      },
    ]),
  ],
	schemas: [NO_ERRORS_SCHEMA],
})
export class WecomeModule {}