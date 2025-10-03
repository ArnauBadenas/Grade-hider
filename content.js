// Select all grade cells
let gradeCells = document.querySelectorAll('td.column-grade');

gradeCells.forEach(cell => {
    let text = cell.textContent.trim().replace(',', '.'); // handle decimal commas
    let value = parseFloat(text);

    // Only replace if it's a number
    if (!isNaN(value)) {
        cell.dataset.originalGrade = text;   // store original grade
        cell.textContent = value >= 50 ? "Passed" : "Failed";
        cell.style.fontWeight = "bold";
        cell.style.color = value >= 50 ? "green" : "red";

        // Show original grade on hover
        cell.addEventListener('mouseenter', () => {
            cell.textContent = cell.dataset.originalGrade;
            cell.style.color = "black";      // optional: show as normal text
        });

        cell.addEventListener('mouseleave', () => {
            cell.textContent = value >= 50 ? "Passed" : "Failed";
            cell.style.color = value >= 50 ? "green" : "red";
        });

    } else {
        cell.textContent = "Not graded";
    }
});
