'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getName = getName;

var _child_process = require('child_process');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FontForgeError = function (_Error) {
  _inherits(FontForgeError, _Error);

  function FontForgeError(message) {
    _classCallCheck(this, FontForgeError);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(FontForgeError).call(this, message));

    _this.message = message;
    _this.name = 'FontForgeError';
    return _this;
  }

  return FontForgeError;
}(Error);

var FontForgeCommandError = function (_Error2) {
  _inherits(FontForgeCommandError, _Error2);

  function FontForgeCommandError(e, cmd) {
    _classCallCheck(this, FontForgeCommandError);

    var msg = 'FontForge command failed: ' + e.toString() + '\n' + ('From command: ' + cmd);

    var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(FontForgeCommandError).call(this, msg));

    _this2.message = msg;
    _this2.name = 'FontForgeError';
    return _this2;
  }

  return FontForgeCommandError;
}(Error);

function trim(s) {
  if (s.length === 0) return s;
  if (s[s.length - 1] === '\n') return s.slice(0, s.length - 1);
  return s;
}

function getName() {
  var src = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

  if (!src) throw new FontForgeError('fontforge.getName(): src not provided');
  var cmd = 'fontforge -lang=ff -c \'Open($1);Print($fontname);\' \'' + src + '\' 2> /dev/null';
  var result = '';
  try {
    result = trim((0, _child_process.execSync)(cmd).toString());
  } catch (e) {
    throw new FontForgeCommandError(e, cmd);
  }
  return result;
}