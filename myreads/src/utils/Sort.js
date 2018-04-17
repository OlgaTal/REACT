export const sortById = (books) => {
    return books.sort((b1, b2) => (b1.id < b2.id) ? -1 : 1);
};