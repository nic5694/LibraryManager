import { useEffect, useState } from "react"
import axios from "axios";
import LibraryItem from "./LibraryItem";
function LibraryList() {
    const [library, setLibrary] = useState([]);
    const getLibraryFromApi = () => {
    axios.get("http://localhost:8080/api/libraries")
        .then(response => {
            setLibrary(response.data);
        })
        .catch(error => {
            console.log(error);
        })
    }
    useEffect(() => {
        getLibraryFromApi();
    },[])

    return (
        <div className="LibraryListContainer">
            <div className="LibraryItemContainer">
                    {library.map((item) => {
                        return <LibraryItem key={item} item={item} />
                    })}
            </div>
        </div>
    )
}
export default LibraryList;