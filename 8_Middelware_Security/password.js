import bcrypt from 'bcrypt';
const saltRounds= 12;
const plaintextPassowrd  = "hunter12";

async function loginRouter(){
}

async function singnupRouter(){
const hashedPassword = await bcrypt.hash(plaintextPassowrd, saltRounds);
console.log(hashedPassword);
}
singnupRouter();
console.log(bcrypt);
