// initialization elements

const literature = document.getElementById('literature')
const music = document.getElementById('music')
const handmade = document.getElementById('handmade')
const art = document.getElementById('art')

// main functions

if (literature != null){
  literature.addEventListener('click', (e) => {
    document.location = 'literature.html'
  });
}

if (music != null){
  music.addEventListener('click', (e) => {
    document.location = 'music.html'
  });
}

if (art != null){
  art.addEventListener('click', (e) => {
    document.location = 'art.html'
  });
}

if (handmade != null){
  handmade.addEventListener('click', (e) => {
    document.location = 'handmade.html'
  });
}

function personChange(){
  document.location = 'person.html'
}
