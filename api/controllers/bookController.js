import Book from "../models/Book.js";

const getAllBooks = (req, res) => {
  return res.json({
    msg: "Esta es la ruta GET  de todos los libros"
  })
};

const createBook = async (req, res) => {
  try {
    const newBook = await Book.create(req.body);
    return res.json({
      msg: 'Libro creado',
      book: newBook,
    });
  } catch (error) {
    return res.json({
      msg: 'Error al crear libro',
    })
  }
};

const getBookById = (req, res) => {

};

const updateBookById = (req, res) => {

};

const deleteBookById = (req, res) => {

}

export { getAllBooks, createBook, getBookById, updateBookById, deleteBookById }