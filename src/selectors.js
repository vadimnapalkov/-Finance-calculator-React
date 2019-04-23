export const Credit = payments => {
  let credit = 0;
  payments.forEach(payment => {
    credit += payment;
  });
  return credit;
};

export const Debit = incoming => {
  let debit = 0;
  incoming.forEach(income => {
    debit += income;
  });
  return debit;
};

export const Total = (payments, incoming) => {
  let debit = Debit(incoming);
  let credit = Credit(payments);
  return debit - credit;
};
