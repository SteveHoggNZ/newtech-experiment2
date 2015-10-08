module.exports = function () {
  var element = document.createElement('h1');
  var d = new Date();

  element.innerHTML = 'Hello world!<br>Time of last refresh: ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();

  return element;
};
