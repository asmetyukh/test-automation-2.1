import Login from '../classes/pages/login.page';
import Ratings from '../classes/pages/users.page';
import Header from '../classes/elements/header.elements';

describe('Login', () => {

    before(() => {
        Login.openPage()
    })

    it('Successful-login', () => {
        Login.openPage()
        Login.checkEnterEmail('mafplaceqauser@gmail.com')
        Login.checkEnterPassword('mafplace2021')
        Login.LoginClick()
        Header.checkAccountBtn()
        Header.checkLogoutBtn()
        Ratings.checkPage()
    })

})