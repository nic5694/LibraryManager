import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import { Nav } from "react-bootstrap";
function DeleteBtn (props) {
  
    const deleteItem = (() => {
        axios.delete("http://localhost:8080/api/" + props.uri)
          .then(response => {
            seccess();
            window.history.back(); //not sure what to do with this
    })
          .catch(error => {
            failed();
          })
        });
      
      const seccess = () => toast.success("Succefully Deleted Book!"); //TODO maybe add a toast to show the book was deleted successfully with the books name
      const failed = () => toast.error("Failed to Delete Book!");
}
export default DeleteBtn;