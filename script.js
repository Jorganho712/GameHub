const uniqueGames = [
    // --- AÇÃO E TIRO ---
    { name: "Subway Surfers", url: "https://poki.com/en/g/subway-surfers", img: "https://img.poki.com/5c9j1676t6j8a6v5f6d6j6p5f5e5d5c5/256x256.png" },
    { name: "Moto X3M", url: "https://poki.com/en/g/moto-x3m", img: "https://img.gamedistribution.com/ba67f363293c4e0f9a2e633c7a250325-512x384.jpeg" },
    { name: "Shell Shockers", url: "https://shellshock.io/", img: "https://placehold.co/300x200/e91e63/fff?text=Shell+Shockers" },
    { name: "Combat Online", url: "https://poki.com/en/g/combat-online", img: "https://placehold.co/300x200/333/fff?text=Combat+Online" },
    { name: "Sniper Assassin", url: "https://www.silvergames.com/en/sniper-assassin", img: "https://placehold.co/300x200/000/ff0000?text=Sniper" },

    // --- CLÁSSICOS ---
    { name: "Minecraft Classic", url: "https://classic.minecraft.net/", img: "https://placehold.co/300x200/4caf50/fff?text=Minecraft" },
    { name: "Pac-Man", url: "https://www.google.com/logos/2010/pacman10-i.html", img: "https://upload.wikimedia.org/wikipedia/commons/4/49/Pacman.svg" },
    { name: "2048", url: "https://play2048.co/", img: "https://placehold.co/300x200/edc22e/fff?text=2048" },
    { name: "Tetris", url: "https://tetris.com/play-tetris", img: "https://placehold.co/300x200/673ab7/fff?text=Tetris" },
    { name: "Snake Retro", url: "https://tseten.github.io/snake/", img: "https://placehold.co/300x200/4caf50/fff?text=Snake" },

    // --- IO / MULTIPLAYER ---
    { name: "Slither.io", url: "http://slither.io/", img: "https://placehold.co/300x200/4caf50/fff?text=Slither" },
    { name: "Agar.io", url: "https://agar.io/", img: "https://placehold.co/300x200/f44336/fff?text=Agar.io" },
    { name: "Diep.io", url: "https://diep.io/", img: "https://placehold.co/300x200/00bcd4/fff?text=Diep" },
    { name: "Gartic.io", url: "https://gartic.io/", img: "https://placehold.co/300x200/2196f3/fff?text=Gartic" },
    { name: "Paper.io 2", url: "https://paper-io.com/", img: "https://placehold.co/300x200/9c27b0/fff?text=Paper.io" },

    // --- PUZZLE E CASUAL ---
    { name: "Little Alchemy 2", url: "https://littlealchemy2.com/", img: "https://placehold.co/300x200/9e9e9e/fff?text=Alchemy" },
    { name: "Cut the Rope", url: "https://www.coolmathgames.com/0-cut-the-rope", img: "https://placehold.co/300x200/8bc34a/fff?text=Cut+the+Rope" },
    { name: "Chess.com", url: "https://www.chess.com/play/online", img: "https://placehold.co/300x200/312e2b/fff?text=Xadrez" },
    { name: "Uno Online", url: "https://poki.com/en/g/uno-online", img: "https://placehold.co/300x200/f44336/fff?text=Uno" },

    // --- CORRIDA E ESPORTES ---
    { name: "Drift Hunters", url: "https://www.crazygames.com/game/drift-hunters", img: "https://placehold.co/300x200/333/fff?text=Drift" },
    { name: "Basketball Stars", url: "https://poki.com/en/g/basketball-stars", img: "https://placehold.co/300x200/ff9800/fff?text=Basquete" },
    { name: "Slope", url: "https://www.crazygames.com/game/slope", img: "https://placehold.co/300x200/00ff00/000?text=Slope" },
    { name: "Penalty Challenge", url: "https://www.crazygames.com/game/penalty-challenge-multiplayer", img: "https://placehold.co/300x200/4caf50/fff?text=Futebol" }
];

const grid = document.getElementById('gameGrid');

function displayGames(list) {
    grid.innerHTML = "";
    list.forEach(game => {
        const card = document.createElement('div');
        card.className = 'game-card';
        card.onclick = () => window.open(game.url, '_blank');
        card.innerHTML = `
            <div class="card-img" style="background-image: url('${game.img}')"></div>
            <div class="card-info">
                <h3>${game.name}</h3>
                <p>Jogar agora ➔</p>
            </div>
        `;
        grid.appendChild(card);
    });
    // Atualiza o contador de jogos no topo
    const counter = document.getElementById('game-count');
    if(counter) counter.innerText = list.length + " Jogos Disponíveis";
}

function filterGames() {
    const term = document.getElementById('search').value.toLowerCase();
    displayGames(uniqueGames.filter(g => g.name.toLowerCase().includes(term)));
}

displayGames(uniqueGames);
