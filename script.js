const canvas = document.getElementById('snow-canvas');
const ctx = canvas.getContext('2d');

let snowflakes = [];

// 初始化畫布尺寸
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// 創建雪花
function createSnowflakes() {
    for (let i = 0; i < 100; i++) {
        snowflakes.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 3 + 1,
            speed: Math.random() * 1 + 0.5,
            opacity: Math.random() * 0.5 + 0.5,
        });
    }
}

// 繪製雪花
function drawSnowflakes() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    snowflakes.forEach((flake) => {
        ctx.beginPath();
        ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${flake.opacity})`;
        ctx.fill();
    });
}

// 更新雪花位置
function updateSnowflakes() {
    snowflakes.forEach((flake) => {
        flake.y += flake.speed;
        if (flake.y > canvas.height) {
            flake.y = 0; // 雪花從頂部重新開始
            flake.x = Math.random() * canvas.width; // 隨機水平位置
        }
    });
}

// 動畫循環
function animateSnow() {
    drawSnowflakes();
    updateSnowflakes();
    requestAnimationFrame(animateSnow);
}

// 啟動下雪效果
createSnowflakes();
animateSnow();



// 聖誕樹動畫

const treeElement = document.getElementById("christmas-tree");

if (treeElement) {
    const treeLines = [
        "         *         ",
        "        ***        ",
        "       *****       ",
        "      *******      ",
        "     *********     ",
        "    ***********    ",
        "   *************   ",
        "        |||        ",
    ];

    let currentLine = 0;

    function showTree() {
        if (currentLine < treeLines.length) {
            treeElement.textContent += treeLines[currentLine] + "\n";
            currentLine++;
            setTimeout(showTree, 500); // 每 500 毫秒顯示一行
        }
    }

    showTree();
}

document.addEventListener("DOMContentLoaded", () => {
    const guessInput = document.getElementById("guess-input");
    const guessButton = document.getElementById("guess-button");
    const feedback = document.getElementById("guess-feedback");
    const resultContainer = document.getElementById("guess-result");
    const hintContainer = document.getElementById("hint-container");
    const hintButton = document.getElementById("hint-button"); 

    const correctAnswers = ["迴音", "echo", "Echo"];
    const hintMessage = "提示: 我在設計這個部分的時候常在想，這會不會是一個作弊的問題?畢竟，我可以是任何人。";

    hintButton.addEventListener("click", () => {
        hintContainer.textContent = hintMessage;
        hintContainer.style.display = "block"; // 顯示提示
    });

    guessButton.addEventListener("click", () => {
        const userGuess = guessInput.value.trim();
        resultContainer.innerHTML = ""; // 清空結果區域

        if (correctAnswers.includes(userGuess)) {
            // 顯示迴音的圖片和台詞
            resultContainer.innerHTML = `
                <img src="./image/echo.png" alt="迴音" />
                <p>「我的媽呀!真會猜!」</p>
            `;
        } else {
            alert("再猜猜看?不要打錯我的名子。");
        }

        guessInput.value = ""; // 清空輸入框
    });
});

// 設置聖誕節的日期
const christmasDate = new Date(new Date().getFullYear(), 11, 25, 0, 0, 0); // 12月25日

function updateInlineCountdown() {
    // 確保 inline-countdown 元素存在
    const inlineDays = document.getElementById("inline-days");
    const inlineHours = document.getElementById("inline-hours");
    const inlineMinutes = document.getElementById("inline-minutes");
    const inlineSeconds = document.getElementById("inline-seconds");

    if (!inlineDays || !inlineHours || !inlineMinutes || !inlineSeconds) {
        return; // 如果元素不存在，直接返回
    }

    const now = new Date();
    const diff = christmasDate - now; // 計算剩餘毫秒數

    if (diff < 0) {
        // 如果已經過了聖誕節，顯示倒計時完成
        inlineDays.textContent = "0";
        inlineHours.textContent = "0";
        inlineMinutes.textContent = "0";
        inlineSeconds.textContent = "0";
        return;
    }

    // 計算天、時、分、秒
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    // 更新倒數計時的內容
    inlineDays.textContent = days;
    inlineHours.textContent = hours;
    inlineMinutes.textContent = minutes;
    inlineSeconds.textContent = seconds;
}

// 每秒更新一次倒數計時，並檢查是否需要運行
setInterval(updateInlineCountdown, 1000);

// 初始更新
updateInlineCountdown();
