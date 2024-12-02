//varibles
let checkInUserInput = "";
//functions
function getCheckInInput(){

    return $("#checkInInput").val();
}



function checkForCheckInAction() {
    let action;

    if (ifHeard(checkInUserInput, "辦理入住")) {
        action = "checkIn";
    }else if (ifHeard(checkInUserInput, "名字")) {
        action = "name"; 
    }else if (ifHeard(checkInUserInput, "護照")) {
        action = "passport";
    }else if (ifHeard(checkInUserInput, "五月")||ifHeard(checkInUserInput, "5月")) {
        action = "may";
    }else if (ifHeard(checkInUserInput, "預訂")) {
        action = "booking";
    }else if (ifHeard(checkInUserInput, "注意")) {
        action = "note";
    }else {
        action = "unknown";
    }
    

    switch (action) {
        case "checkIn":
            addXbText("請問您的名字是什麼?","checkIn");
            break;
        case "name":
            addXbText("請出示您的證件。","checkIn");
            break;
        case "passport":
            addXbText("請問您預訂的住宿時間是?","checkIn");
            break;
        case "may":
            addXbText("請問您預訂什麼房型呢?","checkIn");
            break;
        case "booking":
            addXbText("好的，這是您的房卡。","checkIn");
            break;
        case "note":
            addXbText("有的，請您在退房日上午十一點前退房，祝您住宿愉快。","checkIn");
            break;
        default:
            addXbText("不好意思，請再說一次!","checkIn");
            break; 
    }
}
//main
$(document).ready(()=>{ 
    
 //處裡使用者之訊息
    $("#checkInInput").on("keyup", (event) => {
        if(event.keyCode==13){
            checkInUserInput = getCheckInInput();
            addUserText(checkInUserInput,"checkIn");
            checkForCheckInAction();
            $("#checkInInput").val("");
            $('html, body').scrollTop(0);
        }
    });

})
