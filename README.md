AEM-gulp-workflow
======================

A (really simple) workflow for frontend development in Adobe Experience Manager (AEM) aka Adobe CQ.

This app does the following tasks:

- LESS watch for changes to files, "vault" to JCR using cURL, toast notify and livereload the browser (Chrome only).

The heart of this app is using cURL -T (send a file via HTTP POST) to send LESS files to the JCR without having to bother with vlt.

### Installation instructions: ###

Install node.js http://nodejs.org/download/. Install chrome livereload extension https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei and click the extension button on your localhost page instance.
Git clone this repo inside your main AEM repo, then inside your repo root:

> npm install -g gulp

> npm install

Edit the designsPath to reflect your local folder structure and the port if you need to.

### To start watching for changes: ###

> gulp