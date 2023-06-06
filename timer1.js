const times = process.argv.slice(2,);

for (const time of times) {
  if (time && time > 0) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, time * 1000);
  }
} 


