inlineExternalUse();

function inlineExternalUse() {
    const extSvgs = document.querySelectorAll('use');

    extSvgs.forEach(useEl => {
        if (!useEl.hasAttribute('data-gradient')) return;

        const href = useEl.getAttribute('href') || useEl.getAttribute('xlink:href');
        if (!href || !href.includes('#')) return;

        const [url, symbolId] = href.split('#');
        const hrefNew = `#${symbolId}`;
        useEl.setAttribute('href', hrefNew);

        fetch(url)
            .then(response => response.text())
            .then(data => {
                const parser = new DOMParser();
                const svgInline = parser
                    .parseFromString(data, 'image/svg+xml')
                    .querySelector('svg');
                svgInline.setAttribute('aria-hidden', 'true');
                svgInline.style.width = 0;
                svgInline.style.height = 0;
                svgInline.style.position = 'absolute';
                document.body.appendChild(svgInline);
            });
    });
}
