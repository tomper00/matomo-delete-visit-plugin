# matomo-delete-visit-plugin
A front end solution that gives admin users in Matomo a possibility to directly delete a users visit from the admin GUI. This helps admins to clean up data if PII incidents happens.

This javascript can bu run in your browser on page loads when you visit the admin GUI of Matomo.
It was developed using the Chrome plugin User JavaScript and CSS v 1.2.6.

It simply injects a link on all visitor log popups to make it possible to delete each individual visit in these popups.
The only thing you need to do is to add your Matomo API token to the file.


Note that this script is not so beutiful, it works as a conceptual idea and you should not share the script to anyone with your own API token for instance.

Hopefully we will build a better plugin for Matomo offering this feature in a solution more based on Matomos coding standards.
