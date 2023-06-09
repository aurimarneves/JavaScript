const button = document.querySelector('.button-add')
const input = document.querySelector('.input-task')
const completList = document.querySelector('.list-task')

let list = []
console.log('11', list);





function addTask()
{
    list.push({

       
        tarefa: input.value,
        completed: false
    })

    input.value = ''

    location.reload();
    mostrarTask()

}

function mostrarTask(){
    let newList = ''

    list.forEach((item, position) => {
        console.log('2',position);
        if(item.tarefa === ''){
            
            return ;
        }
        newList = newList + `
        <li class="task ${item.completed  && "done"}">
          <img src="./img/checked.png" alt="Check" onclick="checkTask(${position})" />
          <p>${item.tarefa}</p>
          <img src="./img/trash.png" alt="Remover" onclick="deletTask(${position})" />
        </li>`

        list.sort(function(a, b){
            console.log('1',a);
            if(a.tarefa < b.tarefa){
                return -1;
            }else{
                return true;
            }
        });
    })


   


    completList.innerHTML = newList 

    localStorage.setItem('lista', JSON.stringify(list))

}
function checkTask(position){
    list[position].completed = !list[position].completed
    mostrarTask()

}

function deletTask(position){
    list.splice(position, 1)
    
    mostrarTask()
}

function recarregarlist(){
    const listLocalStorage = localStorage.getItem('lista')
    
    if(listLocalStorage){
    list = JSON.parse(listLocalStorage)
    }
    mostrarTask()
    
}

recarregarlist()
button.addEventListener('click', addTask)