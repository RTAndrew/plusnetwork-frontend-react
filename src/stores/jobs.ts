import { action, observable } from 'mobx';

class JobsStore {
  @observable jwt_token: string = '';

  @action isUserAuthenticated() {
    return !!this.jwt_token;
  }

  @action setJwtToken(jwtToken: string) {
    this.jwt_token = jwtToken;
  }
}

export default JobsStore;
