import React from   'react'

class Dolist extends React.Component{

    constructor(props)
    {
        super(props)
    }

    render()
    {
        return(<>
        <h3>Dolist</h3>
        {this.props.doitem.map((item)=>{
            return(<>
           {
            item.deleted===false?(<>
                <h5>{item.title}</h5>
                <button className='btn btn-primary' 
                onClick={()=>this.props.toggletodo(item.id)}>done</button>
                <button className='btn btn-danger' 
                onClick={()=>this.props.toggledelete(item.id)}>delete</button>
            </>)
            :(<></>)

           }

            </>)
        })}
        </>)
    }
}


export default Dolist