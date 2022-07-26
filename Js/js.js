const colorArray = ["red", "blue", "brown", "yellow", "tan","black", "#becad1"]
let tiles = document.getElementsByClassName("tile");
let j = 0;
let tileIndex = 0;
for(let i = 0; i < tiles.length; i++) {

    tiles[i].addEventListener('click', function() {
      //the purpose of this if check is to see if a different tile has been selected
      if (tileIndex != i){
        j = 0;
        tileIndex = i;
      }

      this.style.backgroundColor = colorArray[j];
      j++
      if(j == colorArray.length){
          j = 0;
      }
    });
}  