import React from "react";

const Book = (props) => {
    const { book, onChangeShelf } = props;

    return (
        <div key={book.id} className="book">
            <div className="book-top">
                <div
                    className="book-cover"
                    style={{
                        width: 128,
                        height: 193,
                        backgroundImage: `url(${
                            book.imageLinks ? book.imageLinks.thumbnail : ""
                        })`,
                    }}
                ></div>
                <div className="book-shelf-changer">
                    <select
                        onChange={(e) => onChangeShelf(book, e.target.value)}
                        defaultValue={book.shelf ? book.shelf : "none"}
                    >
                        <option value="move" disabled>
                            Move to...
                        </option>
                        <option value="currentlyReading">
                            Currently Reading
                        </option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                </div>
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">
                {book.authors
                    ? book.authors.map((author) => author)
                    : "Unknown Author"}
            </div>
        </div>
    );
};

export default Book;
