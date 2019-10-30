import axios from './init_axios';


const apiToken = '94HMPu24blCOhuMwPzDtQTK93hh78Gag6bxmVzDRXCLOVGH7Ob9MPM6HjdDLfXwjgiAuAZW7wNzkTtgZ3IaGNASoaoRDyMnl1aDrFoJluKyM9aPKXHyqR20BRJ7DJ8wTTeehzV7yjLupp38IFBdTpDSN3mLJUSBqSr7A1TDrOYdFmfhPCHS3TO6g2coKneTphfN4DnNZFA761D0VeizOP0iHyqDwkjASUGWZhJuKbBUVpO9hvD3LPUbzBy1z1Wyc';
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
