export const error = {
  NOT_VALID_ID: {
    statusCode: 406,
    message: 'Not a valid id.',
    createMessage: param => `Not a valid ${param} id.`,
  },
  FORBIDDEN_ACTION: {
    statusCode: 403,
    message: 'Forbidden action',
  },
  USER_ERROR: {
    statusCode: 409,
    message: 'User',
    createMessage: param => `${param}`
  },
  MISSING_INPUT: {
    statusCode: 400,
    message: 'Input is missing.',
    createMessage: param => `${param} required.`,
  },
  EMAIL_ALREADY_TAKEN: {
    statusCode: 409,
    message: 'E-mail is already taken.',
  },
  FIELD_LENGTH_ERROR: {
    statusCode: 406,
    message: 'Length of field is not enough.',
    createMessage: param => `Minimal length of ${param}`,
  },
  UNAUTHORIZED_REQUEST: {
    statusCode: 401,
    message: 'Unauthorized request',
    createMessage: param => param,
  },
  NOT_FOUND: {
    statusCode: 404,
    message: 'Not found',
    createMessage: param => `${param} is not found`
  },
  UNKNOWN: {
    statusCode: 500,
    message: 'Unknown error.',
    createMessage: param => param,
  },
}

export const UserError = (err, messageParams) => {
  const errObject = { ...err }
  if (messageParams != undefined && errObject.createMessage != undefined) {
    const errorMessage = errObject.createMessage(messageParams)
    errObject.message = errorMessage
  }
  return errObject
}