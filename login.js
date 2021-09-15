// $('#login-btn').click(function () {
//     var pas1 = $('#pass1').val();
//     $('#pass1').val('');
//     var pas2 = $('#pass2').val();
//     $('#pass2').val('');
//     if (pas1 != '' && pas2 != '') {
//         if (pas1 == pas2) {
//             alert('ogin successful');
//         }
//         else {
//             alert('you have entered wrong pass');
//         }
//     }
//     else {
//         alert('please type password')}
// });

$('#login-btn').click(function() {
    const pas1 = $('#pass1').val();
    $('#pass1').val('');
    // console.log(pas1);
    const pas2 = $('#pass2').val();
    $('#pass2').val('');
// console.log(pas2);
if (pas1 !='' && pas2!='') {
    if (pas1 == pas2) {
        alert('login successfully')
    } else {
        alert('you have entered wrong password');
    }
}
else {
    alert('please type password');
}
})