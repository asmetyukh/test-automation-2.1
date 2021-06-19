import Base from '../base.class';

class Login extends Base {

    constructor() {
        super(); //to extend Base.class constructor
        this.exp = {
            url: 'http://qa.intgames.org/',
            emailPlaceholder: 'Email *',
            passwordPlaceholder: 'Password *',
            loginBtn: 'Login',
            remindBtn: 'Remind Password',
            errorText: 'Please specify email and password'

        }
    }

    //element selectors
    get page() { return $('#login-page') }
    get remindPasswordBtn() { return $('#btn-forgot') }
    get loginBtn() { return $('#btn-login') }
    get emailField() { return $('#username') }
    get logo() { return $('#logo') }
    get passwordField() { return $('#pass') }
    get errorText() { return $('#error-text') }





    //methods
    openPage() {
        browser.url('/')
    }

    checkPage() {
        this.page.waitForDisplayed();
    }

    checkUrl() {
        expect(browser).toHaveUrl(this.exp.url)
    }

    remindPassClick() {
        this.remindPasswordBtn.click();
    }

    LoginClick() {
        this.loginBtn.click()
    }

    checkUrl() {
        expect(browser).toHaveUrl(this.exp.url);
    }

    checkLogo() {
        expect(this.logo).toBeDisplayed()
    }

    checkLoginBtn() {
        expect(this.loginBtn).toBeDisplayed()
    }

    checkEmailField() {
        expect(this.emailField).toBeDisplayed()
    }

    checkPasswordField() {
        expect(this.passwordField).toBeDisplayed()
    }

    checkRemindPassButton() {
        expect(this.remindPasswordBtn).toBeDisplayed()
    }

    checkEmailPlaceholder() {
        expect(this.emailField).toHaveAttribute('placeholder', this.exp.emailPlaceholder)
    }

    checkPasswordPlaceholder() {
        expect(this.passwordField).toHaveAttribute('placeholder', this.exp.passwordPlaceholder)
    }

    checkLoginBtnText() {
        expect(this.loginBtn).toHaveText(this.exp.loginBtn)
    }

    checkRemindBtn() {
        expect(this.remindPasswordBtn).toHaveText(this.exp.remindBtn)
    }

    checkErrorText() {
        expect(this.errorText).toHaveText(this.exp.errorText)
    }

    checkEnterEmail(value) {
        this.emailField.setValue(value)
    }

    checkEnterPassword(value) {
        this.passwordField.setValue(value)
    }

    checkUrlWithDelay(delay) {
        expect(browser).toHaveUrl(this.exp.url, { wait: delay })
    }  

    playerLogin() {
        this.openPage()
        this.checkEnterEmail('mafplaceqauser@gmail.com')
        this.checkEnterPassword('mafplace2021')
        this.loginBtn.click()
    }
}
export default new Login;