// DATA TRANSAKSI
const transactions = [
    { user: "Andi***", type: "DEPOSIT", amount: "100.000", time: "Baru saja" },
    { user: "Wati***", type: "WITHDRAW", amount: "1.500.000", time: "2 mnt lalu" },
    { user: "Dedi***", type: "DEPOSIT", amount: "50.000", time: "5 mnt lalu" },
    { user: "Sury***", type: "WITHDRAW", amount: "750.000", time: "8 mnt lalu" },
    { user: "Rian***", type: "DEPOSIT", amount: "250.000", time: "10 mnt lalu" }
];

// DATA JADWAL 6 LIGA TOP
const schedules = [
    { time: "21:00", league: "Premier League", match: "Arsenal vs Liverpool", channel: "Vidio", live: false },
    { time: "23:30", league: "La Liga", match: "Real Madrid vs Girona", channel: "Bein 3", live: false },
    { time: "01:45", league: "Serie A", match: "Inter Milan vs Juventus", channel: "Bein 1", live: true },
    { time: "02:00", league: "UCL", match: "Man City vs Real Madrid", channel: "SCTV", live: true },
    { time: "19:30", league: "Bundesliga", match: "Bayern Munchen vs Dortmund", channel: "Mola", live: false },
    { time: "20:00", league: "Ligue 1", match: "PSG vs Marseille", channel: "Bein 2", live: false },
    { time: "15:30", league: "BRI Liga 1", match: "Persib vs Persija", channel: "Indosiar", live: false }
];

// DATA MATCH PREDIKSI
const matchData = [
  { league: "Premier League", matches: [
      { home:"Arsenal", homeLogo:"https://i.imgur.com/e4HFaAA.png", away:"Chelsea", awayLogo:"https://i.imgur.com/rRKLxQd.png", score:"2-1", time:"20:00" }
  ]}
];

function renderAll() {
    const track = document.getElementById('transTrack');
    track.innerHTML = [...transactions, ...transactions].map(t => `
        <div class="trans-item">
            <span>[${t.time}]</span> <b>${t.user}</b> 
            <span class="${t.type === 'DEPOSIT' ? 'status-depo' : 'status-wd'}">${t.type}</span> 
            <b>IDR ${t.amount}</b>
        </div>
    `).join('');

    const schedBody = document.getElementById('scheduleBody');
    schedBody.innerHTML = schedules.map(s => `
        <tr>
            <td>${s.time} WIB</td>
            <td><b style="color:#ffd700">${s.league}</b></td>
            <td>${s.match}</td>
            <td>${s.live ? '<span class="live-tag">LIVE</span>' : s.channel}</td>
        </tr>
    `).join('');

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

// BANNER LOGIC (3 DETIK)
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

let timer = setInterval(() => { slideIndex = (slideIndex + 1) % slides.length; showSlide(slideIndex); }, 3000);
function resetTimer() { clearInterval(timer); timer = setInterval(() => { slideIndex = (slideIndex + 1) % slides.length; showSlide(slideIndex); }, 3000); }

// BURGER MENU
const burger = document.getElementById("burger");
const dropdownCard = document.getElementById("dropdownCard");
burger.addEventListener("click", () => {
  dropdownCard.style.display = dropdownCard.style.display === "flex" ? "none" : "flex";
  dropdownCard.style.flexDirection = "column";
});
