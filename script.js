// 點擊顯示或隱藏訊息
document.getElementById('reveal-btn').addEventListener('click', () => {
    const hiddenMsg = document.getElementById('hidden-msg');
    hiddenMsg.style.display = hiddenMsg.style.display === 'block' ? 'none' : 'block';
});

// Close 按鈕功能
document.getElementById('close-btn').addEventListener('click', () => {
    alert('Closing the page...');
});

// Back 按鈕功能
document.getElementById('back-btn').addEventListener('click', () => {
    alert('Going back...');
});
