'use strict';

const noop = () => {}

function traps(trapFn = noop) {
  const proxy = new Proxy(function() {}, {
    get(target, name) {
      if (name in target || 'inspect' === name) {
        return target[name]
      }

      if ('trap' === name) {
        return function(fn = noop) {
          fn.call(proxy)
          return proxy
        }
      }

      return function(...params) {
        trapFn.call(proxy, name, params)
        return proxy
      }
    },

    apply(target, context, params) {
      const [ name, fn ] = params

      target[name] = function(...params) {
        fn.call(this, name, params)
        return this
      }

      return proxy
    }
  })

  return proxy
}

module.exports = traps;