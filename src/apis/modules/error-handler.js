export const apiErrorHandler = (error, req, res, next) => {
  res.status(404).send('Error detected');
  next();
}