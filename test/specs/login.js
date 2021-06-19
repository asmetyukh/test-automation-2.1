import Login from '../classes/pages/login.page';
import Forgot from '../classes/pages/forgot.page';
import Header from '../classes/elements/header.elements'
import Ratings from '../classes/pages/users.page';


describe('Elements-displayed', () => {

    before(() => {
        Login.openLoginPage();
    })

    it('Login-logo', () => {
        Login.checkLogo()
    })

    it('Email-field', () => {
        Login.checkEmailField()
    })

    it('Password-field', () => {
        Login.checkPasswordFiled()
    })

    it('Login-button', () => {
        Login.checkLoginBtn()
    })

    it('Remind-button', () => {
        Login.checkRemindPassButton()
    })


})

describe('Elements-values', () => {

    it('Email-placeholder', () => {
        Login.checkEmailPlaceholder()
    })

    it('Password-placeholder', () => {
        Login.checkPasswordPlaceholder()
    })

    it('Login-button', () => {
        Login.checkLoginBtnText()
    })

    it('Remind-button', () => {
       Login.checkRemindBtn()
    })

})

describe('Functionality', () => {


    it('Remind-password-redirect', () => {
        Login.remindPassClick();
        Forgot.checkUrl();
    })

    it('Remind-password-page-displayed', () => {
        Forgot.checkPage();
    })

    it('Error-for-empty-login', () => {
        Login.openLoginPage();
        Login.LoginClick();
        Login.checkErrorText();
    })

    it('Error-disapears-input-email', () => {
        Login.checkEnterEmail('bruh')
        Login.checkErrorDisappears()
    })

    it('Error-for-empty-password', () => {
        Login.openLoginPage();
        Login.checkEnterEmail('bruh')
        Login.LoginClick()
        Login.checkErrorMessage('Please specify email and password')
    })

    it('Error-disapears-input-password', () => {
        Login.checkEnterPassword('bruh')
        Login.checkErrorDisappears()
    })

    it('Error-for-empty-email', () => {
        Login.openLoginPage();
        Login.checkEnterPassword('bruh')
        Login.LoginClick()
        Login.checkErrorMessage('Please specify email and password')
    })

    it('Error-for-incorect-email', () => {
        Login.openLoginPage();
        Login.checkEnterEmail('bruh@gmail.com')
        Login.checkEnterPassword('bruh')
        Login.LoginClick()
        Login.checkErrorMessage('User with this email does not exist')
    })

    it('Error-for-corect-email-Not-correct-password', () => {
        Login.openLoginPage();
        Login.checkEnterEmail('info@techstart.dev')
        Login.checkEnterPassword('bruh')
        Login.LoginClick()
        Login.checkErrorMessage('Password is incorrect')
    })

    it('Successful-login', () => {
        Login.openLoginPage()
        Login.checkEnterEmail('test@test.com')
        Login.checkEnterPassword('maftest@123456')
        Login.LoginClick()
        Header.checkAccountBtn()
        Header.checkLogoutBtn()
        Ratings.checkPage()
    })

})