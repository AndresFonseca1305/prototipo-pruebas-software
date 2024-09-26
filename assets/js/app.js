// script.js
document.getElementById('employeeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const employeeCode = document.getElementById('employeeCode').value;
    const employeeName = document.getElementById('employeeName').value;
    const employeeType = document.getElementById('employeeType').value;
    const employeeTime = document.getElementById('employeeTime').value;

    let errors = [];

    // Validación del código del empleado (número de 3 dígitos, excluyendo 000)
    if (!/^[1-9]\d{2}$/.test(employeeCode)) {
        errors.push("El código del empleado debe ser un número entero de 3 dígitos (no 000).");
    }

    // Validación del nombre del empleado (máximo 30 caracteres)
    if (employeeName.length > 30 || employeeName.trim() === "") {
        errors.push("El nombre del empleado debe tener un máximo de 30 caracteres y no puede estar vacío.");
    }

    // Validación del tiempo en la institución (entre 1 y 600 meses)
    if (employeeTime < 1 || employeeTime > 600) {
        errors.push("El tiempo en la institución debe estar entre 1 y 600 meses.");
    }

    if (errors.length > 0) {
        document.getElementById('result').innerHTML = errors.join('<br>');
        document.getElementById('result').style.color = 'red';
    } else {
        document.getElementById('result').innerHTML = "¡Registro exitoso!";
        document.getElementById('result').style.color = 'green';
    }
});
