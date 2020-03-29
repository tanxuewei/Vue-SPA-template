<template>
  <div>
    <ul>
      <li>{{ msg }}</li>
      <li>{{ cuMsg }}</li>
      <!-- <li>{{ parentMsg }}</li>
      <li>{{ parentObj.a }}</li> -->
      <!-- <li>{{ parentObj.b.c }}</li> -->
    </ul>
  </div>
</template>

<script>
export default {
  components: {
  },

  props: {
    parentMsg: String,
    parentObj: Object
  },

  data () {
    return {
      msg: 'item1'
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
    console.log('1child beforecreate')
  },

  created () {
    console.log('1child created')
    this.init()
  },

  beforeMount () {
    console.log('1child beforeMount')
  },

  mounted () {
    console.log('1child mounted')
  },

  beforeUpdate () {
    console.log('1child beforeUpdate')
  },

  updated () {
    console.log('1child updated')
  },

  beforeDestroy () {
    console.log('1child beforeDestroy')
  },

  destroyed () {
    console.log('1child destroyed')
  }
}
</script>

<style lang="scss" scoped>
</style>
