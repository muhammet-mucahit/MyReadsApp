import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import BookShelf from "./BookShelf";

const shelves = [
    {
        key: "currentlyReading",
        name: "Currently Reading",
    },
    {
        key: "wantToRead",
        name: "Want To Read",
    },
    {
        key: "read",
        name: "Read",
    },
];

class BookList extends React.Component {
    render() {
        return (
            <div className="app">
                <div className="list-books">
                    <div className="list-books-title">
                        <h1>MyReads</h1>
                    </div>
                    <div className="list-books-content">
                        {shelves.map((shelf) => (
                            <div key={shelf.key}>
                                <BookShelf
                                    title={shelf.name}
                                    shelf={shelf.key}
                                    books={this.props.books}
                                    onChangeShelf={this.props.onChangeShelf}
                                />
                            </div>
                        ))}
                    </div>
                    <div className="open-search">
                        <Link to="/search">
                            <button>Add a book</button>
                        </Link>
                    </div>
                </div>
                }
            </div>
        );
    }

    static propTypes = {
        books: PropTypes.array.isRequired,
        onChangeShelf: PropTypes.func.isRequired,
    };
}

export default BookList;
