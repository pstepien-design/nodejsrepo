import bcrypt from 'bcrypt';
const saltRounds = 12;
const plaintextPassowrd = 'hunter12';
const hashedPassword =
  '$2b$12$kegj1eIF8yUOrLSKaiaW/emFt5BauLJMGh0TOPChj9hgMgVdLwqNi';

console.log(bcrypt);
async function loginRouter() {
  const isSame = await bcrypt.compare(plaintextPassowrd, hashedPassword);
  console.log(isSame);
}

async function singnupRouter() {
  const hashedPassword = await bcrypt.hash(plaintextPassowrd, saltRounds);
  console.log(hashedPassword);
}
singnupRouter();
loginRouter();
