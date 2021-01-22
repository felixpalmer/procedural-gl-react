(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('procedural-gl'), require('react')) :
  typeof define === 'function' && define.amd ? define(['procedural-gl', 'react'], factory) :
  (global = global || self, global.ProceduralMap = factory(global.Procedural, global.React));
}(this, (function (Procedural, React) { 'use strict';

  Procedural = Procedural && Object.prototype.hasOwnProperty.call(Procedural, 'default') ? Procedural['default'] : Procedural;
  React = React && Object.prototype.hasOwnProperty.call(React, 'default') ? React['default'] : React;

  const SUPPORTED_SETTERS = [
    'displayLocation',
    'setCameraMode',
    'setCameraModeControlVisible',
    'setCompassVisible',
    'setEnvironment',
    'setLayersControlVisible',
    'setRotationControlVisible',
    'setUserLocation',
    'setUserLocationControlVisible',
    'setZoomControlVisible'
  ];

  const SUPPORTED_CALLBACKS = [
    'onBoundsFocused',
    'onCameraChange',
    'onFeatureClicked',
    'onFeatureSelected',
    'onFeaturesLoaded',
    'onLocationError',
    'onLocationFocused',
    'onLocationLoaded',
    'onOverlayAdded',
    'onUserInteraction'
  ];

  const SUPPORTED_METHODS = [
    'addOverlay',
    'focusOnBounds',
    'focusOnFeature',
    'focusOnLocation',
    'highlightFeature',
    'orbitTarget',
    'pause',
    'play',
    'removeOverlay',
    'toggleUserLocationTracking',
    'updateOverlay'
  ];

  class ProceduralMap extends React.Component {
    constructor(props) {
      super(props);
      if ( typeof Procedural === 'undefined' ) {
        window.Procedural = {};
      }
      this.generateMethods();
    }

    proxyProps( nextProps, force ) {
      // Support invoking of methods using props
      for ( let setter of SUPPORTED_SETTERS ) {
        let prop = setter;
        if ( setter.slice(0, 3) === 'set' ) {
          prop = setter.slice(3);
          prop = prop.charAt( 0 ).toLowerCase() + prop.slice(1);
        }

        if ( nextProps[prop] !== this.props[prop] ||
             ( force && nextProps[prop] !== undefined ) ) {
          const value = nextProps[prop];
          Procedural[setter](value);
        }
      }

      // Support proxying handlers via props
      for ( let callback of SUPPORTED_CALLBACKS ) {
        if ( nextProps[callback] !== Procedural[callback] &&
             typeof(nextProps[callback]) === 'function' ) {
          Procedural[callback] = nextProps[callback];
        }
      }
    }

    generateMethods() {
      for ( let method of SUPPORTED_METHODS ) {
        this[method] = (...args) => {
          Procedural[method](...args);
        };
      }
    }

    componentDidMount() {
      const {datasource, ...props} = this.props;
      this.proxyProps( props, true );
      Procedural.init( {
        container: this.el, datasource
      } );
    }

    shouldComponentUpdate( nextProps ) {
      // Pass through props to Procedural lib
      this.proxyProps( nextProps );

      // Never trigger a React update
      return false;
    }

    render() {
      return React.createElement( 'div', {
        ref: el => this.el = el,
        style: { height: '100%', width: '100%' }
      } );
    }
  }

  return ProceduralMap;

})));
