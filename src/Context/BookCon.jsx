import React, { createContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { addReadListToLocalDb, getAllReadListFromLocalDb } from '../Components/Utils/LocalDb';

export const BookContext = createContext();

const BookCon = ({ children }) => {
    const [readList, setReadList] = useState(()=> getAllReadListFromLocalDb());
    const [wishList, setWishList] = useState([]);

    // useEffect(()=>{
    //     const getReadListFromLocalDb= getAllReadListFromLocalDb() 
    //     console.log(getReadListFromLocalDb, 'readList from localDb')
    //     setReadList(getAllReadListFromLocalDb)
    // }, [])

    const handleMarkAsRead = (currentBook) => {
        addReadListToLocalDb(currentBook)
        console.log(currentBook)

        const isExistBook = readList.find((book) => book.bookId === currentBook.bookId)
        if (isExistBook) {
            toast.error("The book is already exist!")
        }
        else {
            setReadList([...readList, currentBook])
            toast.success(`${currentBook.bookName} is added to list`)
        }
    }

    const handleWishList = (currentBook) => {
        console.log(currentBook)

        const isExistInReadList = readList.find(book => book.bookId === currentBook.bookId)
        if (isExistInReadList) {
            toast.error("This is already in Read list!")
            return;
        }

        const isExistBook = wishList.find((book) => book.bookId === currentBook.bookId)
        if (isExistBook) {
            toast.error("The book is already exist!")
        }
        else {
            setWishList([...wishList, currentBook])
            toast.success(`${currentBook.bookName} is added to Wish list`)
        }
    }

    const data = {
        storedBook: readList, setStoredBook: setReadList, handleMarkAsRead, wishlist: wishList, setWishList, handleWishList
    }
    return <BookContext.Provider value={data}>
        {children}
    </BookContext.Provider>
};

export default BookCon;