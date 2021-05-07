function validate(){
    var g=document.frm.gameselect.value;
    var n=document.frm.name.value;
    var e=document.frm.email.value;
    var r=document.frm.rank.value;
    var f="I, ".concat(n," register for ",g," and have rank ",r," with email id ",e);
    alert(f);
}