const { clipboard } = require("electron");
const $ = require("jquery");
const math = require("mathjs");

const btn = $("#btn");
btn.html(math.simplify("x^2 + x + 3 + x^2").toString());

btn.click(function() {
  clipboard.writeText("Example String");
});

console.log(math.sqrt(-4));
// simplify an expression
console.log("simplify expressions");
console.log(math.simplify("3 + 2 / 4").toString()); // '7 / 2'
console.log(math.simplify("2x + 3x").toString()); // '5 * x'
console.log(math.simplify("2 * 3 * x", { x: 4 }).toString()); // '24'
console.log(math.simplify("x^2 + x + 3 + x^2").toString()); // '2 * x ^ 2 + x + 3'
console.log(math.simplify("x * y * -x / (x ^ 2)").toString()); // '-y'

// work with an expression tree, evaluate results
const f = math.parse("2x + x");
const simplified = math.simplify(f);
console.log(simplified.toString()); // '3 * x'
console.log(simplified.eval({ x: 4 })); // 12
console.log();

// calculate a derivative
console.log("calculate derivatives");
console.log(math.derivative("2x^2 + 3x + 4", "x").toString()); // '4 * x + 3'
console.log(math.derivative("sin(2x)", "x").toString()); // '2 * cos(2 * x)'

// work with an expression tree, evaluate results
const h = math.parse("x^2 + x");
const dh = math.derivative(h, "x");
console.log(dh.toString()); // '2 * x + 1'
console.log(dh.eval({ x: 3 })); // '7'

$.getJSON("https://world.openfoodfacts.org/api/v0/product/737628064502.json").done(function(d) {
  console.log(d);
});
