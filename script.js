// --- KODE ASLI MATCH & BURGER TETAP DI SINI ---

const data = [
  {
    league: "Premier League",
    matches: [
      {
        home:"Arsenal",
        homeLogo:"https://i.imgur.com/e4HFaAA.png",
        away:"Chelsea",
        awayLogo:"https://i.imgur.com/rRKLxQd.png",
        score:"2-1",
        time:"20:00"
      },
      {
        home:"Liverpool",
        homeLogo:"https://i.imgur.com/kufe8Br.png",
        away:"Manchester City",
        awayLogo:"https://i.imgur.com/X7oPQOJ.png",
        score:"1-1",
        time:"22:00"
      }
    ]
  }
];

function render(){
  let html = "";
  data.forEach(l => {
    html += `<h2>${l.league}</h2>`;
    l.matches.forEach(m => {
      html += `
      <div class="card">
        <div class="teams">
          <div class="team">
            <img src="${m.homeLogo}" alt="${m.home}">
            <span>${m.home}</span>
          </div>
          <div class="vs">VS</div>
          <div class="team">
            <img src="${m.awayLogo}" alt="${m.away}">
            <span>${m.away}</span>
          </div>
        </div>
        <div class="score">${m.score}</div>
        <div class="time">${m.time} WIB</div>
        <a href="https://rinjaniman.com/sportsbook" target="_blank" class="card-btn">
          Main Sekarang
        </a>
      </div>`;
    });
  });
  document.getElementById("matches").innerHTML = html;
}
render();

const burger = document.getElementById("burger");
const dropdownCard = document.getElementById("dropdownCard");
burger.addEventListener("click", () => {
  if(dropdownCard.style.display === "flex"){
    dropdownCard.style.display = "none";
  } else {
    dropdownCard.style.display = "flex";
    dropdownCard.style.flexDirection = "column";
  }
});

// --- FITUR BARU: LOGIKA BANNER SLIDER ---

let currentSlide = 0;
const sliderElement = document.getElementById('slider');
const slides = document.querySelectorAll('.slide');
const dotsContainer = document.getElementById('dotsContainer');

// Buat Titik Indikator otomatis sesuai jumlah gambar
slides.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => moveSlide(i));
    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');

function moveSlide(index) {
    currentSlide = index;
    sliderElement.style.transform = `translateX(-${currentSlide * 100}%)`;
    
    // Update warna dot
    dots.forEach(d => d.classList.remove('active'));
    dots[currentSlide].classList.add('active');
}

// Jalankan otomatis setiap 4 detik
setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    moveSlide(currentSlide);
}, 4000);
