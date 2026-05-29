const printBtn = document.querySelector('.pdf-download-btn .print-btn');
if(printBtn){
    printBtn.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the default link behavior
    window.print(); // Trigger the print dialog
    });
}
