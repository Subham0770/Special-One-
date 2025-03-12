// 🎈 Slideshow
const images = [
    'pyl2.jpg', 'pyl3.jpg', 'pyl4.jpg', 'pyl5.jpg', 'pyl6.jpg',
    'pyl7.jpg', 'pyl8.jpg', 'pyl9.jpg', 'pyl10.jpg', 'pyl11.jpg', 'pyl12.jpg',
    'pyl13.jpg', 'pyl14.jpg', 'pyl15.jpg', 'pyl16.jpg',  'pyl18.jpg',
    'pyl19.jpg', 'pyl21.jpg', 'pyl22.jpg', 'pyl25.jpg',"pyl27.jpg","pyl23.jpg","pyl24.jpg",
  ];
  
  let currentIndex = 0;
  const slideshowImg = document.getElementById("slideshow-img");
  
  function changeImage() {
    currentIndex = (currentIndex + 1) % images.length;
    slideshowImg.src = images[currentIndex];
  
    slideshowImg.classList.remove('visible');
    setTimeout(() => {
      slideshowImg.classList.add('visible');
    }, 100);
  }
  
  setInterval(changeImage, 2200);
  
  // 🎵 Music
  const playMusicBtn = document.getElementById("play-music");
  const birthdaySong = document.getElementById("birthday-song");
  
  playMusicBtn.addEventListener("click", () => {
    if (birthdaySong.paused) {
      birthdaySong.play();
      playMusicBtn.textContent = "Pause Music ⏸";
    } else {
      birthdaySong.pause();
      playMusicBtn.textContent = "Play Music 🎶";
    }
  });
  
  // 💖 Falling Hearts
  function createFallingHeart() {
    const heart = document.createElement("div");
    heart.classList.add("falling-heart");
  
    const heartEmojis = ["💖", "💘", "🩵", "💗", "💜","💞","💝","💙","🩷"];
    heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
  
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (Math.random() * 60 + 10) + "px";
  
    document.body.appendChild(heart);
  
    setTimeout(() => heart.remove(), 8000);
  }
  
  setInterval(createFallingHeart,100);
  