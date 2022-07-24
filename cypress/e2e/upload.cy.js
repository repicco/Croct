const files = {
    notImage: { doc: 'img.txt', error: 'Oops... the file is not png, svg or jpg' },
    tooLarge: { doc: 'imgLarge.jpg', error: 'Oops... too big file!' },
    ok: "imgSmall.png",
}
const rangeValue = 34

describe('UploadFile', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    it('error: not image file', () => {
        cy.get('[data-cy=uploadFile]')
            .attachFile(files.notImage.doc)

        cy.contains(files.notImage.error)
        cy.contains('Try again').click()
    })

    it('error: too large file', () => {
        cy.get('[data-cy=uploadFile]')
            .attachFile(files.tooLarge.doc)

        cy.contains(files.tooLarge.error)
        cy.get('span > img').click()
    })

    it('happy: change valid image', () => {
        cy.get('[data-cy=uploadFile]')
            .attachFile(files.ok)

        cy.get('input')
            .invoke('val', rangeValue).should('have.value', rangeValue)
            .trigger('change')

        cy.get(`[data-cy=${files.ok.replace('.', '_')}]`)
            .invoke('attr', 'style', `border-radius: ${rangeValue}%`)
            .should('have.attr', 'style', `border-radius: ${rangeValue}%`)

        cy.contains('Save').click()
        cy.get(`[data-cy=${files.ok.replace('.', '_')}]`)
            .invoke('attr', 'style', `border-radius: ${rangeValue}%`)
            .should('have.attr', 'style', `border-radius: ${rangeValue}%`)
    })
})