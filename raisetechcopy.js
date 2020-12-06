$(function(){
//   const ham = document.getElementById('ham');
//   ham.addEventListener('click', function() {
// 	alert('test');
// });

  $('#ham').on('click', function(){
    $('.p-gnavi').toggleClass('u-forwide p-gnavi-ham');
  });
});