import React from   'react'

class Donelist extends React.Component{

    constructor(props)
    {
        super(props)
    }

    render()
    {
        return(<>
        <h3>Donelist</h3>
        {
            this.props.doneitem.map((item)=>{
                return (<><ul><li>{item.title}</li>

                </ul></>)
            })
        }
        </>)
    }
}


export default Donelist