// DATA JADWAL 6 LIGA DENGAN WIN PROBABILITY (H | D | A)
const schedules = [
    { time: "21:00", league: "Premier League", match: "Arsenal vs Liverpool", winProb: "45 | 15 | 40", hot: true },
    { time: "23:30", league: "La Liga", match: "Real Madrid vs Girona", winProb: "60 | 25 | 15", hot: false },
    { time: "01:45", league: "Serie A", match: "Inter Milan vs Juventus", winProb: "35 | 30 | 35", hot: true },
    { time: "02:00", league: "UCL", match: "Man City vs Real Madrid", winProb: "50 | 20 | 30", hot: true },
    { time: "19:30", league: "Bundesliga", match: "Bayern vs Dortmund", winProb: "55 | 15 | 30", hot: false },
    { time: "15:30", league: "BRI Liga 1", match: "Persib vs Persija", winProb: "42 | 20 | 38", hot: true }
];

// DATA MATCH PREDIKSI UTAMA (2 KARTU)
const matchData = [
  { 
    league: "Big Matches Today", 
    matches: [
      { home:"Arsenal", homeLogo:"https://i.imgur.com/e4HFaAA.png", away:"Chelsea", awayLogo:"https://i.imgur.com/rRKLxQd.png", score:"2-1", time:"20:00" },
      { home:"Liverpool", homeLogo:"https://i.imgur.com/kufe8Br.png", away:"Man City", awayLogo:"https://i.imgur.com/X7oPQOJ.png", score:"1-1", time:"22:00" }
    ]
  }
];

function renderAll() {
    // Render Jadwal Probabilitas
    const schedBody = document.getElementById('scheduleBody');
    schedBody.innerHTML = schedules.map(s => `
        <tr>
            <td>${s.time} WIB</td>
            <td><b style="color:#ffd700">${s.league}</b></td>
            <td>${s.match} ${s.hot ? '<span class="hot-tag">HOT</span>' : ''}</td>
            <td style="font-family:'Barlow Condensed'; font-weight:800; color:#ffd700; letter-spacing:1px;">${s.winProb}</td>
        </tr>
    `).join('');

    // Render Prediksi Matches (Menampilkan 2 kartu sekaligus)
    let matchHtml = "";
    matchData.forEach(l => {
        matchHtml += `<h2>${l.league}</h2>`;
        l.matches.forEach(m => {
            matchHtml += `
            <div class="card">
                <div class="teams">
                    <div class="team"><img src="${m.homeLogo}"><span>${m.home}</span></div>
                    <div class="vs">VS</div>
                    <div class="team"><img src="${m.awayLogo}"><span>${m.away}</span></div>
                </div>
                <div class="score">${m.score}</div>
                <div class="time">${m.time} WIB</div>
                <a href="https://rinjaniman.com/sportsbook" target="_blank" class="card-btn">Main Sekarang</a>
            </div>`;
        });
    });
    document.getElementById("matches").innerHTML = matchHtml;
}

renderAll();

// BANNER SLIDER LOGIC (AUTO 3 DETIK)
let slideIndex = 0;
const slider = document.getElementById('slider');
const slides = document.querySelectorAll('.slide');
const dotsContainer = document.getElementById('dotsContainer');

slides.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => { showSlide(i); resetTimer(); });
    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');
function showSlide(index) {
    slideIndex = index;
    slider.style.transform = `translateX(-${slideIndex * 100}%)`;
    dots.forEach(d => d.classList.remove('active'));
    dots[slideIndex].classList.add('active');
}

document.getElementById('nextBtn').addEventListener('click', () => { slideIndex = (slideIndex + 1) % slides.length; showSlide(slideIndex); resetTimer(); });
document.getElementById('prevBtn').addEventListener('click', () => { slideIndex = (slideIndex - 1 + slides.length) % slides.length; showSlide(slideIndex); resetTimer(); });

// Auto-Slide 3000ms (3 detik)
let timer = setInterval(() => { slideIndex = (slideIndex + 1) % slides.length; showSlide(slideIndex); }, 3000);
function resetTimer() { clearInterval(timer); timer = setInterval(() => { slideIndex = (slideIndex + 1) % slides.length; showSlide(slideIndex); }, 3000); }

// BURGER MENU LOGIC
const burger = document.getElementById("burger");
const dropdownCard = document.getElementById("dropdownCard");
burger.addEventListener("click", () => {
  dropdownCard.style.display = dropdownCard.style.display === "flex" ? "none" : "flex";
  dropdownCard.style.flexDirection = "column";
});
