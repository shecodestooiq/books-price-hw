# booksHomework

Dear students,

Write javascript function to check the availability of a book in a library system. the function should take an array of book objects, the name of the book to search for, and a price. it should then search through the array to find the book with the matching name and check if it's available. if the book is available, it should print a message stating its availability along with the provided price. if the book is not found or not available, it should print a message indicating so.

## Task Instructions

Please follow the steps below to complete the task:

1. Inside the JavaScript function `printBookPrice` pass to it three parameters:

   1. `books`: An array of book objects containing information about each book.
   2. `bookName`: The name of the book to search for.
   3. `price`: The price provided for the book.

2. Within the function:

   1. Iterate through the `books` to find the book with the matching name.
   2. Check if the book is available. If it is, print a message says `bookName + " is available. Price: " + price`.
   3. If the book is not found or not available, print a message says `bookName + " is not available or not found."`.

3. Book Object Structure:

   1. Each book object should contain two properties:
      1. `name`: The name of the book.
      2. `available`: A boolean indicating whether the book is available or not.

4. ### Ensure the function provides clear and concise output messages for the user, and use the exact messages we wrote above.
