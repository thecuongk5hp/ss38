  document.addEventListener('DOMContentLoaded', function() {
    const overlay = document.getElementById('overlay');
    const content = document.getElementById('content');
    let percent = 0;
    let interval = setInterval(function() {
      content.textContent = `${percent}%`;
      overlay.style.opacity = percent / 100;
      content.style.opacity = percent / 100;
      if (percent === 100) {
        clearInterval(interval);
      }
      percent++;
    }, 50);
  });
