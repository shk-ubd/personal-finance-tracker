import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessageService, SortEvent } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { Table, TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext'; // For p-inputIcon
import { ChipModule } from 'primeng/chip'; // For p-chip
import { InputGroupModule } from 'primeng/inputgroup';
import { BadgeModule } from 'primeng/badge';
import { TagModule } from 'primeng/tag';
import { CardModule } from 'primeng/card';
import { PaginatorModule } from 'primeng/paginator';
import {
  EStatus,
  getStatusOptions,
} from '../../../constants/enum/tableStatus.enum';

@Component({
  selector: 'app-custom-table',
  standalone: true,
  imports: [
    ButtonModule,
    TableModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    ChipModule,
    InputGroupModule,
    BadgeModule,
    TagModule,
    CardModule,
    PaginatorModule,
  ],
  templateUrl: './custom-table.component.html',
  styleUrl: './custom-table.component.css',
  // encapsulation: ViewEncapsulation.None,
})
export class CustomTableComponent {
  @ViewChild('dt') dt: Table | null = null;
  constructor(private messageService: MessageService) {}
  rows = 25;
  // totalRecords = 333; // Total number of records
  rowsPerPageOptions = [25, 50, 100];
  first = 0;
  onRowsChange(event: any) {
    this.rows = event.value;
    this.first = 0; // Reset to first page
  }
  value: number = EStatus.AllStatus; // This will hold the selected value
  @Input() options = getStatusOptions();
  @Output() updateStatus = new EventEmitter<any>();

  @Input() headerColor: string = '';
  @Input() headerTextColor: string = '';
  @Input() headerSortIconColor: string = '';
  @Input() isLoading: boolean = false;
  @Input() totalRecords: number = 0;
  @Input() Head: any[] = [];
  @Input() Body: any[] = [];
  @Input() ActionFields: any[] = [];
  @Output() outbound: any = new EventEmitter<string>();
  dtOptions: any;
  @Output() update = new EventEmitter<any>();
  @Output() sortChanged: EventEmitter<any> = new EventEmitter(); // Add output for sorting event
  @Output() paginationChange: EventEmitter<any> = new EventEmitter<any>();
  @Output() search: EventEmitter<any> = new EventEmitter<string>();
  isSorted: boolean | null = null;
  searchKeyword: string = '';
  @Input() searchEnable: boolean = true;
  @Input() paginatorEnabled: boolean = true;
  @Input() showAddButton: boolean = false;
  @Input() isSearchBarDisabled: boolean = false;

  @Input() addButtonLabel: string = 'Add Item';
  @Output() onAdd: EventEmitter<void> = new EventEmitter<void>(); // Declare as EventEmitter
  @Output() searchKeywordBind = new EventEmitter<any>

  ngOnInit(): void {
    this.dtOptions = {
      //pagingType: 'simple_numbers',
      lengthMenu: [5, 10, 25, 50, 100],
    };
  }

  emitAddEvent() {
    this.onAdd.emit(); // Emit the add event
  }

  searchKeywordEmit() {
    this.search.emit(this.searchKeyword);
  }

  //helper function
  getDataType(data: any) {
    return typeof data;
  }

  isList(data: any): boolean {
    return Array.isArray(data);
  }

  isDate(data: any): boolean {
    return data instanceof Date;
  }
  //Action
  emitObject = (obj: any, tr: any) => {
    var rowObj = {
      item: tr,
      event: obj,
    };
    this.outbound.emit(rowObj);
  };

  customSort(event: SortEvent) {
    if (this.isSorted == null || this.isSorted === undefined) {
      this.isSorted = true;
      this.onSort(event);
    } else if (this.isSorted == true) {
      this.isSorted = false;
      this.onSort(event);
    } else if (this.isSorted == false) {
      this.isSorted = null;
    }
  }
  sortField: string = '';
  sortOrder: number = 1;
  onSort(event: SortEvent) {
    // Emit the sorting information to the parent component

    this.sortField = event.field!;
    this.sortOrder = event.order!;

    this.sortChanged.emit({
      sortField: event.field,
      sortOrder: event.order,
    });
  }
  onPageChange(event: any) {
    const page = event.first / event.rows; // Calculate the current page number (0-based index)
    const rows = event.rows; // Rows per page
    this.paginationChange.emit({ page, rows });
  }
  customizedFunc(event: any): void {
    console.log(event);

    this.update.emit(event);
  }
  // addingIndicators(value: string): string {
  //   if (this.getDataType(value) == 'string') {
  //     if (value.includes('[danger]'))
  //       value = value.replace(
  //         '[danger]',
  //         ' <span id="pn_id_1196_badge" class="p-badge p-component p-badge-danger p-badge-dot"></span>'
  //       );
  //     if (value.includes('[success]'))
  //       value = value.replace(
  //         '[success]',
  //         ' <span id="pn_id_1196_badge" class="p-badge p-component p-badge-success p-badge-dot"></span>'
  //       );
  //   }
  //   return value;
  // }

  searchBox(): void {
    const val = document.getElementById('searchfield');
    // this.search.emit(val);
  }
  checkVisibilityCriteria(actionField: any, tr: any): boolean {
    if (actionField.visibilityCriteria) {
      return actionField.visibilityCriteria.some((i: any) =>
        !this.isList(i.value)
          ? tr[i.property] === i.value
          : i.value.includes(tr[i.property])
      );
    } else return true;
  }

  getSortState(field: string): 'asc' | 'desc' | null {
    if (this.dt && this.dt.sortField === field) {
      return this.dt.sortOrder === 1 ? 'asc' : 'desc';
    }
    return null;
  }

  emitUpdateStatusSelection(event: any) {
    console.log(event);
    this.updateStatus.emit(event);
  }

  bindSearch(){
this.searchKeywordBind.emit(this.searchKeyword)
  }
}
