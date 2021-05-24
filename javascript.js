const input = document.querySelector('input');
const btn = document.querySelector('.addTask > button');

btn.addEventListener("click", addList);
input.addEventListener("keyup", (e)=>{
    (e.keyCode === 13 ? addList(e): null)
})

function addList(e){
    const notCompleted = document.querySelector('.notCompleted');
    const Completed = document.querySelector('.Completed');

    const newLi = document.createElement('li');
    const ipt = document.createElement('input');
    const checkBtn = document.createElement('button');
    const delBtn = document.createElement('button');
    const editBtn = document.createElement('button');
    const saveBtn = document.createElement('button');

    ipt.classList.add("editInput")
    ipt.setAttribute("disabled","")
    
    checkBtn.innerHTML = '<i class="fa fa-check"></i>'
    delBtn.innerHTML = '<i class="fa fa-trash"></i>'
    editBtn.innerHTML = '<i class="fa fa-edit"></i>'
    saveBtn.innerHTML = '<i class="fa fa-save"></i>'



    if(input.value !==""){
       
        ipt.value = input.value;
        input.value = "";
        notCompleted.appendChild(newLi);
        newLi.appendChild(ipt);
        newLi.appendChild(checkBtn)
        newLi.appendChild(delBtn)
        newLi.appendChild(editBtn)
        newLi.appendChild(saveBtn)
        saveBtn.style.display = "none"
    }
    editBtn.addEventListener('click', function(){
        ipt.removeAttribute("disabled");
        editBtn.style.display = "none";
        saveBtn.style.display = "block"
    })
    saveBtn.addEventListener('click', function(){
        ipt.setAttribute("disabled","")
        editBtn.style.display = "block";
        saveBtn.style.display = 'none';
    })

    checkBtn.addEventListener('click', function(){
        const parent = this.parentElement;
        parent.remove();
        Completed.appendChild(parent);
        checkBtn.style.display = 'none'

    })
    delBtn.addEventListener('click', function(){
        const parent = this.parentElement;
        parent.remove();
        
    })
}