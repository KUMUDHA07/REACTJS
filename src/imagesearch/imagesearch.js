import React from "react";
import axios from "axios";
import './imagesearch.css'


class Imagesearch extends React.Component{
    constructor()
    {
        super();
        this.state={image:[],searchText:""}
    }
    // componentDidMount(){
    //     axios.get("https://api.unsplash.com/search/photos?client_id=j71H_Rup_UGmCi2DmM0o7ZIXBT-msUcu1OJh4_kkHeg&page=1&query=car")
    //     .then((res)=>this.setState({image:res.data.results}))
    //     .catch((err)=>console.log(err))
    // }
    
    getImage=(search)=>{
        axios.get("https://api.unsplash.com/search/photos?client_id=6glm12zGCHDsgFsRaNsoCzo9AiiWoiaim7xlg9vQJpg&page=1&query="+search)
         .then((res)=>this.setState({image:res.data.results}))
         .catch((err)=>console.log(err))
    }

    handleSearch=(event)=>
    {       console.log(event.target.value)
            this.setState({searchText:event.target.value})
            console.log(this.state.searchText)

    }
    handlesubmit=(event)=>{
        event.preventDefault();
        this.getImage(this.state.searchText)
    }
    render()
    {
        return(<>
        <h5 className="imagesearch">IMAGE SEARCH</h5>
        {console.log(this.state.image)}
        <form onSubmit={this.handlesubmit}>
            <input className="input" type="text" onChange={this.handleSearch}></input>
        </form>
        {
            this.state.image.map((img)=>(
                <><img src={img.urls.thumb}></img>
                <p>{img.alt_description}</p>
                <p>no of likes:{img.likes}</p>
                <a href="{img.links.download}">click </a>
                </>



            ))
        }
        </>)
    }
}

export default Imagesearch