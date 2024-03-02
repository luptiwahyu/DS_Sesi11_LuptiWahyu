const { $, expect } = require('@wdio/globals')
const Page = require('./page');

const element = {
    fieldUsername: $('#user-name'),
    fieldPassword: $('#password'),
    buttonLogin: $('#login-button'),
    errorLockedOutUser: (message) => $(`//h3[text()="${message}"]`),
}

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login(username) {
        await element.fieldUsername.waitForDisplayed({ timeout: 2500 })
        await element.fieldUsername.setValue(username);
        await element.fieldPassword.setValue(process.env.PASSWORD);
        await element.buttonLogin.click();
    }

    async validateLockedOutUserError(message) {
        await element.errorLockedOutUser(message).waitForDisplayed({ timeout: 2500 })
        await expect(element.errorLockedOutUser(message)).toBeDisplayed()
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('/');
    }
}

module.exports = new LoginPage();
