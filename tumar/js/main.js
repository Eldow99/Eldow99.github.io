document.addEventListener('DOMContentLoaded', function(){
document.querySelector('.navbar__burgermenu').addEventListener('click',function(){
   document.querySelector('.navbar__burgermenu','.navbar__items').classList.toggle('active')
   document.querySelector('.navbar__items').classList.toggle('active')
    })
    var modal = document.getElementById('myModal');
    let btn = document.querySelector('.main__body-btn');
    btn.addEventListener('click',function(){
        modal.style.display = "block";
        // renderItem();  
    })
    let span = document.getElementsByClassName("close")[0];
    span.addEventListener('click',function(){
        modal.style.display = "none";
    })
    window.addEventListener('click',function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      })
      

      let btnModal = document.querySelector('.modalBtn')
      btnModal.addEventListener('click',function(){
          let inpName = document.querySelector('.inpName').value;
          let inpNum = document.querySelector('.inpNum').value;
          let inpDoc = document.querySelector('.inpDoc').value;
          if(!inpName || !inpNum)
          return
          const obj1 ={
            name: inpName,
            num: inpNum,
            doc: inpDoc
          }

          setItemToStorage1(obj1);
          renderItem();
          document.querySelector('.inpName').value = '';
          document.querySelector('.inpNum').value = '';
          document.querySelector('.inpDoc').value = '';
      })
      const setItemToStorage1 = (obj1) =>{
        if(!localStorage.getItem('info')){
          localStorage.setItem('info','[]')
        }
        const storageItemData1 = JSON.parse(localStorage.getItem('info'));
        storageItemData1.push(obj1)
        localStorage.setItem('info',JSON.stringify(storageItemData1))
      }
      const renderItem=()=>{
        let dataInfo = JSON.parse(localStorage.getItem('info'));

        if(!dataInfo) return
        let ul = document.querySelector('.modal-list');
        ul.innerHTML='';
        dataInfo.forEach(item => {
        
          let liName = document.createElement('li');
  
          liName.innerHTML = item.name;
          ul.appendChild(liName)

          let liNum = document.createElement('li');
          liNum.innerHTML = item.num;
          ul.appendChild(liNum)

          let liDoc = document.createElement('li');
          liDoc.innerHTML = item.doc;
          ul.appendChild(liDoc)
          let btnDel = document.createElement('button');
          btnDel.innerText= 'x'
          btnDel.classList.add('.bnt-del')
          ul.appendChild(btnDel)


          //delete
           btnDel.addEventListener('click', (e) => {
            let index = Array.from(btnDel.parentNode.children).indexOf((btnDel));

            index = (index/4)-1
               const storageInfoData = JSON.parse(localStorage.getItem('info'))
        console.log(index)
        storageInfoData.splice(index,1)
      localStorage.setItem('info',JSON.stringify(storageInfoData))
      renderItem();
    })
        });
    
           
      }

      renderItem();
     
    })   
    
    
