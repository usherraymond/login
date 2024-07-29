let Name = document.getElementsByName('big-button');
Name.addEventListener('click');

function sayhello() {
    const person = document.querySelector(".container");
    person.classList.toggle('show');
}


let label = document.querySelectorAll('.password input');
labels.forEach(label => {
  label.innerHTML = label.innerHTML.split('').map((letter, idx) =>{
    `<span style="transition.deplay:${idx * 50}ms"> ${letter}</span>`
  }) 
});