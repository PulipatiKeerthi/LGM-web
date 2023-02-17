document.querySelector('#add').onclick = function(){
    if(document.querySelector('#newtask input').value.length == 0){
        alert('Please enter a task');
    }
    else {
        document.querySelector('#tasks').innerHTML+= `<div class="task"><span id="taskname">
                                                     ${document.querySelector("#newtask input").
                                                     value}</span><button style="background:red; padding:8px; color:black;" class="delete"><b>Delete</b></button></div>`;
      
        var current = document.querySelectorAll('.delete');
        for(var i=0;i<current.length;i++){
            current[i].onclick=function(){
                this.parentNode.remove();
            }
        }

        var tasks = document.querySelectorAll('#taskname');
        for(var i=0;i<tasks.length;i++){
            tasks[i].onclick=function(){
                this.classList.toggle('Completed');
            }
        }
        document.querySelector('#newtask input').value = '';


    }
 }