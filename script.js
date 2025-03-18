// 星空背景
const canvas = document.getElementById('starsCanvas');
const ctx = canvas.getContext('2d');

function setCanvasSize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
setCanvasSize();
window.addEventListener('resize', setCanvasSize);

let stars = [];
for (let i = 0; i < 100; i++) {
    stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2,
        dx: Math.random() * 0.5 - 0.25,
        dy: Math.random() * 0.5 - 0.25
    });
}

function animateStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'white';
    
    stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
        
        star.x += star.dx;
        star.y += star.dy;
        
        if (star.x < 0 || star.x > canvas.width) star.dx *= -1;
        if (star.y < 0 || star.y > canvas.height) star.dy *= -1;
    });

    requestAnimationFrame(animateStars);
}
animateStars();

// ✨ 鼠标点击特效
document.addEventListener('click', function(e) {
    let icons = ['⭐', '✨', '🌟', '💫', '💖'];
    let icon = document.createElement('div');
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
