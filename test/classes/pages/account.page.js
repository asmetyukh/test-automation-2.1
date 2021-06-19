import Base from '../base.class';

class Account extends Base {

    constructor() {
        super(); //to extend Base.class constructor
        this.exp = {
            url: 'http://qa.intgames.org/account'
        }
    }

    //element selectors
    get page() { return $('#account-page') }

    //methods
    openPage() {
        browser.url('/account')
    }

    checkPage() {
        this.page.waitForDisplayed();
    }

    checkUrl() {
        expect(browser).toHaveUrl(this.exp.url);
    }

}

export default new Account;