import React, { useContext, useEffect, useState } from 'react';
import { BookContext } from '../../Context/BookCon';
import BookCard from '../Shared/BookCard';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ListedWishList = ({sortingType}) => {
    const {  wishlist: wishList } = useContext(BookContext)
            console.log( wishList, "bookContext");

            const [filteredWishList, setFilteredWishList]= useState(wishList)
            
                useEffect(()=>{
                    if(sortingType){
                        if(sortingType === 'pages'){
                            const sortedData=[...wishList].sort((a,b)=> a.totalPages - b.totalPages);
                            console.log(sortedData);
                            setFilteredWishList(sortedData)
                        }
                        else if(sortingType === 'rating'){
                            const sortedData=[...wishList].sort((a,b) => a.rating - b.rating);
                            console.log(sortedData);
                            setFilteredWishList(sortedData)
                        }
                    }
            
                },[sortingType, wishList] )



    if(filteredWishList.length === 0){
        return <div className='h-[50vh] bg-gray-100 flex items-center justify-center '>
            <h2 className='font-bold text-3xl'>No wish list data found!</h2>
        </div>
    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            {
                filteredWishList.map((book, index) => <BookCard key={index} book={book}></BookCard>)
            }
        </div>
    );
};

export default ListedWishList;