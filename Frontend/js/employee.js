getAllEmployee();
function saveEmployee() {
    let name = $('#exampleFormControlInput2').val();
    let address = $('#exampleFormControlInput3').val();
    let number = $('#exampleFormControlInput4').val();

    $.ajax({
        method: "POST",
        contentType: "application/json",
        url: "http://localhost:8080/api/v1/employee/saveEmployee",
        async: true,
        data: JSON.stringify({
            "empID": "",
            "empName": name,
            "empAddress": address,
            "empMNumber": number
        }),
        success: function(data) {
            alert("Employee saved successfully");
            getAllEmployee();
        },
        error: function(xhr, exception) {
            let errorMessage = 'Error occurred: ';
            if (xhr.status === 0) {
                errorMessage += 'Not connected. Verify network.';
            } else if (xhr.status == 404) {
                errorMessage += 'Requested page not found. [404]';
            } else if (xhr.status == 500) {
                errorMessage += 'Internal Server Error [500].';
            } else if (exception === 'parsererror') {
                errorMessage += 'Requested JSON parse failed.';
            } else if (exception === 'timeout') {
                errorMessage += 'Time out error.';
            } else if (exception === 'abort') {
                errorMessage += 'Ajax request aborted.';
            } else {
                errorMessage += 'Uncaught Error. ' + xhr.responseText;
            }
            alert(errorMessage);
        }
    });
}

function updateEmployee() {
    let empID = $('#exampleFormControlInput1').val();
    let name = $('#exampleFormControlInput2').val();
    let address = $('#exampleFormControlInput3').val();
    let number = $('#exampleFormControlInput4').val();

    $.ajax({
        method: "PUT",
        contentType: "application/json",
        url: "http://localhost:8080/api/v1/employee/updateEmployee",
        async: true,
        data: JSON.stringify({
            "empID": empID,
            "empName": name,
            "empAddress": address,
            "empMNumber": number
        }),
        success: function(data) {
            alert("Updated");
            getAllEmployee();
        },
        error: function(xhr, exception) {
            let errorMessage = 'Error occurred: ';
            if (xhr.status === 0) {
                errorMessage += 'Not connected. Verify network.';
            } else if (xhr.status == 404) {
                errorMessage += 'Requested page not found. [404]';
            } else if (xhr.status == 500) {
                errorMessage += 'Internal Server Error [500].';
            } else if (exception === 'parsererror') {
                errorMessage += 'Requested JSON parse failed.';
            } else if (exception === 'timeout') {
                errorMessage += 'Time out error.';
            } else if (exception === 'abort') {
                errorMessage += 'Ajax request aborted.';
            } else {
                errorMessage += 'Uncaught Error. ' + xhr.responseText;
            }
            alert(errorMessage);
        }
    });
}

function deleteEmployee() {
    let empID = $('#exampleFormControlInput1').val();

    $.ajax({
        method: "DELETE",
        url: "http://localhost:8080/api/v1/employee/deleteEmployee/"+empID,
        async: true,
        success: function(data) {
            alert("Deleted");
            getAllEmployee();
        },
        error: function(xhr, exception) {
            let errorMessage = 'Error occurred: ';
            if (xhr.status === 0) {
                errorMessage += 'Not connected. Verify network.';
            } else if (xhr.status == 404) {
                errorMessage += 'Requested page not found. [404]';
            } else if (xhr.status == 500) {
                errorMessage += 'Internal Server Error [500].';
            } else if (exception === 'parsererror') {
                errorMessage += 'Requested JSON parse failed.';
            } else if (exception === 'timeout') {
                errorMessage += 'Time out error.';
            } else if (exception === 'abort') {
                errorMessage += 'Ajax request aborted.';
            } else {
                errorMessage += 'Uncaught Error. ' + xhr.responseText;
            }
            alert(errorMessage);
        }
    });
}

function getAllEmployee() {
    $.ajax({
        method: "GET",
        contentType: "application/json",
        url: "http://localhost:8080/api/v1/employee/getAllEmployee",
        async: true,
        success: function(data) {
            if (data.code === "00") {
                $('#empTable').empty();
                for (let emp of data.content) {
                    let empID = emp.empID;
                    let name = emp.empName;
                    let address = emp.empAddress;
                    let number = emp.empMNumber;

                    let row = `<tr>
                        <td>${empID}</td>
                        <td>${name}</td>
                        <td>${address}</td>
                        <td>${number}</td>
                    </tr>`;
                    $('#empTable').append(row);
                }
            }
        },
        error: function(xhr, exception) {
            let errorMessage = 'Error occurred: ';
            if (xhr.status === 0) {
                errorMessage += 'Not connected. Verify network.';
            } else if (xhr.status == 404) {
                errorMessage += 'Requested page not found. [404]';
            } else if (xhr.status == 500) {
                errorMessage += 'Internal Server Error [500].';
            } else if (exception === 'parsererror') {
                errorMessage += 'Requested JSON parse failed.';
            } else if (exception === 'timeout') {
                errorMessage += 'Time out error.';
            } else if (exception === 'abort') {
                errorMessage += 'Ajax request aborted.';
            } else {
                errorMessage += 'Uncaught Error. ' + xhr.responseText;
            }
            alert(errorMessage);
        }
    });
}


$(document).ready(function() {
    $(document).on('click', '#empTable tr', function() {
        var col0 = $(this).find('td:eq(0)').text();
        var col1 = $(this).find('td:eq(1)').text();
        var col2 = $(this).find('td:eq(2)').text();
        var col3 = $(this).find('td:eq(3)').text();

        $('#exampleFormControlInput1').val(col0);
        $('#exampleFormControlInput2').val(col1);
        $('#exampleFormControlInput3').val(col2);
        $('#exampleFormControlInput4').val(col3);
    });
});
