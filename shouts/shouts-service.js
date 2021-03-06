module.exports = {
  isValid,
};

function isValid(shout) {
  // the body should have a message property
  const validationResult = {
    succesful: true,
    message: "",
  };

  if (!shout.message) {
    validationResult.message = "please provide the message";
  }

  // the message property should be a string
  if (shout.message && typeof shout.message !== "string") {
    validationResult.message = "the message should be a string";
  }

  // the message property should have at least 3 characters
  if (shout.message && isString(shout.message) && shout.message.length < 3) {
    validationResult.message = "the message should have at least 3 characters";
  }

  validationResult.succesful = Boolean(validationResult.message === "");
  return validationResult;
}

function isString(message) {
  return Boolean(typeof message === "string");
}
