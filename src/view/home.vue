<template>
  <FourSeasonsVue/>
<Entrance/>
</template>

<script>
import FourSeasonsVue from "../components/FourSeasons.vue"
import Entrance from "../components/Entrance.vue"
export default {
    components:{FourSeasonsVue,Entrance},
    methods:{
        open(){
            this.$router.push('/g1')
        }
    }
}
</script>

<style>

</style>