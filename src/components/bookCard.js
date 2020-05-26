import React from 'react';

const BookCard = (props) => {
    console.log(props.book.volumeInfo)
    const publishedYear = props.book.volumeInfo.hasOwnProperty('publishedDate') === false ? props.book.volumeInfo['publishedDate'] = "0000" : props.book.volumeInfo.publishedDate.substring(0,4);
    const averageRating = props.book.volumeInfo.hasOwnProperty('averageRating') === false ? props.book.volumeInfo['averageRating'] = "1" : props.book.volumeInfo.averageRating;

    return(
        <a href={props.book.accessInfo.webReaderLink}>
            <div className="bookCard">
                <div className="bookCard-bookThumbnail"><img src={props.book.volumeInfo.imageLinks.thumbnail} alt={props.book.volumeInfo.title} /></div>
                <div className="bookCard-bookInfo">
                    <div className="bookCard-bookInformation"><span className="label">Name: </span> {props.book.volumeInfo.title}</div>
                    <div className="bookCard-bookInformation"><span className="label">Authors: </span> {props.book.volumeInfo.authors}</div>
                    <div className="bookCard-bookInformation"><span className="label">Publisher: </span> {props.book.volumeInfo.publisher}</div>
                    <div className="bookCard-bookInformation"><span className="label">Published Year: </span> {publishedYear}</div>
                    <div className="bookCard-bookInformation"><span className="label">Language: </span> {props.book.volumeInfo.language.toUpperCase()}</div>
                    <div className="bookCard-bookInformation"><span className="label">Rating: </span> {averageRating}/5</div>
                </div>
            </div>
        </a>
    );
}

export default BookCard;