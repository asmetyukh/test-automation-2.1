import Login from '../classes/pages/login.page'
import Header from '../classes/elements/header.elements'
import Forgot from '../classes/pages/forgot.page'
import Ratings from '../classes/pages/users.page'
import PublicGame from '../classes/pages/public-game.page'
import Account from '../classes/pages/account.page';
import publicGamePage from '../classes/pages/public-game.page'

describe('Elements-displayed', () => {

    before(() => {
        publicGamePage.openPage()
    })
    
    it('game-title-text-field', () => {
        publicGamePage.checkGameTitleTextField()
    })

    it('male-gender-icon', () => {
        publicGamePage.checkMaleIcon()
    })

    it('female-gender-icon', () => {
        publicGamePage.checkFemaleIcon()
    })


})