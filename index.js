var koa = require('koa');
var app = koa();

app.use(function *(){
  this.body = '<img src="https://www.netlight.com/wp-content/themes/new_netlight_main/static/images/logo.png"/> Hello Netlight!!';
});

app.listen(process.env.PORT || 3000);
