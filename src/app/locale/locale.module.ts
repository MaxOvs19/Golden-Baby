import { registerLocaleData } from '@angular/common';
import ru from '@angular/common/locales/ru';
import { ModuleWithProviders, NgModule } from '@angular/core';

@NgModule()
export class LocaleModule {
  public static forRoot(): ModuleWithProviders<LocaleModule> {
    registerLocaleData(ru);
    return {
      ngModule: LocaleModule,
    };
  }
}
