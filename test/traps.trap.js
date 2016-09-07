import test from 'ava'
import spy from 'spy'
import traps from '../index'

test('traps() register a trap', t => {
  const trap = spy(), foo = spy()
  const tr = traps(trap)

  tr('foo', foo).foo('bar', 'baz')

  t.is(trap.callCount, 0)
  t.is(foo.callCount, 1)
  t.true(foo.calledOn(tr))
  t.true(foo.calledWith('foo', ['bar', 'baz']))
})

test('traps() do not explode if arguments are not defined', t => {
  const tr = traps()
  t.notThrows(() => tr('foo'))
  t.notThrows(() => tr())
})

test('registered trap support chaining', t => {
  const foo = spy()
  const tr = traps()

  tr('foo', foo).foo().foo()

  t.is(foo.callCount, 2)
})
