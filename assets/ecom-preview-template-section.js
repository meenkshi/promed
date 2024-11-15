if (
  ((function () {
    const e = function () {
      "use strict";
      if (
        ((window.__ectimmers = window.__ectimmers || {}),
        (window.__ectimmers["ecom-9a0p2zajuff"] =
          window.__ectimmers["ecom-9a0p2zajuff"] || {}),
        "lightbox" === this.settings.link &&
          "yes" === this.settings.lightbox &&
          window.EComModal &&
          this.$el)
      ) {
        var e = this.$el.querySelector("[ecom-modal]");
        new window.EComModal(e, {
          cssClass: ["ecom-container-lightbox-" + this.id],
        });
      }
      let t = this.$el;
      function o() {
        let e = t.querySelector(".ecom-element.ecom-base-image"),
          o = t.closest(".core__row--columns");
        e &&
          ((function (e) {
            const t = e.getBoundingClientRect();
            return (
              t.top >= 0 &&
              t.left >= 0 &&
              t.bottom - e.offsetHeight / 2 <=
                (window.innerHeight || document.documentElement.clientHeight) &&
              t.right <=
                (window.innerWidth || document.documentElement.clientWidth)
            );
          })(e)
            ? (e.classList.add("image-highlight"),
              o.setAttribute("style", "z-index: unset"))
            : (e.classList.remove("image-highlight"),
              o.setAttribute("style", "z-index: 1")));
      }
      t &&
        this.settings.highligh_on_viewport &&
        window.addEventListener("scroll", function () {
          o();
        });
    };
    document.querySelectorAll(".ecom-9a0p2zajuff").forEach(function (t) {
      e.call({
        $el: t,
        id: "ecom-9a0p2zajuff",
        settings: { link: "none", lightbox: "no", highligh_on_viewport: !1 },
        isLive: !0,
      });
    }),
      document.querySelectorAll(".ecom-rkn08685nr").forEach(function (t) {
        e.call({
          $el: t,
          id: "ecom-rkn08685nr",
          settings: { link: "none", lightbox: "no", highligh_on_viewport: !1 },
          isLive: !0,
        });
      }),
      document.querySelectorAll(".ecom-sybmiu0wlo").forEach(function (t) {
        e.call({
          $el: t,
          id: "ecom-sybmiu0wlo",
          settings: { link: "none", lightbox: "no", highligh_on_viewport: !1 },
          isLive: !0,
        });
      }),
      document.querySelectorAll(".ecom-5tmgf9m51ij").forEach(function (t) {
        e.call({
          $el: t,
          id: "ecom-5tmgf9m51ij",
          settings: { link: "none", lightbox: "no", highligh_on_viewport: !1 },
          isLive: !0,
        });
      }),
      document.querySelectorAll(".ecom-73pa3a23p6a").forEach(function (t) {
        e.call({
          $el: t,
          id: "ecom-73pa3a23p6a",
          settings: { link: "none", lightbox: "no", highligh_on_viewport: !1 },
          isLive: !0,
        });
      });
  })(),
  (function () {
    const e = function () {
      "use strict";
      (window.__ectimmers = window.__ectimmers || {}),
        (window.__ectimmers["ecom-1fe6xhnjug1h"] =
          window.__ectimmers["ecom-1fe6xhnjug1h"] || {});
      const e = this.$el,
        t = this.settings.autoSlideHover;
      let o = "";
      var i = !0;
      if (!e) return;
      const n = e.querySelector(".ecom-img_comp-slider");
      if (!n) return;
      const c = e.querySelector(".ecom-image_compare-overlay img"),
        s = e.querySelector(".ecom-image_comp-overlay");
      function l() {
        s && s.classList.add("overlay-hidden");
      }
      function r() {
        s && s.classList.remove("overlay-hidden");
      }
      function a() {
        var s,
          a,
          d,
          m = 0;
        function u(t) {
          (i = !1),
            t.preventDefault(),
            (s = t.clientX ? t.clientX : t.touches[0].clientX),
            (m = 1),
            (e.onmousemove = function (e) {
              f(e);
            }),
            (e.ontouchmove = function (e) {
              f(e);
            });
        }
        function p() {
          (m = 0), isNaN(d) || (a = d), (i = !0), r();
        }
        function f(e) {
          if (0 == m) return !1;
          1 == m && l(),
            (d = (function (e) {
              return (
                (e = e.changedTouches ? e.changedTouches[0] : e),
                !t || window.screen.width < 1024
                  ? Math.round(a - (100 * (s - e.pageX)) / o)
                  : Math.round((100 * e.offsetX) / o)
              );
            })(e)) < 0 && (d = 0),
            d > 100 && (d = 100),
            (function (e) {
              (n.style.left = e + "%"),
                (c.style.clipPath = `polygon(${e}% 0%, ${e}% 100%, 0% 100%, 0% 0%)`);
            })(d);
        }
        n.style.left && ((o = c.offsetWidth), (a = parseInt(n.style.left))),
          !t || window.screen.width < 1024
            ? ((n.onmousedown = function (e) {
                u(e);
              }),
              (e.onmouseup = function () {
                p();
              }),
              (n.ontouchstart = function (e) {
                u(e);
              }),
              (e.ontouchend = function () {
                p();
              }))
            : (e.onmouseover = function (e) {
                u(e);
              });
      }
      (n.onmouseover = function () {
        l();
      }),
        (n.onmouseout = function () {
          i && r();
        }),
        n && c && a(),
        window.addEventListener("resize", function () {
          n && c && ((o = c.offsetWidth), a());
        });
    };
    document.querySelectorAll(".ecom-1fe6xhnjug1h").forEach(function (t) {
      e.call({ $el: t, id: "ecom-1fe6xhnjug1h", settings: {}, isLive: !0 });
    }),
      document.querySelectorAll(".ecom-nyrjbeeh4j").forEach(function (t) {
        e.call({ $el: t, id: "ecom-nyrjbeeh4j", settings: {}, isLive: !0 });
      }),
      document.querySelectorAll(".ecom-t0y08lsqynk").forEach(function (t) {
        e.call({ $el: t, id: "ecom-t0y08lsqynk", settings: {}, isLive: !0 });
      }),
      document.querySelectorAll(".ecom-qsxeaqk87h").forEach(function (t) {
        e.call({ $el: t, id: "ecom-qsxeaqk87h", settings: {}, isLive: !0 });
      });
  })(),
  (function () {
    const e = function () {
      "use strict";
      var e, t;
      (window.__ectimmers = window.__ectimmers || {}),
        (window.__ectimmers["ecom-emepsq8cdvf"] =
          window.__ectimmers["ecom-emepsq8cdvf"] || {});
      const o = this.$el;
      if (!o) return;
      this.settings.autoplay_progress;
      const i = o.querySelector(".ecom-autoplay-progress svg"),
        n = o.querySelector(".ecom-autoplay-progress span"),
        c = null != (e = this.settings.disable_lazy) && e,
        s = this.settings,
        l = this.settings.slider_loop,
        r = this.settings.slider_center,
        a = this.settings.slider_center__tablet,
        d = this.settings.slider_center__mobile;
      this.settings.slider_group,
        this.settings.slider_items,
        this.settings.slider_group__tablet,
        this.settings.slider_items__tablet,
        this.settings.slider_group__mobile,
        this.settings.slider_items__mobile;
      const m = this.settings.slider_speed,
        u = this.settings.slider_speed__tablet,
        p = this.settings.slider_speed__mobile,
        f = function (e, t = {}, o = "") {
          return "loop" == o
            ? (((window.innerWidth > 1024 &&
                (e.items.length < e.slider_group + e.slider_items ||
                  e.slider_autoplay)) ||
                (window.innerWidth <= 1024 &&
                  window.innerWidth > 768 &&
                  (e.items.length <
                    e.slider_group__tablet + e.slider_items__tablet ||
                    e.slider_autoplay)) ||
                e.items.length <
                  e.slider_group__mobile + e.slider_items__mobile ||
                e.slider_autoplay) &&
                (t.loop = !1),
              t)
            : (window.innerWidth > 1024 && e.speed && (t["" + o] = e[0]),
              window.innerWidth <= 1024 && window.innerWidth > 768 && e[1]
                ? (t["" + o] = e[1])
                : e[0] && (t["" + o] = e[0]),
              window.innerWidth < 768 && e[2]
                ? (t["" + o] = e[2])
                : e[1]
                ? (t["" + o] = e[1])
                : e[0] && (t["" + o] = e[0]),
              t);
        };
      let _ = {};
      i &&
        n &&
        (_ = {
          autoplayTimeLeft(e, t, o) {
            i.style.setProperty("--progress", 1 - o),
              (n.textContent = Math.ceil(t / 1e3) + "s");
          },
        });
      const h = o.querySelector(".ecom-swiper-container"),
        w = null == (t = this.settings.disable_touch_move) || t;
      if (!h) return;
      let g = JSON.parse(h.dataset.optionSwiper);
      (g.pagination.el = o.querySelector(".ecom-swiper-pagination")),
        (g.navigation.nextEl = o.querySelector(".ecom-swiper-button-next")),
        (g.navigation.prevEl = o.querySelector(".ecom-swiper-button-prev")),
        (g.pagination.renderBullet = (e, t) =>
          `<span class="${t}">\n                          ${
            this.settings.items[e] &&
            this.settings.items[e].slider_pagination_image
              ? `<img src="${this.settings.items[e].slider_pagination_image}">`
              : ""
          }</span>`),
        (_.init = function () {
          this.el.parentNode.classList.add("ecom-swiper-initialized-wrapper");
        });
      const y = { allowTouchMove: this.isLive && w, on: _ };
      if (window.EComSwiper) {
        let e = function () {
            l && ((g.loop = !0), (g = f(s, g, "loop"))),
              (g.centeredSlides = !1),
              (g = f([r, a, d], g, "centeredSlides")),
              (g = f([m, u, p], g, "speed")),
              (t = new window.EComSwiper(h, Object.assign(g, y))),
              g.autoplay.enabled &&
                (t.on("touchStart", function (e, t) {
                  (e.params.speed = 300), e.autoplay.stop();
                }),
                t.on("touchEnd", function (e, t) {
                  window.innerWidth > 1024 && m && (e.params.speed = m),
                    window.innerWidth <= 1024 && window.innerWidth > 768 && u
                      ? (e.params.speed = u)
                      : m && (e.params.speed = m),
                    window.innerWidth < 768 && p
                      ? (e.params.speed = p)
                      : u
                      ? (e.params.speed = u)
                      : m && (e.params.speed = m),
                    e.autoplay.start();
                })),
              t.on("slideChange", function () {
                const e =
                    0 == t.activeIndex
                      ? t.slides.length - 1
                      : t.activeIndex - 1,
                  o = t.slides[e];
                if (o) {
                  const e = o.querySelectorAll(".ecom-animation.ecom-animated");
                  e.length &&
                    e.forEach(function (e) {
                      e.classList.remove("ecom-animated", "animated"),
                        e.classList.add("ecom-animated-slider");
                    });
                }
                if (t.el) {
                  const e = t.slides[t.activeIndex];
                  let o = null;
                  e &&
                    (o = e.querySelectorAll(
                      ".ecom-animation.ecom-animated-slider"
                    )),
                    o &&
                      o.length &&
                      o.forEach(function (e) {
                        e.classList.add("ecom-animated");
                      });
                }
              });
          },
          t = null;
        var v;
        this.isLive &&
          window.addEventListener("resize", function () {
            v && clearTimeout(v),
              (v = setTimeout(() => {
                t.update();
              }, 200));
          }),
          this.isLive
            ? e()
            : setTimeout(function () {
                e();
              }, 200);
      }
      h.querySelectorAll("img").length &&
        h.querySelectorAll("img").forEach(function (e, t) {
          c && e.removeAttribute("loading");
        });
    };
    document.querySelectorAll(".ecom-emepsq8cdvf").forEach(function (t) {
      e.call({
        $el: t,
        id: "ecom-emepsq8cdvf",
        settings: {
          slider_loop: !0,
          slider_group: 1,
          slider_items: 1,
          slider_speed: 500,
          items: [
            {
              title: "Slide 1",
              blocks: [
                {
                  title: "Image Comparison(1)",
                  name: "imageComparison",
                  settings: {
                    disable_lazyload: !1,
                    tab: "normal",
                    beforeImage: {
                      value:
                        "https://cdn.shopify.com/s/files/1/0629/7318/2186/files/com1com1.jpg?v=1661481717",
                      thumbnail:
                        "https://cdn.shopify.com/s/files/1/0629/7318/2186/files/com1com1.jpg?v=1661481717",
                    },
                    afterImage: {
                      value:
                        "https://cdn.shopify.com/s/files/1/0629/7318/2186/files/com2com2.jpg?v=1661481843",
                      thumbnail:
                        "https://cdn.shopify.com/s/files/1/0629/7318/2186/files/com2com2.jpg?v=1661481843",
                    },
                    ratio: "50%",
                    overlay: !0,
                    beforeText: "Before",
                    afterText: "After",
                  },
                  style: {
                    general: { totalHeight: "520px" },
                    icon: { iconFontSize: "22px", color: "#4b00e7" },
                    overlay: {
                      normalBackground: {
                        classic: { "background-color": "rgba(0, 0, 0, 0.35)" },
                      },
                    },
                  },
                  advanced: {},
                  css: {
                    settings: {
                      style:
                        ".ecom-core.ecom-nyrjbeeh4j .ecom-image_compare.ecom-image_compare-overlay img{clip-path: polygon(50% 0%, 50% 100%, 0% 100%, 0% 0%);}",
                      keyframes: [],
                      fonts: [],
                    },
                    style: {
                      style:
                        ".ecom-core.ecom-nyrjbeeh4j .ecom-image_compare-wrapper{height: 520px;}.ecom-core.ecom-nyrjbeeh4j .ecom-image_comp-overlay{background-color: rgba(0, 0, 0, 0.35);}.ecom-core.ecom-nyrjbeeh4j .ecom-slide_button svg{fill: #4b00e7;}",
                      keyframes: [[]],
                      fonts: [],
                    },
                    advanced: { style: "", keyframes: [], fonts: [] },
                  },
                  refresh: "ecom-s1kf4f7jiq",
                  id: "ecom-nyrjbeeh4j",
                  firstinit: !0,
                },
              ],
              image: {
                name: "slider01_3350x_dfa9cdf1-bc04-438f-87d5-908a275cb9b0",
                ext: "jpg",
                value:
                  "https://cdn.shopify.com/s/files/1/0629/7318/2186/files/slider01_3350x_dfa9cdf1-bc04-438f-87d5-908a275cb9b0.jpg?v=1647937158",
                thumbnail:
                  "https://cdn.shopify.com/s/files/1/0629/7318/2186/files/slider01_3350x_dfa9cdf1-bc04-438f-87d5-908a275cb9b0.jpg?v=1647937158",
                alt: "slider01_3350x_dfa9cdf1-bc04-438f-87d5-908a275cb9b0",
              },
              hasElementRequestLiquid: !1,
              id: "ecom-zjuj9vx1gk",
            },
            {
              title: "Slide 2",
              blocks: [
                {
                  title: "Image Comparison(2)",
                  name: "imageComparison",
                  settings: {
                    disable_lazyload: !1,
                    tab: "normal",
                    beforeImage: {
                      value:
                        "https://cdn.shopify.com/s/files/1/0629/7318/2186/files/com1com1.jpg?v=1661481717",
                      thumbnail:
                        "https://cdn.shopify.com/s/files/1/0629/7318/2186/files/com1com1.jpg?v=1661481717",
                    },
                    afterImage: {
                      value:
                        "https://cdn.shopify.com/s/files/1/0629/7318/2186/files/com2com2.jpg?v=1661481843",
                      thumbnail:
                        "https://cdn.shopify.com/s/files/1/0629/7318/2186/files/com2com2.jpg?v=1661481843",
                    },
                    ratio: "50%",
                    overlay: !0,
                    beforeText: "Before",
                    afterText: "After",
                  },
                  style: {
                    general: { totalHeight: "520px" },
                    icon: { iconFontSize: "22px", color: "#4b00e7" },
                    overlay: {
                      normalBackground: {
                        classic: { "background-color": "rgba(0, 0, 0, 0.35)" },
                      },
                    },
                  },
                  advanced: {},
                  css: {
                    settings: {
                      style:
                        ".ecom-core.ecom-t0y08lsqynk .ecom-image_compare.ecom-image_compare-overlay img{clip-path: polygon(50% 0%, 50% 100%, 0% 100%, 0% 0%);}",
                      keyframes: [],
                      fonts: [],
                    },
                    style: {
                      style:
                        ".ecom-core.ecom-t0y08lsqynk .ecom-image_compare-wrapper{height: 520px;}.ecom-core.ecom-t0y08lsqynk .ecom-image_comp-overlay{background-color: rgba(0, 0, 0, 0.35);}.ecom-core.ecom-t0y08lsqynk .ecom-slide_button svg{fill: #4b00e7;}",
                      keyframes: [[]],
                      fonts: [],
                    },
                    advanced: { style: "", keyframes: [], fonts: [] },
                  },
                  refresh: "ecom-r43mnb3s96",
                  id: "ecom-t0y08lsqynk",
                  firstinit: !0,
                },
              ],
              image: {
                name: "slider02_3000x_16f1f1fb-2d1e-4067-893b-2876b539401b",
                ext: "jpg",
                value:
                  "https://cdn.shopify.com/s/files/1/0629/7318/2186/files/slider02_3000x_16f1f1fb-2d1e-4067-893b-2876b539401b.jpg?v=1647937164",
                thumbnail:
                  "https://cdn.shopify.com/s/files/1/0629/7318/2186/files/slider02_3000x_16f1f1fb-2d1e-4067-893b-2876b539401b.jpg?v=1647937164",
                alt: "slider02_3000x_16f1f1fb-2d1e-4067-893b-2876b539401b",
              },
              hasElementRequestLiquid: !1,
              id: "ecom-fceq2a485vf",
            },
            {
              title: "Slide 3",
              blocks: [],
              image: {
                ext: "jpg",
                name: "slider03_3000x_4a61bf2b-4ef8-4a08-9b00-1c51fdd03da7",
                value:
                  "https://cdn.shopify.com/s/files/1/0629/7318/2186/files/slider03_3000x_4a61bf2b-4ef8-4a08-9b00-1c51fdd03da7.jpg?v=1647937167",
                thumbnail:
                  "https://cdn.shopify.com/s/files/1/0629/7318/2186/files/slider03_3000x_4a61bf2b-4ef8-4a08-9b00-1c51fdd03da7.jpg?v=1647937167",
                alt: "slider03_3000x_4a61bf2b-4ef8-4a08-9b00-1c51fdd03da7",
              },
              hasElementRequestLiquid: !1,
              id: "ecom-3vjv4dz7u4j",
            },
          ],
        },
        isLive: !0,
      });
    });
  })(),
  (function () {
    const e = function () {
      "use strict";
      var e, t, o;
      (window.__ectimmers = window.__ectimmers || {}),
        (window.__ectimmers["ecom-g06ml3cw4ps"] =
          window.__ectimmers["ecom-g06ml3cw4ps"] || {});
      let i = this.$el;
      if (!i) return;
      let n = !0,
        c = i.querySelectorAll(".ecom-collection__product-variants"),
        s = this.isLive,
        l = null != (e = this.settings.show_featured_media) && e,
        r = null != (t = this.settings.bage_sale) ? t : "",
        a = null != (o = this.settings.enable_progress_pagination) && o,
        d = "bullets";
      const m = this.settings.slider_center,
        u = this.settings.slider_center__tablet,
        p = this.settings.slider_center__mobile;
      "progress" === this.settings.slider_pagination_style &&
        (d = "progressbar");
      const f = this.settings.sale_badge_type;
      let _ = this.settings.slider_speed,
        h = this.settings.slider_speed__tablet,
        w = this.settings.slider_speed__mobile;
      const g = function (e, t = {}, o = "") {
        return (
          window.innerWidth > 1024 && e[0] && (t["" + o] = e[0]),
          window.innerWidth <= 1024 && window.innerWidth > 768 && e[1]
            ? (t["" + o] = e[1])
            : e[0] && (t["" + o] = e[0]),
          window.innerWidth < 768 && e[2]
            ? (t["" + o] = e[2])
            : e[1]
            ? (t["" + o] = e[1])
            : e[0] && (t["" + o] = e[0]),
          t
        );
      };
      let y = i.querySelectorAll(".ecom-collection__product-item");
      function v(e = !1, t) {
        const o = i.querySelector(".ecom-paginate__progress-bar--outner"),
          n = i.querySelector(".ecom-paginate__progress-bar--inner"),
          c = i.querySelector(".ecom-paginate__progress-text");
        if (!(a && s && o && n && c)) return;
        let { total: l, initProduct: r } = o && o.dataset,
          d = c && c.dataset.text,
          m = 0,
          u = 1,
          p = 0,
          f = 0;
        (r = parseInt(r)),
          e
            ? ((u = 1), (p = r * t))
            : (window.location.href.match(/page=\d*/gm) &&
                ((m = new URL(window.location.href).searchParams.get("page")),
                (u = 1 === m ? 1 : r * (m - 1) + 1)),
              (p = u + r - 1)),
          p > l && (p = l),
          (f = Math.round((p / l) * 100)),
          (n.style.width = f + "%"),
          (d = d.replace("{_start}", u)),
          (d = d.replace("{_end}", p)),
          (d = d.replace("{_total}", l)),
          (c.innerText = d);
      }
      function b(e, t) {
        var o = t.variantIdField.closest(".ecom-collection__product-item");
        let n = o.querySelector(".ecom-collection__product-submit"),
          c = o.querySelector(".ecom-collection__product-quantity-input"),
          a = o.querySelector(".ecom-collection__product-price"),
          d = o.querySelector(".ecom-collection__product-price--regular"),
          m = o.querySelector(".ecom-unit-price");
        d && d.classList.add("ecom-collection__product--compare-at-price");
        let u = o.querySelector(".ecom-collection__product-price--bage-sale"),
          p = o.querySelector(".ecom-collection__product-badge--sale"),
          _ = o.querySelector(".ecom-collection__product-badge--sold-out"),
          h = o.querySelector(".ecom-collection__product-item-sku-element"),
          w = "";
        if (null === e) {
          let t = o.querySelector('select[name="variant_id"]'),
            i = o.querySelector(".product-json"),
            n = null;
          try {
            n = JSON.parse(i.innerHTML);
          } catch (e) {
            return 1;
          }
          let c = o.querySelector("select#" + t.id + "-option-0");
          if (!c) return;
          const s = c.value;
          s &&
            n.variants.forEach(function (t) {
              t.options.includes(s) && (e = t);
            });
        }
        if (e) {
          if (
            (a && (a.innerHTML = window.EComposer.formatMoney(e.price)),
            d &&
              (d.innerHTML = window.EComposer.formatMoney(e.compare_at_price)),
            m)
          ) {
            e.unit_price
              ? (m.style.display = "block")
              : (m.style.display = "none");
            const t = m.querySelector(".ecom-ground-price_unit-price");
            t && (t.innerHTML = window.EComposer.formatMoney(e.unit_price));
          }
          if (e.compare_at_price > e.price) {
            d && (d.style.display = "inherit");
            let t = "";
            (t = i.querySelector(".ecom-collection__product-main").dataset
              .sale),
              "false" ==
                i.querySelector(".ecom-collection__product-main").dataset
                  .translate && (t = r),
              p &&
                _ &&
                ((p.style.display = "block"), (_.style.display = "none")),
              "amount" === f
                ? ((w = e.compare_at_price - e.price),
                  u &&
                    ((u.style.display = "inherit"),
                    (u.innerHTML = t.replace(
                      /\{{.*\}}/g,
                      window.EComposer.formatMoney(w)
                    ))))
                : ((w =
                    (100 * (e.compare_at_price - e.price)) /
                    e.compare_at_price),
                  u &&
                    ((u.style.display = "inherit"),
                    (u.innerHTML = t.replace(/\{{.*\}}/g, Math.round(w)))));
          } else
            d && (d.style.display = "none"),
              p &&
                _ &&
                ((p.style.display = "none"), (_.style.display = "none")),
              u && ((u.style.display = "none"), (u.innerHTML = ""));
          if (
            (h &&
              (e.sku
                ? ((h.querySelector(
                    ".ecom-collection__product-item-sku"
                  ).innerHTML = e.sku),
                  (h.style.display = "flex"))
                : (h.style.display = "none")),
            e.featured_image)
          ) {
            let t = o.querySelector(".ecom-collection__product-media img");
            if (!l) {
              let o = t.closest("div");
              o.classList.add("ecom-product-image-loading"),
                t.setAttribute("src", e.featured_image.src),
                t.removeAttribute("srcset"),
                t.addEventListener("load", function () {
                  o.classList.remove("ecom-product-image-loading");
                });
            }
          }
          if ((e.options.length, n))
            if (e.available) {
              const t = n.closest(".ecom-collection__product--wrapper-items");
              if (
                (t.dataset.iconAdd &&
                  n.querySelector(".ecom-collection__product-add-cart-icon") &&
                  (n.querySelector(
                    ".ecom-collection__product-add-cart-icon"
                  ).innerHTML = t.dataset.iconAdd),
                !e.inventory_management ||
                  (e.inventory_management && e.inventory_quantity > 0))
              ) {
                if ((n.removeAttribute("disabled"), c)) {
                  let t = c.closest(
                    ".ecom-collection__product-quantity--wrapper"
                  );
                  t && (t.style.display = "flex"),
                    (c.style.display = "flex"),
                    e.inventory_management
                      ? (c.max = e.inventory_quantity)
                      : (c.max = 9999);
                }
                n.classList.add("ecom-collection__product-form__actions--add"),
                  n.classList.remove(
                    "ecom-collection__product-form__actions--soldout"
                  ),
                  n.classList.remove(
                    "ecom-collection__product-form__actions--unavailable"
                  ),
                  (n.querySelector(".ecom-add-to-cart-text").innerHTML =
                    n.getAttribute("data-text-add-cart"));
              } else if (
                "continue" == e.inventory_policy &&
                e.inventory_quantity <= 0
              ) {
                if ((n.removeAttribute("disabled"), c)) {
                  let e = c.closest(
                    ".ecom-collection__product-quantity--wrapper"
                  );
                  e && (e.style.display = "flex"),
                    (c.max = 9999),
                    (c.style.display = "flex");
                }
                n.classList.add("ecom-collection__product-form__actions--add"),
                  n.classList.remove(
                    "ecom-collection__product-form__actions--soldout"
                  ),
                  n.classList.remove(
                    "ecom-collection__product-form__actions--unavailable"
                  ),
                  (n.querySelector(".ecom-add-to-cart-text").innerHTML =
                    n.getAttribute("data-text-pre-order"));
              }
              (n.dataset.childName = "add_to_cart_button"),
                (n.dataset.childTitle = "Add to cart button");
            } else {
              if (
                (p &&
                  _ &&
                  ((p.style.display = "none"), (_.style.display = "block")),
                s && n.setAttribute("disabled", "disabled"),
                c)
              ) {
                let e = c.closest(
                  ".ecom-collection__product-quantity--wrapper"
                );
                e && (e.style.display = "none"), (c.style.display = "none");
              }
              const e = n.closest(".ecom-collection__product--wrapper-items");
              e.dataset.iconSoldout &&
                n.querySelector(".ecom-collection__product-add-cart-icon") &&
                (n.querySelector(
                  ".ecom-collection__product-add-cart-icon"
                ).innerHTML = e.dataset.iconSoldout),
                n.classList.add(
                  "ecom-collection__product-form__actions--soldout"
                ),
                n.classList.remove(
                  "ecom-collection__product-form__actions--add"
                ),
                n.classList.remove(
                  "ecom-collection__product-form__actions--unavailable"
                ),
                (n.querySelector(".ecom-add-to-cart-text").innerHTML =
                  n.getAttribute("data-text-sold-out")),
                (n.dataset.childName = "sold_out_button"),
                (n.dataset.childTitle = "Sold out button");
            }
        } else
          (a.html = window.EComposer.formatMoney(0)),
            d &&
              ((d.innerHTML = window.EComposer.formatMoney(0)),
              (d.style.display = "none")),
            n &&
              (n.setAttribute("disabled", "disabled"),
              n.classList.add(
                "ecom-collection__product-form__actions--unavailable"
              ),
              n.classList.remove("ecom-collection__product-form__actions--add"),
              n.classList.remove(
                "ecom-collection__product-form__actions--soldout"
              ),
              (n.querySelector(".ecom-add-to-cart-text").innerHTML =
                n.getAttribute("data-text-unavailable")));
      }
      function S(e) {
        e.classList.add("ecom-swatch-init");
        let t = e.querySelector(".ecom-collection__product-form");
        if (!t) return;
        let o = t.querySelector('select[name="variant_id"]'),
          i = e.querySelector(".product-json"),
          n = null;
        try {
          n = JSON.parse(i.innerHTML);
        } catch (e) {
          return 1;
        }
        window.EComposer &&
          window.EComposer.OptionSelectors &&
          new window.EComposer.OptionSelectors(o.id, {
            product: n,
            onVariantSelected: b,
            enableHistoryState: !1,
          }),
          e
            .querySelectorAll(".ecom-collection__product-swatch-item")
            .forEach(function (t) {
              t.addEventListener("click", function () {
                l = !1;
                var t = this.closest("li");
                if (t.classList.contains("ecom-product-swatch-item--active"))
                  return !1;
                t.parentNode
                  .querySelectorAll(".ecom-product-swatch-item--active")
                  .forEach(function (e) {
                    e.classList.remove("ecom-product-swatch-item--active");
                  }),
                  t.classList.add("ecom-product-swatch-item--active");
                var i = t.getAttribute("data-option-index"),
                  n = t.getAttribute("data-value");
                let c = e.querySelector("select#" + o.id + "-option-" + i);
                (c.value = n), c.dispatchEvent(new Event("change"));
              });
            }),
          e
            .querySelectorAll("select.ecom-collection__product-swatch-select")
            .forEach(function (t) {
              t.addEventListener("change", function () {
                var t = this.getAttribute("data-option-index"),
                  i = this.value;
                e.querySelectorAll("select#" + o.id + "-option-" + t).forEach(
                  function (e) {
                    (e.value = i), e.dispatchEvent(new Event("change"));
                  }
                );
              });
            });
      }
      if (
        (y &&
          y.forEach(function (e) {
            let t = e.querySelector(".ecom-collection__product-quantity-input"),
              o = e.querySelector(".ecom-collection__quantity-controls-plus"),
              i = e.querySelector(".ecom-collection__quantity-controls-minus");
            i &&
              i.addEventListener("click", function () {
                t.stepDown(), t.dispatchEvent(new Event("change"));
              }),
              o &&
                o.addEventListener("click", function () {
                  t.stepUp(), t.dispatchEvent(new Event("change"));
                }),
              t &&
                t.addEventListener("change", function (t) {
                  let o = e.querySelector("a.ecom-collection__product-submit");
                  if (
                    (t.target.value > parseInt(t.target.max) &&
                      (t.target.value = parseInt(t.target.max)),
                    o)
                  ) {
                    let e = o.getAttribute("href");
                    o.setAttribute(
                      "href",
                      e.replace(
                        /quantity=(\d*)/gm,
                        "quantity=" + t.target.value
                      )
                    );
                  }
                });
          }),
        v(!1, 1),
        "slider" === this.settings.layout)
      ) {
        let e = this.$el,
          t = e.querySelector(".ecom-swiper-container"),
          o = t && t.dataset.optionSwiper;
        if (!o) return;
        (o = JSON.parse(o)),
          (o.pagination = {
            el: e.querySelector(".ecom-swiper-pagination"),
            type: d,
            clickable: !0,
          }),
          (o.navigation = {
            nextEl: e.querySelector(".ecom-swiper-button-next"),
            prevEl: e.querySelector(".ecom-swiper-button-prev"),
          }),
          (o.autoHeight = !1),
          (o.on = {
            init: function () {
              this.el.classList.add("ecom-swiper-initialized");
            },
          });
        let i = [_, h, w];
        if (s) {
          (o = g(i, o, "speed")), (o = g([m, u, p], o, "centeredSlides"));
          const e = new window.EComSwiper(t, o);
          o.autoplay.enabled &&
            (e.on("touchStart", function (e, t) {
              (e.params.speed = 300), e.autoplay.stop();
            }),
            e.on("touchEnd", function (e, t) {
              window.innerWidth > 1024 && _ && (e.params.speed = _),
                window.innerWidth <= 1024 && window.innerWidth > 768 && h
                  ? (e.params.speed = h)
                  : _ && (e.params.speed = _),
                window.innerWidth < 768 && w
                  ? (e.params.speed = w)
                  : h
                  ? (e.params.speed = h)
                  : _ && (e.params.speed = _),
                e.autoplay.start();
            }));
        } else
          setTimeout(function () {
            (o = g(i, o, "speed")),
              (o = g([m, u, p], o, "centeredSlides")),
              new window.EComSwiper(t, o);
          }, 200);
      }
      c.forEach(S);
      const q = function (e) {
        e
          .querySelectorAll(
            ".ecom-collection__product-form__actions--quickshop"
          )
          .forEach(function (e) {
            e.addEventListener("click", function (e) {
              this.style.display = "none";
              let t = this.closest(".ecom-collection__product-item");
              t
                .querySelectorAll(".ecom-collection__product-variants")
                .forEach(function (e) {
                  e.classList.add("ecom-active");
                }),
                t
                  .querySelectorAll(
                    ".ecom-collection__product-quick-shop-wrapper"
                  )
                  .forEach(function (e) {
                    e.style.display = "inherit";
                  });
            });
          }),
          e
            .querySelectorAll(".ecom-collection__product-close")
            .forEach(function (e) {
              e.addEventListener("click", function (e) {
                let t = this.closest(".ecom-collection__product-item");
                t
                  .querySelectorAll(".ecom-collection__product-variants")
                  .forEach(function (e) {
                    e.classList.remove("ecom-active");
                  }),
                  t
                    .querySelectorAll(
                      ".ecom-collection__product-quick-shop-wrapper"
                    )
                    .forEach(function (e) {
                      e.style.display = "none";
                    }),
                  t
                    .querySelectorAll(
                      ".ecom-collection__product-form__actions--quickshop"
                    )
                    .forEach(function (e) {
                      e.style.display = "inherit";
                    });
              });
            });
      };
      q(i);
      const E = i.querySelector(".ecom-collection__product-main");
      let L = E.dataset,
        x = E.dataset.countdownShows;
      const k = /\[([^\]]+)\]/gm;
      var A = "";
      if (x.indexOf("week") >= 0 && L.week) {
        let e = "",
          t = L.week.replace(k, (...t) => ((e = t[1]), ""));
        A += `\n                            <div class="ecom-collection__product-time--item ecom-d-flex ecom-collection__product-time--week">\n                                <span class="ecom-collection__product-time--number">\n                                    ${e}\n                                </span>\n                                <span class="ecom-collection__product-time--label">\n                                    ${t}\n                                </span>\n                            </div>`;
      }
      if (x.indexOf("day") >= 0 && L.day) {
        let e = "",
          t = L.day.replace(k, (...t) => ((e = t[1]), ""));
        A += `<div class="ecom-collection__product-time--item ecom-d-flex ecom-collection__product-time--day">\n                                    <span class="ecom-collection__product-time--number">\n                                        ${e}\n                                    </span>\n                                    <span class="ecom-collection__product-time--label">\n                                        ${t}\n                                    </span>\n                                </div> `;
      }
      if (x.indexOf("hour") >= 0 && L.hour) {
        let e = "",
          t = L.hour.replace(k, (...t) => ((e = t[1]), ""));
        A += `\n                            <div class="ecom-collection__product-time--item ecom-d-flex ecom-collection__product-time--hour">\n                                <span class="ecom-collection__product-time--number">\n                                    ${e}\n                                </span>\n                                <span class="ecom-collection__product-time--label">\n                                    ${t}\n                                </span>\n                            </div>\n                        `;
      }
      if (x.indexOf("minute") >= 0 && L.minute) {
        let e = "",
          t = L.minute.replace(k, (...t) => ((e = t[1]), ""));
        A += `<div class="ecom-collection__product-time--item ecom-d-flex ecom-collection__product-time--minute">\n                                    <span class="ecom-collection__product-time--number">\n                                        ${e}\n                                    </span>\n                                    <span class="ecom-collection__product-time--label">\n                                        ${t}\n                                    </span>\n                                </div>\n                            `;
      }
      if (x.indexOf("second") >= 0 && L.second) {
        let e = "",
          t = L.second.replace(k, (...t) => ((e = t[1]), ""));
        A += `<div class="ecom-collection__product-time--item ecom-d-flex ecom-collection__product-time--second">\n                                    <span class="ecom-collection__product-time--number">\n                                        ${e}\n                                    </span>\n                                    <span class="ecom-collection__product-time--label">\n                                        ${t}\n                                    </span>\n                                </div>`;
      }
      function C(e) {
        let t = this.closest(".ecom-collection__product-countdown-wrapper"),
          o = t.querySelector(
            ".ecom-collection__product-countdown-progress-bar"
          ),
          i = t.querySelector(
            ".ecom-collection__product-countdown-progress-bar--timer"
          ),
          n = this.getAttribute("data-ecom-countdown-from") || 0;
        if (((this.innerHTML = e.strftime(A)), o && n)) {
          let t = new Date().getTime(),
            c = new Date(n).getTime(),
            s = e.finalDate.getTime();
          if (c < t && s > c) {
            o.style.removeProperty("display");
            let e = s - c,
              n = s - t,
              l = Math.round((100 * n) / e) + "%";
            i.style.width = l;
          } else o.style.display = "none";
        }
      }
      function T(e) {
        if (e.dataset.ecomCountdown) {
          if (
            e.dataset.ecomCountdownFrom &&
            new Date().getTime() >
              new Date(e.dataset.ecomCountdown).getTime() &&
            s
          )
            return (
              (e.closest(
                ".ecom-collection__product-countdown-wrapper"
              ).style.display = "none"),
              !1
            );
          window.EComCountdown &&
            window.EComCountdown(e, new Date(e.dataset.ecomCountdown), C),
            e.addEventListener("stoped.ecom.countdown", () => {
              e.closest(
                ".ecom-collection__product-countdown-wrapper"
              ).style.display = "none";
            });
        }
      }
      if (
        (i
          .querySelectorAll(".ecom-collection__product-countdown-time")
          .forEach(function (e) {
            T(e);
          }),
        s)
      ) {
        const e = i.querySelector(".ecom-collection__product-main");
        let t = 1;
        const o = function (e) {
            e.preventDefault();
            const o = this.dataset.get,
              n = this.closest(".ecom-sections[data-section-id]"),
              c = i.closest(".ecom-row.ecom-section");
            if (!o || !n || !n.dataset.sectionId) return;
            const l = `${o}&section_id=${n.dataset.sectionId}`;
            t++,
              v(!0, t),
              this.classList.add("ecom-loading"),
              s(l, n, this, "loadmore", c);
          },
          c = function (e) {
            var t, o;
            (t = e),
              (o = {}),
              new IntersectionObserver((e, c) => {
                e.forEach((e) => {
                  e.isIntersecting &&
                    (o.cb
                      ? o.cb(t)
                      : (function (e) {
                          const t = e.dataset.get,
                            o = e.closest(".ecom-sections[data-section-id]"),
                            c = e.closest(".ecom-row.ecom-section");
                          if (!t || !o || !o.dataset.sectionId) return;
                          const l = o.dataset.sectionId,
                            r = `${t}&section_id=${l}`;
                          n &&
                            (i.classList.add("ecom-doing-scroll"),
                            s(r, o, e, "infinite", c));
                        })(e.target),
                    c.unobserve(e.target));
                });
              }, o).observe(t);
          },
          s = function (t, o, s, l, r) {
            (n = !1),
              (async function (e) {
                return (
                  await fetch(e, {
                    method: "GET",
                    cache: "no-cache",
                    headers: { "Content-Type": "text/html" },
                  })
                ).text();
              })(t)
                .then(function (t) {
                  const o = document.createElement("div");
                  o.innerHTML = t;
                  const i = o.querySelector(
                    ".ecom-collection__product-main.ecom-collection_product_template_collection .ecom-collection__product--wrapper-items"
                  );
                  if (!i) return;
                  const n = r.querySelector(
                      ".ecom-collection__product--wrapper-items"
                    ),
                    a = r.querySelector(".ecom-products-pagination-loadmore");
                  for (; i.firstChild; ) n.appendChild(i.firstChild);
                  if ((i.parentNode.removeChild(i), "loadmore" === l)) {
                    const e = o.querySelector(
                      ".ecom-products-pagination-loadmore"
                    );
                    e ? (a.innerHTML = e.innerHTML) : a.remove();
                  } else {
                    s.remove();
                    const e = o.querySelector(
                      ".ecom-products-pagination-infinite"
                    );
                    e && (n.after(e), c(e));
                  }
                  e.dispatchEvent(
                    new CustomEvent("ecom-products-init", {
                      detail: { wrapper: e },
                    })
                  );
                })
                .finally(function () {
                  window.EComposer && window.EComposer.initQuickview(),
                    (n = !0),
                    i.classList.remove("ecom-doing-scroll"),
                    s.classList.remove("ecom-loading");
                });
          };
        if (e && e.dataset.pagination) {
          const t = e.dataset.pagination;
          if ("loadmore" === t)
            i.querySelector(".ecom-products-pagination-loadmore-btn") &&
              i
                .querySelector(".ecom-products-pagination-loadmore-btn")
                .addEventListener("click", o);
          else if ("infinit" === t) {
            const e = i.querySelector(".ecom-products-pagination-infinite");
            if (!e) return;
            c(e);
          }
        }
        e.addEventListener("ecom-products-init", function (t) {
          const n = t.detail.wrapper;
          if (!n) return;
          if (e && e.dataset.pagination) {
            const t = e.dataset.pagination;
            if ("loadmore" === t)
              i.querySelector(".ecom-products-pagination-loadmore-btn") &&
                i
                  .querySelector(".ecom-products-pagination-loadmore-btn")
                  .addEventListener("click", o);
            else if ("infinit" === t) {
              const e = i.querySelector(".ecom-products-pagination-infinite");
              e && c(e);
            }
          }
          n.querySelectorAll(
            ".ecom-collection__product-variants:not(.ecom-swatch-init)"
          ).length &&
            n
              .querySelectorAll(
                ".ecom-collection__product-variants:not(.ecom-swatch-init)"
              )
              .forEach(S),
            n.querySelectorAll(".ecom-collection__product-countdown-time")
              .length &&
              n
                .querySelectorAll(".ecom-collection__product-countdown-time")
                .forEach(function (e) {
                  T(e);
                }),
            q(n),
            n.querySelector(".ecom-products-pagination-loadmore-btn") &&
              n
                .querySelector(".ecom-products-pagination-loadmore-btn")
                .addEventListener("click", o),
            window.EComposer &&
              "function" == typeof window.EComposer.init &&
              window.EComposer.init(),
            j(n);
          M(n.querySelector(".ecom-collection__product--wishlist-wrapper"));
        });
      }
      function j(e) {
        if (e && e.dataset.reviewPlatform)
          switch (e.dataset.reviewPlatform) {
            case "product-reviews":
              if (window.SPR)
                try {
                  (window.SPR.$ = window.jQuery),
                    window.SPR.initDomEls(),
                    window.SPR.loadBadges();
                } catch (e) {
                  console.info(e.message);
                }
              break;
            case "judgeme":
              if (window.jdgm) {
                try {
                  window.jdgm.batchRenderBadges();
                } catch (e) {
                  console.info(e.message);
                }
                i.querySelectorAll('[data-average-rating="0.00"]').forEach(
                  function (e) {
                    e.style.display = "block !important";
                  }
                );
              }
              break;
            case "product-reviews-addon":
              window.StampedFn && window.StampedFn.loadBadges();
              break;
            case "lai-reviews":
              void 0 !== window.SMARTIFYAPPS &&
                window.SMARTIFYAPPS.rv.installed &&
                window.SMARTIFYAPPS.rv.scmReviewsRate.actionCreateReviews();
          }
      }
      function M(e) {
        if (e)
          switch (e.dataset.wishlistApp) {
            case "swym-relay":
              window._swat &&
                window._swat.initializeActionButtons(
                  ".ecom-collection__product-wishlist-button"
                );
              break;
            case "wishlist-hero":
              i.querySelectorAll(".wishlist-hero-custom-button").forEach(
                function (e) {
                  var t = new CustomEvent(
                    "wishlist-hero-add-to-custom-element",
                    { detail: e }
                  );
                  document.dispatchEvent(t);
                }
              );
          }
      }
      if (!s) {
        j(i.querySelector(".ecom-collection__product-main"));
        M(i.querySelector(".ecom-collection__product--wishlist-wrapper"));
      }
      this.settings.enable_preload &&
        i
          .querySelectorAll(".ecom-collection__product-item")
          .forEach(function (e) {
            e.addEventListener(
              "mouseenter",
              function () {
                let e = document.createElement("link");
                (e.rel = "prefetch"), document.head.appendChild(e);
                var t = this.querySelector(
                  "a.ecom-collection__product-item-information-title"
                ).getAttribute("href");
                e.href = t;
              },
              { once: !0 }
            );
          });
      this.settings.show_compare &&
        !s &&
        i.querySelectorAll(".ecom-product__compare-link").forEach(function (e) {
          e.addEventListener("click", function () {
            this.classList.contains("ecom-product__compare-link-added")
              ? this.classList.remove(
                  "ecom-product__compare-link-added",
                  "ecom-button-active"
                )
              : this.classList.add(
                  "ecom-product__compare-link-added",
                  "ecom-button-active"
                );
          });
        });
      this.settings.show_wishlist &&
        !s &&
        i
          .querySelectorAll(".ecom-product__wishlist-link")
          .forEach(function (e) {
            e.addEventListener("click", function () {
              this.classList.contains("ecom-product__wishlist-link-added")
                ? this.classList.remove(
                    "ecom-product__wishlist-link-added",
                    "ecom-button-active"
                  )
                : this.classList.add(
                    "ecom-product__wishlist-link-added",
                    "ecom-button-active"
                  );
            });
          });
    };
    document.querySelectorAll(".ecom-g06ml3cw4ps").forEach(function (t) {
      e.call({
        $el: t,
        id: "ecom-g06ml3cw4ps",
        settings: {
          show_featured_media: !1,
          bage_sale: "Save {{sale}}",
          sale_badge_type: "amount",
          slider_speed: 200,
          layout: "slider",
          enable_preload: !1,
          show_compare: !1,
          show_wishlist: !1,
        },
        isLive: !0,
      });
    });
  })(),
  (function () {
    const e = function () {
      "use strict";
      var e, t, o, i;
      if (
        ((window.__ectimmers = window.__ectimmers || {}),
        (window.__ectimmers["ecom-vpvij0d53gg"] =
          window.__ectimmers["ecom-vpvij0d53gg"] || {}),
        !this.$el)
      )
        return !1;
      const n = this,
        c = this.$el,
        s = this.isLive,
        l =
          (this.settings.position_zoom && this.settings.position_zoom,
          {
            width: this.settings.zoom_width,
            height: this.settings.zoom_height,
          }),
        r = c.closest(".ecom-product-form--single");
      window.innerWidth,
        window.innerWidth,
        c.closest(".ecom-row"),
        window.matchMedia("only screen and (max-width: 768px)");
      const a =
          !!this.settings.show_thumbnails && this.settings.show_thumbnails,
        d = this.settings.layout ? this.settings.layout : "slider",
        m = !!this.settings.enable_zoom && this.settings.enable_zoom;
      var u,
        p,
        f = this.settings.thumbnail_position,
        _ = this.settings.thumbnail_position__tablet,
        h = this.settings.thumbnail_position__mobile,
        w = !!this.settings.show_pagination,
        g = null != (e = this.settings.enable_gallery) && e,
        y = null != (t = this.settings.gallery_name) && t,
        v = null != (o = this.settings.centeredSlides) && o,
        b = null != (i = this.settings.slide_loop) && i,
        S = this.settings.disable_auto_height;
      function q() {
        if ("slider" === d)
          try {
            if (a) {
              const e = n.$el.querySelector(
                ".ecom-product-single__media--thumbs"
              );
              let t = JSON.parse(e.dataset.breakpoints);
              Object.keys(t).forEach((e) => {
                t[e].__screen_name;
                t[e].direction = ["row", "row-reverse"].includes(
                  t[e].thumbnail_position
                )
                  ? "vertical"
                  : "horizontal";
              }),
                e.hasChildNodes() &&
                  (u = new window.EComSwiper(e, {
                    freeMode: !1,
                    centeredSlides: !1,
                    loop: !1,
                    centeredSlidesBounds: !0,
                    slideToClickedSlide: !0,
                    autoHeight: !!(
                      (["row", "row-reverse"].includes(f) &&
                        window.screen.width > 1024) ||
                      (["row", "row-reverse"].includes(_) &&
                        (window.screen.width >= 768 ||
                          window.screen.width <= 1024)) ||
                      (["row", "row-reverse"].includes(h) &&
                        window.screen.width < 768)
                    ),
                    navigation: {
                      nextEl: n.$el.querySelector(
                        ".ecom-product-single__media--thumbs .ecom-swiper-button-next"
                      ),
                      prevEl: n.$el.querySelector(
                        ".ecom-product-single__media--thumbs .ecom-swiper-button-prev"
                      ),
                    },
                    allowTouchMove: s,
                    watchSlidesProgress: !0,
                    grabCursor: !0,
                    centerInsufficientSlides: !1,
                    breakpoints: t,
                    direction: ["row", "row-reverse"].includes(f)
                      ? "vertical"
                      : "horizontal",
                    on: {
                      slideChangeTransitionEnd: function () {},
                      breakpoint: function () {
                        setTimeout(
                          () =>
                            window.dispatchEvent(new window.Event("resize")),
                          500
                        );
                      },
                      init: function () {
                        setTimeout(() => {
                          this.el &&
                            this.el.classList.remove(
                              "ecom-product-single__init-thumb-hidden"
                            );
                        }, 50);
                      },
                    },
                  }));
              let o = null;
              e.querySelectorAll("img").forEach(function (e) {
                e.addEventListener("load", function () {
                  clearTimeout(o),
                    (o = setTimeout(
                      () => window.dispatchEvent(new window.Event("resize")),
                      500
                    ));
                });
              });
            }
            const t = c.querySelector(".ecom-product-single__media--featured");
            var e = t.dataset.breakpoints;
            (e = e
              ? JSON.parse(e)
              : { 0: { slidesPerView: 1, spaceBetween: 20 } }),
              (p = new window.EComSwiper(t, {
                autoHeight: null == S || S,
                lazy: !0,
                allowTouchMove: s,
                pagination: !!w && {
                  el: t.querySelector(".ecom-swiper-pagination"),
                  dynamicBullets: !0,
                  clickable: !0,
                },
                navigation: {
                  nextEl: c.querySelector(
                    ".ecom-product-single__media--featured .ecom-swiper-button-next"
                  ),
                  prevEl: c.querySelector(
                    ".ecom-product-single__media--featured .ecom-swiper-button-prev"
                  ),
                },
                thumbs: a && u ? { swiper: u } : void 0,
                noSwiping: !0,
                longSwipes: !0,
                loop: b,
                centeredSlides: v,
                touchStartPreventDefault: !0,
                noSwipingSelector: "model-viewer",
                noSwipingClass: "ecom-product-single__media--model",
                grabCursor: !0,
                preloadImages: !0,
                breakpoints: e,
                on: {
                  breakpoint: function () {
                    setTimeout(
                      () => window.dispatchEvent(new window.Event("resize")),
                      500
                    );
                  },
                  slideChange: function (e) {
                    var t, o;
                    if (g) return;
                    e.activeIndex !== e.lastIndex &&
                      (e.lastIndex = e.activeIndex + "");
                    const i = r && r.querySelector('[name="id"]');
                    if (i) {
                      let e = null;
                      if (!p || !p.slides[p.activeIndex]) return;
                      if (
                        ((e =
                          null ==
                          (o =
                            null == (t = p.slides[p.activeIndex])
                              ? void 0
                              : t.dataset)
                            ? void 0
                            : o.variant_id),
                        e)
                      ) {
                        e += "";
                        const t = i.value;
                        (!t || !e.includes(t.toString())) &&
                          ((i.value = e.split(",")[0]),
                          i.dispatchEvent(new Event("swatch")));
                      }
                    }
                    e.slides[e.activeIndex] && m && E(e.slides[e.activeIndex]);
                  },
                  slideChangeTransitionEnd: function (e) {
                    var t, o;
                    window.dispatchEvent(new window.Event("resize")),
                      e.slides.forEach((e) => {
                        if (e.classList.contains("ecom-swiper-slide-active")) {
                          let t = e.querySelector("video");
                          t && t.hasAttribute("autoplay") && t.play();
                        } else {
                          let t = e.querySelector("iframe,video");
                          t &&
                            ("IFRAME" === t.nodeName
                              ? (t.src = t.src)
                              : t.pause());
                        }
                      }),
                      s &&
                        (a && u && u.update(),
                        (e.allowTouchMove = !(
                          null !=
                            (o =
                              null == (t = e.slides[p.activeIndex])
                                ? void 0
                                : t.classList) &&
                          o.contains("ecom-swiper-no-swiping")
                        )));
                  },
                  init: function (e) {
                    e.slides[e.activeIndex] && m && E(e.slides[e.activeIndex]);
                  },
                },
              }));
            let o = null;
            t.querySelectorAll("img").forEach(function (e) {
              e.addEventListener("load", function () {
                clearTimeout(o),
                  (o = setTimeout(
                    () => window.dispatchEvent(new window.Event("resize")),
                    500
                  ));
              });
            }),
              s ||
                setTimeout(() => {
                  t.classList.remove("ecom-before-init");
                }, 200);
          } catch (e) {
            console.info(e.message);
          }
      }
      if (
        (q(),
        g &&
          (async function () {
            const e = c.querySelectorAll(
                ".ecom-product-single__media--image img"
              ),
              t =
                c &&
                c.querySelector(
                  ".ecom-product-single__media--featured .ecom-product-single__media--images-layout__slider"
                ),
              o = t && t.querySelectorAll(".ecom-product-single__media--image"),
              i = c && c.querySelector(".ecom-product-single__media--featured"),
              l = c && c.querySelector(".ecom-product-single__media--thumbs"),
              a =
                c &&
                c.querySelector(
                  ".ecom-product-single__media--slider .ecom-product-single__media--thumbs .ecom-swiper-wrapper"
                ),
              d =
                l &&
                l.querySelectorAll(".ecom-product-single__media--thumbnail"),
              p =
                c &&
                c.querySelector(
                  ".ecom-product-single__media--grid .ecom-product-single__media--images-layout__grid"
                ),
              f = p && p.querySelectorAll(".ecom-product-single__media--image");
            let _ = !0;
            if (
              (e &&
                e.forEach(function (e, t) {
                  e.alt.includes("ecomposer-") && (_ = !1);
                }),
              _)
            )
              return;
            let h = null,
              w =
                r && r.querySelector(".ecom-product-single-select-id[name=id]");
            if (!w) return;
            const v = r && r.querySelector("#" + w.dataset.jsonProduct);
            if (!v) return;
            try {
              h = JSON.parse(v.innerHTML);
            } catch (e) {
              return;
            }
            let b = null;
            if (s && window.Shopify && "/" != window.Shopify.routes.root) {
              let e =
                window.location.origin + "/products/" + h.handle + ".json";
              (b = await (async function (e) {
                return await (
                  await window.fetch(e, {
                    method: "GET",
                    headers: {
                      Accept: "application/json",
                      "Content-Type": "application/json",
                    },
                  })
                )
                  .json()
                  .then((e) => e.product);
              })(e)),
                (h.options_with_values = b.options),
                (h.variants = b.variants);
            }
            let S = { detail: { variant: null } };
            S.detail.variant = h.variants.find(function (e) {
              if (e.id == w.value) return e;
            });
            let L = c.querySelector("#ecom-single-product-default-variant"),
              x = L && L.innerText,
              k = L.dataset.dontSetAlt;
            function A(e) {
              if (
                e.detail.variant &&
                (e.target &&
                  e.target.querySelector(
                    ".ecom-product-single__variant-picker-container"
                  ),
                g && y)
              ) {
                let _ = function (e) {
                    let t = e.options_with_values,
                      o = [];
                    y.includes(",")
                      ? y.split(",").forEach((e, i) => {
                          t &&
                            t.forEach(function (t) {
                              t.name.trim().toLowerCase() ===
                                e.trim().toLowerCase() &&
                                (o = o.concat({
                                  key: t.name.trim(),
                                  value: t.values,
                                }));
                            });
                        })
                      : t &&
                        t.forEach(function (e) {
                          e.name.trim().toLowerCase() !== y.toLowerCase() ||
                            (o = o.concat({
                              key: e.name.trim(),
                              value: e.values,
                            }));
                        });
                    let i = [];
                    return (
                      o &&
                        o.forEach(function (e, t) {
                          e.value.forEach((t) => {
                            k.option1 == t &&
                              i.push(
                                `ecomposer-${e.key.toLowerCase()}-${k.option1
                                  .replaceAll(" ", "-")
                                  .toLowerCase()}`
                              ),
                              k.option2 == t &&
                                i.push(
                                  `ecomposer-${e.key.toLowerCase()}-${k.option2
                                    .replaceAll(" ", "-")
                                    .toLowerCase()}`
                                ),
                              k.option3 == t &&
                                i.push(
                                  `ecomposer-${e.key.toLowerCase()}-${k.option3
                                    .replaceAll(" ", "-")
                                    .toLowerCase()}`
                                );
                          });
                        }),
                      i
                    );
                  },
                  w = function (e, t, o, i, c) {
                    if (i && t && h && o.length) {
                      (t.innerHTML = ""),
                        o.forEach(function (e) {
                          let o = e.querySelector("img").alt;
                          if (o.includes(",")) {
                            (o = o.split(",")),
                              (o = o.map(function (e) {
                                return e.trim().toLowerCase();
                              }));
                            let i = _(h).filter((e) => -1 !== o.indexOf(e));
                            (v(i, o) || (b(i, o) && i.length === S(o))) &&
                              (e
                                .querySelector("img")
                                .removeAttribute("loading"),
                              t.appendChild(e));
                          } else _(h).includes(o.toLowerCase()) && (e.querySelector("img").removeAttribute("loading"), t.appendChild(e));
                        }),
                        (t.style = c),
                        e.prepend(t);
                      const i = n.$el.querySelector(
                        ".ecom-product-single__media--thumbs"
                      );
                      u &&
                        (u.destroy(),
                        i.classList.add(
                          "ecom-product-single__init-thumb-hidden"
                        )),
                        q();
                    }
                  },
                  v = function (e, t) {
                    return e.sort().join() === t.sort().join();
                  },
                  b = function (e, t) {
                    return e.every((e) => t.includes(e));
                  },
                  S = function (e) {
                    const t = new Set();
                    let o = 0;
                    for (const i of e) {
                      const e = i.indexOf("-", i.indexOf("-") + 1),
                        n = i.substring(10, e);
                      t.has(n) || (t.add(n), o++);
                    }
                    return o;
                  },
                  L = function (e) {
                    const t =
                      r &&
                      r.querySelector(
                        ".ecom-product-single__media--grid_default"
                      );
                    if (!t || !e || !h) return;
                    let o =
                      t &&
                      t.querySelectorAll(".ecom-product-single__media--image");
                    o.length &&
                      (y && g
                        ? o.forEach(function (e) {
                            e.style.display = "none";
                            let t = e.querySelector("img").alt;
                            if (t.includes(",")) {
                              (t = t.split(",")),
                                (t = t.map(function (e) {
                                  return e.trim().toLowerCase();
                                }));
                              let o = _(h).filter((e) => -1 !== t.indexOf(e));
                              (v(o, t) || (b(o, t) && o.length === S(t))) &&
                                (e.style.display = "block");
                            } else _(h).includes(t.toLowerCase()) && (e.style.display = "block");
                          })
                        : o.forEach(function (e) {
                            e.style.display = "flex";
                          }));
                  },
                  x = function (e) {
                    if (e && p && h) {
                      p.innerHTML = "";
                      let e = [];
                      f.forEach(function (t, o) {
                        let i = t.querySelector("img").alt;
                        if (i.includes(",")) {
                          (i = i.split(",")),
                            (i = i.map(function (e) {
                              return e.trim().toLowerCase();
                            }));
                          let o = _(h).filter((e) => -1 !== i.indexOf(e));
                          (v(o, i) || (b(o, i) && o.length === S(i))) &&
                            e.push(t);
                        } else _(h).includes(i.toLowerCase()) && e.push(t);
                      }),
                        e.forEach(function (t, o) {
                          0 == o ||
                          (o >= 5 && o % 5 == 0) ||
                          (o % 5 != 0 &&
                            (o + 1) % 2 == 0 &&
                            o == e.length - 1) ||
                          (1 == o && 2 == e.length)
                            ? (t.style.paddingTop = t.dataset.fullWidth + "%")
                            : (t.style.paddingTop = t.dataset.halfWidth + "%"),
                            p.appendChild(t);
                        });
                    }
                  },
                  k = e.detail.variant;
                s &&
                  window.Shopify &&
                  "/" != window.Shopify.routes.root &&
                  (k = h.variants.find(function (e) {
                    if (e.id == r.querySelector("[name=id]").value) return e;
                  }));
                const A = a && a.style,
                  C = t && t.style;
                if ((w(i, t, o, k, C), w(l, a, d, k, A), L(k), x(k), m)) {
                  let e = c.querySelectorAll(".ecom-image-zoom");
                  if (0 == e.length) return;
                  E(e),
                    s &&
                      e.forEach(function (e) {
                        e.querySelector("a") &&
                          e
                            .querySelector("a")
                            .addEventListener("click", function (e) {
                              e.preventDefault();
                            });
                      });
                }
              }
            }
            (k && "true" == k) ||
              (S &&
                "false" === x &&
                (A(S), r && r.addEventListener("ecomVariantChange", A)));
          })(),
        c
          .querySelectorAll(".ecom-product-single__media--play-control")
          .forEach(function (e) {
            e.addEventListener("click", function (e) {
              (this.style.display = "none"),
                this.parentNode.querySelector("video").play();
            });
          }),
        !this.isLive)
      )
        try {
          n.$el.querySelectorAll("model-viewer").forEach(function (e) {
            const t = element.outerHTML;
            e.replaceWith(t);
          });
        } catch (e) {
          console.info(e.message);
        }
      if (
        document.querySelector("model-viewer") &&
        !document.getElementById("ModelViewerStyle")
      ) {
        let e = document.createElement("link");
        (e.id = "ModelViewerStyle"),
          (e.rel = "stylesheet"),
          (e.href =
            "https://cdn.shopify.com/shopifycloud/model-viewer-ui/assets/v1.0/model-viewer-ui.css"),
          (e.media = "print"),
          (e.onload = function () {
            this.media = "all";
          }),
          document.head.appendChild(e);
      }
      if (
        (window.Shopify &&
          window.Shopify.loadFeatures([
            {
              name: "shopify-xr",
              version: "1.0",
              onLoad: function e() {
                if (window.ShopifyXR) {
                  try {
                    const e = n.$el.querySelector('[id^="Product-model-"]');
                    e &&
                      (window.ShopifyXR.addModels(JSON.parse(e.textContent)),
                      e.remove());
                  } catch (e) {
                    console.log(e.message);
                  }
                  window.ShopifyXR.setupXRElements();
                } else
                  document.addEventListener(
                    "shopify_xr_initialized",
                    function () {
                      e();
                    }
                  );
              },
            },
            {
              name: "model-viewer-ui",
              version: "1.0",
              onLoad: function (e) {
                if (e) return;
                const t = c.querySelectorAll("model-viewer");
                t &&
                  t.forEach((e) => {
                    if (e)
                      try {
                        new window.Shopify.ModelViewerUI(e);
                      } catch (e) {
                        console.warn(e.message);
                      }
                  }),
                  c.querySelectorAll("button").forEach(function (e) {
                    e.setAttribute("type", "button");
                  });
              },
            },
          ]),
        this.settings.image_action &&
          "lightbox" === this.settings.image_action &&
          s)
      ) {
        let e = this.$el.querySelectorAll("[ecom-modal]");
        e.length &&
          window.EComModal &&
          new window.EComModal(e, {
            gallery: !0,
            cssClass: ["ecom-container-lightbox-" + this.id],
          });
      }
      if (
        (this.settings.position_sticky &&
          window.innerWidth > 1024 &&
          c.parentElement &&
          (this.isLive
            ? (c.style.height = "100%")
            : (c.parentElement.style.height = "100%")),
        m)
      ) {
        let e = c.querySelectorAll(".ecom-image-zoom");
        if (0 == e.length) return;
        "slider" !== d && E(e),
          s &&
            e.forEach(function (e) {
              e.querySelector("a") &&
                e.querySelector("a").addEventListener("click", function (e) {
                  e.preventDefault();
                });
            });
      }
      function E(e) {
        if (s && !(window.innerWidth < 768) && window.EcomImgZoom)
          if (e.length > 0)
            for (var t = 0, o = e.length; t < o; t++)
              new window.EcomImgZoom(e[t], l);
          else new window.EcomImgZoom(e, l);
      }
    };
    document.querySelectorAll(".ecom-vpvij0d53gg").forEach(function (t) {
      e.call({
        $el: t,
        id: "ecom-vpvij0d53gg",
        settings: {
          zoom_width: "500px",
          zoom_height: "500px",
          show_thumbnails: !0,
          layout: "slider",
          enable_zoom: !1,
          thumbnail_position: "column",
          thumbnail_position__tablet: "column",
          thumbnail_position__mobile: "column",
          show_pagination: !0,
          slide_loop: !0,
          image_action: "nothing",
        },
        isLive: !0,
      });
    });
  })(),
  window.Shopify && window.Shopify.theme && window.Shopify.theme.id)
) {
  const e = new URL(window.location);
  e.searchParams.set("preview_theme_id", window.Shopify.theme.id),
    window.history.pushState({}, "", e);
}
window.addEventListener("load", () => {
  let e = !1;
  if ((document.querySelector("#admin-bar-iframe") && (e = !0), !e)) {
    if (window.EComposerBrand) return;
    window.EComposerBrand = !0;
  }
  let t = document.querySelector("body"),
    o = document.createElement(
      Math.random().toString(36).replace(/\d*/g, "").substr(2, 4)
    );
  o.setAttribute(
    "style",
    [
      "position:relative",
      "top: 0px",
      "left: 0px",
      "display: inline-block",
      "height: 30px",
      "line-height: 30px",
      "font-size: 11px",
      "width: 100%",
      "text-align: center",
      "opacity: 1",
      "text-indent: 0",
      "color: rgba(18, 18, 18, 0.75)",
      "background: transparent",
      "opacity: 0.8",
      "",
    ].join(" !important;")
  ),
    (o.innerHTML =
      "Built with <a style='color: currentColor;text-decoration: none;' href=\"https://ecomposer.io/?utm_source=client-site&utm_medium=footer&utm_campaign=footer_branding&utm_term=links&utm_content=" +
      window.location.origin +
      '" target="_blank">EComposer</a>' +
      (e ? ". Contact us or upgrade to remove branding" : "")),
    t.appendChild(o);
});
