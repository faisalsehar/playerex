<template>
    <div class="container">
  <a href=""><button class="button-back" style="vertical-align:middle"><span>Back</span></button></a>
  <a href="/boosters"><button class="button-back" style="vertical-align:middle"><span>View All</span></button></a>
  <div class="booster_profile" style="
    margin:50px 0px;
    ">
    <div class="booster_profile_counter_2">
      <h1 style="margin:5px;">Dumitru <span style="color:#000;margin:5px;font-size: 20px;font-weight:100;"></span></h1>
      <div>
        I've been playing league of legends for over 8 years, im an experienced booster who s always positive and ready for a new challenge, i m having a lot of free time in my hands so i m fully dedicated to my work as a profesionall booster.
        <br>Tilt wont get u anywhere, always stay positive and so you shall succede.
        <br>As additonal notes i main top and mid fav champ is irelia/leblanc but can also adc till d4-d3.
        <br>I'm boosting for over 2 years now and i can say no challenge brought me down, if u enjoyed my services dont forget to leave a review and dont hesitate to ask for me if u wish to have another order with me. 
      </div>
      <hr>
      Boosts in: <a href="https://www.proboosting.net/elo"><b>League of Legends</b></a>, <a href="https://www.proboosting.net/wow-classic-boost"><b>WoW Classic</b></a> <br>
    </div>
    <div class="booster_profile_counter">
      <div>
        Orders Completed: <span class="data_value">45</span>
      </div>
      <div>
        Recent Orders: <span class="data_value">3</span>
      </div>
      <div>
        Last Active: <span class="data_value">4&nbsp;days&nbsp;ago</span>
      </div>
      <div>
        Rating: <span class="data_value">5/5</span>
        <span style="font-size:12px">(23 reviews)</span>
      </div>
      <div>
        <span><b>Available</b></span>
      </div>
     
      <div class="ac_winner"></div>
    </div>
  </div>
  <h6>If you want <b>Dumitru</b> to be your booster, type <b>22937</b> when you choose the booster for your order</h6>
  <div class="after_profile"></div>
  <br>
  <p id="booster_reviews_container_show_hide">Dumitru's Reviews -
    <a href="/index.php?route=profiles/list/review&amp;booster_id=22937">Feel free to read them all</a>
  </p>
<Reviewssection/>
    </div>
</template>

<script>
import  Reviewssection from '../Home/section4'
    export default {
        components:{
           Reviewssection 
        }
    }
</script>

<style  scoped>
  .ac_winner {
        margin-top: 20px;
        position: relative;
        width: 170px;
        height: 220px;
        overflow: hidden;
        }
        .ac_winner > img {
        position: absolute;
        left:0;
        transition: 150ms;
        }
</style>