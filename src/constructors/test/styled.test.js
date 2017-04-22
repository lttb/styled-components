// @flow
import expect from 'expect'
import styled from '../../index'
import domElements from 'react-dom-elements'

describe('styled', () => {
  it('should have all valid HTML5 elements defined as properties', () => {
    domElements.forEach(domElement => {
      expect(styled[domElement]).toExist()
    })
  })
})
