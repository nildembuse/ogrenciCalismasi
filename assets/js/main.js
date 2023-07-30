const form = document.querySelector('#form');
const text = document.querySelector('.yazi');
const list = document.querySelector('.ogrenciList');
const btns = document.querySelector('.editBtn');
const delet = document.querySelector('.deleteBtn');

form.addEventListener('submit', liste);

function liste(e){
    e.preventDefault();
    if(text.value === ''){
        alert('Öğrenci bilgisi giriniz');
    }
    else {
        list.innerHTML +=`<li><span>${text.value}</span>
    <button class="editBtn">Düzenle</button>
    <button class="deleteBtn">Sil</button>
    
    </li>`
    
    text.value= '' 
    list.innerHTML += list;
    bindActionsBtns();
    bindEditsBtns();
    }
}

function deleteBtn(){
    this.parentElement.remove();
}

function editBtn(){
     let duzen = prompt('Lütfen Buraya Yeni Öğrenci Girin!');
     this.parentElement.querySelector('span').innerHTML = duzen
}

function bindEditsBtns(){
     const btns = document.querySelectorAll('.editBtn');
     btns.forEach(function(btn, i){
         btn.addEventListener('click', editBtn);
    })
}



function bindActionsBtns(){
    const btn = document.querySelectorAll('.deleteBtn');
    btn.forEach(function(btn, i){
        btn.addEventListener('click', deleteBtn);
    })
}
