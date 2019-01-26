import { observable, action } from 'mobx';

export default class AppStore {
  @observable authenticated = false;

  @action authenticate = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.authenticated = !this.authenticated;
        resolve(this.authenticated);
      }, 0);
    });
  }
}
