// Sprinkle effect on birthdayPage click
document.addEventListener('DOMContentLoaded', function() {
  const birthday = document.getElementById('birthdayPage');
  if (!birthday) return;
  birthday.addEventListener('click', function(e) {
    // Only trigger if birthdayPage is visible
    if (birthday.style.display === 'none' || getComputedStyle(birthday).display === 'none') return;
    const x = e.clientX;
    const y = e.clientY;
    // A wide range of vibrant colors (rainbow + more)
    const colors = [
      '#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', '#E6B333', '#3366E6', '#999966',
      '#99FF99', '#B34D4D', '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', '#FF99E6',
      '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC', '#66994D', '#B366CC', '#4D8000', '#B33300',
      '#CC80CC', '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399', '#E666B3', '#33991A',
      '#CC9999', '#B3B31A', '#00E680', '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
      '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', '#E64D66', '#4DB380', '#FF4D4D',
      '#99E6E6', '#6666FF', '#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#00FFFF', '#FF00FF',
      '#800000', '#808000', '#008000', '#800080', '#008080', '#000080', '#FFC0CB', '#FFD700',
      '#A52A2A', '#7FFF00', '#D2691E', '#6495ED', '#DC143C', '#00CED1', '#9400D3', '#FF1493',
      '#00BFFF', '#696969', '#1E90FF', '#B22222', '#228B22', '#FFFAF0', '#DCDCDC', '#FFD700',
      '#008000', '#ADFF2F', '#F0FFF0', '#FF69B4', '#CD5C5C', '#4B0082', '#FFFFF0', '#F0E68C',
      '#E6E6FA', '#FFF0F5', '#7CFC00', '#FFFACD', '#ADD8E6', '#F08080', '#E0FFFF', '#FAFAD2',
      '#90EE90', '#D3D3D3', '#FFB6C1', '#FFA07A', '#20B2AA', '#87CEFA', '#778899', '#B0C4DE',
      '#FFFFE0', '#00FF00', '#32CD32', '#FAF0E6', '#FF00FF', '#800000', '#66CDAA', '#0000CD',
      '#BA55D3', '#9370DB', '#3CB371', '#7B68EE', '#00FA9A', '#48D1CC', '#C71585', '#191970',
      '#F5FFFA', '#FFE4E1', '#FFE4B5', '#FFDEAD', '#000080', '#FDF5E6', '#808000', '#6B8E23',
      '#FFA500', '#FF4500', '#DA70D6', '#EEE8AA', '#98FB98', '#AFEEEE', '#DB7093', '#FFEFD5',
      '#FFDAB9', '#CD853F', '#FFC0CB', '#DDA0DD', '#B0E0E6', '#800080', '#663399', '#FF0000',
      '#BC8F8F', '#4169E1', '#8B4513', '#FA8072', '#F4A460', '#2E8B57', '#FFF5EE', '#A0522D',
      '#C0C0C0', '#87CEEB', '#6A5ACD', '#708090', '#FFFAFA', '#00FF7F', '#4682B4', '#D2B48C',
      '#008080', '#D8BFD8', '#FF6347', '#40E0D0', '#EE82EE', '#F5DEB3', '#FFFFFF', '#F5F5F5',
      '#FFFF00', '#9ACD32'
    ];
    const sprinkleCount = 400;
    for (let i = 0; i < sprinkleCount; i++) {
      // All sprinkles scatter randomly, not in a circle
      const angle = Math.random() * 2 * Math.PI;
      const radius = 30 + Math.random() * 70;
      const s = document.createElement('div');
      s.className = 'sprinkle';
      const size = 1 + Math.random() * 2.5;
      s.style.width = s.style.height = size + 'px';
      s.style.position = 'fixed';
      s.style.left = (x - size/2 + Math.cos(angle) * (Math.random() * radius)) + 'px';
      s.style.top = (y - size/2 + Math.sin(angle) * (Math.random() * radius)) + 'px';
      s.style.background = colors[Math.floor(Math.random() * colors.length)];
      s.style.borderRadius = '50%';
      s.style.pointerEvents = 'none';
      s.style.zIndex = 10001;
      s.style.opacity = 1;
      s.style.boxShadow = `0 0 2px 1px ${s.style.background}55, 0 0 4px 2px #fff2`;
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










