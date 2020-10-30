export const state = () => {
  user: null;
};

export const getters = {
  authUser(state) {
    return state.user || null;
  },

  isAuthenticated(state) {
    // if (state.user) {
    //   return true
    // } else {
    //   return false
    // }
    return !!state.user;
  },
  isAdmin(state) {
    return state.user && state.user.role && state.user.role === "admin";
  }
};

export const actions = {
  /**
   *  create user
   */
  register(_, registerData) {
    return this.$axios.$post("/api/v1/users/register", registerData)
      .catch(error => {
        let errorMessage =
          "Uuups, something went wrong, try to register again!";
        if (error.response.data.errors) {
          errorMessage = error.response.data.errors.message;
        }
        return Promise.reject(errorMessage);
      });
  },
  /** login actions
   */
  login({ commit, state }, loginData) {
    return this.$axios
      .$post("api/v1/users/login", loginData)
      .then(user => {
        commit("setAuthUser", user);
        return state.user;
      })
      .catch(err => Promise.reject(err));
  },

  /**
   * preserve state after login
   */
  getAuthUser({ commit, getters, state }) {
    const authUser = getters.authUser;

    if (authUser) {
      return Promise.resolve(authUser);
    }
    return this.$axios
      .$get("/api/v1/users/me")
      .then(user => {
        commit("setAuthUser", user);
        return state.user;
      })
      .catch(err => {
        commit("setAuthUser", null);
        return Promise.reject(err);
      });
  },
  /**
   *
   */
  logout({ commit }) {
    return this.$axios
      .$post("/api/v1/users/logout")
      .then(() => {
        commit("setAuthUser", null);
        return true;
      })
      .catch(err => Promise.reject(err));
  }
};

export const mutations = {
  setAuthUser(state, user) {
    state.user = user;
  }
};
