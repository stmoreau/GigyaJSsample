import ShowUserInfo from './modules/ShowUserInfo';
import ShareAction from './modules/ShareAction';
import Logout from './modules/Logout';

(() => {
  new ShowUserInfo();
  new ShareAction();
  new Logout();
})();
