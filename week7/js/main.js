// $('.btn').on('click',function(){
//     const taskObj = {
//         task:val
//     }
//     let inp = $('input')
//     let val = inp.val();
//     let list = $('.todo__list');
//     if(val==='')return
//     console.log(val)
//     list.append(`<li>${val}<button>X </button></li>`)
//     // localStorage.setItem(val)
//     if(!val === ''){
//         val = "";
//     }
// })

// const setItemToStorage = () =>{
//     localStorage.getItem();
// }
$(document).ready(function(){
    $('.btn').on('click',function(){
        let inp = $('input')
        let val = inp.val();
        const taskObj ={
            task:val
        }
        if(val==='') return
        setItemToStorage(taskObj);
        renderData()
        inp.val('')
    })
    const setItemToStorage =(taskObj)=>{
        if(!localStorage.getItem('tasks-data')){
            localStorage.setItem('tasks-data','[]')
        }
        const storageTasksData = JSON.parse(localStorage.getItem('tasks-data'))
        storageTasksData.push(taskObj)
    //  storageTasksData
        localStorage.setItem('tasks-data',JSON.stringify(storageTasksData));
    }
    const renderData = () => {
        let data =JSON.parse(localStorage.getItem('tasks-data'))
        $('.todo__list').html('')
        if(!data) return
        data.forEach(item=>{
            
            let list = $('.todo__list');
            
            list.append(`<div>
            <li  data-about='task'>${item.task}</li>
            <button class="btn-del">X</button>
            <button class="btn-save">save</button>
            </div> 
            
           `) 
        })
    }
    renderData()
    $('body').on('click','.btn-del',function(){
        const storageTasksData = JSON.parse(localStorage.getItem('tasks-data'));
        let index = $(this).parent().index();
        console.log(index)
        storageTasksData.splice(index,1)
        localStorage.setItem('tasks-data',JSON.stringify(storageTasksData))
        renderData()
    })
    $('body').on('click','li',function(e){
        const storageTasksData = JSON.parse(localStorage.getItem('tasks-data'));
        let index = $(this).parent().index();
        console.log(index)
        let text = $(e.target).text();
       $(this).closest("li").html(`<input type='text' class = 'edit-task' value = '${text}'>`)
        localStorage.setItem('tasks-data',text)
    })
    $('body').on('change','.edit-task',function(){
        const storageTasksData = JSON.parse(localStorage.getItem('tasks-data'));
        
    })
    // $('body').on('click','.btn-edit', function(e){
    //     let target = $(e.target);
    //     let result = target.val();
    //     // const storageTasksData = JSON.parse(localStorage.getItem('tasks-data'));
    //     let index = $('li').parent().index();
    //     console.log(index)
    // })
})
