import axios from './init_axios';


const apiToken = 'pEXPoFtRqzpenlbWo3H8kQ6YwdVihjWkWKhMc21EgiZmkQAr6Mtre1d382J4Wc55e2heeRyGTExXUdLv222kRlTVyHKP7FITsKxzBX83O7RX5WzYYvQPREawydTrTuVd9ETDTYn00Jy02ZL9coIOZG9O58sTZkwUEpfcoO6hyqn7qZKFyuf6ypm3lYacAA1iT2WyThnkQvfSvC7KROx3CWsGO7Ebw4f0GaKNjzLpGHhqNcDyxcmLWs06BJV6IjMn';
const apiUser = 'Default';

export default {
  async apiLogin() {
    const apiConf = {
      key: apiToken,
      username: apiUser,
    };

    try {
      const apiSession = await axios.post('/index.php?route=api/login', apiConf);
      console.log(apiSession);
    } catch (e) {
      console.log('error', e);
    }
  },
};
