declare global {
    namespace NodeJS {
        interface ProcessEnv {
            WEBSITE: string;
            WEBSITE_TITLE: string;
            WEBSITE_DESCRIPTION: string;
            NODE_ENV: 'development' | 'production';
        }
    }
}

export { }