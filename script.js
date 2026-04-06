// DATA TRANSAKSI
const transactions = [
    { user: "Wawa***", type: "WITHDRAW", amount: "2.100.000", time: "Baru saja" },
    { user: "Boby***", type: "DEPOSIT", amount: "50.000", time: "1 mnt lalu" },
    { user: "Sury***", type: "WITHDRAW", amount: "800.000", time: "4 mnt lalu" },
    { user: "Anan***", type: "DEPOSIT", amount: "200.000", time: "7 mnt lalu" }
];

// DATA JADWAL DENGAN WIN PROBABILITY (H|D|A)
const schedules = [
    { time: "21:00", league: "Premier League", match: "Arsenal vs Liverpool", winProb: "home 45 | draw 15 | away 40", hot: true },
    { time: "23:30", league: "La Liga", match: "Real Madrid vs Girona", winProb: "home 60 | draw 25 | away 15", hot: false },
    { time: "01:45", league: "Serie A", match: "Inter Milan vs Juventus", winProb: "home 35 | draw 30 | away 35", hot: true },
    { time: "02:00", league: "UCL", match: "Man City vs Real Madrid", winProb: "home 50 | draw 20 | away 30", hot: true },
    { time: "19:30", league: "Bundesliga", match: "Bayern vs Dortmund", winProb: "home 55 | draw 15 | away 30", hot: false },
    { time: "15:30", league: "BRI Liga 1", match: "Persib vs Persija", winProb: "home 42 |draw 20 | away 38", hot: true }
];

// PREDIKSI MATCHES
const matchData = [
  { league: "Premier League", matches: [
      { home:"Arsenal", homeLogo:"https://i.imgur.com/e4HFaAA.png", away:"Chelsea", awayLogo:"https://i.imgur.com/rRKLxQd.png", score:"2-1", time:"20:00" }
  ]}
];

function renderAll() {
    // Transaksi
    const track = document.getElementById('transTrack');
    track.innerHTML = [...transactions, ...transactions].map(t => `
        <div class="trans-item">
            <span>[${t.time}]</span> <b>${t.user}</b> 
            <span class="${t.type === 'DEPOSIT' ? 'status-depo' : 'status-wd'}">${t.type}</span> 
            <b>IDR ${t.amount}</b>
        </div>
    `).join('');

    // Jadwal Probabilitas
    const schedBody = document.getElementById('scheduleBody');
    schedBody.innerHTML = schedules.map(s => `
        <tr>
            <td>${s.time} WIB</td>
            <td><b style="color:#ffd700">${s.league}</b></td>
            <td>${s.match} ${s.hot ? '<span class="hot-tag">HOT</span>' : ''}</td>
            <td style="font-family:'Barlow Condensed'; font-weight:800; color:#ffd700; letter-spacing:1px;">${s.winProb}</td>
        </tr>
    `).join('');

    // Matches
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

// SLIDER LOGIC
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
