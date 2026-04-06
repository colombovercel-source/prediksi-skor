// DATA JADWAL (Format: Home 45% | Draw 15% | Away 40%)
const schedules = [
    { time: "21:00", league: "EPL", match: "Arsenal vs Liverpool", prob: "Home 45% | Draw 15% | Away 40%" },
    { time: "23:30", league: "La Liga", match: "Real Madrid vs Girona", prob: "Home 45% | Draw 15% | Away 40%" },
    { time: "01:45", league: "Serie A", match: "Inter Milan vs Juventus", prob: "Home 45% | Draw 15% | Away 40%" },
    { time: "02:00", league: "UCL", match: "Man City vs Real Madrid", prob: "Home 45% | Draw 15% | Away 40%" }
];

// DATA HASIL (MENAMPILKAN 2 KARTU)
const matchResults = [
    { 
        home: "Arsenal", homeLogo: "https://i.imgur.com/e4HFaAA.png", 
        away: "Chelsea", awayLogo: "https://i.imgur.com/rRKLxQd.png", 
        score: "2-1", status: "Full Time" 
    },
    { 
        home: "Liverpool", homeLogo: "https://i.imgur.com/kufe8Br.png", 
        away: "Man City", awayLogo: "https://i.imgur.com/X7oPQOJ.png", 
        score: "1-1", status: "Full Time" 
    }
];

function renderPage() {
    // Render Tabel
    const tableBody = document.getElementById('scheduleBody');
    tableBody.innerHTML = schedules.map(s => `
        <tr>
            <td>${s.time} WIB</td>
            <td style="color:#ffd700; font-weight:bold;">${s.league}</td>
            <td>${s.match}</td>
            <td style="font-family:'Barlow Condensed'; font-weight:800; color:#ffd700; letter-spacing:1px;">${s.prob}</td>
        </tr>
    `).join('');

    // Render 2 Kartu Pertandingan
    const matchContainer = document.getElementById('matches');
    matchContainer.innerHTML = matchResults.map(m => `
        <div class="card">
            <div class="teams">
                <div class="team"><img src="${m.homeLogo}"><p>${m.home}</p></div>
                <div class="vs">VS</div>
                <div class="team"><img src="${m.awayLogo}"><p>${m.away}</p></div>
            </div>
            <div class="score">${m.score}</div>
            <div style="font-size:12px; color:#aaa; margin-bottom:10px;">${m.status}</div>
            <a href="https://rinjaniman.com" target="_blank" class="card-btn">PASANG SEKARANG</a>
        </div>
    `).join('');
}

// LOGIK SLIDER (AUTO 3 DETIK)
let currentSlide = 0;
const slider = document.getElementById('slider');
const slides = document.querySelectorAll('.slide');
const dotsContainer = document.getElementById('dotsContainer');

// Buat Dots
slides.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.className = 'dot' + (i === 0 ? ' active' : '');
    dot.addEventListener('click', () => goToSlide(i));
    dotsContainer.appendChild(dot);
});

function goToSlide(n) {
    currentSlide = n;
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
    document.querySelectorAll('.dot').forEach((d, i) => {
        d.className = 'dot' + (i === currentSlide ? ' active' : '');
    });
}

document.getElementById('nextBtn').addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    goToSlide(currentSlide);
});

document.getElementById('prevBtn').addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    goToSlide(currentSlide);
});

// Auto Slide
setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    goToSlide(currentSlide);
}, 3000);

// Jalankan Fungsi Saat Halaman Dimuat
renderPage();
