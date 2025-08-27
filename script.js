// Sprinkle effect on birthdayPage click
document.addEventListener('DOMContentLoaded', function() {
  const birthday = document.getElementById('birthdayPage');
  if (!birthday) return;
  birthday.addEventListener('click', function(e) {
    // Only trigger if birthdayPage is visible
    if (birthday.style.display === 'none' || getComputedStyle(birthday).display === 'none') return;
    const x = e.clientX;
    const y = e.clientY;
    const colors = ['#ff4d4d', '#ffd24d', '#6be06b', '#4dc3ff', '#c96bff'];
    const sprinkleCount = 250;
    for (let i = 0; i < sprinkleCount; i++) {
      // All sprinkles scatter randomly, not in a circle
      const angle = Math.random() * 2 * Math.PI;
      const radius = 30 + Math.random() * 70;
      const s = document.createElement('div');
      s.className = 'sprinkle';
      const size = 2 + Math.random() * 5;
      s.style.width = s.style.height = size + 'px';
      s.style.position = 'fixed';
      s.style.left = (x - size/2 + Math.cos(angle) * (Math.random() * radius)) + 'px';
      s.style.top = (y - size/2 + Math.sin(angle) * (Math.random() * radius)) + 'px';
      s.style.background = colors[Math.floor(Math.random() * colors.length)];
      s.style.borderRadius = '50%';
      s.style.pointerEvents = 'none';
      s.style.zIndex = 10001;
      s.style.opacity = 1;
      s.style.boxShadow = `0 0 8px 2px ${s.style.background}55, 0 0 16px 4px #fff2`;
      s.style.transition = 'transform 0.7s cubic-bezier(.17,.67,.83,.67), opacity 0.5s';
      document.body.appendChild(s);
      // Animate outward in a rough, magical burst and fade
      setTimeout(() => {
        s.style.transform = `translate(${Math.cos(angle) * radius}px, ${Math.sin(angle) * radius}px) scale(${0.5 + Math.random() * 0.7})`;
        s.style.opacity = 0;
      }, 10);
      setTimeout(() => s.remove(), 700);
    }
  });
});
document.getElementById("giftBox").addEventListener("click", () => {
    const gift = document.getElementById("giftBox");
    const birthdayPage = document.getElementById("birthdayPage");

    gift.style.transition = "all 0.8s ease";
    gift.style.opacity = "0";
    gift.style.transform = "scale(0.5)";

    setTimeout (()=> {
        gift.style.display = "none";
        birthdayPage.style.display = "block";
        birthdayPage.style.opacity = "0";
        birthdayPage.style.transition ="opacity 1s ease";
        setTimeout(() => 
        birthdayPage.style.opacity = "1", 50);
    }, 800);
});










