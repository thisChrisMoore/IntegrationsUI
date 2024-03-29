import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '@app/shared/material/material.module';
import { LoaderComponent } from './loader/loader.component';
import { ImportErrorLogComponent } from './import-error-log/import-error-log.component';
import { LogDateSelectorComponent } from './import-error-log/log-date-selector/log-date-selector.component';
import { SuspendedItemsComponent } from './suspended-items/suspended-items.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { SuspendedItemsMatchesComponent } from '@app/shared/suspended-items/suspended-items-matches.component';
import { HasRolePipe } from './pipes/has-role.pipe';
import { ColumnHeaderPipe } from './pipes/column-header.pipe';
import { SuspendedItemsMobileComponent } from '@app/shared/suspended-items/suspended-items-mobile.component';

@NgModule({
  imports: [FlexLayoutModule, MaterialModule, CommonModule, MatTableModule, MatPaginatorModule, MatSortModule],
  declarations: [
    LoaderComponent,
    ImportErrorLogComponent,
    LogDateSelectorComponent,
    SuspendedItemsComponent,
    SuspendedItemsMatchesComponent,
    SuspendedItemsMobileComponent,
    HasRolePipe,
    ColumnHeaderPipe
  ],
  exports: [
    LoaderComponent,
    ImportErrorLogComponent,
    LogDateSelectorComponent,
    SuspendedItemsComponent,
    HasRolePipe,
    ColumnHeaderPipe,
    SuspendedItemsMobileComponent
  ]
})
export class SharedModule {}
