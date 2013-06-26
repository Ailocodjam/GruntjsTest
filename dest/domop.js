$(document).ready(function(){
        var libar = new Libra($("#libra")),
        BALL_COUNT = 12,
        r = Math.floor(Math.random()*BALL_COUNT); 
        result_ball_list = [];
        for(var i=0;i<BALL_COUNT;i++){
                    idx = i+1;  
                    ball = new Ball(libra,$("#balls ul"),idx);
                    if(i==r){
                            ball.rndWeight(); 
                            libra.r_ball = ball;
                    }
                    result_ball_list.push(["<option value='>"+idx+"'>",idx,"'>"].join(""));
         }

         $("#ball-idx").html(result_ball_list.join('\n'));
         $("#btn-submit").click(function(){

         });
                    //....
});
