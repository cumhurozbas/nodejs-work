//with patika.dev
function circleArea(r) {
    area=Math.PI*r**2;
    return area;
}
function circleCircumference (r) {
    
    return 2*Math.PI*r;
}

console.log(circleArea(5));
console.log(circleCircumference(5));

module.exports = {
    circleArea,
    circleCircumference
}

