import React, { useEffect, useState } from 'react'
import { Navbar, Button } from 'react-bootstrap'
import DogGrid from './DogGrid'
import CustomSearch from './CustomSearch'

function Home() {

    const [dogs, setDogs] = useState([])
    const [show, setShow] = useState(false);    
    
    const handleShow = () => {
        setShow(true);
    }

    useEffect(()=>{        
        fetch('https://dog.ceo/api/breeds/list/all')
        .then(res=>res.json())
        .then(data=>{
            setDogs(data.message)            
        })
    },[])
    
    return (
        <div>
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand className="ml-auto p-1">Dog Gallery</Navbar.Brand>
                <Button variant="success" className="ml-auto p-2" onClick={()=>handleShow()}>Custom Search</Button>
            </Navbar>
            <DogGrid dogs={dogs}/>
            <CustomSearch show={show} setShow={setShow} dogs={dogs}/>
        </div>
    )
}

export default Home
