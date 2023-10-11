import React from "react";
import { useState } from "react";


const countries=[{
    name: 'India',  value: 'IN', cities:['delhi', 'Mumbai']
},

{
    name: 'Pakistan',  value: 'PK', cities:['Lahore', 'karachi']},

{
    name: 'Bangladesh',  value: 'BG', cities:['dhaka', 'chittagong']},
];

function Countries() {
    const [country, setCountry] = useState(""); 
    return(
        <div className="App">
            <select onChange={(e)=> {console.log(e.target.value)}}>
                {
                    countries.map((item, index)=>{
                        return(
                            <option value={item.value}>{item.name}</option>
                        )
                    })
                }
            </select>
        </div>
    );
}

export default Countries