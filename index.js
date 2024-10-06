writeCards(["Charlie", "Samip", "Ali"], "birthday");
[
    "Thank you, Charlie, for the wonderful birthday gift!",
    "Thank you, Samip, for the wonderful birthday gift!",
    "Thank you, Ali, for the wonderful birthday gift!",
  ];
  const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  let i = 0; 
  while (i < gifts.length) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    i++; 
  }

  return gifts;
}

wrapGifts(gifts);
function plantGarden() {
    let keepWorking = true;
    while (keepWorking) {
      chooseSeedLocation();
      plantSeed();
      waterSeed();
      keepWorking = checkForMoreSeeds();
    }
  }
  let countup = 0;
while (countup < 10) {
  console.log(countup++);
}
for (let countup = 0; countup < 10; countup++) {
    console.log(countup);
  }
  function writeCards(names, event) {
    const messages = []; 
  

    for (let i = 0; i < names.length; i++) {
    
      const message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
      messages.push(message); t
    }
  
    
    return messages;
  }
  
  function countDown(number) {
    
    for (let i = number; i >= 0; i--) {
      console.log(i); 
    }
  }
  
  const thankYouCards = writeCards(["Charlie", "Samip", "Ali"], "birthday");
  console.log(thankYouCards);
  countDown(5);