import React, { useEffect } from "react";
import { Button, Container } from "reactstrap";

function Home()
{
    useEffect(()=>{
        document.title="Home" 
     }, []);

    return (
        <div className="jumbotron text-center" >
            <h1>Learnign code is fun !</h1>
            <p>This is developed for learning code including frontend and backend, developed by Shivangi.</p>
            <Container>
                <Button color="primary" outline>Start Learning</Button>
            </Container>
        </div>
    )
}
export default Home;