// 鼠标点击特效：点击时生成随机卡通小图案
document.addEventListener('click', function(e) {
    const icons = ['⭐', '✨', '🌟', '💫', '💖'];
    const icon = document.createElement('div');
    icon.innerText = icons[Math.floor(Math.random() * icons.length)];
    icon.style.position = 'absolute';
    icon.style.left = e.pageX + 'px';
    icon.style.top = e.pageY + 'px';
    icon.style.fontSize = '24px';
    icon.style.color = '#FFD700';
    icon.style.pointerEvents = 'none';
    icon.style.opacity = '1';
    icon.style.transition = 'opacity 1s ease-out, transform 1s ease-out';

    document.body.appendChild(icon);

    setTimeout(() => {
        icon.style.opacity = '0';
        icon.style.transform = 'translateY(-20px)';
    }, 50);

    setTimeout(() => {
        icon.remove();
    }, 1000);
});
