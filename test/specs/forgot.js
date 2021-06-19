import Forgot from '../classes/pages/forgot.page';
import Login from '../classes/pages/login.page';

describe('Elements-displayed', () => {

    before(() => {
        Forgot.openForgotPage();
    })

    it('Login-logo', () => {
        Forgot.checkLogo()
    })

    it('Email-field', () => {
        Forgot.checkEmail()
    })

    it('Remind-button', () => {
        Forgot.checkRemindBtn()
    })

})

describe('Elements-values', () => {

    it('Email-placeholder', () => {
        Forgot.checkEmailPlaceholder()
    })

    it('Remind-button', () => {
        Forgot.checkRemindBtnValue()
    })

})

describe('Functionality', () => {


    it('Error-for-empty-email', () => {
        Forgot.openPage();
        Forgot.remindBtnClick()
        Forgot.checkErrorMessage('Please specify email');
    })
    
    it('Error-disapears-input-email', () => {
       Forgot.enterToEmail('bruh')
       Forgot.checkErrorDisappears()
    })

    it('Error-for-incorrect-email', () => {
        Forgot.enterToEmail('bruh@gmail.com')
        Forgot.remindBtnClick()
        Forgot.checkErrorMessage('User with this email does not exist')
    })

    it('Succes-message-for-correct-email', () => {
        Forgot.enterToEmail('info@techstart.dev')
        Forgot.remindBtnClick()
        Forgot.checkErrorMessage('Password reminder sent')
    })

    it('Redirect-after-reminder-sent', () => {
        Forgot.enterToEmail('info@techstart.dev')
        Forgot.remindBtnClick()
        Forgot.checkErrorMessage('Password reminder sent')
    })

    it('User-is-redirected-to-login', () => {
        Login.checkUrlWithDelay(4000)
    })


})