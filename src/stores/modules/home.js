import shop from '../../api/index'
import * as types from '../mutation-types'

// initial state
// shape: [{ id, quantity }]
const state = {
  added: [],
  checkoutStatus: null,
  homeData: null
}

// getters
const getters = {
  checkoutStatus: state => state.checkoutStatus
}

// actions
const actions = {
  getHomeData ({ commit, state }) {
    shop.getHomeData((data) => {
      commit(types.GET_HOME_DATA, { data })
    })
  }
}

// mutations
const mutations = {
  // [types.ADD_TO_CART] (state, { id }) {
  //   state.checkoutStatus = null
  //   const record = state.added.find(p => p.id === id)
  //   if (!record) {
  //     state.added.push({
  //       id,
  //       quantity: 1
  //     })
  //   } else {
  //     record.quantity++
  //   }
  // },

  // [types.CHECKOUT_REQUEST] (state) {
  //   // clear cart
  //   state.added = []
  //   state.checkoutStatus = null
  // },

  // [types.CHECKOUT_SUCCESS] (state) {
  //   state.checkoutStatus = 'successful'
  // },

  // [types.CHECKOUT_FAILURE] (state, { savedCartItems }) {
  //   // rollback to the cart saved before sending the request
  //   state.added = savedCartItems
  //   state.checkoutStatus = 'failed'
  // },
  [types.GET_HOME_DATA] (state, {data}) {
    state.homeData = data
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
