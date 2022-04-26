import { Meteor } from 'meteor/meteor';
import { LinksCollection } from '/imports/api/links';
import { Accounts } from 'meteor/accounts-base';

function insertLink(title: string, url: string) {
  LinksCollection.insert({ title, url, createdAt: new Date() });
}

const SEED_USERNAME = 'meteorite';
const SEED_PASSWORD = 'password';

Meteor.startup(() => {

  if (!Accounts.findUserByUsername(SEED_USERNAME)) {
    Accounts.createUser({
      username: SEED_USERNAME,
      password: SEED_PASSWORD,
    });
  }

  // If the Links collection is empty, add some data.
  if (LinksCollection.find().count() === 0) {
    insertLink(
      'Do the Tutorial',
      'https://www.meteor.com/tutorials/react/creating-an-app'
    );

    insertLink(
      'Follow the Guide',
      'http://guide.meteor.com'
    );

    insertLink(
      'Read the Docs',
      'https://docs.meteor.com'
    );

    insertLink(
      'Discussions',
      'https://forums.meteor.com'
    );
  }
});
