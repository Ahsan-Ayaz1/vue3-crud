import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './routes'
import { plugin, defaultConfig } from '@formkit/vue'
import { generateClasses } from '@formkit/themes'
import myTailwindTheme from '../tailwind-theme'
import './style.css'

// app.use(plugin, defaultConfig(config))

const app = createApp(App);
app.use(plugin,
    defaultConfig({
      config: {
        classes: generateClasses(myTailwindTheme),
      },
    })
)
app.use(router);

app.mount('#app');