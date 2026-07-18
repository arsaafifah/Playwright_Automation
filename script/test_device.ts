import { devices } from '@playwright/test';

console.log(Object.keys(devices));

console.log('edge' in devices);

console.log(devices['Desktop Edge']);