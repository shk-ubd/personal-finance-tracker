import { Component, Input } from '@angular/core';
import { TransactionTableDTO } from '../../../models/transactionTableDTO';

@Component({
  selector: 'app-transaction-table',
  imports: [],
  templateUrl: './transaction-table.component.html',
  styleUrl: './transaction-table.component.css'
})
export class TransactionTableComponent {
@Input() heading: string = 'Transaction Table';
@Input() data: TransactionTableDTO[] = [];
}
