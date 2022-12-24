# Silk Reads Library Manager
## Project Description
Silk Reads Library manager is a Library managing application with the goal of streamlining library administrating tasks. This includes adding new libraries, books and updating existing books. This application consitutes of a Java backend based on REST architecture, implmemented in the JPA framework and hibernate ORM. For the frontend the application is written in JavaScript, HTML and styled with CSS and React-Bootstrap. Other libraries used are [React Router](https://reactrouter.com/en/main) I specifically choose React Router because of its main feature brining the ability to have a multiple page react website and [React-toastify](https://fkhadra.github.io/react-toastify/introduction) I choose React toastify because of its simplicity and ease of use. One of the big hurdles that were encoutered in the project was setting the fields of the form for the put request to allow the fields to be modifiable. In the end using [react-hook-form](https://github.com/react-hook-form/react-hook-form) is what made the task a sucess. In the future i would like to implement the search feature that was another hurdle in the backend that was completed using a custom query in the Library Repository. What was tricky with this was to have a query search for all the fields of a book but also belonging to a certian library that would correspond to the book list that would be presented on the screen for the user. 
---
## How to use the Project
All you need to run the project is a server that can host Java Spring Boot files. This will allow the REST API to deploy and be avaiolable to interact with the front end. 
---
## UML Diagram Backend
![UML diagram](https://github.com/nic5694/LibraryManager/blob/master/Backend/src/main/java/librarymanager/librarymanager/librarymanager.png)
---
## Relationship Diagram
![Relationship Diagram](/var/folders/1n/vxkt_mpd2633lz5q8_0bx82w0000gn/T/TemporaryItems/NSIRD_screencaptureui_ribPTT/Screenshot 2022-12-24 at 6.16.52 PM.png)
---
## End-points documentation 
##### GET
---
###### Request
`GET /api/books` 
This returns a list of all books in the database.
`GET /api/books/{bookId}`
This retuns a book object with all of its fields. 
`GET /api/libraries
This returns a list of all libraries
`GET /api/libraries/{library_id}/books`
This returns a list of books that are in the specified library_id
`GET /api/libraries/{libraryId}`
This returns a library and all of its fields.
`GET /api/libraries/{libraryId}/books/search/query`
This returns get request has two parameters one is the libraryId and the other one is the the parameter query you pass to search in the library if their are any books matching the query value passed.
A get request for this endpoint would look like this
```
http://localhost:8080/api/libraries/1/books/search/query?query=T
```
---
##### POST
`POST /api/libraries`
This endpoint takes a name, phone and address object and returns a id, the name, phone, and adress given 
This method returns a 201 created status
`POST /api/libraries/{libraryId}/books`
This endpoint takes a id, title, author, isbn, available (boolean), and a library object. This method returns a 201 created status
---
##### PUT 
`PUT /api/books/{bookID}`
This endpoint takes a book, required fields are id, title, author, isbn, available (boolean), and a library object. This method returns a status 200 OK
---
##### DELETE
`DELETE /api/libraries/{libraryId}`
This endpoint takes a libraryId, deletes it and returns a 200 OK status.
`DELETE /api/books/{bookId}`
This endpoint takes a bookId, deletes it and returns a 200 OK status 
---
## Application Screen Shots
![](Screenshot 2022-12-24 at 6.46.18 PM.png)
![](Screenshot 2022-12-24 at 6.46.32 PM.png)
![](Screenshot 2022-12-24 at 6.46.39 PM.png)
![](Screenshot 2022-12-24 at 6.46.47 PM.png)
![](Screenshot 2022-12-24 at 6.47.08 PM.png)