const { config } = require('./wdio.conf');

exports.config = {
	...config,
	...{
		host: '0.0.0.0',
		port: 4723,
		//path: '/wd/hub',
		services: [
			[
				'appium',
				{
					// For options see
					// https://github.com/webdriverio/webdriverio/tree/master/packages/wdio-appium-service
					args: {
						// For arguments see
						// https://github.com/webdriverio/webdriverio/tree/master/packages/wdio-appium-service
					},
					command: 'appium',
				},
			],
		],

		// For iOS bases mobile device
		capabilities: [
			{
				platformName: 'iOS',
				noReset: true,
				fullReset: false,
				automationName: 'XCUITest',
				platformVersion: '14.0',
				deviceName: 'iPhone Simulator',
				app: APP_PATH,
			},
		],
	},
};
