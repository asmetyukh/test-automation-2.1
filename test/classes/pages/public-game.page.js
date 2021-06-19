import Base from '../base.class';

class PublicGame extends Base {

    constructor() {
        super(); //to extend Base.class constructor
        this.exp = {
            url: 'http://qa.intgames.org/public-game'
        }
    }

    //element selectors
    get page() { return $('#public-game') }
    get textField() { return $('#add_player_field') }
    get maleGenderIcon() { return $('img[alt="male"]') }
    get femaleGenderIcon() { return $('img[alt="female"]') }



    //methods
    openPage() {
        browser.url('/public-game')
    }

    checkPage() {
        this.page.waitForDisplayed();
    }

    checkUrl() {
        expect(browser).toHaveUrl(this.exp.url);
    }

    checkGameTitleTextField() {
        expect(this.textField).toBeDisplayed()
    }

    checkMaleIcon() {
        expect(this.maleGenderIcon).toBeDisplayed()
    }

    checkFemaleIcon() {
        expect(this.femaleGenderIcon).toBeDisplayed()
    }



}

export default new PublicGame; 