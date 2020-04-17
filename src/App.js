import React from "react";
import "./App.css";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Search from "./components/Search";
import BookList from "./components/BookList";
import * as BooksAPI from "./utils/BooksAPI";

class BooksApp extends React.Component {
    state = {
        books: [],
    };

    getBooks() {
        BooksAPI.getAll().then((books) => {
            this.setState(() => ({
                books: books,
            }));
        });
    }

    componentDidMount() {
        this.getBooks();
    }

    onChangeShelf = (book, nextShelf) => {
        BooksAPI.update(book, nextShelf).then(() => this.getBooks());
    };

    render() {
        return (
            <Router>
                <Route exact path="/">
                    <BookList
                        onChangeShelf={this.onChangeShelf}
                        books={this.state.books}
                    />
                </Route>
                <Route path="/search">
                    <Search onChangeShelf={this.onChangeShelf} />
                </Route>
            </Router>
        );
    }
}

export default BooksApp;
