function calculatePercent(row) {
    var grade1 = parseFloat(document.getElementById('grade1_' + row).value);
    var grade2 = parseFloat(document.getElementById('grade2_' + row).value);
    var weight = parseFloat(document.getElementById('weight_' + row).value);
    var percentCell = document.getElementById('percent_' + row);

    if (!isNaN(grade1) && !isNaN(grade2) && grade2 !== 0) {
        var percent = ((grade1 / grade2) * 100).toFixed(1);
        percentCell.textContent = percent + '/100';
    } else {
        percentCell.textContent = ''; // Clear the percentage cell if inputs are invalid
    }
}

function addRow() {
    var table = document.getElementById('gradeTable');
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);

    cell1.innerHTML = 'Activity ' + (table.rows.length - 1);
    cell2.innerHTML = 'A' + (table.rows.length - 1);
    cell3.innerHTML = '<input type="number" id="weight_' + (table.rows.length - 1) + '" name="weight_' + (table.rows.length - 1) + '" oninput="calculatePercent(' + (table.rows.length - 1) + ')">';
    cell4.innerHTML = '<input type="number" id="grade1_' + (table.rows.length - 1) + '" name="grade1_' + (table.rows.length - 1) + '" oninput="calculatePercent(' + (table.rows.length - 1) + ')"> / <input type="number" id="grade2_' + (table.rows.length - 1) + '" name="grade2_' + (table.rows.length - 1) + '" oninput="calculatePercent(' + (table.rows.length - 1) + ')">';
    cell5.innerHTML = '<span id="percent_' + (table.rows.length - 1) + '"></span>';
}

function calculateMean() {
    var table = document.getElementById('gradeTable');
    var sum = 0;
    var count = 0;

    for (var i = 1; i < table.rows.length; i++) {
        var grade1 = parseFloat(document.getElementById('grade1_' + i).value);
        var grade2 = parseFloat(document.getElementById('grade2_' + i).value);

        if (!isNaN(grade1) && !isNaN(grade2) && grade2 !== 0) {
            sum += grade1 / grade2;
            count++;
        }
    }

    if (count > 0) {
        var mean = ((sum / count) * 100).toFixed(1);
        document.getElementById('meanResult').textContent = mean + '/100';
    } else {
        document.getElementById('meanResult').textContent = '';
    }
}

function calculateWeighted() {
    var table = document.getElementById('gradeTable');
    var sum = 0;
    var totalWeight = 0;

    for (var i = 1; i < table.rows.length; i++) {
        var grade1 = parseFloat(document.getElementById('grade1_' + i).value);
        var grade2 = parseFloat(document.getElementById('grade2_' + i).value);
        var weight = parseFloat(document.getElementById('weight_' + i).value);

        if (!isNaN(grade1) && !isNaN(grade2) && !isNaN(weight) && grade2 !== 0) {
            sum += (grade1 / grade2) * weight;
            totalWeight += weight;
        }
    }

    if (totalWeight > 0) {
        var weighted = ((sum / totalWeight) * 100).toFixed(1);
        document.getElementById('weightedResult').textContent = weighted + '/100';
    } else {
        document.getElementById('weightedResult').textContent = '';
    }
}