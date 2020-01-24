  var i=0,text;
  text = "Chúc năm mới An khang thịnh vượng, tài lộc đầy nhà,một năm bình an và sung túc."

  function typing() {
    if(i<text.length){
      document.getElementById("text").innerHTML += text.charAt(i);
      i++;
      setTimeout(typing,90);
    }
  }
  typing();