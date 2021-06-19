import Forgot from '../classes/pages/forgot.page';
import Login from '../classes/pages/login.page';

describe('Remind-password', () => {

    before(() => {
        Forgot.openPage()
    })
    
    it('Successful-email-remind', () => {
        Forgot.enterToEmail('info@techstart.dev')
        Forgot.remindBtnClick()
        Forgot.checkErrorMessage('Password reminder sent')
        Login.checkUrlWithDelay(4000)
    })

})