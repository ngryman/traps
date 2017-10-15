# traps

[![Greenkeeper badge](https://badges.greenkeeper.io/ngryman/traps.svg)](https://greenkeeper.io/)

> Trap me if you can!

[![travis][travis-image]][travis-url] [![codecov][codecov-image]][codecov-url]

[travis-image]: https://img.shields.io/travis/ngryman/traps.svg?style=flat
[travis-url]: https://travis-ci.org/ngryman/traps
[codecov-image]: https://img.shields.io/codecov/c/github/ngryman/traps.svg
[codecov-url]: https://codecov.io/github/ngryman/traps


`traps` leverages [proxies] and allows to easily create chainable `api`s.
You can register **traps** which will be invoked when a specific method is invoked or capture all method invocations in a **sink**.

[proxies]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy


## Install

```bash
npm install --save traps
```

## Usage

```javascript
import traps from 'traps'

// capture all method invocations
const api = traps(console.log)
api.foo('bar').baz('qux')
// =>
// foo, ['bar']
// baz, ['qux']

// register a trap
api('woot', (name, params) => console.log('WOOT!', params))
api.woot('a wombat')
// => WOOT!, ['a wombat']

// invoke an lambda trap
api.trap(() => console.log('I do not have a name.'))
// => I do not have a name.
```


## License

MIT © [Nicolas Gryman](http://ngryman.sh)
