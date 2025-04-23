import { Invoice } from '../types';

function getInvoice(id: string): Promise<Invoice> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const invoice: Invoice = {
        id,
        amount: 100,
        dueDate: new Date(),
        status: 'unpaid',
        customerId: 'customer-123',
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      resolve(invoice);
    }, 400);
  });
}

function getListInvoice (): Promise<Invoice[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const invoices: Invoice[] = [
        {
          id: '1',
          amount: 100,
          dueDate: new Date(),
          status: 'unpaid',
          customerId: 'customer-123',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: '2',
          amount: 200,
          dueDate: new Date(),
          status: 'paid',
          customerId: 'customer-456',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ];
      resolve(invoices);
    }, 1000);
  });
}

export { getInvoice, getListInvoice };