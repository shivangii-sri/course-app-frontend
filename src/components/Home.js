import React from "react";
import { Button, Container } from "reactstrap";

function Home()
{
    return (
        <div className="jumbotron text-center" >
            <h1>Learn code </h1>
            <p>This is developed for learning jumbotron</p>
            <Container>
                <Button>Start Learning</Button>
            </Container>
        </div>
    )
}
export default Home;