/**
 * Datos de prueba de productos, búsqueda y reseñas.
 *
 * Basados en los casos manuales F06-F09
 * (documentacion/casos-prueba/Casos_Prueba_Martinez_F06-F09.xlsx).
 */

export const products = {
  macBook: { id: 43, name: 'MacBook' },
  iPhone: { id: 40, name: 'iPhone' },
};

export type Rating = 1 | 2 | 3 | 4 | 5;

export interface ReviewData {
  name: string;
  text: string;
  rating?: Rating;
}

export const reviewMessages = {
  success: 'Thank you for your review. It has been submitted to the webmaster for approval.',
  ratingRequired: 'Warning: Please select a review rating!',
  textLength: 'Warning: Review Text must be between 25 and 1000 characters!',
};

/** Reseñas válidas que el sistema debe aceptar (TC-V01, TC-C01, TC-C03). */
export const validReviewCases = [
  {
    id: 'TC-V01',
    title: 'calificar con 5 estrellas y enviar una reseña',
    product: products.macBook,
    review: { name: 'MartinezQA', text: 'Excelente producto para prueba QA 2026.', rating: 5 },
  },
  {
    id: 'TC-C01',
    title: 'agregar una reseña válida con nombre y comentario',
    product: products.iPhone,
    review: {
      name: 'Milton Martinez',
      text: 'Producto revisado correctamente durante las pruebas de calidad de software.',
      rating: 4,
    },
  },
  {
    id: 'TC-C03',
    title: 'enviar una reseña con caracteres especiales',
    product: products.iPhone,
    review: { name: 'Milton Martinez', text: 'Prueba QA: áéíóú ñ ü ¡¿! @#%&() / - _ caracteres', rating: 3 },
  },
] satisfies { id: string; title: string; product: typeof products.macBook; review: ReviewData }[];

/** Reseñas inválidas que el sistema debe rechazar (TC-V02, TC-C02, TC-N03). */
export const invalidReviewCases = [
  {
    id: 'TC-V02',
    title: 'enviar una reseña sin seleccionar calificación',
    product: products.macBook,
    review: { name: 'MartinezQA', text: 'Prueba sin seleccionar calificación del producto.' },
    expectedError: reviewMessages.ratingRequired,
  },
  {
    id: 'TC-C02',
    title: 'enviar una reseña sin texto en el comentario',
    product: products.iPhone,
    review: { name: 'Milton Martinez', text: '', rating: 4 },
    expectedError: reviewMessages.textLength,
  },
  {
    id: 'TC-N03',
    title: 'enviar el formulario de reseña con campos obligatorios vacíos',
    product: products.macBook,
    review: { name: '', text: '' },
    expectedError: reviewMessages.ratingRequired,
  },
] satisfies {
  id: string;
  title: string;
  product: typeof products.macBook;
  review: ReviewData;
  expectedError: string;
}[];

/** Segunda reseña sobre el mismo producto (TC-V03). */
export const repeatedReview: ReviewData = {
  name: 'MartinezQA',
  text: 'Segunda calificación del mismo producto para QA.',
  rating: 4,
};

export const searchData = {
  existingProduct: 'MacBook',
  category: 'Tablets',
  categoryProduct: 'Samsung Galaxy Tab 10.1',
  specialCharacters: `<>/"'&%#@!`,
  expectedNoResultsMessage: 'There is no product that matches the search criteria.',
};
