import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

FlowRouter.route('/snippet/:snippetId/:snippetName', {
	name: 'snippetView',
	action() {
		BlazeLayout.render('main', { center: 'snippetPage', flexTabBar: null });
	},
	triggersEnter: [function() {
		RocketChat.TabBar.hide();
	}],
	triggersExit: [
		function() {
			RocketChat.TabBar.show();
		},
	],
});
