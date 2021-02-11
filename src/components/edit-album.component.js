import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class EditAlbum extends Component {

  constructor(props) {
    super(props)

    this.onChangeAlbumName = this.onChangeAlbumName.bind(this);
    this.onChangeAlbumAmount = this.onChangeAlbumAmount.bind(this);
    this.onChangeAlbumDescription = this.onChangeAlbumDescription.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // State
    this.state = {
      name: '',
      amount: '',
      description: ''
    }
  }

  componentDidMount() {
    axios.get('http://localhost:8000/api/albums/' + this.props.match.params.id)
      .then(res => {
        this.setState({
          name: res.data.name,
          amount: res.data.amount,
          description: res.data.description
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  onChangeAlbumName(e) {
    this.setState({ name: e.target.value })
  }

  onChangeAlbumAmount(e) {
    this.setState({ amount: e.target.value })
  }

  onChangeAlbumDescription(e) {
    this.setState({ description: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()

    const albumObject = {
      name: this.state.name,
      amount: this.state.amount,
      description: this.state.description
    };

    axios.put('http://localhost:8000/api/albums/' + this.props.match.params.id, albumObject)
      .then((res) => {
        console.log(res.data)
        console.log('Album successfully updated')
      }).catch((error) => {
        console.log(error)
      })

    // Redirect to Album List 
    this.props.history.push('/albums-listing')
  }


  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={this.state.name} onChange={this.onChangeAlbumName} />
        </Form.Group>

        <Form.Group controlId="Amount">
          <Form.Label>Amount</Form.Label>
          <Form.Control type="number" value={this.state.amount} onChange={this.onChangeAlbumAmount} />
        </Form.Group>

        <Form.Group controlId="Description">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" value={this.state.description} onChange={this.onChangeAlbumDescription} />
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit">
          Update Album
        </Button>
      </Form>
    </div>);
  }
}