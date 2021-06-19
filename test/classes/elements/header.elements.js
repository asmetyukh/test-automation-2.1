import Base from '../base.class';

class Header extends Base {

    constructor() {
        super(); //to extend Base.class constructor
        this.exp = {
            //expected results for this page
        }
    }

    //element selectors
    get page() { return $('#login-page') }
    get header() { return $('#header') }
    get ratingsBtn() { return $('#btn-all') }
    get publicGameBtn() { return $('#btn-game') }
    get backButton() { return $('#btn-login') }
    get backToLoginBtn() { return $('#header #btn-login') }
    get accountBtn() { return $('#btn-user') }
    get logoutBtn() { return $('#btn-logout') }
    


    //methods
    checkPage() {
        this.page.waitForDisplayed();
    }

    checkHeader() {
        expect(this.header).toBeDisplayed()
    }

    checkRatingsBtn() {
        expect(this.ratingsBtn).toBeDisplayed()
    }

    checkPublicGameBtn() {
        expect(this.publicGameBtn).toBeDisplayed()
    }

    checkBackButton() {
        expect(this.backButton).toBeDisplayed()
    }
    checkBackToLoginBtnMissing() {
        expect(this.backToLoginBtn).waitForDisplayed({ reverse: true })
    }

    checkAccountBtn() {
        expect(this.accountBtn).toBeDisplayed()
    }

    checkLogoutBtn() {
        expect(this.logoutBtn).toBeDisplayed()
    }

    accountBtnClick() {
        this.accountBtn.click()
    }

    logoutBtnClick() {
        this.logoutBtn.click()
    }

    checkAccountBtnDisappears() {
        this.accountBtn.waitForDisplayed({ reverse: true })
    }

    checkLogoutBtnDisappears() {
        this.logoutBtn.waitForDisplayed({ reverse: true })
    }

    backToLoginBtnClick() {
        this.backTpkoginBtn.click()
    }

}

export default new Header;