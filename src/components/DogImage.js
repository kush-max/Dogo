import React, { useEffect, useState } from 'react'
import '../App.css'
function DogImage({name, sub, code}) {

    const [dogsUrl, setDogsUrl] = useState([])

    useEffect(()=>{   
        switch(code){
            case "solo":{
                fetch('https://dog.ceo/api/breed/'+name+'/images/random')
                .then(res=>res.json())
                .then(data=>{
                    setDogsUrl([data.message])            
                })
                break;
            }
            case "sub":{
                fetch('https://dog.ceo/api/breed/'+name+'/'+sub+'/images/random')
                .then(res=>res.json())
                .then(data=>{
                    setDogsUrl([data.message])  
                    //console.log(dogsUrl);          
                })
                break;
            }
            case "more":{                
                fetch('https://dog.ceo/api/breed/'+name+'/images/random/4')
                .then(res=>res.json())
                .then(data=>{
                    setDogsUrl(data.message)     
                })                            
                break;
            }
            case "custom":{
                setDogsUrl([sub])
                break;
            }
            default:
                break;
        }      
        
    },[name])

    return (
        <>   
        {(dogsUrl.length>0)?
            dogsUrl.map(url=>{
                return (<img 
                    className="img-fluid resize"
                    src={url} 
                    alt="Not found"
                /> )
            })
            :""
        }                           

        </>
    )
}

export default DogImage
