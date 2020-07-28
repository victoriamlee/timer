const { checkServerIdentity } = require("tls");

const args = process.argv.slice(2);
const sorted = args.sort(function(a, b) {
  return a - b;
});

for (let time of sorted) {
  if (time < 0 || time === '' || isNaN(time) === true) {
    continue;
  } else {
    setTimeout(() => process.stdout.write('beep'), time * 1000); // sound doesn't work, replaced sound with 'beep'
  }
}
