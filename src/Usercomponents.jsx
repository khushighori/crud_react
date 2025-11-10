import React, { useState } from 'react'
import { Container, Row, Col, Form, Button,Table} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Usercomponents = () => {
    const {name,setname}=useState("");
    const {age,setage}=useState("");
    const {salary,setsalary}=useState("");
    const [data,setdata]=useState([]);
    let handleage=(e)=>{
        setage(e.target.value);
    }
    const savedata=(e)=>{
        e.preventDefault();
        setdata([
            ...data,
            {name,age,salary}
            // {name:name,
            // age:age,
            // salary:salary}
        ])
        setname('')
        setage('')
        setsalary('')
    }

    return (<>
        <div>
            <h1>Usercomponents</h1>
            <Container fluid="md">
                <Row>
                    <Col> <Form name="frm" method='post' action='#' onSubmit={savedata}>
                        <Form.Group className="mb-3" controlId="formGroupname" >
                            <Form.Label>name</Form.Label>
                            <Form.Control type="text" placeholder="Enter name" name="name" onChange={(e)=>setname(e.target.value)} value={name}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupage">
                            <Form.Label>age</Form.Label>
                            <Form.Control type="number" placeholder="age" name="age" onChange={handleage} value={age}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupsalary">
                            <Form.Label>salary</Form.Label>
                            <Form.Control type="number" placeholder="salay" name="salary" onChange={(e)=>setsalary(e.target.value)} value={salary} />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                        <Button variant="danger" type="reset">
                            Cansel
                        </Button>
                    </Form></Col>
                    <Col> <Table striped bordered hover >
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Usre name</th>
                                <th>Age</th>
                                <th>salary</th>
                                <th>action</th>
                            </tr>
                        </thead>
                        <tboday>
                            {
                                data.map((i, index) => {
                                    return (
                                        <tr>
                                            <td>{index + 1}</td>
                                            <td>{i.name}</td>
                                            <td>{i.age}</td>
                                            <td>{i.salary}</td>
                                            <td>
                                                <Button variant="primary" type="button">
                                                    Edit
                                                </Button>
                                                <Button variant="danger" type="button">
                                                    Delet
                                                </Button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tboday>
                    </Table>
                    </Col>
                </Row>
            </Container>
        </div>
    </>)
}
export default Usercomponents
