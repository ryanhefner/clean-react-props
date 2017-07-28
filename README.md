# clean-react-props

Simple utility function for cleaning props before applying them to native DOM elements.

Since React 15.2.x, warnings are thrown when attributes are applied to HTMLElements
that are not natively supported by React. This utility helps you to prevent those
warnings and help you create consistent and clean components.

## Install

Via [npm](https://npmjs.com/package/clean-react-props):
```
npm install --save clean-react-props
```

Via [Yarn](https://yarn.fyi/clean-react-props):
```
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

```
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

```
import {cleanSVGProps} from 'clean-react-props';

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

## License

[MIT](LICENSE)
