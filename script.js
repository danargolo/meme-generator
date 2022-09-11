const meme = document.getElementById('text-input');

function insertText() {
  const container = document.getElementById('meme-text');
  container.innerText = meme.value;
}

meme.addEventListener('input', insertText);

const imgInsert = document.querySelector('#meme-insert');
const imgMeme = document.getElementById('meme-image');

function insertImage(ref) {
  const reader = new FileReader();
  reader.readAsDataURL(ref.target.files[0]);
  reader.onloadend = function imgload() {
    imgMeme.src = reader.result;
  };
}
imgInsert.addEventListener('change', insertImage);
