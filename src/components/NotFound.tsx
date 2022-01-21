import React from "react"
import { Alert} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
function NotFound() {
    return (
        <div>
            <Alert color="info" style={{marginLeft: '600px',marginTop:'200px', width:"100%"}}>
                NOT FOUND ANY CAR.
            </Alert>    
        </div>
    )
}

export default NotFound
