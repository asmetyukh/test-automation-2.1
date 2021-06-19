import Login from '../classes/pages/login.page'
import Header from '../classes/elements/header.elements'
import Users from '../classes/pages/users.page'


describe('Guest-navigation', () => {

    before(() => {
        Login.openPage()
    })

    it('Page-navigation-guest', () => {
        Header.checkHeader()
        Header.checkRatingsBtn()
        Header.checkPublicGameBtn()
        Header.ratingsBtnClick()
        Users.checkUrl()
        Users.checkPage()
        Header.checkBackButton()
        Header.backToLoginBtnClick()
        Login.checkPage()
        Login.checkUrl()
    })

})