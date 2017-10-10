var promise = new Promise(function(resolve, reject){
  // setTimeout(() => {
  //   console.log('responsed resolve');
  //   resolve(2)
  // }, 1000)
  setTimeout(() => {
    resolve('333error')
  }, 3000)
})

promise.then(function(){
  console.log(1)
}).then(function(){
  console.log(2)
  // setTimeout(function(){
  //   console.log(2)
  // }, 1000)
}).then(function(){
  console.log(3)
})

promise.then(function(){
  console.log('4')
}).then(function(){
  throw new Error('22')
  // throw 2
}).then(function(){
  console.log('c')
}).catch(function(error){
  return error.message;
}).then(function(res){
  console.log(res, 'finish');
})
