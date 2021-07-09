const { config } = require('./wdio.conf');

exports.config = {
	...config,
	...{
		user: process.env.SAUCE_USERNAME,
		key: process.env.SAUCE_ACCESS_KEY,
		region: 'eu',
		services: ['selenium-standalone', 'sauce', 'appium'],
		capabilities: [
			{
				maxInstances: 5,
				browserName: 'chrome',
				browserVersion: 'latest',
				platformName: 'Windows 10',
				'sauce:options': {
					build: `Build ${Math.ceil(Date.now() / 1000)}`,
				},
			},
		],
	},
};
