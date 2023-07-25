# Svelte DevTools

Svelte Devtools is a Firefox and Chrome extension for the Svelte javascript framework. It allows you to inspect the Svelte state and component hierarchies in the Developer Tools.

After installing you will see a new tab in Developer Tools. This tab displays a tree of Svelte components, HTMLx blocks, and DOM elements that were rendered on the page. By selecting one of the nodes in the tree, you can inspect and edit its current state in the panel to the right.

Install from the [Firefox addon page][firefox-add-on] or the [Chrome addon page][chrome-web-store]

[![License -> GitHub](https://img.shields.io/github/license/D3strukt0r/svelte-devtools?label=License)](LICENSE.txt)
[![Static Badge](https://img.shields.io/badge/Contributor%20Covenant-2.0-4baaaa)](CODE_OF_CONDUCT.md)

[![Downloads -> Chrome Web Store](https://img.shields.io/chrome-web-store/users/ckolcbmkjpjmangdbmnkpjigpkddpogn?label=Chrome%20Users)][chrome-web-store]
[![Downloads -> Mozilla Add-on (2)](https://img.shields.io/amo/users/svelte-devtools?label=Firefox%20Users)][firefox-add-on]

[![Downloads -> Mozilla Add-on (1)](https://img.shields.io/amo/dw/svelte-devtools?label=Firefox%20Downloads)][firefox-add-on]

[![Version -> Chrome Web Store](https://img.shields.io/chrome-web-store/v/ckolcbmkjpjmangdbmnkpjigpkddpogn?label=Chrome%20Web%20Store%20Version)][chrome-web-store]
[![Version -> Mozilla Add-on](https://img.shields.io/amo/v/svelte-devtools?label=Firefox%20Add-On%20Version)][firefox-add-on]
[![Version -> GitHub release (with filter)](https://img.shields.io/github/v/release/svelte/svelte-devtools?label=GitHub%20Release)][gh-releases]

[![Mozilla Add-on](https://img.shields.io/amo/users/svelte-devtools?color=red&label=Firefox)]() 
[![Chrome Web Store](https://img.shields.io/chrome-web-store/users/ckolcbmkjpjmangdbmnkpjigpkddpogn?color=blue&label=Chrome)]()

![1.1.0 Screenshot](https://raw.githubusercontent.com/RedHatter/svelte-devtools/master/screenshot.png "1.1.0 Screenshot")

## Usage

### Enabling dev mode

In order for svelte-devtools to comunicate with your application bundle the svelte compiler must have the `dev` option set to `true`.

### Template

By default the [svelte template](https://github.com/sveltejs/template) will set `dev: true` when running `npm run dev` and `false` otherwise.

### Rollup
Below is a minimalist rollup config with `dev: true` set.

```js
// rollup.config.js
import * as fs from 'fs';
import svelte from 'rollup-plugin-svelte';

export default {
  input: 'src/main.js',
  output: {
    file: 'public/bundle.js',
    format: 'iife'
  },
  plugins: [
    svelte({
      compilerOptions: {
        dev: true
      }
    })
  ]
}
```

### Webpack
Below is the relevant snipet from a `webpack.config.js` with `dev: true` set.

```js
  ...
  module: {
    rules: [
      ...
      {
        test: /\.(html|svelte)$/,
        exclude: /node_modules/,
        use: {
          loader: 'svelte-loader',
          options: {
            compilerOptions: {
              dev: true,
            }
          },
        },
      },
      ...
    ]
  },
  ...
```

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

* [Git](https://git-scm.com/) - Run `brew install git` (Only for macOS)
* [Node.js](https://nodejs.org/) 14.18.0+ (because of [Vite.js](https://vitejs.dev/)) - Run `brew install node` (Only for macOS)
* [pnpm](https://pnpm.js.org/) - Run `npm install -g pnpm`
* [Brave](https://brave.com/) or any browser that supports Manifest V3 (Chrome 88+, Firefox 109+ (101+ as Dev Preview)) - Run `brew install --cask brave-browser` (Only for macOS)
* [Svelte](https://svelte.dev/) 3.12.0+

### Installing

Clone the project

```shell
git clone git@github.com:D3strukt0r/svelte-devtools.git
cd svelte-devtools
```

Install dependencies

```shell
pnpm install
```

Run the setup scripts to prepare the icons

```shell
pnpm setup
# or separately
pnpm setup:build-icons
```

### Development

To watch for changes and rebuild the extension on change, run

```shell
pnpm dev
```

The generated files are located in the `./dist/` folder. To load the build folder into the browser, follow the instructions below.

### Building

To create a production ready build, run

```shell
pnpm build
```

The generated files are located in the `./dist/` folder. To load the build folder into the browser, follow the instructions below.

### Loading into Browsers

#### Chromium based browsers (e.g. Chrome, Brave, Edge)

```shell
pnpm package:chrome
```
This should build the codebase and output a zip file under `web-ext-artifacts`.

Follow this guide https://developer.chrome.com/extensions/getstarted#unpacked and select the `./dist/` folder. Or following is the TLDR:

1. Navigate to `chrome://extensions/`.
2. Turn on developer mode using the 'Developer mode' switch in the upper right hand corner of the page.
3. Click 'Load Unpacked' and select the `./dist/` directory.

#### Firefox

```shell
pnpm package:firefox
```
This should build the codebase and output a zip file under `web-ext-artifacts`.

Unsigned addons can't be install in firefox permanently but addons can be installed temporarily.

You can follow this guide to install a WebExtension temporarily: https://developer.mozilla.org/Add-ons/WebExtensions/Temporary_Installation_in_Firefox. Or following is the TLDR:

1. Navigate to `about:debugging`.
2. Click "Load Temporary Add-on" and choose the generated zip file.

### Release

To create a zipped release package of the extension that can be uploaded to one of the stores, run

```shell
pnpm release
```

This should build the codebase and output a zip file under `web-ext-artifacts`.

## Built With

* [Vite.js](https://vitejs.dev/)
* [CRXJS Vite Plugin](https://crxjs.dev/vite-plugin)

## Contributing

Please read [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) for details on our code of conduct, and [CONTRIBUTING.md](CONTRIBUTING.md) for the process for submitting pull requests to us.

## Versioning

We use [SemVer](https://semver.org/) for versioning. For the versions available, see the [tags on this repository][gh-tags].

## Authors

All the authors can be seen in the [AUTHORS.md](AUTHORS.md) file.

Contributors can be seen in the [CONTRIBUTORS.md](CONTRIBUTORS.md) file.

See also the full list of [contributors][gh-contributors] who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.txt](LICENSE.txt) file for details

## Acknowledgments

A list of used libraries and code with their licenses can be seen in the [ACKNOWLEDGMENTS.md](ACKNOWLEDGMENTS.md) file.

[chrome-web-store]: https://chrome.google.com/webstore/detail/svelte-devtools/ckolcbmkjpjmangdbmnkpjigpkddpogn
[firefox-add-on]: https://addons.mozilla.org/en-US/firefox/addon/svelte-devtools/

[gh-releases]: https://github.com/D3strukt0r/svelte-devtools/releases
[gh-tags]: https://github.com/D3strukt0r/svelte-devtools/tags
[gh-contributors]: https://github.com/D3strukt0r/svelte-devtools/contributors
