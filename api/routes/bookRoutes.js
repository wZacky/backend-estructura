import { Router } from 'express';
import * as bookController from '../controllers/bookController.js';

const router = Router();

/**
 * TODO: Aca van todas las rutas de libros
 */

router.route('/books')
  .get(bookController.getAllBooks)
  .post(bookController.createBook);

router.route('/books/:id')
  .get(bookController.getBookById)
  .put(bookController.updateBookById)
  .delete(bookController.deleteBookById);

export default router;