const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? Nicknames are also acceptable :) ',  (nameAnswer) => {
  rl.question('What\'s an activity you like doing? ', (activityAnswer) => {
    rl.question('What do you listen to while you\'re doing that? ', (musicAnswer) => {
      rl.question('Which meal is your favourite (dinner, brunch, etc.)? ', (mealTimeAnswer) => {
        rl.question('What\'s your favourite thing to eat for that meal? ', (mealAnswer) => {
          rl.question('Which sport is your absolute favourite? ', (sportAnswer) => {
            rl.question('What\'s your superpower? Tell us what you\'re really good at! ', (skillAnswer) => {
              console.log(`Hello, my name is ${nameAnswer} and I like ${activityAnswer} while listening to ${musicAnswer}. I love to eat ${mealAnswer} for ${mealTimeAnswer}. I also love playing ${sportAnswer} and I'm really good at ${skillAnswer}.`);

              rl.close();
            });
          });
        });
      });
    });
  });
});