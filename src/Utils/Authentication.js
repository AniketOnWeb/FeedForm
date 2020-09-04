export default class Authentication {
  static save(accessToken) {
    localStorage.setItem("accessToken", accessToken);
  }

  static load() {
    return localStorage.getItem("accessToken");
  }

  static saveUserProfile(profile) {
    localStorage.setItem("loggedInUserDetails", profile);
  }

  static loadUserProfile() {
    return localStorage.getItem("loggedInUserDetails");
  }

  static reset() {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("loggedInUserDetails");
  }
}
