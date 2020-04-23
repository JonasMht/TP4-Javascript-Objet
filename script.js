//hello world
var img = document.getElementById("meineWaifu");

document.write("Test1");

function f()
{
  var para = document.getElementById("para");
  document.write("Test2");
  para.innerHTML += "Some message";
}

img.addEventListener("mouseover", f());
