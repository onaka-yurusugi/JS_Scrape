var text = [];
var tc = "";

//データ取得ループ
for (var i = 0; i < document.getElementsByClassName("list-card-title js-card-name").length; i++) {
    text[i] = document.getElementsByClassName("list-card-title js-card-name")[i].textContent;
    tc = tc + text[i] + "\r";
}


//クリップボードにコピー
var ta = document.createElement('textarea');
ta.value = tc;
document.body.appendChild(ta);
ta.select();
document.execCommand('copy');
ta.parentElement.removeChild(ta);