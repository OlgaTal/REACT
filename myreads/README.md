# MyReads Project

## To get started

From the project root folder
* install all project dependencies with `npm install`
* start the development server with `npm start`


In your browser url
* enter `http://localhost:3000/`

## Application description

In the MyReads project, the bookshelf app allows a client to select and categorize books they have read, are currently reading, or want to read. The project emphasizes using React to build the application and provides an API server and client library that was used to persist information as a client interacts with the application.

The application contains two pages<br>
[1] The first page -my reads- represents three book shelfs: Currently Reading, Want To Read and Read. <br>
At any time a client can move a book from one shelf to another by simply selecting a different shelf or can remove a book from -my reads- page by selecting 'none' from shelf changer.<br>
[2] The second page -search- allows to select books from a 'libray' and bring selected books to -my reads- page.

## Backend Server

Udacity has provided a backend server. The provided file [`BooksAPI.js`](src/utils/BooksAPI.js) contains the methods that are used to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query, maxResults)
```

* query: `<String>`
* maxResults: `<number>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of `maxResults` book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Contributing

To develop the application I used the starter code for _all_ Udacity students. 

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).
