import React, { use } from 'react';
import BookCard from './BookCard';

const booksPromise = fetch('/booksData.json').then(res => res.json())


const AllBooks = () => {
    const books = use(booksPromise)
    console.log(books)
    return (
        <div className='my-12 container mx-auto w-[85%]'>
            <h2 className='font-bold text-3xl text-center mb-6'>Books</h2>

            <div className='grid grid-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    books.map((book, index) => {
                        return (
                           <BookCard book={book} key={index}></BookCard>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default AllBooks;