<template>
   <div class="edgtf-content">
  <div class="edgtf-content-inner">
    <div class="edgtf-title-holder edgtf-standard-type edgtf-title-va-header-bottom" style="height: 150px;background-color: #333133;box-shadow: 15px 15px 21px 0px rgba(1, 1, 1, 0.3)" data-height="150">
      <div class="edgtf-title-wrapper" style="height: 150px">
        <div class="edgtf-title-inner">
          <div class="edgtf-grid">
            <h3 class="edgtf-page-title entry-title">Login/Register</h3>
          </div>
        </div>
      </div>
    </div>
    <div class="edgtf-container edgtf-default-page-template">
      <div class="edgtf-container-inner clearfix">
        <div class="edgtf-grid-row ">
          <div class="edgtf-page-content-holder edgtf-grid-col-6">
            <div class="woocommerce">
              <div class="woocommerce-notices-wrapper"></div>
              <h2>Login</h2>
              <form class="woocommerce-form woocommerce-form-login login" method="post">
                <p class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                  <label for="username">Username or email address&nbsp;<span class="required">*</span></label>
                  <input type="text" class="woocommerce-Input woocommerce-Input--text input-text" name="username" id="username" autocomplete="username" value="">			
                </p>
                <p class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                  <label for="password">Password&nbsp;<span class="required">*</span></label>
                  <input class="woocommerce-Input woocommerce-Input--text input-text" type="password" name="password" id="password" autocomplete="current-password">
                </p>
                <p class="form-row">
                  <label class="woocommerce-form__label woocommerce-form__label-for-checkbox woocommerce-form-login__rememberme">
                  <input class="woocommerce-form__input woocommerce-form__input-checkbox" name="rememberme" type="checkbox" id="rememberme" value="forever"> <span>Remember me</span>
                  </label>
                  <input type="hidden" id="woocommerce-login-nonce" name="woocommerce-login-nonce" value="d52ecf56f2"><input type="hidden" name="_wp_http_referer" value="/my-account">				<button type="submit" class="woocommerce-button button woocommerce-form-login__submit" name="login" value="Log in">Log in</button>
                </p>
                <p class="woocommerce-LostPassword lost_password">
                  <a href="https://playerx.qodeinteractive.com/my-account/lost-password/">Lost your password?</a>
                </p>
              </form>
            </div>
          </div>

           <div class="edgtf-page-content-holder edgtf-grid-col-6">
            <div class="woocommerce">
              <div class="woocommerce-notices-wrapper"></div>
              <h2>Register</h2>
              <form class="woocommerce-form woocommerce-form-login login" method="post">
                   <p class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                  <label for="username">Username&nbsp;<span class="required">*</span></label>
                  <input type="text" class="woocommerce-Input woocommerce-Input--text input-text" name="username" id="username" autocomplete="username" value="">     
                </p>
                <p class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                  <label for="username">Email address&nbsp;<span class="required">*</span></label>
                  <input type="text" class="woocommerce-Input woocommerce-Input--text input-text" name="username" id="username" autocomplete="username" value="">     
                </p>
                <p class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                  <label for="password">Password&nbsp;<span class="required">*</span></label>
                  <input class="woocommerce-Input woocommerce-Input--text input-text" type="password" name="password" id="password" autocomplete="current-password">
                </p>
                 <p class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                  <label for="password">Conferm Password&nbsp;<span class="required">*</span></label>
                  <input class="woocommerce-Input woocommerce-Input--text input-text" type="password" name="password" id="password" autocomplete="current-password">
                </p>
                <p class="form-row">
               
                  <input type="hidden" id="woocommerce-login-nonce" name="woocommerce-login-nonce" value="d52ecf56f2"><input type="hidden" name="_wp_http_referer" value="/my-account">       <button type="submit" class="woocommerce-button button woocommerce-form-login__submit" name="login" value="Log in">Register</button>
                </p>
               
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