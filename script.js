document.addEventListener("click", function(event) {
    const emojis = ["⭐", "💖", "🌸", "🎈", "🔥", "🌟"];
    const emoji = document.createElement("div");
    emoji.classList.add("emoji");
    emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
    document.body.appendChild(emoji);

    emoji.style.left = `${event.clientX}px`;
    emoji.style.top = `${event.clientY}px`;
    
    setTimeout(() => {
        emoji.remove();
    }, 1500);
});
