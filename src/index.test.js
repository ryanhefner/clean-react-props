import cleanProps, { cleanSVGProps } from './index';
import { HTMLProps, RDFProps, SVGProps, ValidEvents } from './constants';

describe('clean-react-props', () => {
  test('confirm only valid props are returned', () => {
    const cleanedProps = cleanProps({
      something: '',
      className: '',
    });

    const evalProps = {
      className: '',
    };

    expect(cleanedProps).toEqual(evalProps);
  });

  test('confirm that data- attributes are retained', () => {
    const cleanedProps = cleanProps({
      'something': '',
      'data-rocks': '🤘',
    });

    const evalProps = {
      'data-rocks': '🤘',
    };

    expect(cleanedProps).toEqual(evalProps);
  });

  test('confirm that aria- attributes are retained', () => {
    const cleanedProps = cleanProps({
      'aria-label': 'read me',
      'something': '',
    });

    const evalProps = {
      'aria-label': 'read me',
    };

    expect(cleanedProps).toEqual(evalProps);
  });

  test('confirm that HTMLProps are retained', () => {
    const htmlProps = {};

    HTMLProps.forEach(key => htmlProps[key] = '');

    const cleanedProps = cleanProps({
      ...htmlProps,
      something: '',
    });

    expect(cleanedProps).toEqual(htmlProps);
  });

  test('confirm that RDFProps are retained', () => {
    const rdfProps = {};

    RDFProps.forEach(key => rdfProps[key] = '');

    const cleanedProps = cleanProps({
      ...rdfProps,
      something: '',
    });

    expect(cleanedProps).toEqual(rdfProps);
  });

  test('confirm that SVGProps are retained', () => {
    const svgProps = {};

    SVGProps.forEach(key => svgProps[key] = '');

    const cleanedProps = cleanSVGProps({
      ...svgProps,
      something: '',
    });

    expect(cleanedProps).toEqual(svgProps);
  });

  test('confirm that ValidEvents are retained', () => {
    const validEvents = {};

    ValidEvents.forEach(key => validEvents[key] = () => {});

    const cleanedProps = cleanProps({
      ...validEvents,
      something: '',
    });

    expect(cleanedProps).toEqual(validEvents);
  });

  test('confirm that specified props are excluded', () => {
    const cleanedProps = cleanProps({
      'className': '',
      'width': '',
      'something': '',
    }, ['width']);

    const evalProps = {
      'className': '',
    };

    expect(cleanedProps).toEqual(evalProps);
  });

  test('confirm that specified customAttributes are retained', () => {
    const cleanedProps = cleanProps({
      'className': '',
      'something': '',
    }, [], ['something']);

    const evalProps = {
      'className': '',
      'something': '',
    };

    expect(cleanedProps).toEqual(evalProps);
  });

  test('confirm props are excluded - SVGProps', () => {
    const cleanedProps = cleanSVGProps({
      'accentHeight': '',
      'clip': '',
      'calcMode': '',
    }, ['calcMode']);

    const evalProps = {
      'accentHeight': '',
      'clip': '',
    };

    expect(cleanedProps).toEqual(evalProps);
  });
});
