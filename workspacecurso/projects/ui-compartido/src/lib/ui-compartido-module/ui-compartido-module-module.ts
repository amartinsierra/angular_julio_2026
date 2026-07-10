import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AltaController } from '../alta-controller/alta-controller';

@NgModule({
  exports:[AltaController],
  imports: [CommonModule,AltaController],
})
export class UiCompartidoModuleModule {}
