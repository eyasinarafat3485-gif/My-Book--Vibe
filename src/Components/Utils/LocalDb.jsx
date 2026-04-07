
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

export {getAllReadListFromLocalDb, addReadListToLocalDb}