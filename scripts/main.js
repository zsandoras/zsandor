(function () {
  const body = document.body;

  function initCursor() {
    const dot = document.createElement('div');
    dot.className = 'cursor-dot';
    const outline = document.createElement('div');
    outline.className = 'cursor-outline';
    body.append(dot, outline);

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let outlineX = mouseX;
    let outlineY = mouseY;

    const render = () => {
      outlineX += (mouseX - outlineX) * 0.12;
      outlineY += (mouseY - outlineY) * 0.12;
      outline.style.transform = `translate3d(${outlineX}px, ${outlineY}px, 0)`;
      requestAnimationFrame(render);
    };

    render();

    document.addEventListener('pointermove', (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      dot.style.opacity = '1';
      outline.style.opacity = '1';
    });

    document.addEventListener('pointerleave', () => {
      dot.style.opacity = '0';
      outline.style.opacity = '0';
    });

    document.addEventListener('pointerdown', () => {
      dot.classList.add('is-clicked');
      outline.classList.add('is-clicked');
    });

    document.addEventListener('pointerup', () => {
      dot.classList.remove('is-clicked');
      outline.classList.remove('is-clicked');
    });
  }

  function initAudioPlayers() {
    const players = document.querySelectorAll('[data-player]');

    players.forEach((player) => {
      const audio = player.querySelector('audio');
      const toggle = player.querySelector('[data-player-toggle]');
      const progress = player.querySelector('.progress-bar');
      let rafId = null;

      const updateProgress = () => {
        if (!audio.duration) return;
        const percentage = (audio.currentTime / audio.duration) * 100;
        progress.style.width = `${percentage}%`;
        rafId = requestAnimationFrame(updateProgress);
      };

      const play = () => {
        audio.play().catch(() => {});
        player.classList.add('is-playing');
        toggle.textContent = '❚❚';
        rafId = requestAnimationFrame(updateProgress);
      };

      const pause = () => {
        audio.pause();
        player.classList.remove('is-playing');
        toggle.textContent = '▶';
        if (rafId) {
          cancelAnimationFrame(rafId);
        }
      };

      toggle.addEventListener('click', () => {
        if (audio.paused) {
          play();
        } else {
          pause();
        }
      });

      audio.addEventListener('ended', () => {
        pause();
        progress.style.width = '0%';
      });
    });
  }

  function initAdminPanel() {
    const loginForm = document.querySelector('[data-admin-login]');
    const gate = document.querySelector('[data-admin-gate]');
    const dashboard = document.querySelector('[data-admin-dashboard]');
    const message = document.querySelector('[data-admin-message]');

    if (!loginForm || !gate || !dashboard) return;

    const stored = sessionStorage.getItem('zsandorAdmin');
    if (stored === 'true') {
      gate.hidden = true;
      dashboard.hidden = false;
      return;
    }

    loginForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const data = new FormData(loginForm);
      const username = (data.get('username') || '').toString().trim();
      const password = (data.get('password') || '').toString().trim();

      if (username === 'admin' && password === 'admin') {
        gate.hidden = true;
        dashboard.hidden = false;
        sessionStorage.setItem('zsandorAdmin', 'true');
        if (message) {
          message.textContent = '';
        }
      } else if (message) {
        message.textContent = 'Lorem ipsum dolor sit amet.';
      }
    });

    const addPageButton = document.querySelector('[data-add-page]');
    const exportButton = document.querySelector('[data-export-site]');
    const grid = document.querySelector('[data-admin-grid]');
    const template = document.getElementById('admin-page-template');

    if (addPageButton && template && grid) {
      addPageButton.addEventListener('click', () => {
        const clone = template.content.firstElementChild.cloneNode(true);
        const count = grid.children.length + 1;
        clone.querySelector('h3').textContent = `page-${count}.html`;
        grid.appendChild(clone);
      });
    }

    if (exportButton) {
      exportButton.addEventListener('click', () => {
        const toast = document.createElement('div');
        toast.className = 'admin-toast';
        toast.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
        document.body.appendChild(toast);
        requestAnimationFrame(() => toast.classList.add('is-visible'));
        setTimeout(() => {
          toast.classList.remove('is-visible');
          setTimeout(() => toast.remove(), 400);
        }, 2400);
      });
    }

    document.addEventListener('click', (event) => {
      const button = event.target.closest('[data-preview]');
      if (!button) return;
      const card = button.closest('.admin-card');
      if (!card) return;
      card.classList.add('is-highlighted');
      setTimeout(() => card.classList.remove('is-highlighted'), 700);
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    initCursor();
    initAudioPlayers();
    initAdminPanel();
  });
})();
