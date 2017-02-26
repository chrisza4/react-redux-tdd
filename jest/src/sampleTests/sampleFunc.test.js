import * as func from './sampleFunc'

describe('Increment', () => {
  it('Given number 1, it return 2 (which is plus by one)', () => {
    expect(func.increment(1)).toEqual(2)
  })

  it('Given string, should throw', () => {
    expect(() => func.increment('asdf')).toThrow()
  })
})

describe('findById', () => {
  it('Given array with multiple id, should return id with corresponding it', () => {
    const input = [
      { _id: '1', value: 2 },
      { _id: '2', value: 3 }
    ]
    const actual = func.findById(input, '1')
    expect(actual.value).toEqual(2)
  })
})
