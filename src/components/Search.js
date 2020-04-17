import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import * as BooksAPI from "../utils/BooksAPI";
import PropTypes from "prop-types";
import Book from "./Book";

class Search extends React.Component {
    _isMounted = false;
    state = { query: "", searchedBooks: [] };

    handleChange = (query) => {
        if (query) {
            BooksAPI.search(query).then((books) => {
                this.setState({
                    query: query,
                    searchedBooks: books,
                });
            });
        }
    };

    render() {
        const { query, searchedBooks } = this.state;

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/">
                        <button className="close-search">Close</button>
                    </Link>

                    <div className="search-books-input-wrapper">
                        <input
                            onChange={(e) => this.handleChange(e.target.value)}
                            type="text"
                            placeholder="Search by title or author"
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {searchedBooks.length > 0 ? (
                            searchedBooks.map((book) => (
                                <li key={book.id}>
                                    <Book
                                        book={book}
                                        onChangeShelf={this.props.onChangeShelf}
                                    />
                                </li>
                            ))
                        ) : query.length > 0 ? (
                            <h4>No results for, "{query}"</h4>
                        ) : (
                            ""
                        )}
                    </ol>
                </div>
            </div>
        );
    }

    static propTypes = {
        onChangeShelf: PropTypes.func.isRequired,
    };
}

export default Search;
