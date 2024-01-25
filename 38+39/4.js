  let jokes = [
    {
      "joke": "All vampires keep their money in a special place—the blood bank."
    },
    {
      "joke": "What do you call someone who can't stick to a diet? A desserter."
    },
    {
      "joke": "I only seem to get sick on weekdays. I must have a weekend immune system."
    },
    {
      "joke": "You can tell it's a dogwood tree from its bark."
    },
    {
      "joke": "What do you call a sheep that knows karate? A lamb chop."
    },
    {
      "joke": "What does a dad get in their stocking if they've been naughty? Char-coal."
    },
    {
      "joke": "Why did the scarecrow win an award? Because he was outstanding in his field"
    },
    {
      "joke": "What do you call a cow with no legs? Ground beef."
    },
    {
      "joke": "What has ears but cannot hear? A cornfield!"
    },
    {
      "joke": "I don't get why Marvel doesn't use the Hulk to advertise more. He's basically one big Banner."
    }
  ];
  function getAnotherJoke() {
    const jokeContainer = document.getElementById('joke');
    const body = document.getElementById('body');
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    jokeContainer.textContent = randomJoke.joke;
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    body.style.backgroundColor = randomColor;
  }
