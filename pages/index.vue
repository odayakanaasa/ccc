<template>
  <div class="main">
    <section>
      <div class="columns">
        <div class="column has-text-centered">
          <img src="https://d33wubrfki0l68.cloudfront.net/75954ef0d5e5f141e6d26fb6778c06b62d147d15/6c5fa/img/icon/icon-btc.svg" class="icon-height-100">
          <div class="card">
            <div class="card-content">
              <div class="content">
                {{ currencies['BTC'] }}
              </div>
            </div>
          </div>
        </div>
        <div class="column has-text-centered">
          <img src="https://d33wubrfki0l68.cloudfront.net/7bb77bd0b50eaa0315fbd550bc22da6d8a0296c1/7e5a4/img/icon/icon-eth.svg" class="icon-height-100">
          <div class="card">
            <div class="card-content">
              <div class="content">
                {{ currencies['ETH'] }}
              </div>
            </div>
          </div>
        </div>
        <div class="column has-text-centered">
          <img src="https://d33wubrfki0l68.cloudfront.net/4e509f5163f2f48b4888d09f4da5c65cd4ad6b61/6f84e/img/icon/icon-xrp.svg" class="icon-height-100">
          <div class="card">
            <div class="card-content">
              <div class="content">
                {{ currencies['XRP'] }}
              </div>
            </div>
          </div>
        </div>
        <div class="column has-text-centered">
          <img src="https://d33wubrfki0l68.cloudfront.net/f866f969c6e53a29e082528adf8b81675bd293c1/413ee/img/icon/icon-bch.svg" class="icon-height-100">
          <div class="card">
            <div class="card-content">
              <div class="content">
               {{ currencies['BCH'] }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
        <b-table
            :data="data"
            :loading="loading"
            focusable>

            <template slot-scope="props">
                <b-table-column label="Icon" width="40" numeric>
                    <img :src="props.row.icon" class="icon">
                </b-table-column>

                <b-table-column label="Coin">
                    {{ props.row.coin }}
                </b-table-column>

                <b-table-column label="balance" centered>
                    {{ props.row.balance }}
                </b-table-column>

                <b-table-column label="usd" centered>
                    {{ props.row.usd }}
                </b-table-column>
            </template>
            <template slot="empty">
                <section class="section">
                    <div class="content has-text-grey has-text-centered">
                        <p>
                            <b-icon
                                icon="emoticon-sad"
                                size="is-large">
                            </b-icon>
                        </p>
                        <p>Nothing here.</p>
                    </div>
                </section>
            </template>
        </b-table>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      currencies: { 'BTC': 0, 'ETH': 0, 'XRP': 0, 'BCH': 0 },
      data: [],
      loading: false
    }
  },
  async mounted () {
    this.loading = true
    this.data = [
      {
        'icon': 'https://d33wubrfki0l68.cloudfront.net/75954ef0d5e5f141e6d26fb6778c06b62d147d15/6c5fa/img/icon/icon-btc.svg',
        'coin': 'Bitcoin',
        'code': 'BTC',
        'balance': 0.12345,
        'usd': 0,
        'rate': null
      },
      {
        'icon': 'https://d33wubrfki0l68.cloudfront.net/7bb77bd0b50eaa0315fbd550bc22da6d8a0296c1/7e5a4/img/icon/icon-eth.svg',
        'coin': 'Ethereum',
        'code': 'ETH',
        'balance': 10.21007000,
        'usd': 0,
        'rate': null
      },
      {
        'icon': 'https://d33wubrfki0l68.cloudfront.net/4e509f5163f2f48b4888d09f4da5c65cd4ad6b61/6f84e/img/icon/icon-xrp.svg',
        'coin': 'Ripple',
        'code': 'XRP',
        'balance': 333216.000000,
        'usd': 0,
        'rate': null
      },
      {
        'icon': 'https://d33wubrfki0l68.cloudfront.net/f866f969c6e53a29e082528adf8b81675bd293c1/413ee/img/icon/icon-bch.svg',
        'coin': 'Bitcoin Cash',
        'code': 'BCH',
        'balance': 2,
        'usd': 0,
        'rate': null
      },
      {
        'icon': 'https://d33wubrfki0l68.cloudfront.net/a95958664e4a3c70c066e632a4199fa33b968feb/ba37d/img/icon/icon-dash.svg',
        'coin': 'DASH',
        'balance': 0,
        'usd': 0,
        'rate': null
      }
    ]
    for (const i in this.data) {
      console.log(i)
      let d = this.data[i]
      let rate = await this.tickerRequest(d.code)
      d.rate = rate
      if (d.balance > 0) d.usd = d.balance * rate.bid
      this.data[i] = d

      this.currencies[d.code] = rate.bid
    }
    this.loading = false
  },
  methods: {
    async tickerRequest (code) {
      let url = encodeURIComponent('https://cex.io/api/ticker/' + code + '/USD')
      let res = await this.$axios.$get('/proxy/' + url)
      return res
    }
  }
}
</script>

<style lang="scss" scoped>
  .main {
    & > section {
      padding-top: 1rem;
      padding-bottom: 1rem;
    }
  }
  .icon-height-100 {
    height: 100px;
  }
</style>
