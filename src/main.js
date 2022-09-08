import { createApp } from 'vue';

import router from '@/router';
import store from './store/index.js';
import App from './App'
import BaseCard from '@/components/ui/BaseCard';
import BaseButton from '@/components/ui/BaseButton';
import BaseBadge from '@/components/ui/BaseBadge';
import BaseDialog from '@/components/ui/BaseDialog';
import GoBack from '@/components/ui/GoBack';

const app = createApp(App)

app.use(router);
app.use(store);

app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('base-badge', BaseBadge);
app.component('base-dialog', BaseDialog);
app.component('go-back', GoBack);

app.mount('#app');
