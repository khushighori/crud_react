import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
// import { Container, Row, Col, Form , Button} from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
// import Row from 'react-bootstrap/Row';

import 'bootstrap/dist/css/bootstrap.min.css';

const UserComponents2 = () => {
    const { firstname, setfirstname } = useState("");
    const { lastname, setlastname } = useState("");
    const { username, setusername } = useState("");
    const { city, setcity } = useState("");
    const { state, setstate } = useState("");
    const { data, setdata } = useState([]);

    const [validated, setValidated] = useState(false);

    const handleSubmit = (e) => {
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
            e.preventDefault();
            setdata([
                ...data,
                { firstname, lastname, username, city, state }
            ])
            setfirstname('')
            setlastname('')
            setusername('')
            setcity('')
            setstate('')

            setValidated(true);
        }

    };

    return (
        <Container>
            <Row>
                <Col><Form noValidate validated={validated} onSubmit={handleSubmit} name="frm" method='post' action='#'>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="4" controlId="validationCustom01">
                            <Form.Label>First name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="First name"
                                onChange={(e) => setfirstname(e.target.value)}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustom02">
                            <Form.Label>Last name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Last name"
                                onChange={(e) => setlastname(e.target.value)}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                            <Form.Label>Username</Form.Label>
                            <InputGroup hasValidation>
                                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                <Form.Control
                                    type="text"
                                    placeholder="Username"
                                    aria-describedby="inputGroupPrepend"
                                    required
                                    onChange={(e) => setusername(e.target.value)}
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please choose a username.
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        {/* <Form.Group as={Col} md="6" controlId="validationCustom03"> */}
                        <Form.Label>City</Form.Label>
                        <Form.Control type="text" placeholder="City" required onChange={(e) => setcity(e.target.value)} />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid city.
                        </Form.Control.Feedback>
                        {/* </Form.Group> */}
                        <Form.Group as={Col} md="3" controlId="validationCustom04">
                            <Form.Label>State</Form.Label>
                            <Form.Control type="text" placeholder="State" required onChange={(e) => setstate(e.target.value)} />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid state.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="3" controlId="validationCustom05">
                            <Form.Label>Zip</Form.Label>
                            <Form.Control type="text" placeholder="Zip" required />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid zip.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Button type="submit">Submit form</Button>
                </Form>
                </Col>


                <Col><Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                            <th>City</th>
                            <th>state</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((i, intex) => (
                            // return (
                            (
                                <tr>
                                    <td>{intex + 1}</td>
                                    <td>{i.firstname}</td>
                                    <td>{i.lastname}</td>
                                    <td>{i.username}</td>
                                    <td>{i.city}</td>
                                    <td>{i.state}</td>
                                </tr>
                            )
                        ))}
                    </tbody>
                </Table>
                </Col>
            </Row>
        </Container>
    )
}
export default UserComponents2;
