// Almacenar cats en variables
var cat1 = $('#cat1');
var cat2 = $('#cat2');
var cat3 = $('#cat3');

// Almacenar shows en variables
var show1 = $('.show1');
var show2 = $('.show2');
var show3 = $('.show3');

//Variable de estado
var state = 0;


function fs1() {
    show1.css('display','block');
    show2.css('display','none');
    show3.css('display','none'); 
}
function fs2() {
    show1.css('display','none');
    show2.css('display','block');
    show3.css('display','none'); 
}
function fs3() {
    show1.css('display','none');
    show2.css('display','none');
    show3.css('display','block'); 
}





cat1.on('click',function() {
	fs1();
});
cat2.on('click',function() {
	fs2();
});
cat3.on('click',function() {
	fs3();
});