import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import AlbumTableRow from './AlbumTableRow';


export default class AlbumList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      albums: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:8000/api/albums/')
      .then(res => {
        this.setState({
          albums: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  DataTable() {
    return this.state.albums.map((res, i) => {
      return <AlbumTableRow obj={res} key={i} />;
    });
  }


  render() {
    return (<div className="table-wrapper">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Amount</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {this.DataTable()}
        </tbody>
      </Table>
    </div>);
  }
}