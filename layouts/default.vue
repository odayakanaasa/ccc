<template>
  <div>
    <nav class="navbar is-transparent">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <img src="/logo.png" alt="Cex.io Curyptocurrency Checker" width="112" height="28">
        </a>
        <a href="https://github.com/yuki-nakamura" target="_blank" title="Github" class="navbar-item"><span class="icon"><i class="fa fa-github fa-lg"></i></span></a>
        <a href="https://twitter.com/yuuki_0606" target="_blank" title="Twitter" class="navbar-item"><span class="icon"><i class="fa fa-twitter fa-lg"></i></span></a>
        <div class="navbar-item is-hidden-desktop">
          <social-sharing
            :url="baseUrl + $route.fullPath"
            title="Cex.io のレート・残高チェック"
            description="description"
            quote="quote"
            hashtags="bitcoin,eth,ripple,bch"
            twitter-user=""
            inline-template>
              <network network="twitter">
                <a class="avbar-item bd-tw-button button" data-social-network="Twitter" data-social-action="tweet" data-social-target="http://localhost:4000" target="_blank" href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=http://localhost:4000&amp;via=jgthms">
                  <span class="icon">
                    <i class="fa fa-twitter"></i>
                  </span>
                  <span>
                    Tweet
                  </span>
                </a>
              </network>
          </social-sharing>
        </div>
      </div>

      <div id="navbarExampleTransparentExample" class="navbar-menu">
        <div class="navbar-start">
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="field is-grouped">
              <p class="control">
                <social-sharing
                  :url="baseUrl + $route.fullPath"
                  title="Cex.io のレート・残高チェック"
                  description="description"
                  quote="quote"
                  hashtags="bitcoin,eth,ripple,bch"
                  twitter-user=""
                  inline-template>
                    <network network="twitter">
                      <a class="avbar-item bd-tw-button button" data-social-network="Twitter" data-social-action="tweet" data-social-target="http://localhost:4000" target="_blank" href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=http://localhost:4000&amp;via=jgthms">
                        <span class="icon">
                          <i class="fa fa-twitter"></i>
                        </span>
                        <span>
                          Tweet
                        </span>
                      </a>
                    </network>
                </social-sharing>
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <section class="hero is-primary is-medium">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">
            CCC
          </h1>
          <h2 class="subtitle">
            Cex.io Curyptocurrency Checker
          </h2>
        </div>
      </div>
    </section>
    
    <section class="container">
      <nuxt/>
    </section>
    
    <footer class="footer">
      <div class="container">
        <div class="content has-text-centered">
          <p>
            <strong>CCC</strong> by <a href="https://twitter.com/yuuki_0606">ynakamura</a>.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        baseUrl: process.env.baseUrl
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
