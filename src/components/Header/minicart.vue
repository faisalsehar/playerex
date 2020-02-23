<template>
<div class="pull-right hidden-xs hidden-sm c_top custompostionofminicart">
    <ul class="links navbar-nav buttonsheaderright ">
        <li class="currency pull-left">
            <form action="" method="post" enctype="multipart/form-data" class="currency">
                <ul>
                    <li class="btn-group">
                        <button class="btn-theme-normal dropdown-toggle" data-toggle="dropdown" title="Currency">
                            <span>$</span>
                            <span class="fa fa-sort-asc"></span>
                        </button>
                        <ul class="dropdown-menu">
                            <li>
                                <button class="currency-select" type="button" name="EUR"><span class="symbol">€</span> <span>Euro</span></button>
                            </li>
                            <li>
                                <button class="currency-select" type="button" name="GBP"><span class="symbol">£</span> <span>Pound Sterling</span></button>
                            </li>
                            <li>
                                <button class="currency-select" type="button" name="USD"><span class="symbol">$</span> <span>US Dollar</span></button>
                            </li>
                        </ul>
                    </li>
                </ul>
                <input type="hidden" name="code" value="">
                <input type="hidden" name="redirect" value="">
            </form>
        </li>
        <li class="parent dropdown" style="line-height: 34px;">
            <a href="" style="background-color: #1A1A4B;color: #ffffff;border-radius: 5px;padding: 7px;"> <i class="fa fa-user" aria-hidden="true"></i> </a>
        </li>
        <li id="desktop_cart">
            <div id="cart" class="pull-right customminicartshow" v-bind:class="{ open: showmenue}">
                <div data-toggle="dropdown" data-loading-text="Loading..." class="media-body heading dropdown-toggle">
                    <a><span id="cart-total" v-on:click="Toggleminicart" class="icon-cartx" style="min-width: 70px;">2 item(s) - $20.90</span></a>
                </div>
                <ul class="dropdown-menu pull-right" style="z-index: 1001 !important;">
                    <li>
                        <div class="mini-cart-info">
                            <div class="row">
                                <div class="col-sm-3">
                                    <a href=""><img src="https://www.proboosting.net/image/cache/catalog/Banner-LoL-Cyan-compressor-70x86.png" alt="Elo Division Boost" title="Elo Division Boost" class="img-thumbnail"></a>
                                </div>
                                <div class="col-sm-9" style="border-bottom:1px solid #ccc;">
                                    <div class="row">
                                        <div class="col-sm-12">
                                            <a href="">Elo Division Boost</a>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-8">
                                            &nbsp; 2 x $20.90
                                        </div>
                                        <div class="col-sm-2">

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="mini-cart-total">
                            <div class="checkout">
                                <router-link class="button view-cart" to="/cart" exact>View Cart</router-link>
                                <router-link class="button checkout" to="/checkout" exact>Checkout</router-link>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </li>
    </ul>
    <router-link to="/auth" style="color: #fff; border: solid 2px #fff" class="account" exact>
        Members Area
    </router-link>
</div>
</template>

<script>
export default {

    data() {
        return {
            showmenue: false
        }
    },
    methods: {
        Toggleminicart: function () {
            this.showmenue = !this.showmenue

        }
    },

}
</script>

<style scoped>
.custompostionofminicart {
    z-index: 1000;
    position: fixed;
    top: 170px;
    right: 22px;
}
</style>
