var koa = require('koa');
var app = koa();

app.use(function *(){
  this.body = 'Hello Netlight!!';
});

app.listen(process.env.PORT || 3000);
