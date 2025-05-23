(() => {
    const openBtn = document.querySelector('.header-menu-open');
    const closeBtn = document.querySelector('.header-menu-close');
    const menu = document.querySelector('.header-menu');
    const body = document.body;
    const links = document.querySelectorAll('.header-link');

    openBtn.addEventListener('click', () => {
        menu.classList.add('active');
        body.classList.add('no-scroll');
        openBtn.setAttribute('aria-expanded', 'true');
    });

    closeBtn.addEventListener('click', () => {
        menu.classList.remove('active');
        body.classList.remove('no-scroll');
        openBtn.setAttribute('aria-expanded', 'false');
    });

    setTimeout(() => {
        menu.classList.remove('closing');
    }, 800);

    links.forEach(link => {
        link.addEventListener('click', () => {
            links.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            menu.classList.remove('active');
            body.classList.remove('no-scroll');
            openBtn.setAttribute('aria-expanded', 'false');
        });
    });
})();
