import { useParams } from "react-router-dom";
import { useEffect } from "react";
import NavBar from "../Components/NavBar";
import EditBookForm from "../Components/EditBookForm";

function EditBook() {
    const {Id} = useParams();
    useEffect(() => {
        bookNavBar();
    }, []);
    const bookNavBar = () => {
        if(Id === ""){
          return (
            <NavBar bg="light" library={false} showAddLinks={false}  id={Id} />
          );
        } else {
        return <NavBar bg="light" library={false} showAddLinks={true}  id={Id} />
        }
      } 
    return(
        <div>
            {bookNavBar()}
            <h1 className="titles">Edit Book</h1>
            <EditBookForm bookId={Id} />
        </div>
    )
}
export default EditBook;