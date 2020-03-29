<template>
  <div>
    {{ msg }}
    <!-- {{ count }} {{ doneTodoCount }} -->
    <button @click="increment">我是业务button</button>
    <button @click="incrementAsync">action BTN</button>
    <button @click="showModal">弹框</button>
    {{ parentObj.a }}
    <!-- <itemView /> -->
    <itemView :parentMsg="msg" :parentObj="parentObj"/>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';
import itemView from './item'

export default {
  name: 'business',

  components: {
    itemView
  },
  computed: { // ...mapState({
    //   count: state => state.count
    // })
    // 如果不改变名称就用下面的写法
    ...mapState(['count']),
    ...mapGetters(['doneTodoCount'])
  },

  data() {
    return {
      msg: '大家好，我是业务',
      activeName: 'second',
      parentObj: {
        a: 4,
        b: {
          c: 5
        }
      }
    };
  },

  methods: { // 直接映射为store.commit
    // ...mapMutations([
    //   'INCREMENT_COUNT'
    // ]),
    // incrementAsync () {
    //   this.$store.dispatch('incrementAsync')
    // },
    ...mapActions(['increment', 'incrementAsync']),

    showModal() {
      this.$refs.modal.show();
    },

    open(flag) {
      console.log(flag);
    },

  },
  
  beforeCreate () {
    console.log('parent beforecreate')
  },

  created () {
    console.log('parent created')

    setTimeout(() => {
      this.msg = '我更新了，惊不惊喜，意不意外'
    }, 2000)
  },

  beforeMount () {
    console.log('parent beforeMount')
  },

  mounted () {
    console.log('parent mounted')
  },

  beforeUpdate () {
    console.log('parent beforeUpdate')
  },

  updated () {
    console.log('parent updated')
  },

  beforeDestroy () {
    console.log('parent beforeDestroy')
  },

  destroyed () {
    console.log('parent destroyed')
  }
};
</script>

