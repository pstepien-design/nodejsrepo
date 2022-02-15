const smartPhones = [
  { brand: 'Samsung', price: 4500 },
  { brand: 'iPhone', price: 7200 },
  { brand: 'Sony Experia', price: 3800 },
];

const discountedPhones = smartPhones.map((smartPhone) => {
  smartPhone.price -= 500;
  return smartPhone;
});

const poorBoy = smartPhones.filter((smartPhone) => smartPhone.price < 4000);
console.log(poorBoy);
