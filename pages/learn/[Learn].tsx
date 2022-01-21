import React from 'react'
import { useRouter } from "next/router";
import { Button} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const LearnPage=()=> {
    const router = useRouter();
    const learn = router.query.learn;

    const handleClick=()=>{
      router.push('/')

    }
    return (
      <div style={{ textAlign: "center" ,fontSize:"5rem"}} >
        <p > Volvo {learn}</p>
        <Button color="primary" onClick={handleClick}>Go Back To Home Page</Button>
      </div>
    );
}

export default LearnPage

