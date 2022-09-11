const meme = document.getElementById('text-input');


function insert() {
  const container = document.getElementById('meme-text');
  container.innerText = meme.value;
}

meme.addEventListener('input', insert);
