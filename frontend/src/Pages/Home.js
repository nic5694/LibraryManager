import LibraryList from "../Components/LibraryList";
import NavBar from "../Components/NavBar";
function Home() {
  return (
    <div>
       
        <NavBar bg="light" expand="lg" />
        <div className="header">
            <h1>Welcome Library Admin</h1>
        </div>
        <LibraryList />
    </div>
  );
}

export default Home;
