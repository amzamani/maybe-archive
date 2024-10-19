import { defineConfig } from 'cypress'
import { nxE2EPreset } from '@nrwl/cypress/plugins/cypress-preset'

export default defineConfig({
    e2e: {
        ...nxE2EPreset(__dirname),
        video: false,
        screenshotsFolder: '../../dist/cypress/apps/e2e/screenshots',
        viewportWidth: 1280,
        viewportHeight: 720,
        baseUrl: 'https://silver-guacamole-95p6jjgv5xwfxqpq-4200.app.github.dev/',
        env: {
            API_URL: 'https://silver-guacamole-95p6jjgv5xwfxqpq-3333.app.github.dev/v1',
            NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
            NEXT_PUBLIC_NEXTAUTH_URL:
                'https://silver-guacamole-95p6jjgv5xwfxqpq-4200.app.github.dev/',
            NEXTAUTH_URL: process.env.NEXTAUTH_URL,
            STRIPE_WEBHOOK_SECRET: 'REPLACE_THIS',
            STRIPE_CUSTOMER_ID: 'REPLACE_THIS',
            STRIPE_SUBSCRIPTION_ID: 'REPLACE_THIS',
        },
        specPattern: 'src/e2e/**/*.cy.{js,jsx,ts,tsx}',
        supportFile: 'src/support/e2e.ts',
        fixturesFolder: './src/fixtures',
        setupNodeEvents(on, config) {
            on('task', {
                log(message) {
                    console.log(message)
                    return null
                },
            })
        },
    },
})
