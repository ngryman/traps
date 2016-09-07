import test from 'ava'
import spy from 'spy'
import traps from '../index'

test('.trap() execute lambda trap', t => {
  const trap = spy()
  const tr = traps()

  tr.trap(trap)

  t.is(trap.callCount, 1)
  t.true(trap.calledOn(tr))
})

test('.trap() is not trapped, no trapception!', t => {
  const sink = spy()
  const tr = traps(sink)

  tr.trap(function() {})

  t.is(sink.callCount, 0)
})

test('.trap() do not explode if callback is not defined', t => {
  const tr = traps()
  t.notThrows(() => tr.trap())
})
