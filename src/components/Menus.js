import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";


function Menus(){

    return (
        <div>
            <ListGroup>
                <ListGroupItem tag="a" href="#!">Home</ListGroupItem>
                <ListGroupItem tag="a" href="#!">Add Course</ListGroupItem>
                <ListGroupItem tag="a" href="#!">View Course</ListGroupItem>
                <ListGroupItem tag="a" href="#!">About</ListGroupItem>
                <ListGroupItem tag="a" href="#!">Contact</ListGroupItem>
            </ListGroup>

        </div>
    )
}
export default Menus;