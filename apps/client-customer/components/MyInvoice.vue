<script setup>
import { useInvoice } from '@modules/payment-finance/logic/useInvoice'

const { invoice, loading, error, refresh } = await useInvoice('invoice-123');
</script>

<template>
  <div v-if="loading">Loading...</div>
  <div v-else class="card">
    <h1 class="text-2xl font-bold">My Invoice</h1>
    <div class="flex flex-col gap-2">
      <h2 class="text-xl font-semibold">Invoice Details</h2>
      <p>Invoice ID: {{ invoice.id }}</p>
      <p>Amount: {{ invoice.amount }}</p>
      <p>Status: {{ invoice.status }}</p>
    </div>
  </div>
</template>

<style scoped>
.card {
  background-color: #cccccc;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 16px;
  width: 500px;
}
</style>