<script setup>
import { useInvoices } from "@modules/payment-finance/logic/useInvoices"

const { invoices, loading, error, refresh } = await useInvoices()
</script>

<template>
  <div v-if="loading">Loading...</div>
  <div v-else class="card">
    <h1 class="text-2xl font-bold mb-4">Invoices</h1>

    <table class="invoice-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Amount</th>
          <th>Status</th>
          <th>Customer</th>
          <th>Due Date</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="invoice in invoices" :key="invoice.id">
          <td>{{ invoice.id }}</td>
          <td>${{ invoice.amount }}</td>
          <td>{{ invoice.status }}</td>
          <td>{{ invoice.customerId }}</td>
          <td>{{ new Date(invoice.dueDate).toLocaleDateString() }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.card {
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  padding: 24px;
  max-width: 100%;
  overflow-x: auto;
}

.invoice-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
}

.invoice-table th,
.invoice-table td {
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

.invoice-table th {
  background-color: #efefef;
  font-weight: 600;
}
</style>
