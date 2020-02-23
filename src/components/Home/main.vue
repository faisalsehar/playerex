<template>
    <div class="edgtf-content" >
  <div class="">
    <div class="edgtf-full-width">
     <div id="pav-slideshow" class="pav-slideshow" >
        <div class="box">
          <div class="box-content">
            <div class="home_slidecontainer">
              <div class="container">
                <div class="hometextcontainer wrapper">
                  <h3 class="slidetextblue">ProBoosting</h3>
                  <div class="text_slide">
                    <b>Quality Boosting</b> in <b>15 Games</b> with <b>Various Features</b> <br>including <b>24/7 Live Support</b> will deliver you a <b>Unique Experience </b>
                  </div>
                  <div class="buttonslide">
                    Check Our Services
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container ">
        <div class="row">
          <div class="col-lg-12 col-md-12  ">
            <div class="box pav-custom  title_section">
              <div class="box-heading">
                <h2>Our Boostings</h2>
              </div>
              <div class="box-content">
                <p>Fast and cheap boostings<br></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Home Section Start-->
      <Section1/>
   <Section2/>
   <Section3/>
   <Section4/>
    <Section5/>
   
    <!-- home sections End-->
    </div>
    </div>
    </div>
</template>

<script> 
import Section1 from './section1'
import Section2 from './section2'
import Section3 from './section3'
import Section4 from './section4'
import Section5 from './section5'
    export default {
      components:{
      Section1,
      Section2,
      Section3,
      Section4,
      Section5

      }  
    }
</script>

<style lang="scss" scoped>

</style>