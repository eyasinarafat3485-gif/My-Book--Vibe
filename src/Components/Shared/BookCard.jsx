import React from 'react';
import { FaRegStar } from 'react-icons/fa';
import { Link } from 'react-router';

const BookCard = ({ book, index }) => {
    return (
        <Link to={`/booksDetails/${book.bookId}`} key={index} className="card bg-base-100  shadow-sm">
            <figure className='p-6 bg-gray-100'>
                <img className='rounded-xl h-60 w-auto'
                    src={book.image} alt={book.bookName} />
            </figure>
            <div className="card-body">
                <div className='flex items-center gap-3'>
                    {book.tags.map((tag, index) => (
                        <div key={index} className="badge text-green-500 bg-green-100 font-semibold ">{tag}</div>))}
                </div>

                <h2 className="font-bold text-2xl">
                    {book.bookName}
                    <p className='font-semibold text-lg mb-4'>{book.author}</p>

                </h2>
                <div className="card-actions justify-between border-t-[1.5px] border-dashed pt-4 border-gray-400 text-xl">
                    <div className="font-semibold">{book.category}</div>
                    <div className="flex gap-2 items-center ">{book.rating} <FaRegStar /> </div>
                </div>
            </div>
        </Link>
    );
};

export default BookCard;