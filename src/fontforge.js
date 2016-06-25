import { execSync as exec } from 'child_process';

class FontForgeError extends Error {
  constructor(message) {
    super(message);
    this.message = message;
    this.name = 'FontForgeError';
  }
}

class FontForgeCommandError extends Error {
  constructor(e, cmd) {
    const msg = `FontForge command failed: ${e.toString()}\n` +
      `From command: ${cmd}`;
    super(msg);
    this.message = msg;
    this.name = 'FontForgeError';
  }
}

function trim(s) {
  if (s.length === 0) return s;
  if (s[s.length - 1] === '\n') return s.slice(0, s.length - 1);
  return s;
}

export function getName(src = '') {
  if (!src) throw new FontForgeError('fontforge.getName(): src not provided');
  const cmd = `fontforge -lang=ff -c 'Open($1);Print($fontname);' '${src}' 2> /dev/null`;
  let result = '';
  try {
    result = trim(exec(cmd).toString());
  } catch (e) {
    throw new FontForgeCommandError(e, cmd);
  }
  return result;
}
