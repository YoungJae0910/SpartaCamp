$(document).ready(function(){
	alert('다 로딩됐다!')
});

function q1() {
$.ajax({
    type: "GET",
    url: "http://spartacodingclub.shop/sparta_api/weather/seoul",
    data: {},
    success: function(response){
        let temp = response['temp'];
        $(`#temp`).text(temp);
    }
})
}

