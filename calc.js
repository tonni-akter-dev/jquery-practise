function insertnumber(number) {
    // alert(number);
    var existingNumber = $('#result').val();
    $('#result').val(existingNumber + number);
}
function clearResult() {
    $('#result').val('');
}
function calculate() {
  var result=  eval($('#result').val());
    $('#result').val(result);
}
function deleteNum() {
    var presentValue = $('#result').val();
    if (presentValue != '') {
        $('#result').val(presentValue.slice(0, -1));
    }
}