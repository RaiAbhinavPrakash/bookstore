import react, { useEffect, useState } from "react";
import { useFirebase } from "../context/Firebase";
import MyCard from "../components/MyCard";
import CardGroup from "react-bootstrap/CardGroup";

const Orders = () => {
  const firebase = useFirebase();

  const [books, setBooks] = useState([]);

  useEffect(() => {
    if (firebase.isLoggedIn)
      firebase
        .fetchMyBooks(firebase.user.uid)
        ?.then((books) => setBooks(books.docs));
  }, [firebase]);

  console.log(firebase);
  console.log(books);

  if (!firebase.isLoggedIn) return <h1>Please Login</h1>;

  return (
    <div>
      <div style={{ backgroundColor: "#28231D"}}>
        <CardGroup>
          {books.map((book) => (
            <MyCard
              link={`/books/orders/${book.id}`}
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

export default Orders;
