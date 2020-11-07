# PAGES

This directory contains your Application Views and Routes.
The framework reads all the `*.vue` files inside this directory and creates the router of your application.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/guide/routing).
 <section class="hero is-success is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="column is-4 is-offset-4">
          <h3 class="title has-text-grey">Login</h3>
          <p class="subtitle has-text-grey">Please login to proceed.</p>
          <div class="box">
            <figure class="avatar">
              <img src="https://via.placeholder.com/300" />
            </figure>
            <form>
              <div class="field">
                <div class="control">
                  <input
                    v-model="form.email"
                    @blur="$v.form.email.$touch()"
                    class="input is-large"
                    type="email"
                    placeholder="Your Email"
                    autofocus=""
                    autocomplete="email"
                  />
                  <div v-if="$v.form.email.$error" class="form-error">
                    <span v-if="!$v.form.email.required" class="help is-danger"
                      >Email is required</span
                    >
                    <span
                      v-if="!$v.form.email.emailValidator"
                      class="help is-danger"
                      >Email address is not valid</span
                    >
                  </div>
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <input
                    v-model="form.password"
                    @blur="$v.form.password.$touch()"
                    class="input is-large"
                    type="password"
                    placeholder="Your Password"
                    autocomplete="current-password"
                  />
                  <div v-if="$v.form.password.$error" class="form-error">
                    <span
                      v-if="!$v.form.password.required"
                      class="help is-danger"
                      >Password is required</span
                    >
                  </div>
                </div>
              </div>
              <!-- Login Button -->
              <button
                @click.prevent="login"
                :disabled="$v.form.$invalid"
                class="button is-block is-info is-large is-fullwidth "
              >
                Login
              </button>
            </form>
          </div>
          <p class="has-text-grey">
            <a>Sign In With Google</a> &nbsp;·&nbsp;
            <nuxt-link to="/register">Sign Up</nuxt-link> &nbsp;·&nbsp;

            <a href="../">Need Help?</a>
          </p>
        </div>
      </div>
    </div>
  </section>