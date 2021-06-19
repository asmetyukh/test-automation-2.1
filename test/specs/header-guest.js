import Login from '../classes/pages/login.page'
import Header from '../classes/elements/header.elements'
import Forgot from '../classes/pages/forgot.page'
import Ratings from '../classes/pages/users.page'
import Public from '../classes/pages/public-game.page'

describe('Elements-displayed', () => {

    before(() => {
        Login.openPage()
    })

    it('Header', () => {
        Header.checkHeader()
    })

    it('Ratings-button', () => {
        Header.checkRatingsBtn()
    })

    it('Public-game-button', () => {
        Header.checkPublicGameBtn()
    })

    it('Back-button', () => {
        Forgot.openPage()
        Header.checkBackButton()
    })
})

describe('Functionality', () => {

    before(() => {
        Login.openPage()
    })

    it('Back-to-Login-missing', () => {
        Header.checkBackToLoginBtnMissing()
    })

    it('Ratings-button-redirect', () => {
        Header.ratingsBtn.click()
        Ratings.checkUrl()
    })

    it('Ratings-page-displayed', () => {
        Ratings.checkPage()
    })

    it('Public-button-redirect', () => {
        Header.publicGameBtn.click()
        Public.checkUrl()
    })

    it('Public-page-displayed', () => {
        Public.checkPage()
    })

    it('Back-to-login-is-displayed', () => {
        Header.checkBackButton()
    })

    it('Back-to-login-button-redirect', () => {
        Header.backToLoginBtnlick()
        Login.checkUrl()
    })

    it('Login-page-displayed', () => {
        Login.checkPage()
    })

})