import axios from 'axios';

describe('Base URL', () => {

    describe('GET', () => {

        let status, data;

        before(() => {
            browser.call(() => {
                return axios
                    .get(' https://mafia-sacramento-server-qa.herokuapp.com')
                    .then(function (response) {
                        status = response.status;
                        data = response.data;
                    })
                    .catch(function (error) {
                        status = error.response.status;
                        data = error.response.data;
                    });
            })
        })

        it('404', () => {
            expect(status).toEqual(404);
        })

        it('Response-object', () => {
            const expected = {
                "error": {
                    "message": "Not found"
                }
            }
            expect(data).toEqual(expected);
        })

    })

})