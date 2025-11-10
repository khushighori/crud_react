import React, { Component } from 'react'

export default class lifecycle extends Component {
    constructor(props) {
        console.log("constructor called.....");
    super(props);
    this.state = {
        counts: 0,
        name: this.props.myname
    }
    }
    componentDidMount() {
        console.log("componentDidMount called.....");
        setTimeout(() => {
            this.setState({name: "Bhumoo"})
        }, 2000);
    }
    getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromProps called.....");
        console.log("props");
        console.log(props);
        console.log("state");
        console.log(state);
        return null;
    }
    shouldComponentUpdate() {
        console.log("shouldComponentUpdate called.....");
        return true;
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("getSnapshotBeforeUpdate called.....");
        console.log("prevProps state");
        console.log(prevProps);
        return null;
    }
    componentDidCatch(){
        console.log("Finally component updated.....");
    }

  render() {
    console.log("render method called.....");
    return (<>
      <div><h1>lifecycle</h1></div>
        <h3>Name is --{this.state.name}</h3>
        <h3>Count is --{this.state.counts}</h3>
    </>)
  }
}
