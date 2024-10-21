const args = process.argv.slice(2);

if (args.length === 0) {
  console.log("No alarms set.");
  return;  // Exit if no numbers are provided
}

for (let arg of args) {
  const time = Number(arg);

  if (isNaN(time) || time < 0) {
    continue;
  }

  setTimeout(() => {
    process.stdout.write('\x07');  // Beep after the set time
  }, time * 1000);
}

//TEST
//node timer1.js 10 3 5 15 9