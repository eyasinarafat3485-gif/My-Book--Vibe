import { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { BookContext } from '../Context/BookCon';

// const booksPromise = fetch('/booksData.json').then(res => res.json())

const BookDetails = () => {
    // const books= use(booksPromise)
    // console.log(books)

    const {bookId: bookParamsId}= useParams();
    // console.log(bookParamsId)

    const books = useLoaderData();
    // console.log(books)

    const expectedBook= books.find(book => book.bookId == bookParamsId);
    // console.log(expectedBook)

    const {
        bookId,
        bookName, author, image, review, totalPages, rating, category, tags,publisher, yearOfPublishing
    } = expectedBook

    const {handleMarkAsRead , handleWishList}= useContext(BookContext)
    // console.log(handleMarkAsRead, "bookContext")



    return (
         <div className="grid grid-cols-1 md:grid-cols-2 lg:card-side bg-base-100 shadow-sm my-12 container rounded-xl mx-auto w-[85%]">
            <figure className='p-15 w-full flex items-center justify-center rounded-xl bg-gray-100'>
                <img className='h-100 rounded-xl'
                    src={image} alt={bookId} />
            </figure>
            <div className="card-body space-y-3">
                <h2 className="card-title font-bold">{bookName}</h2>
                <h2 className="card-title">By: {author}</h2>
                <p className='py-3 border-y'>{category}</p>
                <span className='text-xl font-semibold'>Review: <span className='text-sm font-medium'>{review}</span></span>
                <div className='flex items-center gap-3'>
                <div className='flex gap-3 items-center justify-center text-center '> <h2 className='text-xl'>Tag:</h2>
                {
                 tags.map((tag, index) => ( 
                    <div key={index} className="badge text-green-500 bg-green-100 font-semibold">{tag}</div>))
                }
                </div>
                </div>
                <div className=" border-t space-y-3 ">
                    <div className='flex justify-between items-center  mt-4'>
                       <span> Number of pages: <span>{totalPages}</span></span>
                    </div>
                    <div className='flex justify-between items-center gap-2'>
                       <span>publisher : <span>{publisher}</span></span>
                    </div>
                    <div className='flex justify-between items-center gap-2'>
                       <span> Year of Publishing: <span>{yearOfPublishing}</span></span>
                    </div>
                    <div className='flex justify-between items-center gap-2'>
                       <span> Rating: <span>{rating}</span></span>
                    </div>

                    <div className='flex items-center gap-3'>
                        <button onClick={()=> handleMarkAsRead(expectedBook)} className="btn ">Mark as Read</button>
                    <button onClick={()=> handleWishList(expectedBook)} className="btn btn-primary">Add to Wishlist</button>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default BookDetails;