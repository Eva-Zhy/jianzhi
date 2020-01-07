let main_height, main_width, html_width, html_height;
let dom_arr = [
    {
        id:'music',
        width:80,
        height:80,
        left:625,
        top:70
    },
    {
        id:'jiandao',
        width:72,
        height:66,
        left: -1,
        top:15
    },
    {
        id:'loading-bar',
        width:750,
        height:100,
        left: -1,
        top:-1
    },
    {
        id:'xuxian',
        width:-1,
        height:100,
        left: -1,
        top:46
    },
];

$(document).ready(function () {
    resize()
});

function resize() {
    if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
        console.log('移动端')
        $("#main-v").css("width", "100vw");
        $("#main-v").css("height", "100vh");

        main_height = $("#main-v").height();
        main_width = $("#main-v").width();

    } else {
        console.log('pc端')
        html_width = document.body.clientWidth;
        html_height = document.body.clientHeight;
        main_height = $("#main-v").height();
        main_width = main_height * 0.517;
        console.log("main_width", main_width);
        console.log("main_height", main_height);
        let main_left = (html_width - main_width) / 2;
        $("#main-v").css("width", main_width + "px");
        $("#main-v").css("left", main_left + "px");
    }

    for (let i = 0; i < dom_arr.length; i++) {
        if (dom_arr[i].width == -1) {
        }else {
            $("#"+dom_arr[i].id).css("width",dom_arr[i].width/750  * main_width);
        }
        if (dom_arr[i].height == -1) {
        }else {
            $("#"+dom_arr[i].id).css("height",dom_arr[i].height/750 * main_width);
        }
        if (dom_arr[i].left == -1) {
        }else {
            $("#"+dom_arr[i].id).css("left",dom_arr[i].left/750 * main_width + 'px');
        }
        if (dom_arr[i].top == -1) {
        }else {
            $("#"+dom_arr[i].id).css("top",dom_arr[i].top/750 * main_width+ 'px');
        }
    }
}

window.onresize = function(){
    resize()
};
