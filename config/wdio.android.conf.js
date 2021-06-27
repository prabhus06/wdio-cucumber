const { config } = require('./wdio.conf')

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

		// For Android bases mobile device
		capabilities: [
			{
				platformName: 'Android',
				noReset: true,
				fullReset: false,
				maxInstances: 1,
				automationName: 'uiautomator2',
				deviceName: 'Samsung S21',
				platformVersion: '10',
				app: app_path,
			},
		],
	},
}
