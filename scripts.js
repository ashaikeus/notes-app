const notes = [
  {name: "I do not have a name", date: new Date(), text: "somethingsomething"},
  {name: "heading", date: new Date(), text: "eeehh?"},
  {name: "multiline ellipsis (with multiline title)", date: new Date(), text: "asfaf asfasfasfasfafsfa asfasfasfasfasfasf asfasfasfas asfasfasfasasfaf asfasfasfasfafsfa asfasfasfasfasfasf asfasfasfas asfasfasfas"},
  {date: new Date(), text: "asfaf asfasfasfasfafsfa asfasfasfasfasfasf asfasfasfas asfasfasfasasfaf asfasfasfasfafsfa asfasfasfasfasfasf asfasfasfas asfasfasfas"}
]

const folders = [
  {name: "important"},
  {name: "old"},
  {name: "another folder"},
  {name: "yet another"},
  {name: "meh"},
  {name: "whatever"},
  {name: "folder"},
  {name: "default"},
]

for (let i = 0; i < notes.length; i++) {
  let parent = document.querySelector('#note-wrap');
  let div = document.createElement('div');
  div.className = 'note';
  div.id = "note" + i;
  parent.appendChild(div);

  let parentdiv = document.querySelector('#note' + i);
  
  let name = document.createElement("div");
  name.className = "name";
  name.innerHTML = notes[i]["name"];

  let text = document.createElement("p");
  text.innerHTML = notes[i]["text"];
  
  let date = document.createElement("div");
  date.className = "date";
  date.innerHTML = notes[i]["date"];

  parentdiv.appendChild(name);
  parentdiv.appendChild(text);
  parentdiv.appendChild(date);
}

for (let i = 0; i < folders.length; i++) {
  let parent = document.querySelector('.wrapper');
  let div = document.createElement('div');
  div.className = 'folder note';
  div.id = "folder" + i;
  div.innerHTML = folders[i]["name"];
  parent.appendChild(div);
}