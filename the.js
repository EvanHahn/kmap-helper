// they say you shouldn't use "onload"
// fuck the police

window.onload = function() {

  function parse(element) {
    var value = element.value;
    return value.split(/[\s|,]*/g).map(function(v) {
      var number = parseInt(v, 10);
      if (Number.isNaN(number)) {
        return v;
      } else {
        return number;
      }
    });
  }

  var leftEl = document.getElementById('left');
  var rightEl = document.getElementById('right');
  var valuesEl = document.getElementById('values');

  function goForIt() {
    kmapTable(
      parse(leftEl),
      parse(rightEl),
      parse(valuesEl)
    );
  }

  document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    goForIt();
  });

  goForIt();

};
