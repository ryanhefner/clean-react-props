import {
  HTMLProps,
  RDFProps,
  SVGProps,
  ValidEvents,
} from './constants';

const DataRegex = /data-([a-zA-Z0-9\-]*)/;
const AriaRegex = /aria-([a-zA-Z0-9\-]*)/;

/**
 * Return an object containing the valid props to apply to an HTMLElement.
 *
 * @param {Object} props - Props to be filtered and applied to DOM element.
 * @param {Array} excludes - Array of props to exlude
 * @param {Array} customAttributes - Array of custom attributes to include
 * @return {Object}
 */
const cleanProps = (props = {}, excludes = [], customAttributes = []) => {
  const returnProps = Object.assign({}, props);
  const validProps = Object.keys(returnProps).filter((key) => {
    if (excludes.indexOf(key) !== -1) {
      return false;
    }

    if (customAttributes.indexOf(key) > -1) {
      return true;
    }

    if (HTMLProps.indexOf(key) !== -1) {
      return true;
    }

    if (RDFProps.indexOf(key) !== -1) {
      return true;
    }

    if (DataRegex.test(key)) {
      return true;
    }

    if (AriaRegex.test(key)) {
      return true;
    }

    if (ValidEvents.indexOf(key) !== -1) {
      return true;
    }

    return false;
  });

  Object.keys(returnProps).forEach((key) => {
    if (validProps.indexOf(key) === -1) {
      delete returnProps[key];
    }
  });

  return returnProps;
};

/**
 * Return an object containing the valid props to apply to an SVGElement.
 *
 * @param {Object} props
 * @param {Object}
 */
export const cleanSVGProps = (props = {}, excludes = []) => {
  const returnProps = Object.assign({}, props);
  const validProps = Object.keys(returnProps).filter((key) => {
    if (excludes.indexOf(key) !== -1) {
      return false;
    }

    if (SVGProps.indexOf(key) !== -1) {
      return true;
    }

    return false;
  });

  Object.keys(returnProps).forEach((key) => {
    if (validProps.indexOf(key) === -1) {
      delete returnProps[key];
    }
  });

  return returnProps;
};

// Exports ___________________________________________________________________

export {
  HTMLProps,
  RDFProps,
  SVGProps,
  ValidEvents,
};

export default cleanProps;
