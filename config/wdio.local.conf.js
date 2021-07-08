const { config } = require('./wdio.conf')

exports.config = {
    ...config,
    ...{
      services: ['selenium-standalone'],
      capabilities: [
          {
            maxInstances: 5,
            browserName: 'chrome',
            acceptInsecureCerts: true,
            'goog:chromeOptions': {
                //headless: true
            }
        },
			// {
			//   maxInstances: 5,
			//   browserName: 'safari',
			// },
		],
	},
}
