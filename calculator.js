function display(input)  {
  var inform = document.getElementById("inform")
    inform.value += input;
}
function bye() {
  document.getElementById("inform").value = '';
}
function cal() {
  try{
  inform.value = eval(inform.value);
}
catch(error) {
    inform.value = "undifind";
}
}
