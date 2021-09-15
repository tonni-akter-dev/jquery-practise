// $('.btn').click(function() {
//     $('#div1').hide(2000).show(3000);
// });
// $('.btn').click(function() {
//     $('#div1').toggle(2000);
// });

$(".btn").click(function(){
    $("#div1").animate({
      left: '250px',
      opacity: '0.5',
      height: '500px',
      width: '500px'
    });
  }); 

// $('.btn').click(function () {
//     $('#div1').animate({
//         height: '400px',
//         width: '900px',
//         backgroundColor: "red",
//         opacity: '0.5'
//     },1000);
// });



