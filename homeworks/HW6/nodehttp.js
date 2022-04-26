//patika dev ile
const Koa = require('koa');
const app = new Koa();

// response

app.use( ctx => {
    if (ctx.path == '/hakkimda')
    {
    ctx.body = '<h1>Hakkımda sayfası<h1>';
}
else if (ctx.path == '/iletisim') {
    ctx.body = '<h1>İletişim sayfası<h1>';
}
else if  (ctx.path == '/'){
    ctx.body = '<h1>İndex sayfası<h1>';
}
else {
    ctx.body = '<h1>404 Sayfa bulunamadı.<h1>';
}
  });
app.listen(3000);