import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class ClassList extends Component {
  constructor() {
    super()
    this.state = {
      students: []
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:3005/students?class=${this.props.match.params.class}`)
      .then(res => this.setState({students: res.data}))
      .catch(err => console.log(err))
  }

  render() {
    const students = this.state.students.map((elem, i) => (
      <Link to={`/student/${elem.id}`} key={i}><h3>
        {elem.first_name} {elem.last_name}
      </h3></Link>
    ))

    return (
      <div className="box">
        <h1>{this.props.match.params.class}</h1>
        <h2>ClassList:</h2>
        {students}
      </div>
    )
  }
}