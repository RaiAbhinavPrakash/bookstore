import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";
import { useFirebase } from "../context/Firebase";


const MyCard = (props) => {
    const firebase = useFirebase();
    const navigate = useNavigate();
    const [url, setURL] = useState(null);

    useEffect( ()=> {
      firebase.getImageURL(props.imageURL).then(url => setURL(url));
    }, [])

    console.log(props);

  return (
    <div>
      <Card style={{ width: "18rem", margin: "25px", backgroundColor:'#454545', color:'#FFFDD0'}}>
        <Card.Img variant="top" src={url} />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>
            This book has a title {props.name} and this book is sold by {props.displayName} and it costs Rs.{props.price}
          </Card.Text>
          <Button onClick={e => navigate(props.link)} variant="primary">view</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MyCard;
