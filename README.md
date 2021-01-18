Procedural GL React component
=============================

<img src="https://raw.githubusercontent.com/felixpalmer/procedural-gl-js/main/screenshots/title.jpg" width="40%" align="right" />

[Procedural GL JS](https://github.com/felixpalmer/procedural-gl-js) is a library for creating 3D map experiences on the web, written in JavaScript and WebGL. It is built on top of [THREE.js](https://github.com/mrdoob/three.js).

It provides an easy-to-use, but powerful framework to allow beautiful landscapes of the outdoors to be embedded into web pages. It loads super-fast and is optimized for mobile devices.

[Demo](https://felixpalmer.github.io/procedural-gl-js/) | [Docs](https://felixpalmer.github.io/procedural-gl-js/docs/) | [Overlay playground](https://felixpalmer.github.io/procedural-gl-js/docs/overlays.html) | [Elevation data](https://www.nasadem.xyz) | [Source](https://github.com/felixpalmer/procedural-gl-js)

For more information see the [project page](https://github.com/felixpalmer/procedural-gl-js).

React component
===============

This repository contains a React wrapper for the library allowing it to be easily included into projects built with [React](https://reactjs.org/).

Install
=======

This component does not bundle React, nor [Procedural GL JS](https://github.com/felixpalmer/procedural-gl-js) but instead expects them as peer dependencies. As such you will need to install them if they are not part of your project already.

    npm install react
    npm install react-dom
    npm install procedural-gl
    npm install procedural-gl-react

Usage
=====

```javascript 
import ProceduralMap from 'procedural-gl-react';

// Configure library as usual (see main project)
<ProceduralMap
  datasource={datasource}
  compassVisible={true}
  displayLocation={{
    latitude: 47.5,
    longitude: 13.55
  }}/>
```

Example
=======

An more complete example of how to integrate this library with React can be found [here](https://github.com/felixpalmer/procedural-gl-react-example).
