<template>
<div class="edgtf-content">
    <div class="edgtf-content-inner">
        <div class="edgtf-title-holder edgtf-standard-type edgtf-title-va-header-bottom" style="height: 240px;box-shadow: 15px 15px 21px 0px rgba(1, 1, 1, 0.3)" data-height="240">
            <div class="edgtf-title-wrapper" style="height: 240px">
                <div class="edgtf-title-inner">
                    <div class="edgtf-grid">
                        <h3 class="edgtf-page-title entry-title">My account</h3>
                    </div>
                </div>
            </div>
        </div>
        <div class="edgtf-container edgtf-default-page-template">
            <div class="edgtf-container-inner clearfix">
                <div class="edgtf-grid-row ">

                <div class="edgtf-page-content-holder edgtf-grid-col-4">
            <div class="woocommerce">
              <nav class="woocommerce-MyAccount-navigation">
                <ul>
                  <li class="woocommerce-MyAccount-navigation-link woocommerce-MyAccount-navigation-link--dashboard">
                    <a href="#" v-on:click='dashboard'>Dashboard</a>
                  </li>
                  <li class="woocommerce-MyAccount-navigation-link woocommerce-MyAccount-navigation-link--orders">
                    <a href="#" v-on:click='orders'>Orders</a>
                  </li>
                  <li class="woocommerce-MyAccount-navigation-link woocommerce-MyAccount-navigation-link--downloads">
                    <a href="#">Downloads</a>
                  </li>
                  <li class="woocommerce-MyAccount-navigation-link woocommerce-MyAccount-navigation-link--edit-address">
                    <a href="#">Addresses</a>
                  </li>
                  <li class="woocommerce-MyAccount-navigation-link woocommerce-MyAccount-navigation-link--edit-account is-active">
                    <a href="#" v-on:click='dashboard'>Account details</a>
                  </li>
                  <li class="woocommerce-MyAccount-navigation-link woocommerce-MyAccount-navigation-link--customer-logout">
                    <router-link to="/auth" exact>Logout</router-link>
                  </li>
                </ul>
              </nav>
              
            </div>
          </div>
                     <Accountdetails v-show="accountdetails" />
                     <Orders v-show="ordersdetails" />
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>

import Accountdetails from './Accountdetails'
import Orders from './Orders'
export default {
components:{
   
    Accountdetails,
    Orders 
},
data(){
       return {
   accountdetails:true,
   ordersdetails:false
       }

},
methods:{
orders:function(){
 this.accountdetails=false,
   this.ordersdetails=true

},
dashboard:function(){
 this.accountdetails=true,
   this.ordersdetails=false

},

}
}
</script>

<style lang="scss" scoped>

</style>
