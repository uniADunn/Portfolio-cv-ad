/**
 * @jest-environment jsdom
 */

beforeEach(() => {
    document.body.innerHTML = `
        <body>
    <header>
        <nav>
            <ul class="nav-ul">
                <li class="div-btn-nav">
                    <a href="index.html">HOME</a>
                </li>
                <li class="div-btn-nav">
                    <a href="cv.html">CV</a>
                </li>
                <li class="div-btn-nav">
                    <a href="projects.html">PROJECTS</a>
                </li>
            
            </ul>
            
        </nav>
        <div class="pdf-download-btn">
            <a class="print-btn" href="#">Print / Save as PDF</a>
        </div>
    </header>
    `;

    jest.resetModules();
    require('../JavaScript/event');
});

describe('Navigation Button Tests', () => {
    test('Navigation buttons exist and have correct class', () => {
        const navButtons = document.querySelectorAll('.div-btn-nav a');
        expect(navButtons.length).toBe(3);
        expect(navButtons[0].textContent).toBe('HOME');
        expect(navButtons[1].textContent).toBe('CV');
        expect(navButtons[2].textContent).toBe('PROJECTS');
    });

    test('Navigation buttons have correct href', () => {
        const navButtons = document.querySelectorAll('.div-btn-nav a');
        expect(navButtons[0].getAttribute('href')).toBe('index.html');
        expect(navButtons[1].getAttribute('href')).toBe('cv.html');
        expect(navButtons[2].getAttribute('href')).toBe('projects.html');
    });

})


describe('Print Button Tests', () => {
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
});