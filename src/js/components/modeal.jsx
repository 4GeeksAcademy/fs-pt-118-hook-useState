import React from "react";



const Modal = ({title, body, close}) => {



    return (

        <div className="container w-25">

            <div className="modal-header">
                {title}
            </div>
            <div className="modal-body">
                {body}
            </div>
        <button onClick={close}>close modal</button>
        </div>
    )

} 


export default Modal