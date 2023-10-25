import { LoginMethods } from "./pages/login/login.methods"

describe('template spec', () => {
  it('passes', () => {
    const usuario = 'random01'
    const contrasena= 'random01'
    cy.visit('https://www.demoblaze.com/')
    cy.get('a[data-target="#logInModal"]').click()
    LoginMethods.login(usuario,contrasena)
    cy.get('a#nameofuser').should('contains.text',usuario)
    cy.wait(5000)

  })
})