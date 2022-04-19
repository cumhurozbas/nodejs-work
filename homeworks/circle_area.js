const arguments = process.argv.slice(2);

function circle_A(r)
{
    area=Math.PI*r**2;
    console.log( `Yarıçapı ${r} olan dairenin alanı: ${area}`);
}
circle_A(arguments[0]*1);