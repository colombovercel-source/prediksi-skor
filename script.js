// DATA MATCH
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

// RENDER MATCH
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

        <a href="https://rinjaniman.com" target="_blank" class="card-btn">
          Main Sekarang
        </a>
      </div>`;
    });
  });

  document.getElementById("matches").innerHTML = html;
}

render();

// BURGER MENU MODERN
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
