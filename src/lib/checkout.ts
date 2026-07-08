// Links de pagamento da AbacatePay — um por plano e intervalo, na ordem exibida na página
export const PAYMENT_LINKS: Record<string, { month: string; year: string }> = {
  START: {
    month: "https://app.abacatepay.com/pay/bill_xQY6HmDHXTmqTMxPCRBKJbuk",
    year: "https://app.abacatepay.com/pay/bill_zrEQbx4DarRGQLqAQxRkz2qj",
  },
  PRO: {
    month: "https://app.abacatepay.com/pay/bill_0kBLzrTWYeQuH5BqC6xCxS1g",
    year: "https://app.abacatepay.com/pay/bill_y1qguyXGhnTsanQjRhXkzuYZ",
  },
  MAX: {
    month: "https://app.abacatepay.com/pay/bill_HrxzjSsxtWa2gxZRPDcW0NA4",
    year: "https://app.abacatepay.com/pay/bill_JfNkj2mUTMhtwReddBy43ebn",
  },
};
