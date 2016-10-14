for (var i = 5; i < 120; i += 10) {
	console.log(i);
}

for (var i = 4096; i > 1; i /= 2) {
  console.log(i); }


var usPresidents = ["", "Washington", "Adams", "Jefferson", "Madison", "Monroe"]; 
for (var i = 1; i < 6; i++) {
  console.log("President " + [i] + " was " + usPresidents[i]); 
}

var antSpecies = {
  argentine: {},
  army: {},
  bigHeaded: {},
  black: {},
  bull: {},
  carpenter: {},
  crazy: {},
  fire: {},
  glider: {},
  honeyPot: {},
  jackJumper: {}
}

for (var k in antSpecies) {
	console.log('antSpecies key ' + "= " + [k]);
}