/* globals fireGlobalEvent */
import { Meteor } from 'meteor/meteor';

/* fire user state change globally, to listen on desktop electron client */
Meteor.startup(function() {
	RocketChat.callbacks.add('userStatusManuallySet', (status) => {
		fireGlobalEvent('user-status-manually-set', status);
	});
});
