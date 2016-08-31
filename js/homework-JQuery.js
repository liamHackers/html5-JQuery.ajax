$("#mybutton").click(function(){alert("gggg")});
function getMymessage() {//或者使用jQuery中的$("#buttonID").click({ });
    var stu_number_display = $("#stu_number_display").val();
    var stu_name_display = $("#stu_name_display").val();
    var stu_sex_display = $("[name='stu_sex_display']").filter(":checked");
    var stu_sex_display_value = stu_sex_display.val();
    var stu_phone_display = $("#stu_phone_display").val();
    var stu_email_display = $("#stu_email_display").val();
    var stu_age_display = $("#stu_age_display").val();
    var stu_born_display = $("#stu_born_display").val();
    var stu_class_display = $("#stu_class_display").val();
    var undo_badminton_display;
    var undo_football_display;
    var undo_basketball_display;
    var ajaxCallUrl = "http://localhost:8080/servlet.jsp";//服务器接受以及返回json数据
    if($("#undo_basketball_display").is(':checked')){
        undo_basketball_display = $("#undo_basketball_display").val();
    }
    if($("#undo_football_display").is(':checked')){
        undo_football_display = $("#undo_football_display").val();
    }
    if($("#undo_badminton_display").is(':checked')){
        undo_badminton_display = $("#undo_badminton_display").val();
    }
    $.ajax({
        cache: true,
        type: "POST",
        url:ajaxCallUrl,
        data:{
            'stu_number_display' : stu_number_display,
            'stu_name_display' : stu_name_display,
            'stu_sex_display_value':stu_sex_display_value,
            'stu_phone_display':stu_phone_display,
            'stu_email_display':stu_email_display,
            'stu_age_display':stu_age_display,
            'stu_born_display':stu_born_display,
            'stu_class_display':stu_class_display,
            'undo_badminton_display':undo_badminton_display,
            'undo_football_display':undo_football_display,
            'undo_basketball_display':undo_basketball_display
        },
        error: function(request) {
            debugger;
            alert("Connection error");
        },
        success: function(rtn) {
            var obj = eval("("+rtn+")");
            var number = obj.stu_mnumber;
            var name = obj.stu_mname;
            var sex = obj.stu_msex;
            var phone = obj.stu_mphone;
            var email = obj.stu_memail;
            var age = obj.stu_mage;
            var born = obj.stu_mborn;
            var mclass = obj.stu_mclass;
            var badminton = obj.stu_mbadminton;
            var football = obj.stu_mfootball;
            var basketball = obj.stu_mbasketball;
            $("#stu_number").val(number);
            $("#stu_name").val(name);
            $("input:radio").removeAttr("checked");
            $("input:radio[value='"+sex+"']").attr('checked','true');
            $("#stu_phone").val(phone);
            $("#stu_email").val(email);
            $("#stu_age").val(age);
            $("#stu_born").val(born);
            $("#stu_class").val(mclass);
            if(basketball!=null){
                $("#undo_basketball").attr('checked','true');
            }else $("#undo_basketball").removeAttr("checked");

            if(badminton!=null){
                $("#undo_badminton").attr('checked','true');
            }else $("#undo_badminton").removeAttr("checked");

            if(football!=null){
                $("#undo_football").attr('checked','true');
            }else $("#undo_football").removeAttr("checked");


        }
    });
}