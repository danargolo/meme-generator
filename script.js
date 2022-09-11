const meme = document.getElementById('text-input');
const box = document.querySelector('#meme-image-container');

function insertText() {
  const container = document.getElementById('meme-text');
  container.innerText = meme.value;
}

meme.addEventListener('input', insertText);

const imgInsert = document.querySelector('#meme-insert');
const imgMeme = document.querySelector('#meme-image');

function insertImage(ref) {
  const reader = new FileReader();
  reader.readAsDataURL(ref.target.files[0]);
  reader.onloadend = function imgload() {
    imgMeme.src = reader.result;
  };
}
imgInsert.addEventListener('change', insertImage);

const fire = document.querySelector('#fire');
const water = document.querySelector('#water');
const earth = document.querySelector('#earth');

fire.addEventListener('click', () => {
  box.style.border = '3px dashed rgb(255, 0, 0)';
});

water.addEventListener('click', () => {
  box.style.border = '5px double rgb(0, 0, 255)';
});

earth.addEventListener('click', () => {
  box.style.border = '6px groove rgb(0, 128, 0)';
});

const img = document.querySelectorAll('.img');

for (let index = 0; index < img.length; index += 1) {
  img[index].addEventListener('click', (ref) => {
    imgMeme.src = ref.target.src;
  });
}
