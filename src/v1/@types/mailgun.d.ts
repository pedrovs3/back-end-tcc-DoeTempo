declare module 'mailgun.js' {
	interface MailgunClient {
		messages: {
			create(domain: string, data: object): Promise<any>;
		};
	}

	function client(options: { key: string }): MailgunClient;

	export {
	  client,
	};
}
