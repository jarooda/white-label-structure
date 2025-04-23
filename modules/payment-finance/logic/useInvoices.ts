import { ref } from 'vue';
import type { Invoice } from '../types';
import { getListInvoice } from '../api/invoice';

export function useInvoices() {
  const invoices = ref<Invoice[]>([]);
  const loading = ref(false);
  const error = ref<Error | null>(null);

  const fetchInvoices = async () => {
    loading.value = true;
    error.value = null;
    try {
      invoices.value = await getListInvoice();
    } catch (err) {
      error.value = err as Error;
    } finally {
      loading.value = false;
    }
  };

  fetchInvoices();

  return {
    invoices,
    loading,
    error,
    refresh: fetchInvoices,
  };
}
