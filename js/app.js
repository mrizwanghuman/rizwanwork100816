$("span").hide();
var password = $("#password");
var confirmPassword = $("#confirm_password")
function isPasswordValid (){
  return password.val().length > 8;
}
function arePasswordValid () {
  // body...
  return password.val() === confirmPassword.val();
}
function canSubmit() {
  return isPasswordValid() && arePasswordValid();
}
function passwordEvent(){
  if(isPasswordValid()){
    password.next().hide();
  } else {
    password.next().show();
  }
  password.focusout(function(){
    password.next().hide();
  })
}
function confirmPasswordEvent (){
  if (arePasswordValid()){
    confirmPassword.next().hide();
  }else {
    confirmPassword.next().show();
  }
}
function submitConfirm (){
  $("#submit").prop("disabled", !canSubmit());
}
password.focus(passwordEvent)
.keyup(passwordEvent).focus(confirmPasswordEvent)
.keyup(confirmPasswordEvent).keyup(submitConfirm);
confirmPassword.focus(confirmPasswordEvent)
.keyup(confirmPasswordEvent).keyup(submitConfirm);
submitConfirm ();