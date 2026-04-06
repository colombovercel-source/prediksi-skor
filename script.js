// FITUR BURGER MENU (PERBAIKAN)
const burger = document.getElementById('burger');
const dropdownCard = document.getElementById('dropdownCard');

burger.addEventListener('click', (e) => {
    dropdownCard.classList.toggle('active');
    e.stopPropagation(); // Mencegah benturan klik
});

// Menutup menu jika klik di luar area menu
window.addEventListener('click', () => {
    if (dropdownCard.classList.contains('active')) {
        dropdownCard.classList.remove('active');
    }
});

// DATA JADWAL & MATCH (Tetap Sama)
const schedules = [
    { time: "21:00", league: "EPL", match: "Arsenal vs Liverpool", prob: "Home 45% | Draw 15% | Away 40%" },
    { time: "02:00", league: "UCL", match: "Man City vs Real Madrid", prob: "Home 45% | Draw 15% | Away 40%" }
];

const matchResults = [
    { home: "Arsenal", homeLogo: "https://i.imgur.com/e4HFaAA.png", away: "Chelsea", awayLogo: "https://i.imgur.com/rRKLxQd.png", score: "1-3", status: "Full Time" },
    { home: "Liverpool", homeLogo: "https://i.imgur.com/kufe8Br.png", away: "Man City", awayLogo: "https://i.imgur.com/X7oPQOJ.png", score: "2-4", status: "Full Time" }
];

function renderPage() {
    const tableBody = document.getElementById('scheduleBody');
    if(tableBody) {
        tableBody.innerHTML = schedules.map(s => `
            <tr>
                <td>${s.time} WIB</td>
                <td style="color:#ffd700; font-weight:bold;">${s.league}</td>
                <td>${s.match}</td>
                <td style="font-family:'Barlow Condensed'; font-weight:800; color:#ffd700;">${s.prob}</td>
            </tr>
        `).join('');
    }

    const matchContainer = document.getElementById('matches');
    if(matchContainer) {
        matchContainer.innerHTML = matchResults.map(m => `
            <div class="card">
                <div class="teams">
                    <div class="team"><img src="${m.homeLogo}"><p>${m.home}</p></div>
                    <div class="vs">VS</div>
                    <div class="team"><img src="${m.awayLogo}"><p>${m.away}</p></div>
                </div>
                <div class="score">${m.score}</div>
                <div style="font-size:12px; color:#aaa;">${m.status}</div>
                <a href="https://rinjaniman.com" class="card-btn">PASANG SEKARANG</a>
            </div>
        `).join('');
    }
}

// LOGIKA SLIDER (Auto 3 Detik)
let currentSlide = 0;
const slider = document.getElementById('slider');
const slides = document.querySelectorAll('.slide');

function goToSlide(n) {
    currentSlide = n;
    if(slider) {
        slider.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
}

setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    goToSlide(currentSlide);
}, 3000);

renderPage();
