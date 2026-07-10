import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';

import { FakeController } from './app/controller/fake-controller/fake-controller';

bootstrapApplication(FakeController, appConfig).catch((err) => console.error(err));
