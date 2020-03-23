let tilesAmount = document.querySelector('#tilesA'),
  tilesW = document.querySelector('#tilesW'),
  tilesL = document.querySelector('#tilesL'),
  tilesBtn = document.querySelector('.tiles__btn'),
  tilesCheckbox = document.querySelector('#tiles-checkbox'),
  tilesSurface = document.querySelector('#tiles-surface');

function calcTilesSurface() {
  tilesSurface.innerHTML = '';
  if (tilesAmount.value != '' && tilesW.value != '' && tilesL.value != '' && tilesAmount.value > 0 && tilesW.value > 0 && tilesL.value > 0) {
    let tilesArea = parseFloat(tilesW.value) * parseFloat(tilesL.value);
    let result;
    if (tilesCheckbox.checked == false) {
      result = parseFloat(tilesAmount.value) * tilesArea;
    } else {
      tilesArea = tilesArea + tilesArea * 0.1;
      result = parseFloat(tilesAmount.value) * tilesArea;
    }
    tilesSurface.innerHTML = `You will need <strong>${result.toFixed(2)} &#13217;</strong> of tiles`;
  } else if (tilesAmount.value == 0 || tilesW.value == 0 || tilesL.value == 0) {
    tilesSurface.innerText = 'Change the provided details!';
  } else {
    tilesSurface.innerText = 'All the inputs must be filled!';
  }
}