//Create date variable


//Load HTML DOM
var date=new Date()
var data='Date:'+date.toLocaleDateString()
$(document).ready(function(){
    $('#display_date').html(data)
})
//Define variable to store predicted emotion


//HTML-->JavaScript--->Flask
//Flask--->JavaScript--->HTML

//jQuery selector and click action
//var p_emotion
$(function () {
    $("#predict_button").click(function () {
        //AJAX call
var inputd={'text':$('#text').val()}
        $.ajax({
            type:'POST',
            url:'/predict-emotion',
            data:JSON.stringify(inputd),
            dataType:'json',
            contentType:'application/json',
            success:function(result)
              {
                console.log(result)
                console.log(datas.p-emotions)
                console.log(datas.p-image)
                // Result Received From Flask ----->JavaScript
                p_emo=result.datas.p-emotions
                p_image=result.datas.p-image
                console.log(p_emo,p_image)
                // Display Result Using JavaScript----->HTML
                $('#prediction').html(p_emo)
                $('#prediction').css('display','block')
                $('#emo_img_url').html(p_image)
                $('#emo_img_url').css('display','block')
            },  
            //Error function
            error:function(result){
                alert('not avaible')
            }
        });
    });
})

