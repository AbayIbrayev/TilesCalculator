function calcSurface(w, h) {
  var result = parseFloat(w) * parseFloat(h);
  return result;
}

var tileW = document.querySelector('#tileSize>#width');
var tileH = document.querySelector('#tileSize>#height');
var tileSurface = document.querySelector('#tileSize>#tileSurface');

tileH.addEventListener('change', function () {
  var tSurface = calcSurface(tileW.value, tileH.value);
  tileSurface.value = tSurface + ' cm2';
  //tileW.value = '';
  //tileH.value = '';
});

var floorW = document.querySelector('#floorSize>#width');
var floorH = document.querySelector('#floorSize>#height');
var floorSurface = document.querySelector('#floorSize>#floorSurface');

floorH.addEventListener('change', function () {
  var fSurface = calcSurface(floorW.value, floorH.value);
  floorSurface.value = fSurface + ' m2';
  //tileW.value = '';
  //tileH.value = '';
  var calculationDiv = document.querySelector('#calculation');
  var calculation = (parseFloat(floorSurface.value) * 10000) / parseFloat(tileSurface.value);
  calculationDiv.innerHTML = 'You will need to buy <b>' + (parseInt(calculation)) + ' tiles</b> (' + parseFloat(calculation) + ')' + ' to cover your floor';
});