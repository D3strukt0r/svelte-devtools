import svgexport from 'svgexport';
import * as url from 'url';
import * as path from 'path';
import * as fs from 'fs';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const srcLogoPath = path.resolve(__dirname, '../src/svelte-logo.svg');
const targetIconsDir = path.resolve(__dirname, '../public/icons');

if (!fs.existsSync(targetIconsDir)) {
  fs.mkdirSync(targetIconsDir, { recursive: true });
}

svgexport.render([{
  'input' : [srcLogoPath],
  'output': [16, 32, 48, 128].map(
    size => [path.resolve(targetIconsDir, `${size}.png`), `${size}:`]
  ),
}]);
