<template>
  <div id="app">
    
        <b-carousel
        v-bind="passData()"
          v-model="slide"
      :interval="100000"
      controls
      indicators
      background="#ababab"
      img-width= "100vw"
      img-height= "150vh"
      style="text-shadow: 1px 1px 2px #333;"
    >
        <b-carousel-slide
         v-for="(item,index) in temp" :key="item.id" :index="index"
        img-src="https://cdn1.neolith.com/wp-content/uploads/wp-imk/colecciones/iron/iron-grey/despiece/iron-grey-1024x480.jpg">
         <img :src="item.image" alt="No image" @click.left =  x()
         v-on:click.right = removeSlide(index)> 
        </b-carousel-slide>
        </b-carousel>
        <!--Manufacturer:{{item.manufacturer}}
        <br>
        Ram: {{item.ram}}
        <br>
        Internal memory:{{item.internal_memory}}
        <br>
        CPU: {{item.cpu}}
        <br>
        Back camera:{{item.back_camera}}
        <br>
        Front camera:{{item.front_camera}}
        <br>
        GPU:{{item.gpu}}
        <br>
        Battery:{{item.battery}}
        <br>
        Battery removable:{{item.battery_removable}}
        <br>
        LTE:{{item.lte}}
        <br>
        Price:{{item.price}}
        <br>
        Photo:{{item.image}}-->
    
    
    </div>
</template>

<script>
export default {
  name: "Home",
  data: function() {
    return {
      dataset: [],
      temp:[],
      urls: [],
       slide: 0,
        sliding: null
    };
  },
  methods: {
    passData:function(){
      this.temp = this.dataset;
    },
    removeSlide:function(index){
        this.temp.splice(index,1);
    },
    x:function(){
      console.log("AAAAAAAAAAAAA");
    }
   
  },
     mounted: function() {
      this.axios({
        method: "GET",
        url: "https://output.jsbin.com/fotokir.json",
        responseType: "JSON"
      })
        .then(response => {
          this.dataset = response.data.phones;
          for(let i =0;i<this.dataset.length;i++){
              this.urls[i] = this.dataset[i].image;
          }
        
        })
        .catch(error => {
          console.log("error", error);
        });
    }
  
};
    
  
</script>

<style scoped>
#app{
  width:100vw;
  height:100vh;
}

img{
  width:auto;
  height:auto;
}
</style>
