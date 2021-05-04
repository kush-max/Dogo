import React from 'react'
import DogImage from './DogImage'
import "../App.css"
import { Modal } from 'react-bootstrap'

function DogDetails({show, setShow, name, sub}) {

    const camelize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1); 
    }   

    return (
        <>
            <Modal show={show} onHide={ () => setShow(false) } className="modal-dialog-scrollable ">
                <Modal.Header closeButton>
                    <Modal.Title>{camelize(name)}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div >
                        <h3>Sub Breads</h3>
                        <div className="d-flex flex-lg-wrap">            
                            {(sub.length>0)
                            ?
                                sub.map((item, index) => {
                                    return (
                                    <div style={{textAlign:"center"}}>
                                        <DogImage key={index} name={name} sub={item} code={"sub"}/>
                                        <p>{camelize(item)}</p>
                                    </div>
                                    )
                                })
                            :
                                <p>No sub-breads found!</p>
                        }
                        </div>                        
                    </div>
                    <div>
                        <h3>More Images</h3>                                                                                                     
                            <DogImage name={name} code={"more"} style={{margin:"5px"}}/>                                                                                                      
                    </div>
                </Modal.Body>
            </Modal>   
        </>
    )
}

export default DogDetails
