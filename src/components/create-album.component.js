import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios'
import AlbumsList from './albums-listing.component';
import Swal from 'sweetalert2';


export default class CreateAlbum extends Component {
      constructor(props) {
    super(props)

    // Setting up functions
    this.onChangeAlbumName = this.onChangeAlbumName.bind(this);
    this.onChangeAlbumAmount = this.onChangeAlbumAmount.bind(this);
    this.onChangeAlbumDescription = this.onChangeAlbumDescription.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      name: '',
      description: '',
      amount: ''
    }
  }

  onChangeAlbumName(e) {
    this.setState({name: e.target.value})
  }

  onChangeAlbumAmount(e) {
    this.setState({amount: e.target.value})
  }

  onChangeAlbumDescription(e) {
    this.setState({description: e.target.value})
  }

  onSubmit(e) {
    e.preventDefault()
     const album = {
      name: this.state.name,
      amount: this.state.amount,
      description: this.state.description
    };
    axios.post('http://localhost:8000/api/albums/', album)
      .then(res => console.log(res.data));
    // console.log(`Album successfully created!`);
    // console.log(`Name: ${this.state.name}`);
    // console.log(`Amount: ${this.state.amount}`);
    // console.log(`Description: ${this.state.description}`);
    Swal.fire(
  'Good job!',
  'Album Added Successfully',
  'success'
)

    this.setState({name: '', amount: '', description: ''})
  }

  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Row> 
            <Col>
             <Form.Group controlId="Name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" value={this.state.name} onChange={this.onChangeAlbumName}/>
             </Form.Group>
            
            </Col>
            
            <Col>
             <Form.Group controlId="Amount">
                <Form.Label>Amount</Form.Label>
                        <Form.Control type="number" value={this.state.amount} onChange={this.onChangeAlbumAmount}/>
             </Form.Group>
            </Col>  
           
        </Row>
            

        <Form.Group controlId="description">
          <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" type="textarea" value={this.state.description} onChange={this.onChangeAlbumDescription}/>
        </Form.Group>

       
        <Button variant="primary" size="lg" block="block" type="submit">
          Add Album
        </Button>
      </Form>
      <br></br>
      <br></br>

      <AlbumsList> </AlbumsList>
    </div>);
  }
}

