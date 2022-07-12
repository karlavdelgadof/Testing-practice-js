function capitalize(string) {
  if (typeof(string) === 'string') {
    return string.charAt(0).toUpperCase() + string.slice(1);
  } else {
    return 'Not a String';
  }
}

module.exports = capitalize;