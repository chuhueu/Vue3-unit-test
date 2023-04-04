import { mount } from '@vue/test-utils'
import App from "@/App.vue"
import { createStore } from 'vuex'
const createVuexStore = () => {
  return createStore({
    state() {
      return {
        count: 0
      }
    },
    mutations: {
      increment(state: {count: number}) {
        state.count += 1
      }
    }
  })
}

function factory() {
  const store = createVuexStore()
  return mount(App, {
    global: {
      plugins: [store]
    }
  })
}

describe('Testing for vue', () => {
  it('render count when odd', async () => {
    const wrapper = factory()
    await wrapper.find('button').trigger('click')
    expect(wrapper.html()).toContain('1: Count is odd')
  })
  it('render count when even', async () => {
    const wrapper = factory()
    await wrapper.find('button').trigger('click')
    await wrapper.find('button').trigger('click')
    expect(wrapper.html()).toContain('2: Count is even')
  })
})
