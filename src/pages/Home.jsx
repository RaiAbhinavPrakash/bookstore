import React, { useEffect, useState } from "react";
import { useFirebase } from "../context/Firebase";
import MyCard from "../components/MyCard";
import CardGroup from "react-bootstrap/CardGroup";

const Home = () => {
  const firebase = useFirebase();

  const [books, setBooks] = useState([]);

  useEffect(() => {
    firebase.listAllBooks().then((books) => setBooks(books.docs));
  }, []);
  console.log(firebase);
  return (
    <div style={{backgroundColor:'#28231D'}}>
      <div className="container">
        <CardGroup>
          {books.map((book) => (
            <MyCard
              link={`/book/view/${book.id}`}
              key={book.id}
              id={book.id}
              {...book.data()}
            />
          ))}
        </CardGroup>
      </div>
    </div>
  );
};

export default Home;
