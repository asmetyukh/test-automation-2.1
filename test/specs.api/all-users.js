import axios from 'axios';

describe('ALL-USERS', () => {
    describe('GET ALL USERS' , () => {
        let status, data;
        before(() => {
            browser.call(() => {
                return axios
                    .get('https://mafia-sacramento-server-qa.herokuapp.com/mafia-users/')
                    .then(function (response) {
                        status = response.status;
                        data = response.data;
                    })
                    .catch(function (error) {
                        status = error.response.status;
                        data = error.response.data;
                    })
            })
        })
        it('Status 200', () => {
            expect(status).toEqual(200);
        })
        
        it('Response-Is-Array', () => {
            expect(Array.isArray(data)).toEqual(true);
        })
        
        it('All-Elements-Are-Objects', () => {
            //   function checker (el) {
            //     if(typeof el === ‘object’) {
            //         return true
            //     } else {
            //        return false
            //     }
            //   }
            expect(data.every(el => {
                if (typeof el === 'object') {
                    return true
                } else {
                    return false
                }
            })).toEqual(true)
        })
    })
})