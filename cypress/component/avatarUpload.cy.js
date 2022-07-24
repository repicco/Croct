import AvatarUpload from '../../src/components/AvatarUpload'
import AvatarPreview from '../../src/components/AvatarPreview'

const files = {
  notImage: { doc: 'img.txt', error: 'Oops... the file is not png, svg or jpg' },
  tooLarge: { doc: 'imgLarge.jpg', error: 'Oops... too big file!' },
  ok: "imgSmall.png",
}
const rangeValue = 50

describe('AvatarUpload', () => {
  beforeEach(() => {
    cy.mount(<AvatarUpload />)
  })

  it('error: too large file', () => {
    cy.get('[data-cy=uploadFile]').attachFile(files.tooLarge.doc)
    cy.wait(100)
    cy.contains(files.tooLarge.error)
    cy.get('span > img').click()
    cy.wait(100)
  })

  it('error: not image file', () => {
    cy.get('[data-cy=uploadFile]').attachFile(files.notImage.doc)
    cy.wait(100)
    cy.contains(files.notImage.error)
    cy.contains('Try again').click()
    cy.wait(100)
  })

  it('happy: change valid image', () => {
    cy.get('[data-cy=uploadFile]').attachFile(files.ok)
    cy.get('input').invoke('val', rangeValue).should('have.value', rangeValue).trigger('change')
    cy.get('[data-cy=resultFile]').invoke('attr', 'style', `border-radius: ${rangeValue}%`).should('have.attr', 'style', `border-radius: ${rangeValue}%`)
    cy.contains('Save').click()
    cy.wait(100)
    cy.get('[data-cy=resultFile]').invoke('attr', 'style', `border-radius: ${rangeValue}%`).should('have.attr', 'style', `border-radius: ${rangeValue}%`)
  })
})