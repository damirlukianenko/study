import { createApp } from 'vue'

/* Naive UI */
import {
    create,
    NButton,
    NIcon,
    NTooltip,
    NMessageProvider,
} from 'naive-ui';

const naive = create({
    components: [
        NButton,
        NTooltip,
        NIcon,
        NMessageProvider,
    ]
})

/* Helpers */
import { globalComponents } from 'components/addons/globalComponents';
import { propsToClasses } from 'components/addons/helpers/propsToClasses';

/* Apps */
import App from './App.vue';
import StudyUI from 'components/study-ui/StudyUI.vue';

/* STUDY UI */
let studyUI = createApp(StudyUI);

/* mount global components */
for (let key in globalComponents) {
    studyUI.component(key, globalComponents[key]);
}

studyUI.use(naive);
studyUI.mount('.study-ui-container')

/* LESSONS */
let app = createApp(App)

for (let key in globalComponents) {
    app.component(key, globalComponents[key]);
}

app.use(propsToClasses)
app.use(naive)
app.mount('.app-container')