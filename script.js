// --- DATA JADWAL & HASIL ---
const schedules = [
    { time: "21:00", league: "EPL", match: "Arsenal vs Liverpool", prob: "H 45% | D 15% | A 40%" },
    { time: "02:00", league: "UCL", match: "Man City vs Real Madrid", prob: "H 50% | D 20% | A 30%" },
    { time: "15:30", league: "LIGA 1", match: "Persib vs Persija", prob: "H 42% | D 20% | A 38%" },
    { time: "23:00", league: "EPL", match: "Chelsea vs Spurs", prob: "H 35% | D 25% | A 40%" }
];

const matchResults = [
    { home: "Arsenal", homeLogo: "https://i.imgur.com/e4HFaAA.png", away: "Chelsea", awayLogo: "https://i.imgur.com/rRKLxQd.png", score: "2-1" },
    { home: "Liverpool", homeLogo: "https://i.imgur.com/kufe8Br.png", away: "Man City", awayLogo: "https://i.imgur.com/X7oPQOJ.png", score: "1-1" }
];

// --- FUNGSI BURGER MENU ---
const burger = document.getElementById('burger');
const dropdownCard = document.getElementById('dropdownCard');

burger.addEventListener('click', (e) => {
    dropdownCard.classList.toggle('active');
    e.stopPropagation();
});

document.addEventListener('click', () => dropdownCard.classList.remove('active'));

// --- FUNGSI FILTER LIGA ---
function filterLeague(league) {
    const btns = document.querySelectorAll('.tab-btn');
    btns.forEach(btn => {
        btn.classList.remove('active');
        if(btn.textContent === league || (league === 'ALL' && btn.textContent === 'SEMUA')) btn.classList.add('active');
    });

    const filtered = league === 'ALL' ? schedules : schedules.filter(s => s.league === league);
    renderTable(filtered);
}

function renderTable(data) {
    const body = document.getElementById('scheduleBody');
    body.innerHTML = data.map(s => `
        <tr>
            <td>${s.time} WIB</td>
            <td style="color:#ffd700; font-weight:bold;">${s.league}</td>
            <td>${s.match}</td>
            <td style="font-family:'Barlow Condensed'; font-weight:800; color:#ffd700;">${s.prob}</td>
        </tr>
    `).join('');
}

// --- FUNGSI SALIN PREDIKSI ---
function copyMatch(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert("Prediksi Berhasil Disalin!");
    });
}

function renderCards() {
    const container = document.getElementById('matches');
    container.innerHTML = matchResults.map(m => `
        <div class="card">
            <div class="teams">
                <div class="team"><img src="${m.homeLogo}"><p>${m.home}</p></div>
                <div class="vs">VS</div>
                <div class="team"><img src="${m.awayLogo}"><p>${m.away}</p></div>
            </div>
            <div class="score">${m.score}</div>
            <button class="copy-btn" onclick="copyMatch('Prediksi ${m.home} vs ${m.away}: Skor ${m.score} - Analisa by RINJANI4D')">
                📋 Salin Prediksi
            </button>
            <a href="https://rinjaniman.com" class="card-btn">PASANG SEKARANG</a>
        </div>
    `).join('');
}

// --- SLIDER LOGIC ---
let idx = 0;
const slider = document.getElementById('slider');
const slides = document.querySelectorAll('.slide');
const dotsContainer = document.getElementById('dotsContainer');

slides.forEach((_, i) => {
    const d = document.createElement('div');
    d.className = 'dot' + (i === 0 ? ' active' : '');
    d.addEventListener('click', () => move(i));
    dotsContainer.appendChild(d);
});

function move(n) {
    idx = n;
    slider.style.transform = `translateX(-${idx * 100}%)`;
    document.querySelectorAll('.dot').forEach((d, i) => d.className = 'dot' + (i === idx ? ' active' : ''));
}

document.getElementById('nextBtn').onclick = () => move((idx + 1) % slides.length);
document.getElementById('prevBtn').onclick = () => move((idx - 1 + slides.length) % slides.length);
setInterval(() => move((idx + 1) % slides.length), 3000);

// Inisialisasi
filterLeague('ALL');
renderCards();
