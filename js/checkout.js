//varibles
let checkOutUserInput = "";
//functions
function getCheckOutInput(){
    return $("#checkOutInput").val();
}



function checkForCheckOutAction() {
    let action;

    if (ifHeard(checkOutUserInput, "我要辦理退房")) {
        action = "checkOut";
    }else if (ifHeard(checkOutUserInput, "我的房號是")) {
        action = "room"; 
    }else if (ifHeard(checkOutUserInput, "需要")&&ifHeard(checkOutUserInput, "謝謝")) {
        action = "needandthx";
    }else if (ifHeard(checkOutUserInput, "需要")&&!ifHeard(checkOutUserInput, "謝謝")) {
        action = "need";

    }else {
        action = "unknown";
    }
    

    switch (action) {
        case "checkOut":
            addXbText("好的，請問您房號是多少？","checkOut");
            break;
        case "room":
            addXbText("好的，我們確認一下。請問您需要發票嗎？","checkOut");
            break;
        case "needandthx":
            addXbText("不客氣，祝您旅途愉快！","checkOut");
            break;
        case "need":
            addXbText("好的，祝您旅途愉快！","checkOut");
            break;
        
        default:
            addXbText("不好意思，請再說一次!","checkOut");
            break; 
    }
}
//main
$(document).ready(()=>{ 
    
 //處裡使用者之訊息
    $("#checkOutInput").on("keyup", (event) => {
        if(event.keyCode==13){
            checkOutUserInput = getCheckOutInput();
            addUserText(checkOutUserInput,"checkOut");
            checkForCheckOutAction();
            $("#checkOutInput").val("");
            $('html, body').scrollTop(0);
        }
    });

})
