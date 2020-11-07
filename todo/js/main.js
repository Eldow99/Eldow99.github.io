
$(document).ready(function(){
    let inpTodo = $('.inp');
    let inpBtn = $('.btnAdd');
    let todoList = $('.list');


inpBtn.on('click',function(){
     let value = inpTodo.val();

     if (!value){
         alert('ЗАПОЛНИТЕ ВСЕ ПОЛЯ!!!')
         return
     }
     const taskObj = {
         task: value
     };
     setItemToStorage(taskObj)

     renderData();

     inpTodo.val('')

})
const setItemToStorage = (taskObj)=>{
    if(!localStorage.getItem('tasks-data')){
        localStorage.setItem('tasks-data','[]')
    }

const storageTasksData= JSON.parse(localStorage.getItem('tasks-data'))
storageTasksData.push(taskObj)
    localStorage.setItem('tasks-data',JSON.stringify(storageTasksData))
}

const renderData = () =>{
    let data =JSON.parse(localStorage.getItem('tasks-data'))

    if(!data) return

    todoList.html('')
    data.forEach(item=>{
        todoList.append(`<li class="task">${item.task}</li>
        <button class="btnDel">x</button> 
       `)
    })
}

renderData();

//DELETE
$('body').on('click','.btnDel',function(){
    const storageTasksData = JSON.parse(localStorage.getItem('tasks-data'))
    let index = $(this).parent().index();
    
    storageTasksData.splice(index,1)
  localStorage.setItem('tasks-data',JSON.stringify(storageTasksData))
  renderData()
})
})

// $('body').on('click','.task',function(e){
//         let text = $(e.target).text();
//         $(e.target).html(`<input type='text' class = 'edit-item-info' value = '${text}'>`)
// })
// $('body').on('click','btnEdit',function(e){
    
// })