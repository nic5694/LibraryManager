import BookList from "../Components/BookList";
import NavBar from "../Components/NavBar";
function BookInventory(){
    return (
        <div className="bookInventoryContainer">
            <NavBar />
            <div className="bookInventoryHeader">
                <h1>Book Inventory</h1>
            </div>
            <BookList />
        </div>
    )
}
export default BookInventory;