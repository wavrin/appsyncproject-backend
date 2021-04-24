const given = require()
const when = require()
const then = require()
const change = require('change').Chance()

describe('When confirmUserSignup runs', () => {
    it("The user's profile should be saved in DynamoDB", async () => {
        const { name, email } = given.a_random_user()
        const username = change.guid()

        await when.we_invoke_confirmUserSignup(username, name, email)

        const dddUser = await then.user_exists_in_UsersTable(username)
        expect(dddUser).toEqual({

        })
    })
})
