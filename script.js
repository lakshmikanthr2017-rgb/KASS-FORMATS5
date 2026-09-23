function addFamilyRow() {
    const table = document.getElementById("familyTable").getElementsByTagName('tbody')[0];
    const rowCount = table.rows.length + 1;
    const newRow = table.insertRow();

    newRow.innerHTML = `
        <td>${rowCount}</td>
        <td><input type="text" placeholder="Relation / ಸಂಬಂಧ"></td>
        <td><input type="text" placeholder="Name / ಹೆಸರು"></td>
        <td><input type="date"></td>
        <td><input type="text" placeholder="Aadhaar No"></td>
        <td class="no-print"><button type="button" onclick="deleteRow(this)" class="btn-del">X</button></td>
    `;
}

function deleteRow(button) {
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

document.addEventListener('DOMContentLoaded', () => {
    console.log("KASS All Forms Loaded for Prepared by: LAKSHMIKANTH R (Mob:9844444871)");
});
