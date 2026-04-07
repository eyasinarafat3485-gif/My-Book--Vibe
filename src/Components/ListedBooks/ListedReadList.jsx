import React, { useContext, useEffect, useState } from 'react';
import { BookContext } from '../../Context/BookCon';
import BookCard from '../Shared/BookCard';

const ListedReadList = ({sortingType}) => {
    const { storedBook: readList } = useContext(BookContext)
    console.log(readList, "bookContext")

    const [filteredReadList, setFilteredReadList]= useState(readList)

    useEffect(()=>{
        if(sortingType){
            if(sortingType === 'pages'){
                const sortedData=[...readList].sort((a,b)=> a.totalPages - b.totalPages);
                console.log(sortedData);
                setFilteredReadList(sortedData)
            }
            else if(sortingType === 'rating'){
                const sortedData=[...readList].sort((a,b) => a.rating - b.rating);
                console.log(sortedData);
                setFilteredReadList(sortedData)
            }
        }

    },[sortingType, readList] )




    if (filteredReadList.length === 0) {
        return <div className='h-[50vh] bg-gray-100 flex items-center justify-center '>
            <h2 className='font-bold text-3xl'>No read list data found.</h2>
        </div>
    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            {
                filteredReadList.map((book, index) => <BookCard key={index} book={book}></BookCard>)
            }
        </div>
    );
};

export default ListedReadList;