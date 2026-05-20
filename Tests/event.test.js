/**
 * @jest-environment jsdom
 */

beforeEach(() => {
    document.body.innerHTML = `
        <nav>
            <div class="div-btn-nav"><a href="index.html">HOME</a></div>
            <div class="div-btn-nav"><a href="cv.html">CV</a></div>
            <div class="div-btn-nav"><a href="projects.html">PROJECTS</a></div>
        </nav>
        <div class="pdf-download-btn">
            <a class="print-btn" href="#">Download CV</a>
        </div>
    `;

    jest.resetModules();
    require('../JavaScript/event');
});

test('home nav div contains correct link', () => {
    const link = document.querySelectorAll('nav div')[0].querySelector('a');
    expect(link.getAttribute('href')).toBe('index.html');
});

test('cv nav div contains correct link', () => {
    const link = document.querySelectorAll('nav div')[1].querySelector('a');
    expect(link.getAttribute('href')).toBe('cv.html');
});

test('projects nav div contains correct link', () => {
    const link = document.querySelectorAll('nav div')[2].querySelector('a');
    expect(link.getAttribute('href')).toBe('projects.html');
});

test('clicking a div with no link logs a warning', () => {
    console.warn = jest.fn();

    // add an empty div to the nav
    const emptyDiv = document.createElement('div');
    document.querySelector('nav').appendChild(emptyDiv);

    // re-attach listeners since we added the div after require
    jest.resetModules();
    require('../JavaScript/event');

    emptyDiv.click();
    expect(console.warn).toHaveBeenCalledWith('No link found in the clicked div.');
});

test('print button exists and has correct class', () => {
    const printBtn = document.querySelector('.pdf-download-btn .print-btn');
    expect(printBtn).not.toBeNull();
});

test('clicking print button calls window.print', () => {
    window.print = jest.fn();
    const printBtn = document.querySelector('.pdf-download-btn .print-btn');
    printBtn.click();
    expect(window.print).toHaveBeenCalled();
});