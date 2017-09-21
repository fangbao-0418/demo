var rimraf = require('rimraf');
rimraf('./dist/*', [], function(res){
  console.log('删除成功');
})
