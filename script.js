let tilesArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
  cubeWrapper = document.getElementById('cube-container'), appendCubeElement;

  tilesArray.forEach((item) => {
    cubeWrapper.innerHTML += '<li data-item=' + item + '>' + item + '</li>'
  })

//Shuffling the items
const shuffleValues = (tileItems) => {
    let tilesArray = tileItems;
    cubeWrapper.innerHTML = ''
    for (let i = tilesArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [tilesArray[i], tilesArray[j]] = [tilesArray[j], tilesArray[i]];
    }
  }
  
  const shufflingArray = () => {
    let index = 0;
    shuffleValues(tilesArray);
    cubeWrapper.innerHTML = '';
    while (index < tilesArray.length) {
      let cubeItem = document.createElement("li");
      cubeItem.innerHTML = tilesArray[index];
      cubeItem.setAttribute('data-item', tilesArray[index])
      cubeWrapper.appendChild(cubeItem);
      ++index;
    }
  };

  //Sorting 
  sortArray = () => {
    let index = 0;
    tilesArray = tilesArray.sort((a, b) => { return a - b });
    cubeWrapper.innerHTML = '';
    while (index < tilesArray.length) {
      let cubeItem = document.createElement("li");
      cubeItem.innerHTML = tilesArray[index];
      cubeItem.setAttribute('data-item', tilesArray[index]);
      cubeWrapper.appendChild(cubeItem);
      ++index;
    }
  }