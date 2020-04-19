const env = process.env;

const { REACT_APP_URL_TYPE, REACT_APP_AUTH_TOKEN } = env;
console.log(REACT_APP_URL_TYPE, REACT_APP_AUTH_TOKEN);
const getUrl = () => {
  switch (REACT_APP_URL_TYPE) {
    case 'dev':
      return 'http://localhost:3000/mock';
    case 'qa':
      return 'http://localhost:3000/mock';
    case 'prod':
      return 'http://localhost:3000/mock';
    default:
      return 'http://localhost:3000/mock';
  }
};

export default {
  token: REACT_APP_AUTH_TOKEN,
  baseUrl: getUrl()
};
