// Used in the /client-customer/components/MyInvoice.vue

import { ref } from 'vue';
import type { Invoice } from '../types';
import { getInvoice } from '../api/invoice';

export function useInvoice(id: string) {
  const invoice = ref<Invoice | null>(null);
  const loading = ref(false);
  const error = ref<Error | null>(null);

  const fetchInvoice = async () => {
    loading.value = true;
    error.value = null;

    try {
      invoice.value = await getInvoice(id);
    } catch (err) {
      error.value = err as Error;
    } finally {
      loading.value = false;
    }
  };

  fetchInvoice();

  return {
    invoice,
    loading,
    error,
    refresh: fetchInvoice,
  };
}
