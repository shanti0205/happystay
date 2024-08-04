function ifHeard(userInput, wantedInput){
    //true false
    return userInput.includes(wantedInput);
}
function xbTalk(text) {
    $(document).ready(()=>{
        // 檢查瀏覽器是否支援 Web Speech API
    if ('speechSynthesis' in window) {
        const synth = window.speechSynthesis;
        const voices = synth.getVoices();
        const utterThis = new SpeechSynthesisUtterance(text);

        // 設置語言為中文（台灣）
        utterThis.lang = 'zh-TW';

        // 嘗試設置特定的語音
        for (let i = 0; i < voices.length; i++) {
            if (voices[i].name === 'Microsoft Yunxia Online (Natural) - Chinese (Mainland)') {
                utterThis.voice = voices[i];
                break;
            }
        }

        // 播放語音
        synth.speak(utterThis);
        voices.forEach(voice => console.log(voice.name));

    } else {
        alert('您的瀏覽器不支援語音合成功能');
    }

    });
    
}
function addXbText(text, mode){
    $(document).ready(()=>{
        let xbHTML=`
            <div class="row">
                <div class="col-12 col-md-6">
                    <div class="row justify-content-center align-items-center">
                        <!--小不說話頭貼比例-->
                        <div class="col-4">
                            <img src="./pic/xiaoBu.png" class="img-fluid bg-white shadow-sm rounded-circle" style="height: 90px;" alt="小布頭貼" >
                        </div>
                        <!--小不說話比例-->
                        <div class="col-8">
                            <p class="rounded-pill bg-light my-2 p-1 shadow-sm ">${text}</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
        if(mode=="checkIn")
            $("#chatHistory_CI").append(xbHTML);
        else    
            $("#chatHistory_CO").append(xbHTML);

        xbTalk(text);
    });
}
function addUserText(text, mode){
    let userHTML=`
        <div class="row justify-content-end align-items-center">
            <div class="col-12 col-md-6">
                <div class="row justify-content-center align-items-center">
                    
                        <!--學生說話比例-->
                        <div class="col-8">
                            <p class="rounded-pill my-2 p-1 shadow-sm " style="background-color:#8FBC8F;color:white;">${text}</p>
                        </div> 
                        <!--學生說話頭貼比例-->
                        <div class="col-4">
                            <img src="./pic/user.png" class="img-fluid bg-white shadow-sm rounded-circle" style="height: 90px;" alt="小布頭貼" >
                        </div>
                </div>
            </div>
        </div>     
    `;
    if(mode=="checkIn")
        $("#chatHistory_CI").append(userHTML);
    else    
        $("#chatHistory_CO").append(userHTML);
}
