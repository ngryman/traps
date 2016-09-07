import test from 'ava'
import spy from 'spy'
import traps from '../index'

test('invoke sink if no trap', t => {
  const sink = spy()
  const tr = traps(sink)

  tr.foo('bar', 'baz')

  t.is(sink.callCount, 1)
  t.true(sink.calledOn(tr))
  t.true(sink.calledWith('foo', ['bar', 'baz']))
})

test('do not explode no trap sink', t => {
  const tr = traps()
  t.notThrows(() => tr.foo())
})

test('chain sinked traps out-of-the-box', t => {
  const trap = spy()
  const tr = traps(trap)

  tr.foo().bar()

  t.is(trap.callCount, 2)
  t.true(trap.calls[0].calledWith('foo'))
  t.true(trap.calls[1].calledWith('bar'))
})
