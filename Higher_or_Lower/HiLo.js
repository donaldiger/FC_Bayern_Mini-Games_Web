window.addEventListener('load', function() {
  const loader = document.querySelector('.loader');
  setTimeout(() => {
    loader.classList.add('fade-out');
  }, 1000);
});



const players = [
  { name: "Jamal Musiala", value: 140, img: "../pictures/musiala.jxl" },
  { name: "Harry Kane", value: 90, img: "../pictures/kane.webp" },
  { name: "Leroy Sané", value: 38, img: "../pictures/leroy.png" },
  { name: "Joshua Kimmich", value: 50, img: "../pictures/kimmich.jxl" },
  { name: "Alphonso Davies", value: 50, img: "../pictures/davies.webp" },
  { name: "Jonas Urbig", value: 8, img: "../pictures/urbig.png" },
  { name: "Manuel Neuer", value: 4, img: "../pictures/neuer.webp" },
  { name: "Daniel Peretz", value: 3, img: "../pictures/peretz.jpg" },
  { name: "Sven Ulreich", value: 0.5, img: "../pictures/ulreich.jpg" },
  { name: "Dayot Upamecano", value: 50, img: "../pictures/upamecano.jpg" },
  { name: "Min-jea Kim", value: 45, img: "../pictures/kim.jpg" },
  { name: "Hiroki Ito", value: 30, img: "../pictures/ito.jpg" },
  { name: "Eric Dier", value: 8, img: "../pictures/dier.jpg" },
  { name: "Tarek Buchmann", value: 0.5, img: "../pictures/buchmann.jpg" },
  { name: "Josip Stanisic", value: 28, img: "../pictures/stanisic.jpg" },
  { name: "Sacha Boey", value: 18, img: "../pictures/boey.jpg" },
  { name: "Joāo Palhinha", value: 40, img: "../pictures/palhinha.jpg" },
  { name: "Konrad Laimer", value: 25, img: "../pictures/laimer.jpg" },
  { name: "Leon Goretzka", value: 22, img: "../pictures/goretzka.jpg" },
  { name: "Kingsley Coman", value: 35, img: "../pictures/coman.jpg" },
  { name: "Michael Olise", value: 80, img: "../pictures/olise.jpg" },
  { name: "Thomas Müller", value: 6, img: "../pictures/muller.jpg" },
  { name: "Aleksander Pavlovic", value: 50, img: "../pictures/pavlovic.jpg" },
  { name: "Serge Gnabry", value: 25, img: "../pictures/s.jpg.webp" },
  { name: "Raphaël Guerreiro", value: 10, img: "../pictures/guerreiro.jpg" },
  { name: "Franz Beckenbauer", value: 85, img: "../pictures/beckenbauer.jpg" },
  { name: "Gerd Müller", value: 120, img: "../pictures/gerd.webp" },
  { name: "Oliver Kahn", value: 55, img: "../pictures/kahn.webp" },
  { name: "Arjen Robben", value: 110, img: "../pictures/robben.jpg" },
  { name: "Philipp Lahm", value: 70, img: "../pictures/lahm.jxl" },
  { name: "Hans-Georg Schwarzenbeck", value: 45, img: "../pictures/schwarzenbeck.jpg" },
  { name: "Klaus Augenthaler", value: 50, img: "../pictures/augenthaler.jxl" },
  { name: "Bixente Lizarazu", value: 60, img: "../pictures/lizarazu.jxl" },
  { name: "Willy Sagnol", value: 40, img: "../pictures/sagnol.jpg" },
  { name: "Jörg Butt", value: 25, img: "../pictures/butt.jxl" },    
  { name: "Mehmet Scholl", value: 55, img: "../pictures/scholl.jxl" },
  { name: "Stefan Effenberg", value: 70, img: "../pictures/effenberg.jpg.webp" },
  { name: "Ze Roberto", value: 65, img: "../pictures/roberto.jpg" },
  { name: "Mark van Bommel", value: 50, img: "../pictures/bommel.jpg" },
  { name: "Michael Ballack", value: 85, img: "../pictures/ballack.jxl" },    
  { name: "Roy Makaay", value: 65, img: "../pictures/makaay.jpg.webp" },
  { name: "Claudio Pizarro", value: 45, img: "../pictures/pizarro.jxl" },
  { name: "Mario Gómez", value: 60, img: "../pictures/gomez.webp" },
  { name: "Luca Toni", value: 55, img: "../pictures/toni.jxl" },
  { name: "Lúcio", value: 60, img: "../pictures/lucio.jpg" },
  { name: "Samuel Kuffour", value: 55, img: "../pictures/kuffour.webp" },
  { name: "Breno Borges", value: 30, img: "../pictures/borges.jpg" },
  { name: "Bastian Schweinsteiger", value: 95, img: "../pictures/schweinsteiger.jpg" },
  { name: "Toni Kroos", value: 100, img: "../pictures/kroos.jpg" },
  { name: "Jérôme Boateng", value: 70, img: "../pictures/boateng.jpg" },
  { name: "Luiz Gustavo", value: 45, img: "../pictures/gustavo.webp" },
  { name: "Giovane Élber", value: 75, img: "../pictures/elber.jpg.webp" },
  { name: "Carsten Jancker", value: 35, img: "../pictures/jencker.jpg" },
  { name: "Roque Santa Cruz", value: 60, img: "../pictures/roque.webp" },
  { name: "Alexander Zickler", value: 40, img: "../pictures/zickler.jxl" },
  { name: "Thiago Alcântara", value: 90, img: "../pictures/thiago.jpg" }
  ];
  
  let recentlyUsedPlayers = [];
  let currentIndex = 0;
  let nextIndex = 1;
  let score = 0;
  let highScore = 0;
  
  function updateScoreDisplay() {
    document.getElementById('score').textContent = `Score: ${score}`;
    document.getElementById('highScore').textContent = `High Score: ${highScore}`;
  }

  function saveHighScore() {
    localStorage.setItem('bayernHighScore', highScore);
  }
  
  function loadHighScore() {
    const storedHighScore = localStorage.getItem('bayernHighScore');
    if (storedHighScore !== null) {
      highScore = parseInt(storedHighScore);
    }
  }
  
  function loadPlayers() {
    document.getElementById('img1').src = players[currentIndex].img;
    document.getElementById('name1').textContent = players[currentIndex].name;
    document.getElementById('value1').textContent = "€" + players[currentIndex].value + "M";
  
    document.getElementById('img2').src = players[nextIndex].img;
    document.getElementById('name2').textContent = players[nextIndex].name;
    document.getElementById('value2').textContent = "???";
  
    document.getElementById('result').textContent = "";
    document.getElementById('gameOver').classList.add('hidden');
    document.getElementById('nextBtn').classList.add('hidden');
    document.getElementById('higherBtn').disabled = false;
    document.getElementById('lowerBtn').disabled = false;
  
    updateScoreDisplay();
  }
  
  function checkAnswer(choice) {
    const correct = (choice === 'higher' && players[nextIndex].value >= players[currentIndex].value) ||
                    (choice === 'lower' && players[nextIndex].value <= players[currentIndex].value);
  
    document.getElementById('value2').textContent = "€" + players[nextIndex].value + "M";
    document.getElementById('result').textContent = correct ? "Correct!" : "Wrong!";
  
    if (correct) {
      score++;
      if (score > highScore) highScore = score;
      document.getElementById('nextBtn').classList.remove('hidden');
    } else {
      document.getElementById('gameOver').classList.remove('hidden');
    }

  
    updateScoreDisplay();
  
    document.getElementById('higherBtn').disabled = true;
    document.getElementById('lowerBtn').disabled = true;
  }
  
  
  function nextRound() {
    currentIndex = nextIndex;
    recentlyUsedPlayers.push(currentIndex);
    if (recentlyUsedPlayers.length > 2) {
      recentlyUsedPlayers.shift();
    }
    let availablePlayers = players.map((_, index) => index)
    .filter(index => !recentlyUsedPlayers.includes(index) && index !== currentIndex);

    if (availablePlayers.length === 0) {
      availablePlayers = players.map((_, index) => index).filter(index => index !== currentIndex);
      recentlyUsedPlayers = [];
    }
    nextIndex = availablePlayers[Math.floor(Math.random() * availablePlayers.length)];
    
    loadPlayers();
    loadPlayers();
  }
  
  function restartGame() {
    score = 0;
    currentIndex = 0;
    nextIndex = 1;
    loadPlayers();
  }
  
  window.onload = () => {
    document.getElementById('higherBtn').addEventListener('click', () => checkAnswer('higher'));
    document.getElementById('lowerBtn').addEventListener('click', () => checkAnswer('lower'));
    document.getElementById('nextBtn').addEventListener('click', nextRound);
    document.getElementById('restartBtn').addEventListener('click', restartGame);
  
    loadHighScore();
    score = 0;
    loadPlayers();
  };

  let lastScroll = window.scrollY;
  let isScrollingUp = false;
  
  window.addEventListener('scroll', () => {
      const header = document.querySelector('header');
      const currentScroll = window.scrollY;
      const bottom = document.documentElement.scrollHeight - window.innerHeight;
      
      if (currentScroll < lastScroll && currentScroll > 60 && currentScroll < bottom - 10) {
          header.classList.remove('hide');
          isScrollingUp = true;
      } else if (currentScroll > lastScroll && currentScroll > 60) {
          header.classList.add('hide');
          isScrollingUp = false;
      }
  
      lastScroll = currentScroll;
  });