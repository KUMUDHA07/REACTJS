import React from   'react'
import Dolist from './dolist'
import Donelist from './donelist'


 let todoarr=[ {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false,
    "deleted":false
  },
  {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false,
    "deleted":false
  },
  {
    "userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": false,
    "deleted":false
  },
  {
    "userId": 1,
    "id": 4,
    "title": "et porro tempora",
    "completed": true,
    "deleted":false
  },
  {
    "userId": 1,
    "id": 5,
    "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
    "completed": false,
    "deleted":false
  },
  {
    "userId": 1,
    "id": 6,
    "title": "qui ullam ratione quibusdam voluptatem quia omnis",
    "completed": false,
    "deleted":false
  },
  {
    "userId": 1,
    "id": 7,
    "title": "illo expedita consequatur quia in",
    "completed": false,
    "deleted":false
  },
  {
    "userId": 1,
    "id": 8,
    "title": "quo adipisci enim quam ut ab",
    "completed": true,
    "deleted":false
  },
  {
    "userId": 1,
    "id": 9,
    "title": "molestiae perspiciatis ipsa",
    "completed": false,
    "deleted":false
  },
  {
    "userId": 1,
    "id": 10,
    "title": "illo est ratione doloremque quia maiores aut",
    "completed": true,
    "deleted":false
  }]

  
class Todolist extends React.Component{

    constructor(props)
    {
        super(props)
        this.state={todoarr:todoarr}
    }
getDoItems=()=>{
            return this.state.todoarr.filter((todo)=>todo.completed===false)
}

getDoneItems=()=>{
        return this.state.todoarr.filter((todo)=>todo.completed!=false)
}
donetodo=(todoid)=>{
  const temptodos=[...this.state.todoarr];// to copy the array
 //console.log(temptodos)
const todo= temptodos.find((todo)=>todo.id===todoid) // to find the object which matches to id
//console.log(todo)
todo.completed=!todo.completed
this.setState({todos:temptodos}) // heep memeory 
//console.log(temptodos)
}

deletetodo=(todoid)=>{
  const temptodos=[...this.state.todoarr];// to copy the array
console.log(temptodos)
 const todo= temptodos.find((todo)=>todo.id===todoid) // to find the object which matches to id
 //console.log(todo)
 todo.deleted=true
 this.setState({todos:temptodos}) // heep memeory 
 //console.log(temptodos)
}
    render()
    {
        return(<>
        <h1>TODOLIST</h1>
        <div className='row'>
            <div className='col'><Dolist doitem={this.getDoItems()} toggletodo={this.donetodo} toggledelete={this.deletetodo}></Dolist></div>
            <div className='col'> <Donelist doneitem={this.getDoneItems()}></Donelist></div>
        </div>




        </>)
    }
}


export default Todolist