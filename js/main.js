// 1 = left 2 = right 3 = up 4 = down
// enemy image 1 light 2 fat
function startGame() {
  const arrowTypes = ["right", "left", "top", "bottom"];
  const enemyNumber = Math.floor(Math.random() * (30 - 10 + 1) + 10);
  console.log("tedad kol enemy => " + enemyNumber);
  enemyQueue = [];
  var gamePlay = document.getElementById("gameplay");

  function createEnemies(i) {
    xposition = Math.floor(Math.random() * 3);
    enemy_type = Math.floor(Math.random() * (2 - 1 + 1) + 1);
    var entryTime = Math.round(Math.random() * 3 + 1);
    var charecter = document.createElement("div");
    charecter.className = "enemy";

    switch (enemy_type) {
      case 1:
        charecter.classList.add("tall");
        break;
      case 2:
        charecter.classList.add("fat");
        break;

      default:
        console.log("ok" + enemy_type);
    }

    switch (xposition) {
      case 0:
        break;
      case 1:
        charecter.classList.add("left");
        break;
      case 2:
        charecter.classList.add("right");
        break;
      default:
        console.log("out of range");
    }
    charecter.style.zIndex = enemyNumber - 1 - i;
    var arrow = document.createElement("div");
    arrow.className = "arrow";
    let tempnu = Math.floor(Math.random() * (3 - 1 + 1) + 1);
    let cache = [];
    for (let n = 0; n < tempnu; n++) {
      var arrowType = arrowTypes[Math.floor(Math.random() * 4)];
      switch (arrowType) {
        case "left": {
          let im = document.createElement("img");
          im.src = "./image/left.png";
          arrow.appendChild(im);
          cache.push(37);
          break;
        }
        case "top": {
          let im = document.createElement("img");
          im.src = "./image/up.png";
          arrow.appendChild(im);
          cache.push(38);
          break;
        }
        case "right": {
          let im = document.createElement("img");
          im.src = "./image/right.png";
          arrow.appendChild(im);
          cache.push(39);
          break;
        }
        case "bottom": {
          let im = document.createElement("img");
          im.src = "./image/down.png";
          arrow.appendChild(im);
          cache.push(40);
          break;
        }
        default:
          console.log(arrowType);
      }
    }
    charecter.setAttribute("data-arrow", cache);
    charecter.appendChild(arrow);
    enemyQueue.unshift({ charecter, entryTime });
  }
  for (let i = 0; i < enemyNumber; i++) {
    createEnemies(i);
  }
  for (let i = 0; i < enemyNumber; i++) {
    let curEne = enemyQueue[enemyNumber - 1 - i];
    appendCurEnemy(curEne, i);
  }
  function appendCurEnemy(enemy, i) {
    setTimeout(function () {
      gamePlay.appendChild(enemy.charecter);
      // console.log(enemy);
    }, 4000 * i);
  }
  // console.log(enemyQueue);
  document.onkeydown = function (e) {
          // reset interval
          resetInterval();
    if (enemyQueue.length === 0) {
      alert("تبریک شما برنده شدید:)");
    } else {
      curEne = enemyQueue[enemyQueue.length - 1];
      //   console.log(enemyQueue);
      //   console.log(curEne);

      const attackPatterns = curEne.charecter
        .getAttribute("data-arrow")
        .split(",");
      //  if the first index was === keyboard key
      if (e.keyCode === parseInt(attackPatterns[0])) {
        // console.log(attackPatterns[0]);
        const arrow = curEne.charecter.querySelector(".arrow");
        arrow.firstChild.remove();
        attackPatterns.shift();
        curEne.charecter.setAttribute("data-arrow", attackPatterns);
        // console.log(attackPatterns);
      }

      if (attackPatterns.length === 0) {
        Punchsound.play();
        curEne.charecter.classList.add('died');
        setTimeout(() => {
          gamePlay.removeChild(curEne.charecter);
          enemyQueue.pop();
        }, 1000);
      }
    }
  };
  // auto remove charecter from array
  const damage=document.querySelector('#game > .game_sance');
  let myInterval;
  function startInterval() {
    myInterval = setInterval(() => {
      autopop();
    }, 7000);
  }
  startInterval(myInterval);
  
  function resetInterval() {
    clearInterval(myInterval);
    startInterval();
  }

  function autopop(){
    if (gamePlay.children.length > 0) {
      //   console.log("ok");
      gamePlay.firstElementChild.remove();
      enemyQueue.pop();
      Punchsound.play();
      damage.style.filter ="opacity(0.9) brightness(100%) saturate(100%) invert(64%) sepia(53%) saturate(6324%) hue-rotate(327deg) contrast(100%)";
      setTimeout(() => {
        damage.style.filter='';
      }, 300);
    } else {
      alert("بازی تموم شد");
      clearInterval(myInterval);
    }
  }

  const overflow= setInterval(() => {
    if(gamePlay.children.length > 3){
      autopop();
      console.log(gamePlay.children.length);
    }
    if(gamePlay.children.length === 0 && enemyQueue.length ===0){
      clearInterval(overflow);
    }
  }, 3000);
  
}

let menuMusicChk = true;

startup_video.classList.remove("hide");
startup_video.play();
startup_video.onclick= () => {
  Punchsound.play();
  startup_video.pause();
  startup_video.classList.add("hide");
  startMenu();
}

function startMenu() {
  const menu = document.querySelector(".menu");
  menu.classList.remove("hide");
  game_menu.play();
  if (menuMusicChk === true) menumusic.play();
  select_settings.onclick= () => {
    settings();
  }

  select_fight.addEventListener("click", () => {
    menu.classList.add("hide");
    gameChaptersMenu();
  });
}
function settings() {
  const gameSettings = document.querySelector(".game_settings");
  const gameSettingsClose = document.querySelector(".game_settings > .back");
  gameSettings.classList.remove("hide");
  vid_settings.play();

  gameSettingsClose.onclick=() => {
    gameSettings.classList.add("hide");
    vid_settings.pause();
    vid_settings.currentTime = 0;
  };
  sound_controll.onclick=()=>{
    if (menuMusicChk === true) {
      menumusic.pause();
      menuMusicChk = false;
    } else {
      menumusic.play();
      menuMusicChk = true;
    }
  }
}
function gameChaptersMenu() {
  const chapter = document.querySelector(".chapters");
  const closeChapterMenu = document.querySelector(".chapters > .back");
  chapter.classList.remove("hide");
  vid_chapter.play();
  select_chapter.onclick=()=>{
    const gameSance = document.querySelector(".game_sance");
    chapter.classList.add("hide");
    gameSance.classList.remove("hide");
    startGame();
  }
  closeChapterMenu.addEventListener("click", () => {
    chapter.classList.add("hide");
    startMenu();
  });
}
