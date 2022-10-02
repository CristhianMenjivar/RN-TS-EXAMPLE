type EnvironmentApp = 'development' | 'production' | 'test';

type EnvironmentUrls = {
  baseUrl?: string;
};

type Environments = {
  development: EnvironmentUrls;
  production: EnvironmentUrls;
  test: EnvironmentUrls;
};

export const currentEnvironment: EnvironmentApp = 'development';

export const environments: Environments = {
  development: {
    baseUrl: process.env.REACT_APP_BASE_URL_SERVER,
  },
  production: {
    baseUrl: process.env.REACT_APP_BASE_URL_SERVER,
  },
  test: {
    baseUrl: process.env.REACT_APP_BASE_URL_SERVER,
  },
};

export const BASE_URL_SERVER = environments[currentEnvironment].baseUrl;
export const CURRENT_VERSION_APP = '1.0.0';
export const REDUX_PERSIST_CONFIG_KEY = 'app-name-root';

// estos valores son el alto y ancho diseñados en Figma, etc
export const WIDTH_DESIGN = 375;
export const HEIGHT_DESIGN = 812;
