export const state = () => {
  user: null;
};

export const actions = {
  login({ commit }, loginData) {
    return this.$axios
      .$post("api/v1/users/login", loginData)
      .then(user => {
        commit("setAuthUser", user);
      })
      .catch(err => {
        return Promise.reject(err);
      });
  }
};

export const mutations = {
  setAuthUser(state, user) {
    state.user = user;
  }
};
