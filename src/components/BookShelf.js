import React from "react";
import "../App.css";
import PropTypes from "prop-types";
import Book from "./Book";

class BookShelf extends React.Component {
    render() {
        return (
            <div key={this.props.shelf} className="bookshelf">
                <h2 className="bookshelf-title">{this.props.title}</h2>

                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.props.books
                            .filter((book) => book.shelf === this.props.shelf)
                            .map((book) => (
                                <li key={book.id}>
                                    <Book
                                        book={book}
                                        onChangeShelf={this.props.onChangeShelf}
                                    />
                                </li>
                            ))}
                    </ol>
                </div>
            </div>
        );
    }

    static propTypes = {
        title: PropTypes.string.isRequired,
        shelf: PropTypes.string.isRequired,
        books: PropTypes.array.isRequired,
        onChangeShelf: PropTypes.func.isRequired,
    };
}

export default BookShelf;
