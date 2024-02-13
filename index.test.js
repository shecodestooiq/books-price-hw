const { printBookPrice } = require('./index.js');

describe('printBookPrice function', () => {
    const booksArray = [
        { name: "Book 1", available: true },
        { name: "Book 2", available: false },
        { name: "Book 3", available: true },
    ];

    it('should print available book price if the book is found and available', () => {
        const bookName = "Book 3";
        const price = 20;
        const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => { }); // Mock console.log

        printBookPrice(booksArray, bookName, price);

        expect(consoleSpy).toHaveBeenCalledWith(bookName + " is available. Price: " + price);
        consoleSpy.mockRestore(); // Restore original console.log
    });

    it('should print a message if the book is not available', () => {
        const bookName = "Book 2";
        const price = 15;
        const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => { }); // Mock console.log

        printBookPrice(booksArray, bookName, price);

        expect(consoleSpy).toHaveBeenCalledWith(bookName + " is not available or not found.");
        consoleSpy.mockRestore(); // Restore original console.log
    });

    it('should print a message if the book is not found', () => {
        const bookName = "Book 4";
        const price = 25;
        const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => { }); // Mock console.log

        printBookPrice(booksArray, bookName, price);

        expect(consoleSpy).toHaveBeenCalledWith(bookName + " is not available or not found.");
        consoleSpy.mockRestore(); // Restore original console.log
    });
});
