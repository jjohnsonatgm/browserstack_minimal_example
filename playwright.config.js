"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    testMatch: ['Explore.spec.ts'],
    timeout: 300 * 150,
    expect: {
        timeout: 5000
    },
    fullyParallel: true,
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 2 : 0,
    workers: process.env.CI ? 1 : undefined,
    projects: [
        // {
        //   name: 'chromium',
        //   use: {
        //     headless: false
        //   }
        // },
        {
            name: 'chrome@latest:Windows 10@browserstack',
            use: {
                browserName: 'chromium',
                channel: 'chrome'
            },
        },
    ]
};
exports.default = config;
