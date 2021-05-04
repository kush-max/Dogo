import React, { useState } from 'react'

import DogImage from './DogImage'
import DogDetails from './DogDetails'

function DogGrid({dogs}) {
    let ar = [];
    const [show, setShow] = useState(false);
    const [tempName, setTempName] = useState("");
    const [tempSub, setTempSub] = useState([]);

    for (const [key, value] of Object.entries(dogs)) {
        ar = [...ar, {name: key, sub: value}];
    }

    const handleShow =  (name, sub) => {          
        setTempName(name);
        setTempSub(sub);
        setShow(true);
    }
    const camelize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1); 
    }
    
    return (
        <div className="d-flex flex-lg-wrap" style={{padding:"5px"}}>
            {(ar.length>0)?
                ar.map((items, index)=>{
                    return(
                        <div onClick={()=>handleShow(items.name, items.sub)} style={{textAlign:"center"}} >                            
                            <DogImage key={index} name={items.name} code={"solo"} />
                            <p>{camelize(items.name)}</p>
                        </div>
                    )
                })
            :
            "Loading.."
            }
            <DogDetails show={show} setShow={setShow} name={tempName} setName={setTempName} sub={tempSub} setSub={setTempSub} />
        </div>
    )
}

export default DogGrid
