// Select all grade cells
let gradeCells = document.querySelectorAll('td.column-grade');

gradeCells.forEach(cell => {
    let text = cell.textContent.trim().replace(',', '.'); // handle decimal commas
    let value = parseFloat(text);

    // Only replace if it's a number
    if (!isNaN(value)) {
        cell.textContent = value >= 50 ? "Passed" : "Failed"; // threshold 50
        cell.style.fontWeight = "bold";
        cell.style.color = value >= 50 ? "green" : "red";
    }else{
        cell.textContent = "Not graded";

    }
});
