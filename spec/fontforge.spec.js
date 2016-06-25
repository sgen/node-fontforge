import { getName } from '../index.js';
import https from 'https';
import rm from 'rimraf';
import mkdir from 'mkdirp';
import { createWriteStream } from 'fs';

const OpenSansOTFUrl = 'https://raw.githubusercontent.com/google/fonts/master/apache/opensans/OpenSans-Regular.ttf';
const OpenSansOTFLocation = 'tmp/OpenSans-Regular.ttf';

describe('fontforge', () => {
  beforeAll(setUp);

  afterAll(cleanUp);

  describe('.getName()', () => {
    it('returns the name of the font contained in src', () => {
      expect(getName(OpenSansOTFLocation)).toBe('OpenSans');
    });
  });
});

function download(url, to) {
  return (cb) => {
    const file = createWriteStream(to);
    let failed = false;
    https.get(url, (resp) => {
      resp.pipe(file);
      file.on('close', () => {
        if (failed) return;
        cb();
      });
    }).on('error', (e) => {
      failed = true;
      cb(e);
    });
  };
}

function setUp(cb) {
  mkdir('tmp', (e) => {
    if (e) cb(e);
    download(OpenSansOTFUrl, OpenSansOTFLocation)(cb);
  });
}

function cleanUp(cb) {
  rm('tmp/**', cb);
}
