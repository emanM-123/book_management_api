# Book Management API

## Overview

This project is a Node.js and MongoDB-based application that provides API endpoints for book management. It includes features such as adding books, updating book information, deleting books, and listing books. Users need to be authenticated to perform certain actions.

## Features

- Add Book:
  - Allows users to add a new book to the database.

- Update Book:
  - Users can update existing book information.

- Delete Book:
  - Provides the ability to delete a book from the database.

- View Book:
  - Users can view a specific book by its ID.

- List Books:
  - Lists all books stored in the database.

## Technologies Used

- Node.js
- MongoDB

## Getting Started

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Create a `.env` file for environment variables.

## Environment Variables (.env)

Create a `.env` file in the root directory and set the following environment variables:


NODE_ENV=dev
NODE_PORT=8000


## Usage


## API Endpoints

### Add a Book

- **Endpoint**: POST http://localhost:4000/api/book/add
- **Request Body**: JSON object with book details.
{
    "title":"title of the book",
    "author":"author name",
    "summary": "book summary"
}

### Update a Book

- **Endpoint**: POST http://localhost:4000/api/book/update
- **Request Body**: JSON object with updated book details.
{
    "book_id": "6548b21cf97493cc3e1129d6",
    "title":"title of the book",
    "author":"author name",
    "summary": "book summary"
}


### Delete a Book

- **Endpoint**: POST http://localhost:4000/api/book/delete/:id

### View a Book

- **Endpoint**: GET http://localhost:4000/api/book/:id  

### List Books

- **Endpoint**: GET http://localhost:4000/api/book

## Usage

1. Run the application using `npm run dev`.
2. Access the application through your preferred web browser.
