function BookItem (item){
    return (
        <div className="itemContainer">
            {item.item.title}
        </div>
    )
}
export default BookItem;