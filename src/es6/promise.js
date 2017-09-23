var promise = new Promise(function(resolve, reject){
  setTimeout(() => {
    console.log('responsed');
    resolve(2)
  }, 1000)
  setTimeout(() => {
    console.log('responsed');
    reject('error')
  }, 3000)
})
console.log(promise);
setTimeout(() => {
  console.log(promise)
}, 2000);
setTimeout(() => {
  console.log(promise)
}, 4000);
