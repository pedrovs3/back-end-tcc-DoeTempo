import App from './app';
import AuthPlugin from './plugins/auth.plugin';

const app = new App({ plugins: [AuthPlugin] });

app.listen();
