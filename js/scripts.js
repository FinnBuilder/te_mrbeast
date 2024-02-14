  // Variables
  let score = 0;

  // Function to create clickable objects
  function createObject() {
      const object = document.createElement('div');
      object.className = 'clickable-object';
      object.style.left = Math.random() * 740 + 'px'; // Random left position
      object.style.top = Math.random() * 540 + 'px'; // Random top position
      object.addEventListener('click', () => {
          score++;
          updateScore();
          object.remove();
      });
      document.getElementById('game-container').appendChild(object);
  }

  // Function to update score display
  function updateScore() {
      document.getElementById('score').textContent = 'Score: ' + score;
  }

  // Function to start the game
  function startGame() {
      setInterval(createObject, 1000); // Create object every second
  }

  // Start the game when the page loads
  window.onload = startGame;

