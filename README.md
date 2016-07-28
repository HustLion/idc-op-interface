# idc-op-interface [![Build Status](https://img.shields.io/travis/HustLion/idc-op-interface.svg?branch=master?style=plastic)](https://travis-ci.org/HustLion/idc-op-interface) [![Coverage Status](https://coveralls.io/repos/github/HustLion/idc-op-interface/badge.svg?branch=master)](https://coveralls.io/github/HustLion/idc-op-interface?branch=master) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md#pull-requests) [![Code Climate](https://codeclimate.com/github/HustLion/idc-op-interface/badges/gpa.svg)](https://codeclimate.com/github/HustLion/idc-op-interface) [![Issue Count](https://codeclimate.com/github/HustLion/idc-op-interface/badges/issue_count.svg)](https://codeclimate.com/github/HustLion/idc-op-interface) ![DevDependencies](https://david-dm.org/hustlion/idc-op-interface.svg)
2016-2018 IDC laboratory server related operation interface built with electron.js.

This is the front end and should be used with config files.


# Features

- FTP file upload/download with a modern interface
- Server interaction
- Machine learning result visualization
- Jupyter notebook viewer
- Git GUI client with material design


# Libraries/Frameworks/Components

- [Electron](http://electron.atom.io/)
- [Photon](http://photonkit.com/)
- [D3.js]()
- [Abricotine](http://abricotine.brrd.fr/)
- [Node-ftp](https://github.com/mscdex/node-ftp)
- [Git Watcher](https://github.com/demian85/git-watcher): re-writen with Electron.
- [Wetty](https://github.com/krishnasrinivas/wetty):Terminal in browser over http/https. (Ajaxterm/Anyterm alternative, but much better)
- [Angular.js]()
- [jQuery]()
- [jQuery UI]()
- [SASS]()
- [React]()
- [QUnit]()
- [PhantomJS](http://phantomjs.org/)
- [Jest](https://facebook.github.io/jest)
- [Jasmine 2](http://jasmine.github.io/2.0/introduction.html)
- [Babel]()
- [react-blessed](https://github.com/Yomguithereal/react-blessed): A react renderer for [blessed](https://github.com/chjj/blessed) (A high-level terminal interface library for node.js.).
- [Bootstrap](http://getbootstrap.com/)

# Management Tools

- [NVM]()
- [RVM]()
- [NPM]()
- [Bower]()
- [Grunt]()
- [TravisCI]()
- [Shields.io](https://img.shields.io)
- [Git Flow](https://github.com/nvie/gitflow)

# Usage

    $ npm install
    $ npm start

# Development

1. NVM

     $ wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.31.2/install.sh | bash
     $ nvm install node


   Note: if you get a "`nvm ls-remote` returns `N/A` error", try `export
   NVM_NODEJS_ORG_MIRROR=http://nodejs.org/dist`.

2. Grunt

3. CNPM

   If you are in China, try:

    $ npm install -g cnpm --registry=https://registry.npm.taobao.org

   And use `cnpm` to replace `npm` whenever you encounter a install command with `npm` in it. This will speed up the installation.


# Packaging

    $ npm run-script package


# Visual Assets

- [iConvert Icons](https://iconverticons.com/online/)
- [Inkscape](https://inkscape.org/en/)

# Utilities

Docs:

- [Everpad](https://github.com/nvbn/everpad): Dev Record.
- [Readme.io](https://readme.io/): Beautiful and useful documentation tool.

# Known bugs

- When resized unproportionally, there can be an abnormal space between panes.

# Notes

- Nice Electron tutorial: [Building a desktop application with Electron](https://medium.com/developers-writing/building-a-desktop-application-with-electron-204203eeb658#.zgb8o8imm)
- [Testing on Headless CI Systems (Travis CI, Jenkins)](http://electron.atom.io/docs/tutorial/testing-on-headless-ci/)
- [A successful Git branching model](http://nvie.com/posts/a-successful-git-branching-model/)

