# 🛁 clean-react-props

![npm](https://img.shields.io/npm/v/clean-react-props?style=flat-square)
![NPM](https://img.shields.io/npm/l/clean-react-props?style=flat-square)
![npm](https://img.shields.io/npm/dt/clean-react-props?style=flat-square)
![Coveralls github](https://img.shields.io/coveralls/github/ryanhefner/clean-react-props?style=flat-square)
![CircleCI](https://img.shields.io/circleci/build/github/ryanhefner/clean-react-props?style=flat-square)
![Snyk Vulnerabilities for GitHub Repo](https://img.shields.io/snyk/vulnerabilities/github/ryanhefner/clean-react-props?style=flat-square)


Utility functions for passing clean React props to HTML and SVG elements.

Since React 15.2.x, warnings are thrown when attributes are applied to HTMLElements
that are not natively supported by React. This utility helps you to prevent those
warnings and help you create consistent and clean components. You can read more
about it, [here](https://facebook.github.io/react/warnings/unknown-prop.html).

## Install

Via [npm](https://npmjs.com/package/clean-react-props):

```sh
npm install --save clean-react-props
```

Via [Yarn](https://yarn.fyi/clean-react-props):

```sh
yarn add clean-react-props
```

## How to use

When building components, it’s always a good idea know what properties your component
expects and confirm that they handle them properly. But, in some cases your component
could end up getting more than it asked for, that's where `clean-react-props` come
in handy.

In order to cleanly compose your components, it's best if they keep the props chain
alive (where necessary), and remove the props that are either specific to your component
or in addition to what your component expects.

### HTMLElements

```js
import cleanProps from 'clean-react-props';

...

  render() {
    const {
      aProp,
      anotherProp,
      children,
    } = this.props;

    return (
      <div {...cleanProps(this.props)}>
        <ChildComponent aProp={aProp} />
        <OtherChildComponent anotherProp={anotherProp} />
        {children}
      </div>
    );
  }

...

```

### SVGElements

React is also opinionated about the attributes that it supports for SVGElements.
So, I’ve included a utility that you can use specifically for `<svg>` tags in your
code.

```js
import { cleanSVGProps } from 'clean-react-props';

...

  render() {
    return (
      <svg {...cleanSVGProps(this.props)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
        <circle cx="150" cy="150" r="150" style="fill:#ffda00;" />
        <ellipse cx="95.7" cy="93.5" rx="10" ry="27.5" />
        <ellipse cx="195.7" cy="93.5" rx="10" ry="27.5" />
        <path d="M265 145.5c0 63.5-51.5 115-115 115S35 209 35 145.5" style="fill:none;stroke:#000;stroke-width:6;stroke-miterlimit:10;" />
      </svg>
    );
  }

...

```

### Excluding props

In some cases, it’s handy to be able to exlude valid props from being applied to
an element, in the event that prop is maybe used on a child element, or if for
some reason that component manages that prop differently. If you run into a spot
where you ned to exclude some props, pass an array of the prop names you’d like
to exclude.

```js
import cleanProps from 'clean-react-props';

...

  render() {
    const {
      aProp,
      anotherProp,
      children,
    } = this.props;

    return (
      <div {...cleanProps(this.props, ['className'])}>
        <ChildComponent aProp={aProp} />
        <OtherChildComponent anotherProp={anotherProp} />
        {children}
      </div>
    );
  }

...

```

### Specifying custom attributes

React–as of 16.*–now supports custom attributes on components. Which means that
as of that release, this package may not as useful as it once was, but it allows
you to be specific about the attributes that are applied to the rendered DOM
elements. To specify custom attributes that you’d like to retain, just do the
following.

```js
import cleanProps from `clean-react-props`;

...

  render() {
    const {
      aProp,
      myCustomAttribute,
      children,
    } = this.props;

    return (
      <div {...cleanProps(this.props, [], ['myCustomAttribute'])}>
        <ChildComponent aProp={aProp} />
        {children}
      </div>
    );
  }

...

```

## License

[MIT](LICENSE) © [Ryan Hefner](https://www.ryanhefner.com)
