//patika dev ile
const http = require('http');

const server = http.createServer( (req,res) => {
    const url = req.url;
    if (url === '/') {
        res.writeHead(200,{'Content-Type': 'text/html'})
        res.write('<h2>INDEX SAYFASINA HOŞGELDİNİZ</h2>');
    }
    else if (url === '/hakkimda'){
        res.writeHead(200,{'Content-Type': 'text/html'})
        res.write('<h2>HAKKIMDA SAYFASINA HOŞGELDİNİZ</h2>')
    }
    else if (url === '/iletisim'){
        res.write('<h2>İLETİŞİM SAYFASINA HOŞGELDİNİZ</h2>')
    }
    else  {
        res.write('404 HATASI')
    }

    res.end();


});
const port = 5000;
server.listen(port,() => {
    console.log(`Sunucu port ${port} de başladı.`)
});