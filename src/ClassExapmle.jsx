// class ClassExample extends React.Component
import { Component } from "react";
class ClassExapmle extends Component {
    constructor() {
        super();
        this.state = {
            name: "Class Component",
            age: 22,
            salary: 35000,
            data: [10, 20, 30, 40, 50]
        }
        this.handleClick = () => {
            this.setState({ name: "ReactJS Class Component" })
        }
        this.changeAge = () => {
            this.setState({ age: 25 })
        }
        this.chnageSalary = () => {
            this.setState({ salary: 45000 })
        }

    }
    render() {
        return (
            <>
                <div>
                    <h3>Class componet Example</h3>
                    <p>Name: {this.state.name}</p>
                    <p>Age: {this.state.age}</p>
                    <p>Salary: {this.state.salary}</p>
                    <button onClick={this.handleClick}>change name</button>
                    <button onClick={this.changeAge}>change age</button>
                    <button onClick={this.chnageSalary}>change salary</button>

                </div>

            </>
        )
    }
}

export default ClassExapmle;