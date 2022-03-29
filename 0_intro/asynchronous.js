//when we
//over the netwoerk: for instance fetch
//file handling
//setTimeout / setInterval
//databases

//Promise
//pending
//fulfilled
//resolve and rejected

/* new Promise((resolve, reject) => {
  try {
    resolve({ key: 'Value' });
  } catch {
    reject('Something went wrong');
  }
})
  .then((message) => console.log(message))
  .catch((errorMessage) => console.log(errorMessage)); */


   function somethingGoodSomethingBad(){
    return new Promise((resolve, reject) => {
     setTimeout(() =>{
      try {
        resolve({ message: 'Resolved' });
      } catch {
        reject('Something went wrong');
      }
    }, 4000)
  });
}
//immediately invoked function expression - IIFE
(async function callMyCustomPromise(){
  try{
  const response = await somethingGoodSomethingBad();
  console.log(response.message);
  }
  catch(errorMessage){
    console.log(errorMessage);
  }
})()

/* const fileHandling = handleFile();
const fileHandling2 = handleFile2();
Promise.all([handleFile, handleFile2]);
 */

  
