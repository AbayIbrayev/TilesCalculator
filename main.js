let tilesAmount = document.querySelector('#tilesA'),
  tilesW = document.querySelector('#tilesW'),
  tilesL = document.querySelector('#tilesL'),
  tilesBtn = document.querySelector('.tiles__btn'),
  tilesCheckbox = document.querySelector('#tiles-checkbox'),
  tilesBlock = document.querySelector('.tiles__block'),
  tilesSurface = document.querySelector('#tiles-surface');

// tilesW.addEventListener('change', () => {
//   calcTilesSurface();
// });
// tilesL.addEventListener('change', () => {
//   calcTilesSurface();
// });
// tilesAmount.addEventListener('change', () => {
//   calcTilesSurface();
// });
tilesBlock.addEventListener('change', () => {
  calcTilesSurface();
});
tilesCheckbox.addEventListener('change', () => {
  calcTilesSurface();
});

function calcTilesSurface() {
  tilesSurface.innerHTML = '';
  if (tilesAmount.value != '' && tilesW.value != '' && tilesL.value != '' && tilesAmount.value > 0 && tilesW.value > 0 && tilesL.value > 0) {
    let tilesArea = parseFloat(tilesW.value) * parseFloat(tilesL.value);
    let result;
    if (tilesCheckbox.checked == true) {
      tilesArea = tilesArea + tilesArea * 0.1;
    }
    result = tilesArea / parseFloat(tilesAmount.value);
    tilesSurface.innerHTML = `You will need <strong>${result.toFixed(2)}(${Math.round(result)})</strong> tiles or <strong>${tilesArea.toFixed(2)}(${Math.round(tilesArea)})&#13217;</strong>`;
  } else {
    tilesSurface.innerText = 'Change the provided details!';
  }
}