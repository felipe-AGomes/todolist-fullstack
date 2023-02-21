function validateTitle(req, res, next) {
  const { body } = req;

  if (body.title === undefined) {
    return res.status(400).json({ message: 'The field "Title" is required' });
  }

  if (body.title.length > 50) {
    return res.status(400).json({ message: 'the field "title" cannot be bigger the 50 char' });
  }

  if (body.title === '') {
    return res.status(400).json({ message: 'The field "title" cannot be empty' });
  }

  return next();
}

function validateStatus(req, res, next) {
  const { body } = req;

  if (body.status === undefined) {
    return res.status(400).json({ message: 'The field "Status" is required' });
  }

  if (body.status === '') {
    return res.status(400).json({ message: 'The field "Status" cannot be empty' });
  }

  return next();
}

module.exports = {
  validateTitle,
  validateStatus,
};
