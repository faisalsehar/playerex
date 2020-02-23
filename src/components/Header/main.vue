<template>
  <div>
    <section class="edgtf-side-menu">
      <div class="edgtf-side-area-inner">
        <a class="edgtf-close-side-menu edgtf-close-side-menu-svg-path" href="#">
         
        </a>
        <div id="media_image-5" class="widget edgtf-sidearea widget_media_image">
          <a href=""><img width="85" height="84" src="https://playerx.qodeinteractive.com/wp-content/uploads/2018/06/logo-header.png" class="image wp-image-2783  attachment-full size-full" alt="a" style="max-width: 100%; height: auto;" /></a>
        </div>
        <div class="widget edgtf-separator-widget">
          <div class="edgtf-separator-holder clearfix  edgtf-separator-center edgtf-separator-normal">
            <div class="edgtf-separator" style="border-style: solid;margin-bottom: -11px"></div>
          </div>
        </div>
        <div id="text-5" class="widget edgtf-sidearea widget_text">
          <div class="textwidget">
            <p>Lorem ipsum dolor sit amet, elit eget consectetuer adipiscing aenean dolor</p>
          </div>
        </div>
        <div class="widget edgtf-separator-widget">
          <div class="edgtf-separator-holder clearfix  edgtf-separator-center edgtf-separator-normal">
            <div class="edgtf-separator" style="border-style: solid;margin-bottom: 2px"></div>
          </div>
        </div>
        <div id="text-7" class="widget edgtf-sidearea widget_text">
          <div class="textwidget">
            <p><a href="" target="_blank" style="color: #c0c0c0" rel="nofollow noopener noreferrer">© Copyright EdgeThemes</a></p>
          </div>
        </div>
      </div>
      <div class="edgtf-side-area-bottom">
        <div class="widget edgtf-social-icons-group-widget text-align-center">
          <a class="edgtf-social-icon-widget-holder edgtf-icon-has-hover" style="font-size: 13px;margin: 0 12px;" href="" target="_blank">
          <span class="edgtf-social-icon-widget fab fa-facebook"></span> </a>
          <a class="edgtf-social-icon-widget-holder edgtf-icon-has-hover" style="font-size: 13px;margin: 0 12px;" href="" target="_blank">
          <span class="edgtf-social-icon-widget fab fa-twitter-square"></span> </a>
          <a class="edgtf-social-icon-widget-holder edgtf-icon-has-hover" style="font-size: 13px;margin: 0 12px;" href="" target="_blank">
          <span class="edgtf-social-icon-widget fab fa-youtube"></span> </a>
          <a class="edgtf-social-icon-widget-holder edgtf-icon-has-hover" style="font-size: 13px;margin: 0 12px;" href="" target="_blank">
          <span class="edgtf-social-icon-widget fab fa-instagram"></span> </a>
          <a class="edgtf-social-icon-widget-holder edgtf-icon-has-hover" style="font-size: 13px;margin: 0 12px;" href="" target="_blank">
          <span class="edgtf-social-icon-widget fab fa-twitch"></span> </a>
        </div>
      </div>
    </section>
    
    <div class="edgtf-fullscreen-search-holder">
      <a class="edgtf-search-close edgtf-search-close-svg-path" href="javascript:void(0)">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="23.922px" height="23.916px" viewBox="0 0 23.922 23.916" enable-background="new 0 0 23.922 23.916" xml:space="preserve">
          <polygon fill="#ffffff" points="23.923,20.992 14.889,11.958 23.915,2.932 20.984,0.001 11.958,9.027 2.938,0.006 0.006,2.938 
            9.026,11.958 0,20.984 2.932,23.916 11.958,14.89 20.992,23.923 "></polygon>
        </svg>
      </a>
      <div class="edgtf-fullscreen-search-table">
        <div class="edgtf-fullscreen-search-cell">
          <div class="edgtf-fullscreen-search-inner">
            <form action="https://playerx.qodeinteractive.com/" class="edgtf-fullscreen-search-form" method="get">
              <div class="edgtf-form-holder">
                <div class="edgtf-form-holder-inner">
                  <div class="edgtf-field-holder">
                    <input type="text" placeholder="TYPE YOUR SEARCH..." name="s" class="edgtf-search-field" autocomplete="off">
                  </div>
                  <button type="submit" class="edgtf-search-submit edgtf-search-submit-svg-path">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="25.34px" height="25.341px" viewBox="0 0 25.34 25.341" enable-background="new 0 0 25.34 25.341" xml:space="preserve">
                      <path fill="#ffffff" d="M25.34,22.409l-6.343-6.343c1.084-1.637,1.719-3.598,1.719-5.708C20.716,4.637,16.079,0,10.358,0
                        S0,4.637,0,10.358s4.637,10.358,10.358,10.358c2.11,0,4.071-0.635,5.708-1.718l6.343,6.343L25.34,22.409z M4,10.358
                        C4,6.852,6.852,4,10.358,4s6.358,2.852,6.358,6.358c0,1.638-0.628,3.128-1.649,4.256l-0.451,0.451
                        c-1.128,1.022-2.62,1.65-4.258,1.65C6.852,16.716,4,13.864,4,10.358z"></path>
                    </svg>
                  </button>
                  <div class="edgtf-line"></div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>  

     <MiniCart/>
    <!-- here is mobile menu template  component-->
   
    <Mobile/>
    <!-- here is mobile menu template  component -->
    
    <Desktop/>
    
    <a id='edgtf-back-to-top' href='#'>
    <span class="edgtf-icon-stack">
    <i class="edgtf-icon-font-awesome fa fa-angle-up "></i> </span>
    </a>
    
  </div>
</template>
<script>
  import Mobile from './mobile'
  import Desktop from './desktop'
  import MiniCart from './minicart'
      export default {
         components:{
  Mobile,
  Desktop,
  MiniCart
         },
         mounted(){
           window.$(".edgtf-search-opener").click(function() {

          window.$('.edgtf-fullscreen-search-holder').addClass("edgtf-animate");

    })

      window.$(".edgtf-search-close").click(function() {

          window.$('.edgtf-fullscreen-search-holder').removeClass("edgtf-animate");

    })
         }
      }
</script>
<style scoped>
</style>