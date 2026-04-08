
const getAllReadListFromLocalDb=()=>{
    const allReadList= localStorage.getItem("readList");
    

    if(allReadList)return JSON.parse(allReadList);

    return [];
}

const addReadListToLocalDb=(book)=>{
    const allBooks = getAllReadListFromLocalDb();
    const isAlreadyExist= allBooks.find(bk => bk.bookId === book.bookId)
    if(!isAlreadyExist){

        allBooks.push(book)
        localStorage.setItem("readList", JSON.stringify(allBooks))
    }

}

const getAllWishListFromLocalDB=()=>{
    const allWishList= localStorage.getItem("wishList");
    console.log(allWishList, 'wish list')

    if(allWishList) return JSON.parse (allWishList);
    return [];
}

const addWishToLocalDB=(book)=>{
    const allBooks=getAllWishListFromLocalDB();
    const isAlreadyExist= allBooks.find(bk => bk.bookId === book.bookId)
    if(!isAlreadyExist){
        allBooks.push(book)
        localStorage.setItem("wishList", JSON.stringify(allBooks))
    }

}



export {getAllReadListFromLocalDb, addReadListToLocalDb, getAllWishListFromLocalDB, addWishToLocalDB}