export const apiErrorHandler = (error, req, res, next) => {
  console.error(error.stack);
  res.status(404).send('Error detected');
}