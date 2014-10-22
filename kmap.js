var kmapTable = (function() {

  function gray(n) {
    return ((n >> 1) ^ n).toString(2);
  }

  function pad(str, amount) {
    while (str.length < amount) {
      str = '0' + str;
    }
    return str;
  }

  function kmapTable(left, right, enabled) {

    var table = document.querySelector('table');
    table.innerHTML = '';
    var tbody = crel('tbody');
    table.appendChild(tbody);

    (function() {
      var topRow = crel('tr');
      var key = crel('th',
        crel('span', { 'class': 'left-text' }, left.join('')),
        crel('span', '/'),
        crel('span', { 'class': 'right-text' }, right.join(''))
      );
      topRow.appendChild(key);
      for (var i = 0; i < Math.pow(2, right.length); i ++) {
        var rightEl = crel('th', { 'class': 'right' }, pad(gray(i), right.length));
        topRow.appendChild(rightEl);
      }
      tbody.appendChild(topRow);
    })();

    (function() {

      for (var i = 0; i < Math.pow(2, left.length); i ++) {
        var row = crel('tr');

        var leftEl = crel('th', { 'class': 'left' }, pad(gray(i), left.length));
        row.appendChild(leftEl);

        for (var j = 0; j < Math.pow(2, right.length); j ++) {
          var value = parseInt(pad(gray(i), left.length) +
                               pad(gray(j), right.length), 2);
          var rightEl = crel('td');
          var number = crel('div', { 'class': 'number' }, value);
          var bool = crel('div');
          if (enabled.indexOf(value) !== -1) {
            bool.innerHTML = '1';
            rightEl.className = 'enabled';
          }
          rightEl.appendChild(bool);
          rightEl.appendChild(number);
          row.appendChild(rightEl);
        }

        tbody.appendChild(row);
      }

    })();

    document.body.appendChild(table);

  }

  return kmapTable;

})();
