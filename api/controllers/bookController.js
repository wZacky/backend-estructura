import Book from "../models/Book.js";

const getAllBooks = async (_, res) => {
  try {
    const books = await Book.find();
    return res.json({
      msg: 'Libros encontrados',
      data: books,
    })
  } catch (error) {
    return res.status(500).json({
      msg: 'Error al buscar libros',
      error,
    })
  }
};

const createBook = async (req, res) => {
  try {
    const newBook = await Book.create(req.body);
    return res.json({
      msg: 'Libro creado',
      data: {
        book: newBook,
      }
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'Error al crear libro',
      error,
    })
  }
};

const getBookById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);

    return res.json({
      // status code 200
      msg: 'Libro Encontrado',
      data: {
        book
      }
    })
  } catch (error) {
    return res.status(500).json({
      msg: 'Error al buscar libro por id',
      error
    })
  }
};

const updateBookById = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedBook = await Book.findByIdAndUpdate(id, req.body,
      {
        new: true,
      }
    );

    return res.json({
      msg: 'Libro actualizado por id',
      data: {
        book: updatedBook
      }
    })
  } catch (error) {
    return res.status(500).json({
      msg: 'Error al actualizar',
      error
    })
  }
};


const deleteBookById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByIdAndDelete(id);

    return res.json({
      msg: 'Elemento eliminado',
      data: {
        book,
      }
    })
  } catch (error) {
    return res.status(500).json({
      msg: 'Error al borrar el libro por Id',
      error,
    })
  }
}

export { getAllBooks, createBook, getBookById, updateBookById, deleteBookById }