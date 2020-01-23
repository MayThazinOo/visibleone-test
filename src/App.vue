<template>
  <div id="app">
    <heading></heading>
    <about></about>
    <challenge></challenge>
    <problem></problem>
    <solution></solution>
    <revamp></revamp>
    <suitable></suitable>
    <client></client>
    <call-back></call-back>
    <contact></contact>
    <footers></footers>
  </div>
</template>

<script>
import Heading from './components/Heading.vue'
import About from './components/About.vue'
import Challenge from './components/Challenge.vue'
import Problem from './components/Problem.vue'
import Solution from './components/Solution.vue'
import Revamp from './components/Revamp.vue'
import Suitable from './components/Suitable.vue'
import Client from './components/Client.vue'
import CallBack from './components/CallBack.vue'
import Contact from './components/Contact.vue'
import Footers from './components/Footers.vue'
export default {
  name: 'app',
  components: {
    Heading,
    About,
    Challenge,
    Problem,
    Solution,
    Revamp,
    Suitable,
    Client,
    CallBack,
    Contact,
    Footers
  },
  data () {
    return {
     
    }
  }
}
</script>

<style>

</style>
