    function downVote(down_btn) {
        //get index of these btn and get original state
        // let index=parseInt(down_btn.id.split('').pop());
        // let cips='{{cips}}';
        // let original_state=cips[index].vote_state;
        // let new_state=original_state;
        // //show change result compare to original state
        //     //up -> cancel up and select down
        // if(original_state===1) {
        //     switchState(down_btn, index, 1);
        //     new_state=2;
        // }
        //     //down -> cancel down
        // else if (original_state===2) {
        //     switchDownState(down_btn, false);
        //     new_state=0;
        // }
        //     //default->select down
        // else {
        //     new_state=2;
        //     switchDownState(down_btn, true);
        // }
        // //request server
           var data={
        'name':'kikay',
        'age':18
    };
         $.ajax({
        type:'GET',
        url:'../test/',
        data:data,
        dataType:'json',//希望服务器返回json格式的数据
        success:function(data){
            alert(JSON.stringify(data));
            alert(data['test'])
        }
    });

        // let NewCip={'commentId':1,
        // 'Ip':1,
        // 'vote_state':new_state};
        // let responseObj=$.ajax({
        //     url:'',
        //     data:NewCip
        // });



    }