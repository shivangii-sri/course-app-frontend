import React from "react";
import { Link, Route } from "react-router-dom";
import { ListGroup, ListGroupItem } from "reactstrap";


function Menus(){

    return (
        <div>
            <ListGroup>

                {/* <ListGroupItem tag="a" href="/" action>Home</ListGroupItem>
                <ListGroupItem tag="a" href="/add-course" action>Add Course</ListGroupItem>
                <ListGroupItem tag="a" href="/view-course" action>View Course</ListGroupItem>
                <ListGroupItem tag="a" href="#!" action>About</ListGroupItem>
                <ListGroupItem tag="a" href="#!" action>Contact</ListGroupItem> */}

                <Link className="list-group-item list-group-item-action" tag="a" to="/" action>Home</Link>
                <Link className="list-group-item list-group-item-action" tag="a" to="/add-course" action>Add Course</Link>
                <Link className="list-group-item list-group-item-action" tag="a" to="/view-course" action>View Course</Link>
                <Link className="list-group-item list-group-item-action" tag="a" to="#!" action>About</Link>
                <Link className="list-group-item list-group-item-action" tag="a" to="#!" action>Contact</Link>

            </ListGroup>

        </div>
    )
}
export default Menus;