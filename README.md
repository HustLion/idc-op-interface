# idc-op-interface
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
- [Git Watcher](https://github.com/demian85/git-watcher): re-writen with
  Electron.

# Usage

    $ npm install
    $ npm start

# Development

1. NVM

     wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.31.2/install.sh | bash
     nvm install node


   Note: if you get a "`nvm ls-remote` returns `N/A` error", try `export
   NVM_NODEJS_ORG_MIRROR=http://nodejs.org/dist`.

2. Grunt


