function insertNum(number) {
    var output = $('#result').val();
    // console.log(output);
    // output===?'' 4
    var r = output + number  //8
    $('#result').val(r);

}
function clearResult() {
    $('#result').val('');
}
function calculate() {
    var result = eval($('#result').val());
    $('#result').val(result);
}
function deletNum() {
   var value= $('#result').val();
if (value != '') {
    $('#result').val(value.slice(0, -1));
    $('#result').val('');
}
}