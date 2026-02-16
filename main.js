
const gridEl = document.getElementById("grid");
const statusEl = document.getElementById("status");

const size = 5;
let playerPos = {x: 0, y: 0};

// Create the grid
let cells = [];
for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        gridEl.appendChild(cell);
        cells.push(cell);
    }
}

// Helper to get cell index
function getIndex(x, y) {
    return y * size + x;
}

// Draw player
function drawPlayer() {
    cells.forEach(c => c.classList.remove("player"));
    cells[getIndex(playerPos.x, playerPos.y)].classList.add("player");
}

drawPlayer();
statusEl.textContent = `Player at (${playerPos.x}, ${playerPos.y})`;

// Listen for arrow keys
document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowUp" && playerPos.y > 0) playerPos.y--;
    if (e.key === "ArrowDown" && playerPos.y < size - 1) playerPos.y++;
    if (e.key === "ArrowLeft" && playerPos.x > 0) playerPos.x--;
    if (e.key === "ArrowRight" && playerPos.x < size - 1) playerPos.x++;

    drawPlayer();
    statusEl.textContent = `Player at (${playerPos.x}, ${playerPos.y})`;
});
