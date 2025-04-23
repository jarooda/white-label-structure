export interface Invoice {
  id: string;
  amount: number;
  dueDate: Date;
  status: 'paid' | 'unpaid' | 'overdue';
  customerId?: string;
  createdAt: Date;
  updatedAt: Date;
}