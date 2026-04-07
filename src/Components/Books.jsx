import React, { useContext, useState } from 'react';
import { BookContext } from '../Context/BookCon';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ListedReadList from './ListedBooks/ListedReadList';
import ListedWishList from './ListedBooks/ListedWishList';

const Books = () => {
    const { storedBook: readBook, wishlist } = useContext(BookContext)
    console.log(readBook, wishlist, "bookContext")
    const [sortingType, setSortingType]= useState([]);

    return (
        <div className='container mx-auto my-3 w-[85%] px-5'>

            <div className='flex justify-center my-10'>
            <div className="dropdown dropdown-end">             
                <div tabIndex={0} role="button" className="btn m-1">Sort by: {sortingType}  ⬇️</div>
                <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li onClick={()=> setSortingType('pages')}><a>pages</a></li>
                    <li onClick={()=> setSortingType('rating')}><a>rating</a></li>
                </ul>
            </div>
            </div>

            <Tabs>
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>Wish List</Tab>
                </TabList>

                <TabPanel>

                    <ListedReadList sortingType={sortingType}/>
                </TabPanel>

                <TabPanel>

                    <ListedWishList sortingType={sortingType}/>
                </TabPanel>
            </Tabs>

        </div>
    );
};

export default Books;