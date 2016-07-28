$(function(){
   var tu=$('.two .tu');
    var kaiguan=true;
    move=function(n,fangxiang){
        var now=$('.two .now');

        var nn=(fangxiang==='left'?'right':'left');
        now.addClass(fangxiang)
            .delay(600)
            .queue(function(){
                $(this)
                    .removeClass('now')
                    .removeClass(fangxiang)
                    .dequeue();
                kaiguan=true;
            })
        $(n).addClass(nn);
        $(n).get(0).offsetWidth;
        $(n).removeClass(nn);
        $(n).addClass('now')
    }
    $(document).on('mousewheel',function(e){
        var ee=e.originalEvent.deltaY;
        if(ee>0){

            if(kaiguan){
                console.log(kaiguan)
                var kk=$('.now');
                xiayige=kk.next();
                if(xiayige.length){
                    xiayige=kk.next();
                }else {
                    xiayige=$('.tu').eq(0);
                }
                move(xiayige,'left');
                kaiguan=false;

            }else{
                return;
            }
        }
        if(ee<0){

            if(kaiguan){
                console.log(kaiguan)
                var kk=$('.now');
                xiayige=kk.next();
                if(xiayige.length){
                    xiayige=kk.next();
                }else {
                    xiayige=$('.tu').eq(0);
                }
                move(xiayige,'right');
                kaiguan=false;

            }else{
                return;
            }
        }
    })
});