<template>
<div class="edgtf-content">
    <div class="edgtf-content-inner">
        <div class="edgtf-title-holder edgtf-standard-type edgtf-title-va-header-bottom" style="height: 150px;background-color: #333133;box-shadow: 15px 15px 21px 0px rgba(1, 1, 1, 0.3)" data-height="150">
            <div class="edgtf-title-wrapper" style="height: 150px">
                <div class="edgtf-title-inner">
                    <div class="edgtf-grid">
                        <h3 class="edgtf-page-title entry-title">Checkout</h3>
                    </div>
                </div>
            </div>
        </div>
        <div class="edgtf-container edgtf-default-page-template">
            <div class="edgtf-container-inner clearfix">
                <div class="edgtf-grid-row ">
                    <div class="edgtf-page-content-holder edgtf-grid-col-12">
                        <div class="woocommerce">
                            <div class="woocommerce-notices-wrapper"></div>
                            <div class="woocommerce-form-coupon-toggle">
                                <div class="woocommerce-info">
                                    Have a coupon? <a href="#" class="showcoupon">Click here to enter your code</a>
                                </div>
                            </div>
                            <form class="checkout_coupon woocommerce-form-coupon" method="post" >
                                <p>If you have a coupon code, please apply it below.</p>
                                <p class="form-row form-row-first">
                                    <input type="text" name="coupon_code" class="input-text" placeholder="Coupon code" id="coupon_code" value="">
                                </p>
                                <p class="form-row form-row-last">
                                    <button type="submit" class="button" name="apply_coupon" value="Apply coupon">Apply coupon</button>
                                </p>
                                <div class="clear"></div>
                            </form>
                            <div class="woocommerce-notices-wrapper"></div>
                            <form name="checkout" method="post" class="checkout woocommerce-checkout" action="https://playerx.qodeinteractive.com/checkout/" enctype="multipart/form-data" novalidate="novalidate">
                                <div class="col2-set" id="customer_details">
                                    <div class="col-1">
                                        <div class="woocommerce-billing-fields">
                                            <h3>Billing details</h3>
                                            <div class="woocommerce-billing-fields__field-wrapper">
                                                <p class="form-row form-row-first validate-required" id="billing_first_name_field" data-priority="10"><label for="billing_first_name" class="">First name&nbsp;<abbr class="required" title="required">*</abbr></label><span class="woocommerce-input-wrapper"><input type="text" class="input-text " name="billing_first_name" id="billing_first_name" placeholder="" value="" autocomplete="given-name"></span></p>
                                                <p class="form-row form-row-last validate-required" id="billing_last_name_field" data-priority="20"><label for="billing_last_name" class="">Last name&nbsp;<abbr class="required" title="required">*</abbr></label><span class="woocommerce-input-wrapper"><input type="text" class="input-text " name="billing_last_name" id="billing_last_name" placeholder="" value="" autocomplete="family-name"></span></p>
                                                <p class="form-row form-row-wide" id="billing_company_field" data-priority="30"><label for="billing_company" class="">Company name&nbsp;<span class="optional">(optional)</span></label><span class="woocommerce-input-wrapper"><input type="text" class="input-text " name="billing_company" id="billing_company" placeholder="" value="" autocomplete="organization"></span></p>

                                                <p class="form-row form-row-wide address-field validate-required" id="billing_address_1_field" data-priority="50"><label for="billing_address_1" class="">Street address&nbsp;<abbr class="required" title="required">*</abbr></label><span class="woocommerce-input-wrapper"><input type="text" class="input-text " name="billing_address_1" id="billing_address_1" placeholder="House number and street name" value="" autocomplete="address-line1" data-placeholder="House number and street name"></span></p>
                                                <p class="form-row form-row-wide address-field" id="billing_address_2_field" data-priority="60"><label for="billing_address_2" class="screen-reader-text">Apartment, suite, unit etc. (optional)&nbsp;<span class="optional">(optional)</span></label><span class="woocommerce-input-wrapper"><input type="text" class="input-text " name="billing_address_2" id="billing_address_2" placeholder="Apartment, suite, unit etc. (optional)" value="" autocomplete="address-line2" data-placeholder="Apartment, suite, unit etc. (optional)"></span></p>
                                                <p class="form-row form-row-wide address-field validate-required" id="billing_city_field" data-priority="70" data-o_class="form-row form-row-wide address-field validate-required"><label for="billing_city" class="">Town / City&nbsp;<abbr class="required" title="required">*</abbr></label><span class="woocommerce-input-wrapper"><input type="text" class="input-text " name="billing_city" id="billing_city" placeholder="" value="" autocomplete="address-level2"></span></p>

                                                <p class="form-row form-row-wide address-field validate-required validate-postcode" id="billing_postcode_field" data-priority="90" data-o_class="form-row form-row-wide address-field validate-required validate-postcode"><label for="billing_postcode" class="">Postcode / ZIP&nbsp;<abbr class="required" title="required">*</abbr></label><span class="woocommerce-input-wrapper"><input type="text" class="input-text " name="billing_postcode" id="billing_postcode" placeholder="" value="" autocomplete="postal-code"></span></p>
                                                <p class="form-row form-row-wide validate-required validate-phone" id="billing_phone_field" data-priority="100"><label for="billing_phone" class="">Phone&nbsp;<abbr class="required" title="required">*</abbr></label><span class="woocommerce-input-wrapper"><input type="tel" class="input-text " name="billing_phone" id="billing_phone" placeholder="" value="" autocomplete="tel"></span></p>
                                                <p class="form-row form-row-wide validate-required validate-email" id="billing_email_field" data-priority="110"><label for="billing_email" class="">Email address&nbsp;<abbr class="required" title="required">*</abbr></label><span class="woocommerce-input-wrapper"><input type="email" class="input-text " name="billing_email" id="billing_email" placeholder="" value="" autocomplete="email username"></span></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-2">
                                        <div class="woocommerce-shipping-fields">
                                            <h3 id="ship-to-different-address">
                                                <label class="woocommerce-form__label woocommerce-form__label-for-checkbox checkbox">
                                                    <input id="ship-to-different-address-checkbox" class="woocommerce-form__input woocommerce-form__input-checkbox input-checkbox" type="checkbox" name="ship_to_different_address" value="1"> <span>Ship to a different address?</span>
                                                </label>
                                            </h3>
                                            <div class="shipping_address" style="display: none;">
                                                <div class="woocommerce-shipping-fields__field-wrapper">
                                                    <p class="form-row form-row-first validate-required" id="shipping_first_name_field" data-priority="10"><label for="shipping_first_name" class="">First name&nbsp;<abbr class="required" title="required">*</abbr></label><span class="woocommerce-input-wrapper"><input type="text" class="input-text " name="shipping_first_name" id="shipping_first_name" placeholder="" value="" autocomplete="given-name"></span></p>
                                                    <p class="form-row form-row-last validate-required" id="shipping_last_name_field" data-priority="20"><label for="shipping_last_name" class="">Last name&nbsp;<abbr class="required" title="required">*</abbr></label><span class="woocommerce-input-wrapper"><input type="text" class="input-text " name="shipping_last_name" id="shipping_last_name" placeholder="" value="" autocomplete="family-name"></span></p>
                                                    <p class="form-row form-row-wide" id="shipping_company_field" data-priority="30"><label for="shipping_company" class="">Company name&nbsp;<span class="optional">(optional)</span></label><span class="woocommerce-input-wrapper"><input type="text" class="input-text " name="shipping_company" id="shipping_company" placeholder="" value="" autocomplete="organization"></span></p>

                                                    <p class="form-row form-row-wide address-field validate-required" id="shipping_address_1_field" data-priority="50"><label for="shipping_address_1" class="">Street address&nbsp;<abbr class="required" title="required">*</abbr></label><span class="woocommerce-input-wrapper"><input type="text" class="input-text " name="shipping_address_1" id="shipping_address_1" placeholder="House number and street name" value="" autocomplete="address-line1" data-placeholder="House number and street name"></span></p>
                                                    <p class="form-row form-row-wide address-field" id="shipping_address_2_field" data-priority="60"><label for="shipping_address_2" class="screen-reader-text">Apartment, suite, unit etc. (optional)&nbsp;<span class="optional">(optional)</span></label><span class="woocommerce-input-wrapper"><input type="text" class="input-text " name="shipping_address_2" id="shipping_address_2" placeholder="Apartment, suite, unit etc. (optional)" value="" autocomplete="address-line2" data-placeholder="Apartment, suite, unit etc. (optional)"></span></p>
                                                    <p class="form-row form-row-wide address-field validate-required" id="shipping_city_field" data-priority="70" data-o_class="form-row form-row-wide address-field validate-required"><label for="shipping_city" class="">Town / City&nbsp;<abbr class="required" title="required">*</abbr></label><span class="woocommerce-input-wrapper"><input type="text" class="input-text " name="shipping_city" id="shipping_city" placeholder="" value="" autocomplete="address-level2"></span></p>

                                                    <p class="form-row form-row-wide address-field validate-required validate-postcode" id="shipping_postcode_field" data-priority="90" data-o_class="form-row form-row-wide address-field validate-required validate-postcode"><label for="shipping_postcode" class="">Postcode / ZIP&nbsp;<abbr class="required" title="required">*</abbr></label><span class="woocommerce-input-wrapper"><input type="text" class="input-text " name="shipping_postcode" id="shipping_postcode" placeholder="" value="" autocomplete="postal-code"></span></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="woocommerce-additional-fields">
                                            <div class="woocommerce-additional-fields__field-wrapper">
                                                <p class="form-row notes" id="order_comments_field" data-priority=""><label for="order_comments" class="">Order notes&nbsp;<span class="optional">(optional)</span></label><span class="woocommerce-input-wrapper"><textarea name="order_comments" class="input-text " id="order_comments" placeholder="Notes about your order, e.g. special notes for delivery." rows="2" cols="5"></textarea></span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h3 id="order_review_heading">Your order</h3>
                                <div id="order_review" class="woocommerce-checkout-review-order">
                                    <table class="shop_table woocommerce-checkout-review-order-table">
                                        <thead>
                                            <tr>
                                                <th class="product-name">Product</th>
                                                <th class="product-total">Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr class="cart_item">
                                                <td class="product-name">
                                                    Dreadback&nbsp; <strong class="product-quantity">× 1</strong>
                                                </td>
                                                <td class="product-total">
                                                    <span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">$</span>32</span>
                                                </td>
                                            </tr>
                                            <tr class="cart_item">
                                                <td class="product-name">
                                                    Dangerzone&nbsp; <strong class="product-quantity">× 3</strong>
                                                </td>
                                                <td class="product-total">
                                                    <span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">$</span>117</span>
                                                </td>
                                            </tr>
                                        </tbody>
                                        <tfoot>
                                            <tr class="cart-subtotal">
                                                <th>Subtotal</th>
                                                <td><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">$</span>149</span></td>
                                            </tr>
                                            <tr class="woocommerce-shipping-totals shipping">
                                                <th>Shipping</th>
                                                <td data-title="Shipping">
                                                    <ul id="shipping_method" class="woocommerce-shipping-methods">
                                                        <li>
                                                            <input type="radio" name="shipping_method[0]" data-index="0" id="shipping_method_0_flat_rate1" value="flat_rate:1" class="shipping_method" checked="checked"><label for="shipping_method_0_flat_rate1">Flat rate: <span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">$</span>25</span></label>
                                                        </li>
                                                        <li>
                                                            <input type="radio" name="shipping_method[0]" data-index="0" id="shipping_method_0_free_shipping2" value="free_shipping:2" class="shipping_method"><label for="shipping_method_0_free_shipping2">Free shipping</label>
                                                        </li>
                                                        <li>
                                                            <input type="radio" name="shipping_method[0]" data-index="0" id="shipping_method_0_local_pickup3" value="local_pickup:3" class="shipping_method"><label for="shipping_method_0_local_pickup3">Local pickup: <span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">$</span>10</span></label>
                                                        </li>
                                                    </ul>
                                                </td>
                                            </tr>
                                            <tr class="order-total">
                                                <th>Total</th>
                                                <td><strong><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">$</span>174</span></strong> </td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                    <div id="payment" class="woocommerce-checkout-payment">
                                        <ul class="wc_payment_methods payment_methods methods">
                                            <li class="wc_payment_method payment_method_bacs">
                                                <input id="payment_method_bacs" type="radio" class="input-radio" name="payment_method" value="bacs" checked="checked" data-order_button_text="">
                                                <label for="payment_method_bacs">
                                                    Direct bank transfer </label>
                                                <div class="payment_box payment_method_bacs">
                                                    <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
                                                </div>
                                            </li>
                                            <li class="wc_payment_method payment_method_cheque">
                                                <input id="payment_method_cheque" type="radio" class="input-radio" name="payment_method" value="cheque" data-order_button_text="">
                                                <label for="payment_method_cheque">
                                                    Check payments </label>
                                                <div class="payment_box payment_method_cheque" style="display:none;">
                                                    <p>Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</p>
                                                </div>
                                            </li>
                                            <li class="wc_payment_method payment_method_cod">
                                                <input id="payment_method_cod" type="radio" class="input-radio" name="payment_method" value="cod" data-order_button_text="">
                                                <label for="payment_method_cod">
                                                    Cash on delivery </label>
                                                <div class="payment_box payment_method_cod" style="display:none;">
                                                    <p>Pay with cash upon delivery.</p>
                                                </div>
                                            </li>
                                        </ul>
                                        <div class="form-row place-order">
                                            <noscript>
                                                Since your browser does not support JavaScript, or it is disabled, please ensure you click the <em>Update Totals</em> button before placing your order. You may be charged more than the amount stated above if you fail to do so. <br /><button type="submit" class="button alt" name="woocommerce_checkout_update_totals" value="Update totals">Update totals</button>
                                            </noscript>
                                            <div class="woocommerce-terms-and-conditions-wrapper">
                                                <div class="woocommerce-privacy-policy-text">
                                                    <p>Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our <a href="https://playerx.qodeinteractive.com/privacy-policy/" class="woocommerce-privacy-policy-link" target="_blank">privacy policy</a>.</p>
                                                </div>
                                            </div>
                                            <button type="submit" class="button alt" name="woocommerce_checkout_place_order" id="place_order" value="Place order" data-value="Place order">Place order</button>
                                            <input type="hidden" id="woocommerce-process-checkout-nonce" name="woocommerce-process-checkout-nonce" value="233d909640"><input type="hidden" name="_wp_http_referer" value="/?wc-ajax=update_order_review">
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- close div.content_inner -->
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

</style>
