import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class AlbumTableRow extends Component {
    constructor(props) {
        super(props);
        this.deleteAlbum = this.deleteAlbum.bind(this);
    }

    deleteAlbum() {
        axios.delete('http://localhost:8000/api/albums/' + this.props.obj.id)
            .then((res) => {
                console.log('Album removed deleted!')
            }).catch((error) => {
                console.log(error)
            })
    }
    render() {
        return (
            <tr>
                <td>{this.props.obj.name}</td>
                <td>{this.props.obj.amount}</td>
                <td>{this.props.obj.description}</td>
                <td>
                    <Link className="edit-link" to={"/edit-album/" + this.props.obj.id}>
                       <Button size="sm" variant="info">Edit</Button>
                    </Link>
                    <Button onClick={this.deleteAlbum} size="sm" variant="danger">Delete</Button>
                </td>
            </tr>
        );
    }
}