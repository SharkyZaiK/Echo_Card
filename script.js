// 動態數據滾動效果
const dataElement = document.getElementById("data");
let data = "Loading Data...";

setInterval(() => {
    data += " | Echo Bot Active >_o";
    dataElement.textContent = data;
}, 500);

// 聖誕樹動畫
const treeElement = document.getElementById("christmas-tree");
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

// 鼠標跟隨光標效果
const cursor = document.getElementById("cursor");
document.addEventListener("mousemove", (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
});

// 按鈕點擊事件與音效播放
document.getElementById("btn1").addEventListener("click", () => {
    playSound("path/to/sound1.mp3");
    alert("Option 1 Selected!");
});

document.getElementById("btn2").addEventListener("click", () => {
    playSound("path/to/sound2.mp3");
    alert("Option 2 Selected!");
});

document.getElementById("btn3").addEventListener("click", () => {
    playSound("path/to/sound3.mp3");
    alert("Option 3 Selected!");
});

function playSound(src) {
    const audio = new Audio(src);
    audio.play();
}
