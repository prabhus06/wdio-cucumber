const { config } = require('./wdio.conf')

exports.config = {
	...config,
	...{
		services: [
			[
				'selenium-standalone',
				{
					drivers: { firefox: '0.29.1', chrome: true, chromiumedge: 'latest' },
				},
			],
		],
		capabilities: [
			{
				maxInstances: 5,
				browserName: 'chrome',
				acceptInsecureCerts: true,
				'goog:chromeOptions': {
					//headless: true
				},
			},

			// {
			//   maxInstances: 5,
			//   browserName: 'safari',
			// },
		],
	},
}
