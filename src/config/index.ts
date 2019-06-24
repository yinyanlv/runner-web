const nodeEnv = process.env.NODE_ENV || 'development';

interface Config {
    API_PREFIX: any;
}

export const config: Config = <any>require(`./${nodeEnv}.config`);
