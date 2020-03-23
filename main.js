let tileWidth = document.querySelector('#tileW'),
  tileHeight = document.querySelector('#tileH'),
  tilesW = document.querySelector('#tilesW'),
  tilesL = document.querySelector('#tilesL'),
  tilesBtn = document.querySelector('.tiles__btn'),
  tilesCheckbox = document.querySelector('#tiles-checkbox'),
  tilesBlock = document.querySelector('.tiles__block'),
  tilesSurface = document.querySelector('#tiles-surface');

tilesBlock.addEventListener('change', () => {
  calcTilesSurface();
});
tilesCheckbox.addEventListener('change', () => {
  calcTilesSurface();
});

function calcTilesSurface() {
  tilesSurface.innerHTML = '';
  if (tileHeight.value != '' && tileWidth.value != '' && tilesW.value != '' && tilesL.value != '' && tileHeight.value > 0 && tileWidth.value > 0 && tilesW.value > 0 && tilesL.value > 0) {
    let tilesArea = parseFloat(tilesW.value) * parseFloat(tilesL.value);
    let result;
    if (tilesCheckbox.checked == true) {
      tilesArea = tilesArea + tilesArea * 0.1;
    }
    result = tilesArea / (parseFloat(tileHeight.value) * parseFloat(tileWidth.value));
    tilesSurface.innerHTML = `You will need <strong>${result.toFixed(2)}(${Math.round(result)})</strong> tiles or <strong>${tilesArea.toFixed(2)}(${Math.round(tilesArea)})&#13217;</strong>`;
  } else {
    tilesSurface.innerText = 'Change the provided details!';
  }
}