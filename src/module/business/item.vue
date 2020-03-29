<template>
  <div>
    <ul>
      <li>{{ msg }}</li>
      <li>{{ cuMsg }}</li>
      <li>{{ parentMsg }}</li>
      <li>{{ parentObj.a }}</li>
      <!-- <li>{{ parentObj.b.c }}</li> -->
    </ul>
    <item1View />
  </div>
</template>

<script>
import item1View from './item1'
export default {
  components: {
    item1View
  },

  props: {
    parentMsg: String,
    parentObj: Object
  },

  data () {
    return {
      msg: 'ccc'
    }
  },

  computed: {
    cuMsg () {
      return this.msg + '333'
    }
  },

  methods: {
    init () {
      setTimeout(() => {
        // this.parentObj.a = 'new a'
      }, 3000)
    }
  },

  beforeCreate () {
    console.log('child beforecreate')
  },

  created () {
    console.log('child created')
    this.init()
  },

  beforeMount () {
    console.log('child beforeMount')
  },

  mounted () {
    console.log('child mounted')
  },

  beforeUpdate () {
    console.log('child beforeUpdate')
  },

  updated () {
    console.log('child updated')
  },

  beforeDestroy () {
    console.log('child beforeDestroy')
  },

  destroyed () {
    console.log('child destroyed')
  }
}
</script>

<style lang="scss" scoped>
</style>
