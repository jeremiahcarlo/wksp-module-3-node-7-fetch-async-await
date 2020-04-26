// Exercise 2
// ----------

const doublesLater = (num) => {
   return new Promise (resolve => {
       setTimeout (() => {
        resolve(num * 2); 
       }, 2000);
   });
}
doublesLater(5).then (result => console.log(result));


