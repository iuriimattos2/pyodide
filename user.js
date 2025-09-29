// ==UserScript==
// @name         Pyodide Demo (Violentmonkey, CDN)
// @namespace    http://example.com
// @version      0.2
// @description  Demo Pyodide in a userscript using official CDN
// @author       ryanowa
// @match        *://example.com/*
// @grant        none
// @require      https://cdn.jsdelivr.net/pyodide/v0.23.4/full/pyodide.js
// ==/UserScript==

(async function () {
  'use strict';

  console.log('Starting Pyodide Demo (using @require from CDN).');

  if (typeof loadPyodide !== 'function') {
    console.error('loadPyodide is not available.');
    return;
  }

  try {
    const pyodide = await loadPyodide({
      indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.23.4/full/'
    });
    console.log('pyodide loaded');

    await pyodide.runPythonAsync(`
      import sys
      print("python version: %s" % sys.version)
    `);
  } catch (err) {
    console.error('Failed to load or run pyodide:', err);
  }
})();
