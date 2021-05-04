import React, { useState } from 'react'
import DogImage from './DogImage'
import { Modal, Container, Row, Col, Button  } from 'react-bootstrap'
import "../App.css"

function CustomSearch({show, setShow, dogs}) {
    let ar = [];
    const [bread, setBread] = useState("")
    const [count, setCount] = useState(0)
    const [statement, setStatement] = useState("")
    const [images, setImages] = useState([])
    
    for (const [key] of Object.entries(dogs)) {
        ar = [...ar, key];
    }

    const handleClose = () => {
        setBread("")
        setImages([])
        setCount(0)
        setStatement("")
        setShow(false)
    };

    const camelize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1); 
    }

    const handleSubmit = (event) => {
        if(count > 0 && bread !== ""){
            event.preventDefault();       
            setStatement('Showing "'+count+'" images of "'+camelize(bread)+'"')
            setImages([])
            fetch("https://dog.ceo/api/breed/"+bread+"/images/random/"+count)
            .then(res=>res.json())
            .then(res=>{
                setImages(res.message)
            }).catch(e=>{
                console.log(e);
            })
        }
    };

    return (
        <>
        <Modal show={show} onHide={handleClose} className="modal-dialog-scrollable">
            <Modal.Header closeButton>
                <Modal.Title>Custom Search</Modal.Title>
            </Modal.Header>
            <Modal.Body >
                <div>
                    <Container fluid="md">
                        <Row>
                            <Col className="text-center">
                                <select className="input" onChange={(e)=>{setBread(e.target.value);console.log(bread) }}>
                                    <option>Select a bread</option>
                                    {
                                        ar.map(item=>{
                                            return(<option value={item}>{camelize(item)}</option>)
                                        }) 
                                    }                            
                                </select>
                            </Col>
                            <Col>
                                <input className="input" type="number" placeholder="Number of Images" onChange={(e)=>{setCount(e.target.value)}}/>                                                        
                            </Col>
                        </Row>
                        <Row style={{marginTop:"10px"}}>
                            <Col className="text-center">
                                <Button variant="success" onClick={handleSubmit}>
                                    Get Images
                                </Button> 
                            </Col>
                        </Row>
                    </Container>                       
                </div >
                <div style={{margin:"10px"}}>
                    {statement}
                </div>
                <div className="d-flex flex-lg-wrap align-content-center">                                                
                            {(images.length>0)?
                                images.map((item, index) => {
                                    return <DogImage key={index} sub={item} code={"custom"} style={{margin:"5px"}}/>
                                })
                            :""
                            }                          
                </div>
            </Modal.Body>
        </Modal>   
    </>
    )
}

export default CustomSearch
