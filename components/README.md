# COMPONENTS

**This directory is not required, you can delete it if you don't want to use it.**

The components directory contains your Vue.js Components.

_Nuxt.js doesn't supercharge these components._
    <div class="courses-page">
      <div class="container">
        <div class="columns">
          <div class="column is-8 is-offset-2">
            <h1 class="courses-page-title">Your Courses</h1>
            <!-- Iterate Courses -->
            <div
              v-for="course in courses"
              :key="course._id"
              class="tile is-ancestor"
            >
              <div class="tile is-parent is-12">
                <!-- Navigate to course manage page -->
                <nuxt-link
                  :to="'#'"
                  class="tile tile-overlay-container is-child box"
                >
                  <div class="tile-overlay">
                    <span class="tile-overlay-text"> Update Course </span>
                  </div>
                  <div class="columns">
                    <div class="column is-narrow">
                      <figure class="image is-4by2 is-128x128">
                        <img
                          :src="
                            'https://i.udemycdn.com/course/750x422/2381802_d90c_3.jpg'
                          "
                        />
                      </figure>
                    </div>
                    <div class="column">
                      <p class="title">
                        {{ course.title }}
                      </p>
                      <p class="subtitle">
                        {{ course.subtitle }}
                      </p>
                      <span class="tag" :class="'is-success'"> {{ course.status }}  </span>
                    </div>
                    <div class="column is-narrow flex-centered">
                      <div class="price-title">{{ course.price || 0 }} $</div>
                    </div>
                  </div>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>