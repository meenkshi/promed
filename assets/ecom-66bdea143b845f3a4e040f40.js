/* Publish by EComposer at 2024-10-26 00:44:42*/
                (function(){
                    const Func = (function() {
                        'use strict';
window.__ectimmers = window.__ectimmers ||{};window.__ectimmers["ecom-7sycfr2vwcg"]=  window.__ectimmers["ecom-7sycfr2vwcg"] || {};
let $el = this.$el;
                    if(!$el) return;

                    if (!this.isLive || $el.closest('.ecom-quickview')) {
                        let $wrapper = $el.querySelector('.ecom-product-single__rating-wrapper');
                        if ($wrapper && $wrapper.dataset.reviewPlatform) {
                            switch ($wrapper.dataset.reviewPlatform.trim()) {
                                case 'product-reviews':
                                    if(!window.$) {
                                        let script = document.createElement('script');
                                        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.0/jquery.min.js';
                                        script.setAttribute('integrity', 'sha512-3gJwYpMe3QewGELv8k/BX9vcqhryRdzRMxVfq6ngyWXwo03GFEzjsUm8Q7RZcHPHksttq7/GFoxjCVUjkjvPdw==');
                                        script.setAttribute('crossorigin', 'anonymous');
                                        script.setAttribute('referrerpolicy', 'no-referrer');
                                        
                                        document.querySelector("body").appendChild(script);
                                        setTimeout(function() {
                                            if (window.SPR) {
                                                try {
                                                    window.SPR.$ = window.jQuery;
                                                    window.SPR.initDomEls();
                                                    window.SPR.loadBadges();
                                                }
                                                catch (e) {
                                                    console.info(e.message);
                                                }
                                            }
                                        }, 300);
                                        break;
                                    }
                                    if (window.SPR) {
                                        try {
                                            window.SPR.$ = window.jQuery;
                                            window.SPR.initDomEls();
                                            window.SPR.loadBadges();
                                        }
                                        catch (e) {
                                            console.info(e.message);
                                        }
                                    }
                                    break;
                                case 'judgeme':
                                    if (window.jdgm) {
                                        try {
                                            window.jdgm.batchRenderBadges();
                                        }
                                        catch (e) {
                                            console.info(e.message);
                                        }
                                        $el.querySelectorAll('[data-average-rating="0.00"]').forEach(function (el) {
                                            el.style.display = 'block !important';
                                        });
                                    }
                                    break;
                                case 'product-reviews-addon':
                                    if (window.StampedFn) {
                                        window.StampedFn.loadBadges();
                                    }
                                    break;
                                default:
                                    break;
                            }
                        }
                    }

                    });
                    
                        document.querySelectorAll('.ecom-7sycfr2vwcg').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-7sycfr2vwcg', settings: {},isLive: true});
                        });
                    

                })();
            
                (function(){
                    const Func = (function() {
                        'use strict';
window.__ectimmers = window.__ectimmers ||{};window.__ectimmers["ecom-bi2w85o82qm"]=  window.__ectimmers["ecom-bi2w85o82qm"] || {};
let $el = this.$el;

                if(!$el) {
                    return;
                }

                let $afterpay_element = $el.querySelector(
                        'afterpay-placement.ecom-afterpay-integrate'
                    );

                let $wrapper = this.$el.closest('.ecom-product-form--single');
                if ($wrapper) {
                    let selector = $wrapper.querySelector('[name="id"]');
                    if (selector) {
                        selector.dispatchEvent(new window.Event('ecomUpdate'));
                    }
                    if(this.settings.show_total_price) {
                        const quantity = $wrapper.querySelector('.ecom-product-single__quantity-input');
                        const priceWrapper = $el.querySelector('.ecom-product-single__price--sale');
                        const priceRegularWrapper = $el.querySelector('.ecom-product-single__price--regular');
                        if(!priceWrapper) return;

                        if(quantity) {
                            quantity.addEventListener('change', function() {
                                priceWrapper.innerHTML = window.EComposer.formatMoney(parseInt(priceWrapper.getAttribute('data-price')) * parseInt(this.value));
                            })
                        }

                        $wrapper.addEventListener('ecomVariantChange', function(event) {
                            if(event.detail.variant) {
                                const variant = event.detail.variant;
                                const qty = quantity ? parseInt(quantity.value) : 1;
                                priceWrapper.setAttribute('data-price', variant.price);

                                if(qty > 1) {
                                    priceWrapper.innerHTML = window.EComposer.formatMoney(variant.price * parseInt(qty));
                                }
                            }
                        })
                    }

                }
                if(this.settings.enable_afterpay) {
                    let $afterPayScript = window.document.querySelector('#ecom-after-pay-script');
                    window.afterpay_min = this.settings.lower_limit || 1;
                    if (!$afterPayScript) {
                        let script = window.document.createElement('script');
                        script.id = 'ecom-after-pay-script';
                        script.dataset.analyticsEnabled = true;

                        script.dataset.min = this.settings.lower_limit || 1;
                        script.dataset.max = this.settings.upper_limit || 1000;
                        script.src = 'https://js.afterpay.com/afterpay-1.x.js';
                        window.document.head.appendChild(script);
                    }
                    else
                    {
                        $afterPayScript.dataset.analyticsEnabled = true;

                        $afterPayScript.dataset.min = this.settings.lower_limit ?? 1;
                        $afterPayScript.dataset.max = this.settings.upper_limit ?? 1000;
                    }
                    if ($afterpay_element && this.isLive && window.jQuery) {
                        if (window.Afterpay && window.Afterpay.initProductPage) {
                            window.Afterpay.initProductPage(window.jQuery);
                        }
                    }
                }


                let sale_text = $el.querySelector('.ecom-product-single__price--badges-sale');
                if(sale_text && sale_text.dataset.haveSale == 'true'){
                    let percent = sale_text.dataset.sale;
                    let text = sale_text.dataset.text;
                    text = text.replace(/\{.*\}/g, percent);
                    sale_text.innerHTML = text;
                    sale_text.style.display = 'block';
                }

                    });
                    
                        document.querySelectorAll('.ecom-bi2w85o82qm').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-bi2w85o82qm', settings: {"enable_afterpay":false,"lower_limit":"100","upper_limit":"600"},isLive: true});
                        });
                    

                })();
            
                (function(){
                    const Func = (function() {
                        'use strict';
window.__ectimmers = window.__ectimmers ||{};window.__ectimmers["ecom-b2zxsm7r1r"]=  window.__ectimmers["ecom-b2zxsm7r1r"] || {};
if(!this.$el) { return; }

                const $el = this.$el;

                const read_more_btn = $el.querySelector('.ecom-text_view-more-btn');
                const read_less_btn = $el.querySelector('.ecom-text_view-less-btn');
                const el_content = $el.querySelector('.text-content.ecom-html');
                if(!el_content) { return; }

                if(read_more_btn) {
                    read_more_btn.addEventListener('click', () => {
                        el_content.classList.remove('ecom-text--is-mark');
                        el_content.style.maxHeight = "";
                        read_more_btn.style.display = "none";
                        read_less_btn.style.display = "";
                    })
                }

                if(read_less_btn) {
                    read_less_btn.addEventListener('click', () => {
                        el_content.classList.add('ecom-text--is-mark');
                        el_content.style.maxHeight = "var(--ecom-text-height)";
                        read_less_btn.style.display = "none";
                        read_more_btn.style.display = "";
                    })
                }

                    });
                    
                        document.querySelectorAll('.ecom-b2zxsm7r1r').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-b2zxsm7r1r', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-acijpizr9mq').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-acijpizr9mq', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-w34k88c5lwr').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-w34k88c5lwr', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-ow9q6q0lxe7').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-ow9q6q0lxe7', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-c75og9eyais').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-c75og9eyais', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-uv287bhdu8b').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-uv287bhdu8b', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-jjmkp900qqd').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-jjmkp900qqd', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-jf9zxbpg1hs').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-jf9zxbpg1hs', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-9x7huhi2hqh').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-9x7huhi2hqh', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-4o0m3vxte6b').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-4o0m3vxte6b', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-ium73kxhgy').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-ium73kxhgy', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-fxrab182lhl').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-fxrab182lhl', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-uoijnjvoz4a').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-uoijnjvoz4a', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-q72igh4zxqs').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-q72igh4zxqs', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-3xff5hmt5ia').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-3xff5hmt5ia', settings: {},isLive: true});
                        });
                    

                })();
            
                (function(){
                    const Func = (function() {
                        'use strict';
window.__ectimmers = window.__ectimmers ||{};window.__ectimmers["ecom-fba64n60l9j"]=  window.__ectimmers["ecom-fba64n60l9j"] || {};
let $el = this.$el;
                    let $container = $el.querySelector('.ecom-product-single__wishlist-container');
                    if ($container) {
                        switch ($container.dataset.wishlistApp) {
                            case 'swym-relay':
                                if (window._swat) {
                                    window._swat.initializeActionButtons('.swym-add-to-wishlist-view-product');
                                }
                                break;
                            case 'wishlist-wishify':
                                // eslint-disable-next-line no-var
                                var dom = document.createElement('script');
                                dom.src = 'https://zooomyapps.com/wishlist/ListWishlistProduct.js';
                                window.document.head.appendChild(dom);
                                break;
                            case 'wishlist-hero':
                                var buttonDiv = $el.querySelector('.ecom-product-single-wishlist');
                                var ev = new CustomEvent('wishlist-hero-add-to-custom-element', {
                                    detail: buttonDiv,
                                });
                                document.dispatchEvent(ev);
                                break;
                            default:
                                break;
                        }
                    }

                    });
                    
                        document.querySelectorAll('.ecom-fba64n60l9j').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-fba64n60l9j', settings: {},isLive: true});
                        });
                    

                })();
            
                (function(){
                    const Func = (function() {
                        'use strict';
window.__ectimmers = window.__ectimmers ||{};window.__ectimmers["ecom-mrik9rgrvr"]=  window.__ectimmers["ecom-mrik9rgrvr"] || {};
if(!this.$el)
                {
                    return false;
                }
                const $el = this.$el;
                const $wrapper = $el.closest('.ecom-product-form--single');
                if (!$wrapper) {
                    return false;
                }
                if ($wrapper) {
                    let selector = $wrapper.querySelector('[name="id"]');
                    if (selector) {
                        selector.dispatchEvent(new window.Event('ecomUpdate'));
                    }
                    if(this.settings.show_total_price) {
                        const quantity = $wrapper.querySelector('.ecom-product-single__quantity-input');
                        const priceWrapper = $el.querySelector('.ecom-product-single__price--sale');
                        if(!priceWrapper) return;

                        if(quantity) {
                            quantity.addEventListener('change', function() {
                                priceWrapper.innerHTML = window.EComposer.formatMoney(parseInt(priceWrapper.getAttribute('data-price')) * parseInt(this.value));
                            })
                        }

                        $wrapper.addEventListener('ecomVariantChange', function(event) {
                            if(event.detail.variant) {
                                const variant = event.detail.variant;
                                const qty = quantity ? parseInt(quantity.value) : 1;
                                priceWrapper.setAttribute('data-price', variant.price);

                                if(qty > 1) {
                                    priceWrapper.innerHTML = window.EComposer.formatMoney(variant.price * parseInt(qty));
                                }
                            }
                        })
                    }

                }
                const selector = $wrapper.querySelector('select[name="id"]'),
                    $addCartButton = $el.querySelector('.ecom-product-single__add-to-cart--submit'),
                    form = $el.closest('form');
                if(!form) return;
                function handleChange() {
                    let product = null;
                    const product_id = form.dataset.product_id;
                    let json = null;
                    if(product_id) {
                        json = form.querySelector('[id^=product-json-' + product_id + ']');
                    }
                    else {
                        json = $el.querySelector('[id^=addtocart-product-json]');
                    };
                    if(!json) return;
                    try {
                        product = JSON.parse(json.innerHTML);
                    } catch (e) {
                        return;
                    }

                    let variant = product.variants[0];

                    if(variant) {

                        const AtcText = $addCartButton.querySelector('.ecom-add-to-cart-text');
                        if(!AtcText) return;

                        if(variant.available == false) {
                            $addCartButton.setAttribute('disabled', 'disabled');
                            AtcText.innerText = $addCartButton.dataset.textOutstock;
                            $addCartButton.classList.remove('ecom-product-single__pre-order');
                        } else if(variant.inventory_quantity <= 0 && variant.inventory_policy == 'continue' && variant.inventory_management) {
                            AtcText.innerText = $addCartButton.dataset.textPreOrder;
                            $addCartButton.classList.add('ecom-product-single__pre-order');
                        }

                    }
                }
                if (!this.isLive) {
                    if ($wrapper) {
                        if (selector && !selector.classList.contains('ecom-product-single__picker-default-variant')) {
                            selector.dispatchEvent(new window.Event('ecomUpdate'));
                        }
                        else {
                            handleChange()
                        }
                    }
                } else {

                    if(!form.querySelector('select[name=id]')  || (form.querySelector('select[name=id]') && selector.classList.contains('ecom-product-single__picker-default-variant'))) {
                        handleChange();
                    }
                    if(!selector && $addCartButton && $addCartButton.dataset.variant_id)
                    {
                        const dom = document.createElement('input');
                        dom.type ='hidden';
                        dom.value = $addCartButton.dataset.variant_id;
                        $el.appendChild(dom);
                    }

                    function handlerRequiredCheckbox(e) {
                        // checkbox
                        const requiredCheckBoxList = $wrapper.querySelectorAll('.ecom-required--checkbox');
                        if(requiredCheckBoxList.length > 0) {
                            requiredCheckBoxList.forEach(function(checkboxGroup) {
                                let checkbox_items = checkboxGroup.querySelectorAll('input[type=checkbox]');
                                if(checkbox_items.length == 0) return;
                                let isChecked = false;

                                checkbox_items.forEach(function(checkbox) {
                                    if(checkbox.checked) {
                                        isChecked = true;
                                    }
                                })

                                if(isChecked) {
                                    checkbox_items.forEach(function(checkbox) {
                                        checkbox.required = false;
                                    })
                                } else {
                                    checkbox_items.forEach(function(checkbox) {
                                        checkbox.required = true;
                                    })
                                }
                            })
                        }
                        // file field required
                        const requiredFiles = $wrapper.querySelectorAll('.ecom-product-single__property-file');
                        let checkFileRequired = false, el_file;
                        if(requiredFiles.length) {
                            requiredFiles.forEach(function(elFile) {
                                if(elFile.required && (!elFile.value || elFile.value == '')) {
                                    elFile.parentNode.parentNode.querySelector('.ecom-product-single-form--text-error').style.display = 'block';
                                    checkFileRequired = true;
                                    el_file = elFile;
                                    return;
                                }
                                else {
                                    checkFileRequired = false;
                                }
                            })
                        };
                        if(checkFileRequired) {
                            e.preventDefault();
                            e.stopPropagation();
                            el_file.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" })
                        }
                    }
                    $addCartButton.addEventListener('click', handlerRequiredCheckbox)
                }

                const handleAnimation = function(_this) {
                  if (!$el) return;
                  const $btn_wrapper = $el.querySelector('.ecom-product-single__add-to-cart--submit');
                  if (!$btn_wrapper) return;

                  let intervalTime = parseInt(_this.settings.animation_loop_time) * 1000 || 6000,
                      animTime = 1000;window.__ectimmers["ecom-mrik9rgrvr"]["ueimrlrg9"] = setInterval(function() {
                      $btn_wrapper.classList.add('animated');
                      setTimeout(function(){
                        $btn_wrapper.classList.remove('animated');
                      }, animTime);
                  }, intervalTime);
                }

                if (this.settings.animation) {
                  handleAnimation(this);
                }

                    });
                    
                        document.querySelectorAll('.ecom-mrik9rgrvr').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-mrik9rgrvr', settings: {"animation":true},isLive: true});
                        });
                    

                })();
            
                (function(){
                    const Func = (function() {
                        'use strict';
window.__ectimmers = window.__ectimmers ||{};window.__ectimmers["ecom-l9baz804jh"]=  window.__ectimmers["ecom-l9baz804jh"] || {};
if(!this.$el)
                {
                    return false;
                }
                const $el = this.$el;
                let $wrapper = $el.closest('.ecom-product-form--single');
                if(!$wrapper){
                    const section = $el.closest('.ecom-builder');
                    if(section){
                        $wrapper = section.querySelector('.ecom-product-form--single');
                    }
                }
                if (!$wrapper) {
                    return false;
                }
                if(this.isLive)
                {
                    let selector = $wrapper.querySelector('select[name=id]');
                    const buyNowBtn = $el.querySelector('.ecom-product-single__buy_it_now_btn--checkout');
                    const product_id = $wrapper.dataset.product_id;
                    if(!product_id) return;
                    let product = null;
                    const json = $wrapper.querySelector('[id^=product-json-' + product_id + ']');
                    if (!json) {
                        return;
                    }
                    try {
                        product = JSON.parse(json.innerHTML);
                    } catch (e) {
                        return;
                    }
                    if(buyNowBtn) {
                        buyNowBtn.addEventListener('click', function(e){
                            e.preventDefault();
                            let quantity = 1;
                            if($wrapper.querySelector('[name=quantity]')){
                                quantity = $wrapper.querySelector('[name=quantity]').value;
                            }
                            let idWrapper  = $wrapper.querySelector('select[name=id]') || $wrapper.querySelector('input[name=id]');
                            if(!idWrapper) console.warn("EC error: Select id or input id not found!");
                            let id = idWrapper.value;
                            let variant = product.variants.find(variant => variant.id == id);
                            if(!variant || variant.available === false){
                                return;
                            }
                            if(window.Shopify.analytics)
                            {
                                Shopify.analytics.publish("ec_buy_now",   {
                                    "cartLine": {
                                        "cost": {
                                            "totalAmount": {
                                                "amount": variant.price * quantity,
                                                "currencyCode": window.Shopify.currency.active
                                            }
                                        },
                                        "merchandise": {
                                            "id": variant.id,
                                            "image": variant.image,
                                            "price": {
                                                "amount": variant.price,
                                                "currencyCode": window.Shopify.currency.active
                                            },
                                            "product": {
                                                "id":  product.id,
                                                "title":  product.title,
                                                "vendor": product.vendor
                                            },
                                            "sku": variant.sku,
                                            "title": variant.title
                                        },
                                        "quantity": quantity
                                    }
                                })
                            }
                            let link = `${window.EComposer.routes.cart_url}/${id}:${quantity}`
                            if(window.location.search.includes('selling_plan')) {
                                const regex = /selling_plan=(\d+)/;
                                const matches = window.location.search.match(regex);

                                if (matches) {
                                    const sellingPlanValue = matches[1];
                                    link = `${window.EComposer.routes.cart_url}/clear?return_to=/cart/add?items[][id]=${id}%26items[][quantity]=${quantity}%26items[][selling_plan]=${sellingPlanValue}%26return_to=/checkout`
                                }
                            }
                            location.href = link;
                        });
                    }

                    if(!product.available){
                        buyNowBtn.classList.add('ecom-disable-buy');
                        buyNowBtn.disabled = true;
                    }
                    if(selector){
                        selector.addEventListener('change', function() {
                            let variant_id = this.value;
                            if(!variant_id) return;
                            let variant = product.variants.find(variant => variant.id == variant_id);
                            if(variant.available === false){
                                buyNowBtn.classList.add('ecom-disable-buy');
                                buyNowBtn.disabled = true;
                            }
                            else{
                                buyNowBtn.classList.remove('ecom-disable-buy');
                                buyNowBtn.disabled = false;
                            }
                        });
                    }
                }

                const handleAnimation = function(_this) {
                  if (!$el) return;

                  const $btn_wrapper = $el.querySelector('.ecom-product-single__buy_it_now_btn--checkout');
                   if (!$btn_wrapper) return;

                  let intervalTime = parseInt(_this.settings.animation_loop_time) * 1000 || 6000,
                      animTime = 1000;window.__ectimmers["ecom-l9baz804jh"]["o2p9hoxym"] = setInterval(function() {
                      $btn_wrapper.classList.add('animated');
                      setTimeout(function(){
                        $btn_wrapper.classList.remove('animated');
                      }, animTime);
                  }, intervalTime);
                }

                if (this.settings.animation) {
                  handleAnimation(this);
                }

                    });
                    
                        document.querySelectorAll('.ecom-l9baz804jh').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-l9baz804jh', settings: {"animation":true},isLive: true});
                        });
                    

                })();
            
                (function(){
                    const Func = (function() {
                        'use strict';
window.__ectimmers = window.__ectimmers ||{};window.__ectimmers["ecom-t8kzy2xpijq"]=  window.__ectimmers["ecom-t8kzy2xpijq"] || {};
/**
                 * this.settings.view_more
                 * this.settings.view_more_text
                 */
                if(!this.$el) {
                    return;
                }
                const $dom = this.$el.querySelector(
                    '.ecom-product-single__description-view-more-btn'
                );
                if(this.settings.type === 'tab') {
                    const tabs = this.$el.querySelectorAll('.ecom-product-description-tab__item'),
                        tabsBody = this.$el.querySelectorAll('.ecom-product-description-tab__content');
                    if(tabs.length) {
                        tabs.forEach((tab, index) => {
                            tab.onclick = function () {
                                if( this.classList &&  !this.classList.contains("ecom-item-active"))
                                {
                                    tabs.forEach((item) => item.classList.remove("ecom-item-active"));
                                    tabsBody.forEach((item) => item.classList.remove("ecom-item-active"));
                                    tab.classList.add("ecom-item-active");
                                    tabsBody[index].classList.add("ecom-item-active");
                                }
                            };
                        });
                    }
                }
                const contentType = this.settings.content_type;
                const $full = this.$el.querySelector('.ecom-product-single__description--full');
                const $less = this.$el.querySelector('.ecom-product-single__description-view-less-btn');
                const $short = this.$el.querySelector('.ecom-product-single__description--paragraph');
                if ($dom) {
                    $dom && $dom.addEventListener('click', function () {
                        if (contentType === 'text' && $full) {
                            $full.style.display = 'block';
                            $short.style.display = 'none';
                        } else {
                            $short.style.maxHeight = null;
                        }
                        this.style.display = 'none';
                        if($less)
                            $less.style.display = 'flex';
                    });
                    $less && $less.addEventListener('click', function(){
                        $dom.style.display = 'flex';
                        this.style.display = 'none';
                         if (contentType === 'text' && $full) {
                            if($full)
                                $full.style.display = 'none';

                            $short.style.display = 'block';
                        } else {
                            $short.style.maxHeight = 'var(--ecom-description-height)';
                        }
                    });
                }

                    });
                    
                        document.querySelectorAll('.ecom-t8kzy2xpijq').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-t8kzy2xpijq', settings: {"view_more":false,"view_more_text":"View more","type":"full","content_type":"html"},isLive: true});
                        });
                    

                })();
            
                (function(){
                    const Func = (function() {
                        'use strict';
window.__ectimmers = window.__ectimmers ||{};window.__ectimmers["ecom-hp0ypui0ds"]=  window.__ectimmers["ecom-hp0ypui0ds"] || {};
let $el = this.$el;
                if(!$el) return;


                let tabs = $el.querySelectorAll(":scope > .tabs__wrapper > .tabs__navs > .tabs__navs--items > .tabs__nav"),
                tabsBody = $el.querySelectorAll(":scope > .tabs__wrapper > .core__group--items > .tab__item"),
                action = this.settings.action;

                tabs.forEach((tab, index) => {
                    if(action === 'click' || window.screen.width < 1025) {
                        tab.onclick = function () {
                            if( this.classList &&  this.classList.contains("ecom-item-active"))
                            {
                                tabs.forEach((item) => item.classList.remove("ecom-item-active"));
                                tabsBody.forEach((item) => item.classList.remove("ecom-item-active"));
                            }
                            else
                            {
                                 tabs.forEach((item) => item.classList.remove("ecom-item-active"));
                                tabsBody.forEach((item) => item.classList.remove("ecom-item-active"));
                                tab.classList.add("ecom-item-active");
                                tabsBody[index].classList.add("ecom-item-active");
                            }



                            resizeWindow()
                        };
                    }
                    else {
                        tab.onmouseover = function () {
                            if( this.classList &&  this.classList.contains("ecom-item-active"))
                            {
                                tabs.forEach((item) => item.classList.remove("ecom-item-active"));
                                tabsBody.forEach((item) => item.classList.remove("ecom-item-active"));
                            }
                            else
                            {
                                 tabs.forEach((item) => item.classList.remove("ecom-item-active"));
                                tabsBody.forEach((item) => item.classList.remove("ecom-item-active"));
                                tab.classList.add("ecom-item-active");
                                tabsBody[index].classList.add("ecom-item-active");
                            }



                            resizeWindow()
                        };
                    }
                });
                function handleHash() {
                    let hash = window.location.hash;
                    if (hash) {
                        let dom = $el.querySelector(`[data-target="${hash}"]`);
                        if (dom) {
                            dom.click();
                            let mouseoverEvent = new MouseEvent('mouseover', {
                                bubbles: true,
                                cancelable: true,
                                view: window
                            });
                            dom.dispatchEvent(mouseoverEvent);
                            let elementRect = dom.getBoundingClientRect();
                            let absoluteElementTop = elementRect.top + window.pageYOffset;
                            let middle = absoluteElementTop - (window.innerHeight / 2);
                            window.scrollTo(0, middle);
                        }
                    }
                }

                setTimeout(()=> {
                    handleHash();
                }, 300);

                function resizeWindow(){
                    window.dispatchEvent(new window.Event('resize'));
                        setTimeout(()=>{
                            window.dispatchEvent(new window.Event('resize'));
                        },500);
                }
                window.addEventListener("hashchange", handleHash, false);

                    });
                    
                        document.querySelectorAll('.ecom-hp0ypui0ds').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-hp0ypui0ds', settings: {"action":"click"},isLive: true});
                        });
                    

                })();
            
                (function(){
                    const Func = (function() {
                        'use strict';
window.__ectimmers = window.__ectimmers ||{};window.__ectimmers["ecom-m6wfehs9n1"]=  window.__ectimmers["ecom-m6wfehs9n1"] || {};
const $el = this.$el;
        const _this = this;
        const isAutoSlide = this.settings.autoSlideHover;
        let w = "";
        var canHiddenOverlay = true;
        if (!$el)
          return;
        const btnSlide = $el.querySelector(".ecom-img_comp-slider");
        if (!btnSlide)
          return;
        const compImage = $el.querySelector(".ecom-image_compare-overlay img");
        const overlay = $el.querySelector(".ecom-image_comp-overlay");
        btnSlide.onmouseover = function() {
          hiddenOverlay();
        };
        btnSlide.onmouseout = function() {
          if (canHiddenOverlay) {
            removeHiddenOverlay();
          }
        };
        if (btnSlide && compImage) {
          compareImages();
        }
        window.addEventListener("resize", function() {
          if (btnSlide && compImage) {
            w = compImage.offsetWidth;
            compareImages();
          }
        });
        function hiddenOverlay() {
          if (overlay) {
            overlay.classList.add("overlay-hidden");
          }
        }
        function removeHiddenOverlay() {
          if (overlay) {
            overlay.classList.remove("overlay-hidden");
          }
        }
        function compareImages() {
          var clicked = 0, touchPoint, initRatio, pos;
          initSlide();
          if (!isAutoSlide || window.screen.width < 1024) {
            btnSlide.onmousedown = function(e) {
              slideReady(e);
            };
            $el.onmouseup = function() {
              slideFinish();
            };
            btnSlide.ontouchstart = function(e) {
              slideReady(e);
            };
            $el.ontouchend = function() {
              slideFinish();
            };
          } else {
            $el.onmouseover = function(e) {
              slideReady(e);
            };
          }
          function initSlide() {
            if (btnSlide.style.left) {
              w = compImage.offsetWidth;
              initRatio = parseInt(btnSlide.style.left);
            }
          }
          function slideReady(e) {
            canHiddenOverlay = false;
            e.preventDefault();
            if (e.clientX) {
              touchPoint = e.clientX;
            } else {
              touchPoint = e.touches[0].clientX;
            }
            clicked = 1;
            $el.onmousemove = function(e2) {
              slideMove(e2);
            };
            $el.ontouchmove = function(e2) {
              slideMove(e2);
            };
          }
          function slideFinish() {
            clicked = 0;
            if (!isNaN(pos)) {
              initRatio = pos;
            }
            canHiddenOverlay = true;
            removeHiddenOverlay();
          }
          function slideMove(e) {
            if (clicked == 0) {
              return false;
            } else if (clicked == 1) {
              hiddenOverlay();
            }
            pos = getCursorPos(e);
            if (pos < 0)
              pos = 0;
            if (pos > 100)
              pos = 100;
            slide(pos);
          }
          function getCursorPos(e) {
            e = e.changedTouches ? e.changedTouches[0] : e;
            var cal;
            if (!isAutoSlide || window.screen.width < 1024) {
              cal = Math.round(initRatio - (touchPoint - e.pageX) * 100 / w);
            } else {
              cal = Math.round(e.offsetX * 100 / w);
            }
            return cal;
          }
          function slide(x) {
            btnSlide.style.left = x + "%";
            compImage.style.clipPath = `polygon(${x}% 0%, ${x}% 100%, 0% 100%, 0% 0%)`;
          }
        }

                    });
                    
                        document.querySelectorAll('.ecom-m6wfehs9n1').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-m6wfehs9n1', settings: {"autoSlideHover":false},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-xdt507qpoxc').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-xdt507qpoxc', settings: {},isLive: true});
                        });
                    

                })();
            
                (function(){
                    const Func = (function() {
                        'use strict';
window.__ectimmers = window.__ectimmers ||{};window.__ectimmers["ecom-xub9an9hmaa"]=  window.__ectimmers["ecom-xub9an9hmaa"] || {};
let $el = this.$el;
                if (!$el) return;
                let isLive = this.isLive;
                const disable_auto_close = this.settings.disable_auto_close ?? false,
                    disable_auto_close__tablet = this.settings.disable_auto_close__tablet ?? false,
                    disable_auto_close__mobile = this.settings.disable_auto_close__mobile ?? false,
                    scroll_on_mobile = this.settings.scroll_on_mobile ?? false,
                    disable_effect = this.settings.disable_effect ?? false,
                    close_all = this.settings.close_all ?? false;
                const accordionTitles = $el.querySelectorAll(
                    ".ecom-accordion__item > .ecom-accordion__title"
                );

                function isInViewport(el) {
                    const rect = el.getBoundingClientRect();
                    return (
                        rect.top >= 0 &&
                        rect.left >= 0 &&
                        rect.bottom <=
                            (window.innerHeight || document.documentElement.clientHeight) &&
                        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
                    );
                }
                function handle(accordionTitles) {
                    let innerWidth = window.screen.width;
                    if (!window.EComposer.TEMPLATE_ID) {
                        innerWidth = window.innerWidth;
                    }
                    accordionTitles.forEach((accordion, index) => {
                        let tmp = accordion.parentNode.querySelector(".ecom-accordion__body");
                        if (!disable_effect && tmp) {
                            tmp.classList.add("ecom-effect-accodion");
                        }
                        if (index == 0) {
                            tmp.style.height = tmp.clientHeight + "px";
                        }
                        accordion.onclick = function (e) {
                            e.preventDefault();
                            let parent = this.parentNode,
                                accWrapper = parent.parentNode;
                            const accordionItems =
                                    accWrapper.querySelectorAll(".ecom-accordion__item"),
                                title = accWrapper.querySelectorAll(".ecom-accordion__title");
                                parent.classList && parent.classList.remove('ecom-item-group-init');
                            if (this.classList && this.classList.contains("ecom-item-active")) {
                                if (
                                    (disable_auto_close__mobile && innerWidth < 768) ||
                                    (disable_auto_close__tablet &&
                                        innerWidth > 767 &&
                                        innerWidth < 1025) ||
                                    (disable_auto_close && innerWidth > 1024)
                                ) {
                                    this.classList.remove("ecom-item-active");
                                    parent.querySelector(".ecom-accordion__body").style.height =
                                        "0px";
                                    parent
                                        .querySelector(".ecom-accordion__title")
                                        .classList.remove("ecom-item-active");
                                    parent.classList.remove("ecom-item-active");
                                } else {
                                    accordionItems.forEach((item) => handleAccordionClosse(item));
                                    title.forEach((item) =>
                                        item.classList.remove("ecom-item-active")
                                    );
                                }
                            } else {
                                if (
                                    !(
                                        (disable_auto_close__mobile && innerWidth < 768) ||
                                        (disable_auto_close__tablet &&
                                            innerWidth > 767 &&
                                            innerWidth < 1025) ||
                                        (disable_auto_close && innerWidth > 1024)
                                    )
                                ) {
                                    accordionItems.forEach((item) => handleAccordionClosse(item));
                                    title.forEach((item) =>
                                        item.classList.remove("ecom-item-active")
                                    );
                                }
                                accordion.classList.add("ecom-item-active");
                                parent.classList.add("ecom-item-active");
                                let tmp =
                                    accordion.parentNode.querySelector(".ecom-accordion__body");
                                if (accordion.parentNode.closest(".ecom-accordion__body")) {
                                    accordion.parentNode.closest(
                                        ".ecom-accordion__body"
                                    ).style.height = "auto";
                                }
                                tmp.style.height = "auto";
                                let height = "auto";
                                if (!disable_effect) {
                                    height = isLive ? tmp.clientHeight + "px" : "auto";
                                    tmp.classList.add("ecom-effect-accodion");
                                }
                                tmp.style.height = "0px";
                                setTimeout(() => {
                                    tmp.style.height = height;
                                }, 10);
                            }

                            window.dispatchEvent(new window.Event("renderScroll"));
                            setTimeout(() => {
                                window.dispatchEvent(new window.Event("renderScroll"));
                                if (scroll_on_mobile) {
                                    if (!isInViewport(this)) {
                                        scrollElement(this);
                                    }
                                } else {
                                    if (!isInViewport(this) && innerWidth > 1024) {
                                        scrollElement(this);
                                    }
                                }
                            }, 500);

                            function Position(obj) {
                                let currenttop = 0;
                                if (obj.offsetParent) {
                                    do {
                                        currenttop += obj.offsetTop;
                                    } while ((obj = obj.offsetParent));
                                    return [currenttop];
                                }
                            }

                            function scrollElement(el) {
                                window.scroll(0, Position($el) - 100);
                            }
                        };
                    });
                }

                function handleAccordionClosse(item) {
                    item.classList.remove("ecom-item-active");
                    item.querySelector(".ecom-accordion__body").style.height = "0";
                }
                handle(accordionTitles);
                if(!close_all) {
                    setTimeout(() => {
                        $el.querySelector('.ecom-item-group-init') && $el.querySelector('.ecom-item-group-init').classList.remove('ecom-item-group-init')
                    }, 500)
                }
                window.addEventListener("resize", function () {
                    handle(accordionTitles);
                });

                    });
                    
                        document.querySelectorAll('.ecom-xub9an9hmaa').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-xub9an9hmaa', settings: {"disable_auto_close":true,"disable_effect":false,"close_all":true},isLive: true});
                        });
                    

                })();
            
                (function(){
                    const Func = (function() {
                        'use strict';
window.__ectimmers = window.__ectimmers ||{};window.__ectimmers["ecom-84u4m7ok0iq"]=  window.__ectimmers["ecom-84u4m7ok0iq"] || {};
let $el = this.$el,
                        $wrapper = $el.querySelector('.ecom-product-single__review-wrapper');
                    if ($wrapper && $wrapper.dataset.reviewPlatform && !this.isLive) {
                        switch ($wrapper.dataset.reviewPlatform) {
                            case 'product-reviews':
                                if (window.SPR) {
                                    try {
                                        window.SPR.$ = window.jQuery;
                                        window.SPR.initDomEls();
                                        window.SPR.loadProducts();
                                    }
                                    catch (e) {
                                        console.info(e.message);
                                    }
                                }

                                break;
                            case 'judgeme':
                                if(window.jdgm && typeof window.jdgm.initializeWidgets === 'function')
                                {
                                    window.jdgm.initializeWidgets();
                                }
                                break;
                            case 'product-reviews-addon':
                                if(window.StampedFn)
                                {
                                    window.StampedFn.init();
                                }
                                break;
                            case 'yotpo-social-reviews':
                                break;
                            case 'lai-reviews':
                                if(typeof SMARTIFYAPPS!== 'undefined' && window.SMARTIFYAPPS.rv.installed){
                                    window.SMARTIFYAPPS.rv.scmReviewsRate.actionCreateReviews();
                                }
                                break;
                            default:
                                break;
                        }
                    }

                    });
                    
                        document.querySelectorAll('.ecom-84u4m7ok0iq').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-84u4m7ok0iq', settings: {},isLive: true});
                        });
                    

                })();
            
                (function(){
                    const Func = (function() {
                        'use strict';
window.__ectimmers = window.__ectimmers ||{};window.__ectimmers["ecom-mbh9r6e3vjr"]=  window.__ectimmers["ecom-mbh9r6e3vjr"] || {};
if (!this.settings || !this.$el) {
                    return;
                }
                const $el = this.$el;
                const loop = this.settings.loop,
                    autoplay = this.settings.autoplay,
                    lazyload = this.settings.lazyload || false
                let $button = $el.querySelector(".ecom-video_overlay-icon");
                const poster = $el.querySelector(".ecom-video-poster");
                let $icon;
                $icon = $button && $button.querySelector(".ecom-video-icon-play");
                const videoWrapper = $el.querySelector('.ecom-element_video-iframe');
                // document.addEventListener("DOMContentLoaded", function() {\
                if(lazyload) {
                    setTimeout(function(){
                        createObserver(videoWrapper)
                    }, 500)
                };
                function createObserver(element){
                    let options = {
                        root: null,
                        rootMargin: "0px",
                        threshold: 0.5
                    };
                    let observer = new IntersectionObserver(handleIntersect, options);
                    observer.observe(element);
                    // window.removeEventListener('scroll', lazyloadVideo)
                }
                function handleIntersect(entries, observer){
                        entries.forEach(function(entry){
                            if(entry.isIntersecting) {
                                const source = entry.target.querySelector('video source');
                                const video = entry.target.querySelector('video');
                                const iframe = entry.target.querySelector('iframe');
                                if(video && source) {
                                    source.src = source.dataset.source;
                                    video.load();
                                    video.addEventListener('loadeddata', function() {
                                        if(autoplay) {
                                            video.play();
                                        }
                                    })
                                }
                                if(iframe) {
                                    let src = iframe.dataset.srcVideo;
                                    iframe.setAttribute("src", src);
                                }
                                observer.unobserve(entry.target);
                            }
                        });
                }
                let video = $el.querySelector(".ecom_video");
                let iframe = $el.querySelector(".ecom_iframe");
                if(autoplay) {
                    if($button) $button.classList.remove("ecom-overlay");
                    if($icon) $icon.style.display ="none";
                    if(poster) poster.style.display = 'none';
                }
                if(video && !loop) {
                    video.addEventListener('ended', function() {
                        if(poster) poster.style.display = 'block';
                        if($button) $button.classList.add("ecom-overlay");
                        if($icon) $icon.style.display ="block";
                    });
                }
                if ($button) {
                    $button.addEventListener("click", () => {

                        if (this.settings.source == "hosted" || this.settings.source == "uploaded" && video) {
                            if(poster) poster.style.display = 'none';
                            video.autoplay = true;
                            video.play();
                            $button.classList.remove("ecom-overlay");
                            $icon.style.display ="none";
                        } else if(iframe) {
                            // let src = iframe.getAttribute("src") + "&autoplay=1";
                            let src = iframe.getAttribute("src");
                            if(src.includes('autoplay=0')){
                                src = src.replace('autoplay=0', 'autoplay=1')
                            }
                            else {
                                src = src + "&autoplay=1";
                            }
                            if(poster) poster.style.display = 'none';
                            iframe.setAttribute("src", src);
                            $button.classList.remove("ecom-overlay");
                            $icon.style.display = "none";
                        }

                    });

                }
                if(video) {
                    if(poster) {
                        poster.addEventListener('click', function() {
                            poster.style.display = 'none';
                            video.play();
                        });
                    }
                    video.addEventListener('pause', function() {
                        if(poster) poster.style.display = 'block';
                        if($button) $button.classList.add("ecom-overlay");
                        if($icon) $icon.style.display ="block";
                    })
                }

                $el.querySelectorAll('[data-ec-tracking-id]').forEach(function($btn){
                    if($btn.dataset.ecTrackingId)
                        {
                            $btn.addEventListener('click', function(){
                                if(window.Shopify.analytics)
                                {
                                    Shopify.analytics.publish("ec_custom_events",{
                                        "button_id": $btn.id,
                                        "tracking_id": $btn.dataset.ecTrackingId
                                    })
                                }
                            }, { once: true});
                        }
                });
                //to do
                const popup = $el.querySelector('[ecom-modal]');
                if (popup && this.settings.image_overlay && this.settings.play_on_lightbox && window.EComModal) {
                    var id = this.id
                    new window.EComModal(popup, {
                        cssClass: [id, 'ecom-core', 'ecom-core-simulator'],
                        onOpen: function() {
                            var modal = document.querySelector('.ecom-modal.' + id);

                            if(modal) {
                                modal.querySelector('.ecom-modal-box__content').classList.add('ecom-element_video-iframe')
                            }

                        }
                    });
                }

                    });
                    
                        document.querySelectorAll('.ecom-mbh9r6e3vjr').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-mbh9r6e3vjr', settings: {"loop":true,"autoplay":true,"source":"uploaded"},isLive: true});
                        });
                    

                })();
            
                (function(){
                    const Func = (function() {
                        'use strict';
window.__ectimmers = window.__ectimmers ||{};window.__ectimmers["ecom-dii1h57kof4"]=  window.__ectimmers["ecom-dii1h57kof4"] || {};
if(!this.$el)
                {
                    return false;
                }

                // eslint-disable-next-line @typescript-eslint/no-this-alias
                const _this = this;
                const $el = this.$el,isLive = this.isLive;

                // eslint-disable-next-line camelcase
                const position_zoom = this.settings.position_zoom ? this.settings.position_zoom : 1,
                        zoom_options = {
                            width: this.settings.zoom_width,
                            height: this.settings.zoom_height,
                        };

                const $section = $el.closest(".ecom-product-form--single");
                let zoomConfig = {
                    responsive: true,
                    scrollZoom: window.innerWidth > 768,
                    zoomType: window.innerWidth < 768 ? "inner" : "window",
                    zoomWindowPosition: position_zoom,
                    borderSize: 1,
                    zoomContainerAppendTo: $el.closest('.ecom-row'),
                    borderColour: "red"
                }
                let isTablet = window.matchMedia('only screen and (max-width: 768px)');



                const showThumbnails = this.settings.show_thumbnails
                    ? this.settings.show_thumbnails
                    : false;
                const layout = this.settings.layout ? this.settings.layout : "slider",
                      zoom_enable =  this.settings.enable_zoom ? this.settings.enable_zoom : false;
                      var nav,slider, thumbnail_position = this.settings.thumbnail_position,
                        thumbnail_position__tablet = this.settings.thumbnail_position__tablet,
                        thumbnail_position__mobile = this.settings.thumbnail_position__mobile,
                        show_pagination = this.settings.show_pagination ? true : false,
                        enable_gallery = this.settings.enable_gallery ?? false,
                        gallery_name = this.settings.gallery_name ?? false,
                        centeredSlides = this.settings.centeredSlides ?? false,
                        slide_loop = this.settings.slide_loop ?? false,
                        disable_auto_height = this.settings.disable_auto_height;
                function initSlider() {
                    if (layout === "slider") {
                        try {
                            if (showThumbnails) {
                                const $selector = _this.$el.querySelector(
                                    ".ecom-product-single__media--thumbs"
                                );
                                let data = JSON.parse($selector.dataset.breakpoints);
                                Object.keys(data).forEach(s=>{
                                    let __screen_name = data[s].__screen_name;
                                    let key  = 'thumbnail_position';
                                    data[s].direction = ['row','row-reverse'].includes(data[s][key]) ? 'vertical': 'horizontal';
                                })
                                if($selector.hasChildNodes()) {
                                    nav = new window.EComSwiper($selector, {
                                        freeMode: false,
                                        centeredSlides: false,
                                        loop: false,
                                        centeredSlidesBounds: true,
                                        slideToClickedSlide: true,
                                        autoHeight: (['row','row-reverse'].includes(thumbnail_position) && window.screen.width > 1024) || (['row','row-reverse'].includes(thumbnail_position__tablet) && (window.screen.width >= 768 || window.screen.width <= 1024)) || (['row','row-reverse'].includes(thumbnail_position__mobile) && window.screen.width < 768) ? true: false,
                                        navigation: {
                                            nextEl: _this.$el.querySelector(
                                                ".ecom-product-single__media--thumbs .ecom-swiper-button-next"
                                            ),
                                            prevEl: _this.$el.querySelector(
                                                ".ecom-product-single__media--thumbs .ecom-swiper-button-prev"
                                            )
                                        },
                                        allowTouchMove: isLive,
                                        watchSlidesProgress: true,
                                        grabCursor: true,
                                        centerInsufficientSlides: false,
                                        breakpoints: data,
                                        direction: ['row','row-reverse'].includes(thumbnail_position) ? 'vertical': 'horizontal',
                                        on:{
                                             slideChangeTransitionEnd: function () {
                                                  //setTimeout(()=>window.dispatchEvent(new window.Event('resize')),500)
                                             },
                                             breakpoint: function() {
                                                 setTimeout(()=>window.dispatchEvent(new window.Event('resize')),500)
                                             },
                                             init: function() {
                                                setTimeout(() => {
                                                    if(this.el) {
                                                        this.el.classList.remove('ecom-product-single__init-thumb-hidden');
                                                    }
                                                }, 50)
                                             }
                                        }

                                    });
                                }
                                let itv = null;
                                $selector.querySelectorAll('img').forEach(function(img){
                                    img.addEventListener('load', function(){
                                        clearTimeout(itv);
                                        itv = setTimeout(()=>window.dispatchEvent(new window.Event('resize')),500)
                                    })
                                });
                                // $section && $section.addEventListener('ecomVariantChange', function() {
                                //     nav.update();
                                // });


                            }
                            const $sliderElement = $el.querySelector(
                                ".ecom-product-single__media--featured"
                            );
                            var sliderBreakpoints = $sliderElement.dataset.breakpoints;
                            sliderBreakpoints = sliderBreakpoints ? JSON.parse(sliderBreakpoints): {'0': {slidesPerView: 1,spaceBetween: 20}};
                            // let show_pagination = this.settings && this.settings.show_pagination ? true: false;
                            slider = new window.EComSwiper($sliderElement, {
                                autoHeight: disable_auto_height ?? true,
                                lazy: true,
                                allowTouchMove: isLive,
                                pagination:show_pagination?  {
                                    el: $sliderElement.querySelector('.ecom-swiper-pagination'),
                                    dynamicBullets: true,
                                    clickable: true
                                }: false,
                                navigation: {
                                    nextEl: $el.querySelector(
                                        ".ecom-product-single__media--featured .ecom-swiper-button-next"
                                    ),
                                    prevEl: $el.querySelector(
                                        ".ecom-product-single__media--featured .ecom-swiper-button-prev"
                                    )
                                },
                                thumbs: showThumbnails && nav
                                    ? {
                                          swiper: nav
                                      }
                                    : undefined,
                                noSwiping: true,
                                longSwipes: true,
                                loop: slide_loop,
                                centeredSlides: centeredSlides,
                                touchStartPreventDefault: true,
                                noSwipingSelector: "model-viewer",
                                noSwipingClass: "ecom-product-single__media--model",
                                grabCursor: true,
                                preloadImages: true,
                                breakpoints: sliderBreakpoints,
                                on: {
                                    breakpoint: function() {
                                        setTimeout(()=>window.dispatchEvent(new window.Event('resize')),500)
                                    },
                                    slideChange: function (swiper) {
                                        if(enable_gallery) return;
                                        if(swiper.activeIndex !== swiper.lastIndex)
                                        {
                                            swiper.lastIndex = swiper.activeIndex +'';
                                        }

                                        const $selector = $section && $section.querySelector('[name="id"]');
                                        if ($selector) {
                                            let vid = null;
                                            if(!slider || !slider.slides[slider.activeIndex]) return;
                                            vid = slider.slides[slider.activeIndex]?.dataset?.variant_id;
                                            if (vid) {
                                                vid = vid + "";
                                                const id = $selector.value;
                                                if (!id || !vid.includes(id.toString())) {
                                                    $selector.value = vid.split(",")[0];
                                                    $selector.dispatchEvent(new Event("swatch"));
                                                }
                                            }
                                        }

                                        if(swiper.slides[swiper.activeIndex] && zoom_enable) {
                                            initZoom(swiper.slides[swiper.activeIndex]);
                                        }
                                    },
                                    slideChangeTransitionEnd: function (swiper) {
                                        window.dispatchEvent(new window.Event('resize'));

                                        swiper.slides.forEach(slide=>{
                                            if(!slide.classList.contains('ecom-swiper-slide-active'))
                                            {
                                                let player= slide.querySelector('iframe,video');
                                                if(player)
                                                {
                                                    if(player.nodeName === 'IFRAME')
                                                    {
                                                        player.src = player.src;
                                                        // player.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
                                                    }
                                                    else
                                                    {
                                                        player.pause();
                                                    }
                                                }
                                            } else {
                                                let player= slide.querySelector('video');
                                                if(player) {
                                                    if(player.hasAttribute('autoplay')) {
                                                        player.play();
                                                    }
                                                }

                                            }
                                        })

                                        if(isLive)
                                       {
                                            if(showThumbnails && nav) {
                                                nav.update();
                                            }
                                        //    let iframe = slider.slides[slider.activeIndex].querySelector('iframe');
                                        //    if(iframe)
                                        //    {

                                        //    }
                                            swiper.allowTouchMove = !swiper.slides[slider.activeIndex]?.classList?.contains('ecom-swiper-no-swiping');
                                       }
                                        // allowTouchMove

                                    },
                                    init: function (swiper) {
                                        if(swiper.slides[swiper.activeIndex] && zoom_enable) {
                                            initZoom(swiper.slides[swiper.activeIndex]);
                                        }
                                    },
                                }
                            });
                            // slider.controller.control = nav   //Ben tren chay -> duoi chay theo
                            // $section && $section.addEventListener('ecomVariantChange', function() {
                            //     slider.update();
                            // });
                            let itv = null;
                            $sliderElement.querySelectorAll('img').forEach(function(img){
                                img.addEventListener('load', function(){
                                    clearTimeout(itv);
                                    itv = setTimeout(()=>window.dispatchEvent(new window.Event('resize')),500)
                                })
                            })
                            //show nav when finished init
                            if(!isLive){
                            setTimeout(()=>{
                                $sliderElement.classList.remove('ecom-before-init');
                            },200);
                            }

                        } catch (e) {
                            console.info(e.message);
                        }
                    }
                }
                initSlider();
                // integration Globo app
                // function updateFeatured(variant) {
                //     const $sliderBoxs = $section.querySelectorAll('.ecom-product-single__media--slider');
                //     if ($sliderBoxs.length && variant) {
                //         $sliderBoxs.forEach(function($sliderBox) {
                //             const $slider = $sliderBox.querySelector('.ecom-product-single__media--featured');
                //             const $slide = $slider.querySelector('.ecom-product-single__media--image[data-variant_id*="' + variant.id + '"]');
                //             // enable featured image -> don't change slide when change
                //             // if (!$slide || $slider.getAttribute('data-priority') === 'featured') {
                //             //     return;
                //             // }
                //             const index = $slide.dataset.index;
                //             const current = $slider?.swiper?.realIndex ?? 0;

                //             if (index != current && $slider && $slider.swiper) {
                //                 $slider.swiper.slideTo(index, 200);
                //             }
                //         })
                //     } else if (variant && variant.featured_image) {
                //         const $featuredBox = $section.querySelector('.ecom-product-single__media--single');
                //         if ($featuredBox) {
                //             $featuredBox.querySelector('img').setAttribute('src', variant.featured_image.src);
                //         }
                //     }
                // }
                // if(layout === 'slider') {
                //     window.addEventListener("globoSwatchClickedVariantSwatch",function(data){
                //         updateFeatured(data.detail);
                //     });
                // }
                async function fetchData(url) {
                    const response = await window.fetch(url, {
                        method: "GET",
                        headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                        },
                    });
                    if(response.ok) {
                        const res = await response.json();
                        if(res) return res.product;
                    }
                    return false;
                }

                 // Start handle Variant gallery
                 async function handlerVariantGallery() {
                    const images = $el.querySelectorAll('.ecom-product-single__media--image img');
                    const $sliderImageWrapper = $el &&  $el.querySelector('.ecom-product-single__media--featured .ecom-product-single__media--images-layout__slider'),
                        itemImages = $sliderImageWrapper && $sliderImageWrapper.querySelectorAll('.ecom-product-single__media--image'),
                        $sliderImage = $el && $el.querySelector('.ecom-product-single__media--featured'),
                        $sliderThumbs = $el && $el.querySelector('.ecom-product-single__media--thumbs'),
                        $sliderThumbWrapper = $el && $el.querySelector('.ecom-product-single__media--slider .ecom-product-single__media--thumbs .ecom-swiper-wrapper'),
                        itemThumbs = $sliderThumbs && $sliderThumbs.querySelectorAll(".ecom-product-single__media--thumbnail"),
                        gridAdvanceWrapper = $el && $el.querySelector('.ecom-product-single__media--grid .ecom-product-single__media--images-layout__grid'),
                        gridImages = gridAdvanceWrapper && gridAdvanceWrapper.querySelectorAll('.ecom-product-single__media--image');
                    let invalidImage = true;
                    if(images) {
                        images.forEach(function(item, index) {
                            if(item.alt.includes('ecomposer-')) {
                                invalidImage = false;
                                return;
                            }
                        })
                    }
                    if(invalidImage) return;
                    let product = null;
                    let selector = $section && $section.querySelector('.ecom-product-single-select-id[name=id]');
                    if(!selector) return;
                    const json = $section && $section.querySelector('#' + selector.dataset.jsonProduct);
                    if (!json) {
                        return;
                    }

                    try {
                        product = JSON.parse(json.innerHTML);
                    } catch (e) {
                        return;
                    }
                    let productFetch = null;
                    if(isLive && window.Shopify && window.Shopify.routes.root != '/') {
                        let url = window.location.origin + '/products/' + product.handle + '.json';
                        productFetch = await fetchData(url);
                        if(!productFetch) {
                            url = window.location.origin+ window.Shopify.routes.root + 'products/' + product.handle + '.json';
                            productFetch =  await fetchData(url);
                        }
                        product.options_with_values = productFetch.options;
                        product.variants = productFetch.variants;
                    }
                    let variant = {detail: {variant: null}};
                    variant.detail.variant = product.variants.find(function(variant) {
                        if(variant.id == selector.value) return variant;
                    })
                    let el_check_default_variant = $el.querySelector('#ecom-single-product-default-variant');
                    let check_default_variant = el_check_default_variant && el_check_default_variant.innerText,
                        check_dont_set_alt = el_check_default_variant.dataset.dontSetAlt;
                    if(check_dont_set_alt && check_dont_set_alt == 'true') return;
                    // Main handle variant gallery
                    function handleRenderImage(event) {
                        if(event.detail.variant) {
                            let variantWrapper = event.target && event.target.querySelector('.ecom-product-single__variant-picker-container');
                            if(enable_gallery && gallery_name) {
                                let variant = event.detail.variant;
                                if(isLive && window.Shopify && window.Shopify.routes.root != '/') {
                                    variant = product.variants.find(function(variant) {
                                        if(variant.id == $section.querySelector('.ecom-product-single-select-id[name=id]').value) return variant;
                                    })
                                }
                                // Get alt image variant selected
                                function getAlt(product) {
                                    let options = product.options_with_values,
                                        optionSelected = [];
                                    if(gallery_name.includes(',')) {
                                        const arr = gallery_name.split(',');
                                        arr.forEach((item, index) => {
                                            options && options.forEach(function(option) {
                                                if(option.name.trim().toLowerCase() === item.trim().toLowerCase()) {
                                                    optionSelected = optionSelected.concat({
                                                        key: option.name.trim(),
                                                        value: option.values
                                                    });
                                                }
                                            });
                                        })
                                    }
                                    else {
                                        options && options.forEach(function(option) {
                                            if(option.name.trim().toLowerCase() === gallery_name.toLowerCase()) {
                                                optionSelected = optionSelected.concat({
                                                    key: option.name.trim(),
                                                    value: option.values
                                                });
                                                return
                                            }
                                        });
                                    }
                                    let result = [];
                                    optionSelected && optionSelected.forEach(function(options, index) {
                                        options.value.forEach((value) => {
                                            if(variant.option1 == value){
                                                result.push(`ecomposer-${options.key.toLowerCase()}-${variant.option1.replaceAll(' ', '-').toLowerCase()}`)
                                            }
                                            if(variant.option2 == value){
                                                result.push(`ecomposer-${options.key.toLowerCase()}-${variant.option2.replaceAll(' ', '-').toLowerCase()}`)
                                            }
                                            if(variant.option3 == value){
                                                result.push(`ecomposer-${options.key.toLowerCase()}-${variant.option3.replaceAll(' ', '-').toLowerCase()}`)
                                            }
                                        })
                                    });
                                    return result;
                                }
                                const styleSlideThumb = $sliderThumbWrapper && $sliderThumbWrapper.style;

                                const styleSlide = $sliderImageWrapper && $sliderImageWrapper.style;
                                // Update layout slider when change variant
                                function updateSlider(slide, slideWrapper, images, variant, style) {
                                    if(variant && slideWrapper && product) {
                                        if(images.length) {
                                            slideWrapper.innerHTML = '';
                                            images.forEach(function(item) {
                                                let alts = item.querySelector('img').alt;
                                                if(!alts.includes(',')) {
                                                    if(getAlt(product).includes(alts.toLowerCase())) {
                                                        item.querySelector('img').removeAttribute('loading');
                                                        slideWrapper.appendChild(item);
                                                    }
                                                }
                                                else {
                                                    alts = alts.split(',');
                                                    alts = alts.map(function(alt) {
                                                        return alt.trim().toLowerCase();
                                                    });
                                                    let check = getAlt(product).filter(element => alts.indexOf(element) !== -1);
                                                    if(isEquivalent(check, alts) || (arraysContainAllElements(check, alts) && check.length === getLength(alts))) {
                                                        item.querySelector('img').removeAttribute('loading');
                                                        slideWrapper.appendChild(item);
                                                    }
                                                }
                                            });
                                            slideWrapper.style = style;
                                            slide.prepend(slideWrapper);
                                            const $selector = _this.$el.querySelector(
                                                ".ecom-product-single__media--thumbs"
                                            );
                                            if(nav) {
                                                nav.destroy();
                                                $selector.classList.add('ecom-product-single__init-thumb-hidden');
                                            }
                                            initSlider();
                                        };
                                    }
                                }
                                function isEquivalent(arr1, arr2) {
                                    return arr1.sort().join() === arr2.sort().join();
                                }
                                function arraysContainAllElements(arr1, arr2) {
                                    // const check1 = arr1.every(element => arr2.includes(element));
                                    const check2 = arr1.every(element => arr2.includes(element))
                                    return check2;
                                }
                                // Check number option in alts
                                function getLength(arr) {
                                    const uniqueValues = new Set();
                                    let count = 0;

                                    for (const item of arr) {
                                        const secondDashIndex = item.indexOf('-', item.indexOf('-') + 1);
                                        const value = item.substring('ecomposer-'.length, secondDashIndex);
                                        if (!uniqueValues.has(value)) {
                                            uniqueValues.add(value);
                                            count++;
                                        }
                                    }
                                    return count;
                                }

                                // Update layout grid when change variant
                                function updateImageGrid(variant) {
                                    const wrapper = $section && $section.querySelector('.ecom-product-single__media--grid_default');
                                    if(!wrapper || !variant || !product) return;
                                    let images = wrapper && wrapper.querySelectorAll('.ecom-product-single__media--image');
                                    if(images.length) {
                                        if (gallery_name && enable_gallery) {
                                            images.forEach(function(image){
                                                image.style.display = 'none';
                                                let alts = image.querySelector('img').alt;
                                                if(!alts.includes(',')) {
                                                    if(getAlt(product).includes(alts.toLowerCase())) {
                                                        image.style.display = 'block';
                                                    }
                                                }
                                                else {
                                                    alts = alts.split(',');
                                                    alts = alts.map(function(alt) {
                                                        return alt.trim().toLowerCase();
                                                    });
                                                    let check = getAlt(product).filter(element => alts.indexOf(element) !== -1);
                                                    if(isEquivalent(check, alts) || (arraysContainAllElements(check, alts) && check.length === getLength(alts))) {
                                                        image.style.display = 'block';
                                                    }
                                                }
                                            });
                                        }
                                        else {
                                            images.forEach(function(image){
                                                image.style.display = 'flex';
                                            });
                                        }

                                    }
                                }
                                // Update layout grid advanced when change variant
                                function updateImageGridAdvance(variant) {
                                    if(variant && gridAdvanceWrapper && product) {
                                        gridAdvanceWrapper.innerHTML = '';
                                        let images = [];
                                        gridImages.forEach(function(image, index) {
                                            let alts = image.querySelector('img').alt;
                                            if(!alts.includes(',')) {
                                                if(getAlt(product).includes(alts.toLowerCase())) {
                                                    images.push(image);
                                                }
                                            }
                                            else {
                                                alts = alts.split(',');
                                                alts = alts.map(function(alt) {
                                                    return alt.trim().toLowerCase();
                                                });
                                                let check = getAlt(product).filter(element => alts.indexOf(element) !== -1);
                                                if(isEquivalent(check, alts) || (arraysContainAllElements(check, alts) && check.length === getLength(alts))) {
                                                    images.push(image);
                                                }
                                            }
                                        })
                                        images.forEach(function(image, index) {
                                            if(index == 0 || (index >= 5 && index % 5 == 0) || (index % 5 != 0 && (index + 1) % 2 == 0 && index == images.length - 1) || (index == 1 && images.length == 2)) {
                                                image.style.paddingTop = `${image.dataset.fullWidth}%`;
                                            }
                                            else {
                                                image.style.paddingTop = `${image.dataset.halfWidth}%`;
                                            }
                                            gridAdvanceWrapper.appendChild(image);
                                        });
                                    }
                                }

                                updateSlider($sliderImage, $sliderImageWrapper, itemImages, variant, styleSlide);
                                updateSlider($sliderThumbs, $sliderThumbWrapper, itemThumbs, variant, styleSlideThumb);
                                updateImageGrid(variant);
                                updateImageGridAdvance(variant);
                                // Init zoom when change variant
                                if(zoom_enable) {
                                    let zoom = $el.querySelectorAll('.ecom-image-zoom');
                                    if(zoom.length == 0) return;
                                        initZoom(zoom);
                                    if(isLive) {
                                        zoom.forEach(function(z_el) {
                                            z_el.querySelector('a') && z_el.querySelector('a').addEventListener('click', function(e) {
                                                e.preventDefault();
                                            })
                                        })
                                    }
                                }
                            }
                        }
                    }
                    if(variant && check_default_variant === 'false') {
                        handleRenderImage(variant);
                        $section && $section.addEventListener('ecomVariantChange', handleRenderImage);
                    }
                 }
                 if(enable_gallery) {
                     handlerVariantGallery();
                 }
                // End handler variant gallery
                    $el.querySelectorAll(".ecom-product-single__media--play-control").forEach(function(el){
                        el.addEventListener('click', function(ev){
                            this.style.display = 'none';
                            this.parentNode.querySelector('video').play();
                        })
                    })


                /**
                 * Shopify AR
                 */
                if (!this.isLive) {
                    try {

                            _this.$el.querySelectorAll("model-viewer").forEach(function(el){
                                const html = element.outerHTML;
                                el.replaceWith(html);
                            })

                    } catch (e) {
                        console.info(e.message);
                    }
                }

                function setupModelViewerUI(errors) {
                    if (errors) {
                        return;
                    }
                    const $models = $el.querySelectorAll("model-viewer");
                    if ($models) {
                        $models.forEach(($model) => {
                            if ($model) {
                                try {
                                    // eslint-disable-next-line no-new
                                    new window.Shopify.ModelViewerUI($model);
                                } catch (e) {
                                    console.warn(e.message);
                                }
                            }
                        });
                    }
                    $el.querySelectorAll('button').forEach(function(el){
                        el.setAttribute('type','button');
                    })
                }

                function setupShopifyXr() {
                    if (!window.ShopifyXR) {
                        document.addEventListener("shopify_xr_initialized", function () {
                            setupShopifyXr();
                        });
                    } else {
                        try {
                            const $json_model = _this.$el.querySelector('[id^="Product-model-"]');
                            // eslint-disable-next-line camelcase
                            if ($json_model) {
                                window.ShopifyXR.addModels(JSON.parse($json_model.textContent));
                                $json_model.remove();
                            }
                        } catch (e) {
                            console.log(e.message);
                        }
                        window.ShopifyXR.setupXRElements();
                    }
                }
                if (
                    document.querySelector("model-viewer") &&
                    !document.getElementById("ModelViewerStyle")
                ) {
                    let link = document.createElement("link");
                    link.id = "ModelViewerStyle";
                    link.rel = "stylesheet";
                    link.href =
                        "https://cdn.shopify.com/shopifycloud/model-viewer-ui/assets/v1.0/model-viewer-ui.css";

                    link.media = 'print';
                    link.onload= function(){
                        this.media = 'all'
                    }
                    document.head.appendChild(link);

                }
                if(window.Shopify && window.Shopify.loadFeatures) {
                    window.Shopify.loadFeatures([
                        {
                            name: "shopify-xr",
                            version: "1.0",
                            onLoad: setupShopifyXr
                        },
                        {
                            name: "model-viewer-ui",
                            version: "1.0",
                            onLoad: setupModelViewerUI
                        }
                    ]);
                }

                /* Image Lightbox */
                if (this.settings.image_action && this.settings.image_action === "lightbox" && isLive) {
                    let arr =  this.$el.querySelectorAll('[ecom-modal]');
                    if(arr.length && window.EComModal) {
                        new window.EComModal(arr, {
                            gallery: true,
                            cssClass: ['ecom-container-lightbox-' + this.id]
                        });
                    }
                }

                /* Image Sticky */
                if(this.settings.position_sticky &&  window.innerWidth > 1024) {

                    if($el.parentElement) {
                        if(this.isLive) {
                            $el.style.height = "100%";
                        } else {
                            $el.parentElement.style.height = "100%";
                        }
                    }
                }

                /* Image Zoom */
                if(zoom_enable) {
                    let zoom = $el.querySelectorAll('.ecom-image-zoom');
                    if(zoom.length == 0) return;

                    if(layout !== 'slider') {
                        initZoom(zoom);
                    }
                    if(isLive) {
                        zoom.forEach(function(z_el) {
                            z_el.querySelector('a') && z_el.querySelector('a').addEventListener('click', function(e) {
                                e.preventDefault();
                            })
                        })
                    }
                }


                function initZoom(el) {
                    if(!isLive || window.innerWidth < 768 ) return;
                    if(window.EcomImgZoom) {
                        if(el.length > 0) {
                            for (var i = 0, len = el.length; i < len; i++) {
                                new window.EcomImgZoom(el[i], zoom_options);
                            }
                        } else {
                            new window.EcomImgZoom(el, zoom_options);
                        }

                    }
                }

                    });
                    
                        document.querySelectorAll('.ecom-dii1h57kof4').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-dii1h57kof4', settings: {"zoom_width":"500px","zoom_height":"500px","show_thumbnails":true,"layout":"slider","enable_zoom":false,"thumbnail_position":"row-reverse","thumbnail_position__tablet":"column","thumbnail_position__mobile":"column","show_pagination":false,"centeredSlides":false,"slide_loop":true,"disable_auto_height":true,"image_action":"lightbox"},isLive: true});
                        });
                    

                })();
            
;try{
 
} catch(error){console.error(error);}