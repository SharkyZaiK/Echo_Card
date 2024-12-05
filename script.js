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


// 鼠標跟隨光標效果
const cursor = document.getElementById("cursor");
document.addEventListener("mousemove", (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
});


document.addEventListener("DOMContentLoaded", () => {
    const guessInput = document.getElementById("guess-input");
    const guessButton = document.getElementById("guess-button");
    const feedback = document.getElementById("guess-feedback");
    const resultContainer = document.getElementById("guess-result");

    const correctAnswers = ["迴音", "echo", "Echo"];

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
