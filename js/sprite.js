inlineExternalUse();

function inlineExternalUse() {
    let extSvgs = document.querySelectorAll('use');
    if (extSvgs.length) {
        extSvgs.forEach(function (item, i) {
            let href = item.getAttribute('href')
                ? item.getAttribute('href')
                : item.getAttribute('xlink:href');
            let hrefNew = '#' + href.split('#')[1];
            item.setAttribute('href', hrefNew);

            fetch(href)
                .then(response => response.text())
                .then(data => {
                    let parser = new DOMParser();
                    let svgInline = parser
                        .parseFromString(data, 'application/xml')
                        .querySelector('svg');
                    svgInline.setAttribute('aria-hidden', 'true');
                    svgInline.style.width = 0;
                    svgInline.style.height = 0;
                    svgInline.style.position = 'absolute';
                    document.body.appendChild(svgInline);
                });
        });
    }
}
