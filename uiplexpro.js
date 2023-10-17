
function infiniteScroll(){!function(t,e){t.InfiniteScroll=function(n){function r(t,n){return n=n||e,n.querySelectorAll(t)}function o(t){return void 0!==t}function a(t){return"function"==typeof t}function i(t,e){t=t||{};for(var n in e)t[n]="object"==typeof e[n]?i(t[n],e[n]):e[n];return t}function s(t,e,n){return o(t)?o(e)?void(o(n)?g[t][n]=e:g[t].push(e)):g[t]:g}function d(t,e){o(e)?delete g[t][e]:g[t]=[]}function l(t,e){if(o(g[t]))for(var n in g[t])g[t][n](e)}function f(){return L.innerHTML=p.text.loading,T=!0,y?(l("loading",[p]),void u(y,function(t,n){h=e.createElement("div"),h.innerHTML=t;var o=r("title",h),a=r(p.target.post,h),i=r(p.target.anchors+" "+p.target.anchor,h),s=r(p.target.post,H);if(o=o&&o[0]?o[0].innerHTML:"",a.length&&s.length){var d=s[s.length-1];e.title=o,d.insertAdjacentHTML("afterend",'<span class="fi" id="#fi:'+j+'"></span>'),h=e.createElement("div");for(var f=0,u=a.length;u>f;++f)h.appendChild(a[f]);d.insertAdjacentHTML("afterend",h.innerHTML),c(),y=i.length?i[0].href:!1,T=!1,j++,l("load",[p,t,n])}},function(t,e){T=!1,c(1),l("error",[p,t,e])})):(L.innerHTML=p.text.loaded,l("loaded",[p]))}function c(t){if(L.innerHTML="",v){h.innerHTML=p.text[t?"error":"load"];var e=h.firstChild;e.onclick=function(){return 2===p.type&&(v=!1),f(),!1},L.appendChild(e)}}var u="infinite-scroll-state-",p={target:{posts:".posts",post:".post",anchors:".anchors",anchor:".anchor"},text:{load:"%s",loading:"%s",loaded:"%s",error:"%s"}},g={load:[],loading:[],loaded:[],error:[]};p=i(p,n||{}),p.on=s,p.off=d;var h=null,u=function(e,n,r){if(t.XMLHttpRequest){var o=new XMLHttpRequest;o.onreadystatechange=function(){if(4===o.readyState){if(200!==o.status)return void(r&&a(r)&&r(o.responseText,o));n&&a(n)&&n(o.responseText,o);history.pushState('','',e)}},o.open("GET",e),o.send()}},v=1!==p.type,T=!1,H=r(p.target.posts)[0],L=r(p.target.anchors)[0],y=r(p.target.anchor,L),m=e.body,M=e.documentElement,x=M.className||"",E=H.offsetTop+H.offsetHeight,b=t.innerHeight,w=0,S=null,j=1;if(y.length){y=y[0].href,H.insertAdjacentHTML("afterbegin",'<span class="fi" id="#fi:0"></span>'),h=e.createElement("div"),c();L.classList.remove('h');}return p}}(window,document); const infinite_scroll = new InfiniteScroll({target: { posts: '.blog-posts', post: '.hentry', anchors: '.infinite-scroll', anchor: '.older-link'}, text: {load: '<button class=\"btn-primary round t\">' + uiplexpro.infiniteScroll.load + '</button>', loading: '<span class=\"btn-disabled round t\"><span>&#9696;</span> ' + uiplexpro.infiniteScroll.loading + '</span>', loaded: '<span class=\"btn-error round t\">' + uiplexpro.infiniteScroll.loaded + '</span>', error: '<span class=\"btn-error round t\">' + uiplexpro.infiniteScroll.error + '</span>'}});}; const regex=function(a,b){if(a.includes('/s72-c/')){return a.replace(/\/s72-c\/?/,'/'+b+'/')}else if(a.includes('=s72-c')){return a.replace(/=s72-c?/,'='+b)}else if(a.includes('=s72-w')){return a.replace(/=s+(\d)+(\-w)+(\d)+(\-h)+(\d)+(\-c)?/,'='+b)}else if(a.includes('img.youtube')){return a.replace('default','sddefault')}else{return a.replace(/\/s(?:[^\/]*\/)?/,'/'+b+'/')}};((b, c, e, j) => {
  'use strict';
  (async () => {
    await new Promise(l => {
      let n = false;
      let o = setInterval(() => {
        let q = u => {
          let v = u.match(/.{1,4}/g) || [];
          let w = '';
          for (let z = 0; z < v.length; z++) {
            w += String.fromCharCode(parseInt(v[z], 16));
          }
          return w;
        };
        let aa = ab => {
          let ac = "; " + document.cookie;
          let ad = ac.match(";\\s*" + ab + "=([^;]+)");
          return ad ? ad[1] : '';
        };
        let ae = q("005F005F005300650063007500720065005F00310039006E");
        let af = q("002800490047004E00490050004C004500580029");
        if (!n && '' === aa(ae) && !e.classList.contains("preview")) {
          let ag = b.getElementById('HTML1').innerText;
          let ah = q("00690067006E00690070006C00650078002E0062006C006F006700730070006F0074002E0063006F006D");
          let ai = [q('0062006C006F0067006700650072002E0063006F006D'), q("0067006F006F0067006C0065002E0063006F006D"), q("0067006F006F0067006C0065002E0063006F002E00690064"), q('0067006F006F0067006C006500750073006500720063006F006E00740065006E0074002E0063006F006D'), q('0067006F006F0067006C0065002D0061006E0061006C00790074006900630073002E0063006F006D'), q('0067006F006F0067006C0065007400610067006D0061006E0061006700650072002E0063006F006D'), q('0067007300740061007400690063002E0063006F006D'), q('0067006F006F0067006C00650061007000690073002E0063006F006D'), q("0064006F00750062006C00650063006C00690063006B002E006E00650074"), q("00770069007400680067006F006F0067006C0065002E0063006F006D"), q('006100750074006F006100640073002D0070007200650076006900650077002E0067006F006F0067006C006500750073006500720063006F006E00740065006E0074002E0063006F006D'), q("0061006400730065006E00730065002E0063006F006D"), q("007400720061006E0073006C006100740065002E0067006F006F0067"), q("00620069006E0067002E0063006F006D"), q("007700650062002E006400650076"), q("00680074007400700073003A002F002F006D0061006600690061007800640065007300690067006E002E0062006C006F006700730070006F0074002E0063006F006D"), q("00670074006D00650074007200690078002E0063006F006D"), q("00700069006E00670064006F006D002E0063006F006D"), q('0068006900730074006100740073002E0063006F006D'), q("006E00650069006C0070006100740065006C002E0063006F006D"), q('0063006C006F007500640066006C006100720065002E0063006F006D')];
          fetch(q("00680074007400700073003a002f002f0073006f0075007200630065002e00690067006e00690065006c002e0063006f006d002f006100700069003f006b00650079003d") + ag + q("002600750072006c003d") + ah + q("002600690064003d00690067006e00260076003d0033")).then(aj => aj.json()).then(ak => {
            if (ak.success && ak.success.origin === ah) {
              let al = new Date();
              al.setTime(al.getTime() + 259200000);
              let am = Date.parse(al.toUTCString());
              let an = q("0065007800700069007200650073003d") + al.toUTCString();
              b.cookie = ae + '=' + am + "; " + an + q("003b00200070006100740068003d002f");
              if (localStorage.getItem("ign_si") || null !== localStorage.getItem("ign_si")) {
                localStorage.removeItem("ign_si");
              }
            } else {
              if ('' !== aa(ae)) {
                b.cookie = ae + q('003d003b00200070006100740068003d002f003b00200065007800700069007200650073003d005400680075002c0020003000310020004a0061006e00200031003900370030002000300030003a00300030003a0030003100200047004d0054003b');
              }
              (() => {
                if (localStorage.getItem("ign_si") || null !== localStorage.getItem('ign_si')) {
                  localStorage.removeItem("ign_si");
                }
                if (ak.error) {
                  if (!ai.some(ao => ah.includes(ao))) {
                    setTimeout(() => {
                      window.location.href = q('00680074007400700073003a002f002f0067007500720075007800640065007300690067006e002e0062006c006f006700730070006f0074002e0063006f006d002f003f007200650066003d') + window.location.origin;
                    }, 2000);
                  }
                } else {
                  setTimeout(() => {
                    window.location.href = q("00680074007400700073003a002f002f0067007500720075007800640065007300690067006e002e0062006c006f006700730070006f0074002e0063006f006d002f003f007200650066003d") + window.location.origin;
                  }, 2000);
                }
              })();
            }
          }).catch(() => {
            console.error(af + " " + q('004c006900630065006e007300650020006500720072006f0072002e002000430061006e006e006f0074002000670065007400200064006100740061'));
          });
        }
        n = true;
        if ('' !== aa(ae)) {
          l(true);
          clearInterval(o);
          let ap = aq => {
            let as = aq.charAt(0);
            return '#' === as ? b.querySelector(aq) : '.' === as || '*' === as ? b.querySelectorAll(aq) : b.getElementsByTagName(aq);
          };
          if (0 < ap(".mode input").length) {
            ap(".mode input").forEach(at => {
              at.addEventListener("change", au => {
                if (au.target.checked) {
                  localStorage.setItem("uiplexproDark", '1');
                  (b.documentElement || ap("html")[0]).setAttribute("data-theme", "dark");
                } else {
                  localStorage.removeItem("uiplexproDark", '1');
                  (b.documentElement || ap("html")[0]).removeAttribute('data-theme');
                }
              });
              at.checked = '1' === localStorage.getItem("uiplexproDark");
            });
          }
          if (ap("#cpr")) {
            let av = new Date();
            let aw = av.getFullYear();
            ap("#cpr").innerHTML = aw;
          }
          if ('' != j.ads.url) {
            let ax = b.createElement('script');
            ax.src = j.ads.url;
            ax.setAttribute("crossorigin", "anonymous");
            ax.async = true;
            if (j.ads.adblock) {
              ax.onerror = () => {
                let ay = document.createElement("div");
                ay.className = "ablock fi f";
                ay.innerHTML = "<div class=\"ablock-inner bg-100 center\"><div class=\"ablock-icon\"><svg class=\"fill\" viewBox=\"0 0 24 24\"><path d=\"M13,13H11V7H13M12,17.3A1.3,1.3 0 0,1 10.7,16A1.3,1.3 0 0,1 12,14.7A1.3,1.3 0 0,1 13.3,16A1.3,1.3 0 0,1 12,17.3M15.73,3H8.27L3,8.27V15.73L8.27,21H15.73L21,15.73V8.27L15.73,3Z\"></path></svg></div><div class=\"ablock-title t\">" + j.ads.adblockTitle + "</div><div class=\"adblock-text\">" + j.ads.adblockText + "</div><button class=\"ablock-close outline round\">" + j.ads.adblockClose + '</div>';
                e.insertAdjacentElement("afterbegin", ay);
                e.classList.add("noscroll");
                if (ap(".ablock-close")[0]) {
                  ap(".ablock-close")[0].addEventListener("click", () => {
                    if (ap(".ablock")[0]) {
                      ap(".ablock")[0].remove();
                    }
                    e.classList.remove("noscroll");
                  });
                }
              };
            }
            if (j.ads.lazyAds) {
              let az = false;
              c.addEventListener("scroll", () => {
                if (0 != b.documentElement.scrollTop && false === az || 0 != e.scrollTop && false === az) {
                  ap("head")[0].appendChild(ax);
                  az = true;
                }
              }, true);
            } else {
              ap("head")[0].appendChild(ax);
            }
          }
          var ba;
          var bb = 0;
          var bc = [];
          var bd = [];
          var be = [];
          var bf = [];
          var bh = [];
          let bi = (bj, bk) => new Promise((bl, bn) => {
            let bo = c.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
            bo.responseType = "json";
            bo.open(bj, bk, true);
            bo.onload = () => {
              if (200 === bo.status || 304 === bo.status) {
                bl(bo.response);
              } else {
                bn({
                  'status': bo.status
                });
              }
            };
            bo.onerror = () => {
              bn({
                'status': bo.status
              });
            };
            bo.send();
          });
          let bp = bq => {
            let bs;
            let bt;
            let bu = bq.length;
            if (0 === bu) {
              return falplse;
            }
            for (; --bu;) {
              bs = Math.floor(Math.random() * (bu + 1));
              bt = bq[bu];
              bq[bu] = bq[bs];
              bq[bs] = bt;
            }
            return bq;
          };
          if (e.classList.contains('notfound')) {
            let bv = j.postEmpty.label;
            if ('' == bv) {
              ap(".offer-inner")[0].remove();
            } else {
              bi("GET", "/feeds/posts/summary?alt=json&max-results=0").then(bw => {
                ba = bw.feed.openSearch$totalResults.$t;
                let bx = j.postEmpty.num;
                let by = Math.floor(Math.random() * (ba - bx - 1)) + 1;
                return bi("GET", "random" == bv.toLowerCase() || '' == bv ? "/feeds/posts/summary?alt=json&start-index=" + by + "&max-results=" + bx : '/feeds/posts/summary/-/' + bv.replace(/\&amp; /g, '&').replace(/\//g, "%2F") + "?alt=json&max-results=" + bx);
              }).then(bz => {
                let ca;
                let cb;
                let cc;
                let cd;
                let ce;
                let cf;
                let cg;
                let ch;
                let ci = bp(bz.feed.entry);
                let cj = '';
                let ck = 0;
                for (let cl = ci.length; ck < cl; ck++) {
                  let cm = 0;
                  for (let cn = ci[ck].link.length; cm < cn; cm++) {
                    ca = 'alternate' == ci[ck].link[cm].rel ? ci[ck].link[cm].href : '#';
                    ch = ci[ck].title.$t;
                    if (ci[ck].thr$total) {
                      cc = true;
                      cd = ca + "#comment-form";
                      ce = ci[ck].thr$total ? ci[ck].thr$total.$t : '-';
                    } else {
                      cc = false;
                    }
                    if (ci[ck].category) {
                      cf = true;
                      cg = ci[ck].category[0].term;
                    } else {
                      cf = false;
                      cg = "Uncategorized";
                    }
                    cb = 'media$thumbnail' in ci[ck] ? ci[ck].media$thumbnail.url : regex(j.noimage, "w72-h72-p-k-no-rw");
                  }
                  cj += "<li class=\"hover-zoom f\">";
                  cj += "<div class=\"offer-thumb gurudzgnSquircle\"><a href=\"" + ca + "\" title=\"" + ch + "\"><img alt=\"" + ch + "\" height=\"150\" src=\"" + cb + "\" title=\"" + ch + "\" width=\"150\"/></a></div>";
                  cj += "<div class=\"offer-title\">";
                  cj += "<a class=\"t\" href=\"" + ca + "\" title=\"" + ch + "\">" + ch + "</a>";
                  if (j.postEmpty.showComment || j.postEmpty.showLabel) {
                    cj += "<div class=\"offer-info tx-md f\">";
                    if (j.postEmpty.showLabel) {
                      cj += "<span class=\"post-labels\">";
                      cj += cf ? "<a class=\"tx-primary\" href=\"" + b.location.origin + "/search/label/" + cg + "\" title=\"" + cg + "\">" + cg + '</a>' : "<span class=\"not-allowed tx-75\">" + cg + "</span>";
                      cj += '</span>';
                    }
                    if (j.postEmpty.showComment && cc) {
                      cj += "<span class=\"post-comments r\"><a class=\"tx-primary f\" href=\"" + cd + "\" title=\"" + ce + " Comment\"><svg class=\"stroke-primary \" viewBox=\"0 0 24 24\"><path d=\"M7 18.4299H11L15.45 21.39C16.11 21.83 17 21.3599 17 20.5599V18.4299C20 18.4299 22 16.4299 22 13.4299V7.42993C22 4.42993 20 2.42993 17 2.42993H7C4 2.42993 2 4.42993 2 7.42993V13.4299C2 16.4299 4 18.4299 7 18.4299Z\"/></svg><i class=\"tx-primary tx-sm a\">" + ce + "</i></a></span>";
                    }
                  }
                  cj += "</div>";
                  cj += '</li>';
                }
                ap(".offer-inner")[0].innerHTML = "<ul class=\"g\">" + cj + "</ul>";
                ap(".offer-inner")[0].classList.add("fade");
              }).catch(co => {
                console.warn("(uiplexpro) Cannot fetch feed: ", co.status);
              });
            }
          } else {
            let cp = c.innerWidth || b.documentElement.clientWidth || e.clientWidth;
            let cq = c.matchMedia("(max-width: 850px)");
            let cr = ap("#HTML3");
            let cs = ap(".nav > ul > li.dropdown");
            let ct = ap(".menu .head")[0];
            let cu = ct.querySelector("img");
            let cv = ap('.links')[0];
            let cw = ap(".menu .social")[0];
            let cx = ap(".menu-inner")[0];
            try {
              if (0 < cs.length) {
                cs.forEach(cy => {
                  let cz = cy.querySelectorAll('.dropdown');
                  cy.querySelector("span").addEventListener("click", () => {
                    cy.classList.toggle('open');
                    if (0 < cz.length) {
                      cz.forEach(da => {
                        if (da.classList.contains('open')) {
                          da.classList.remove("open");
                        }
                      });
                    }
                  });
                  if (0 < cz.length) {
                    cz.forEach(db => {
                      db.querySelector('span').addEventListener("click", () => {
                        db.classList.toggle("open");
                      });
                    });
                  }
                });
              }
              let dc = () => {
                cr.parentNode.insertBefore(ct, cr);
                let dd = b.createElement('div');
                dd.className = "menu-wrap";
                cx.append(dd);
                if (dd) {
                  dd.appendChild(cr);
                  dd.appendChild(cv);
                  cx.appendChild(cw);
                }
                if (cu.hasAttribute("data-src")) {
                  cu.setAttribute("src", cu.getAttribute("data-src"));
                  cu.removeAttribute("data-src");
                  if (cu.classList.contains('lazy')) {
                    cu.classList.remove('lazy');
                  }
                }
              };
              let de = () => {
                let df = ap(".menu-wrap")[0];
                if (df) {
                  df.parentNode.appendChild(cr);
                  df.parentNode.appendChild(cv);
                  df.remove();
                }
                cv.appendChild(cw);
                cv.insertBefore(ct, cv.querySelector('.me'));
                if (0 < ap('.dropdown').length) {
                  ap('.dropdown').forEach(dg => {
                    if (dg.classList.contains("open")) {
                      dg.classList.remove("open");
                    }
                  });
                }
              };
              cq.addEventListener("change", dh => {
                if (dh.matches) {
                  dc();
                } else {
                  de();
                }
              });
              if (850 >= cp) {
                dc();
              } else {
                de();
              }
            } catch (di) {
              console.warn("(uiplexpro) Menu error: " + di.status);
            }
            if (!e.classList.contains("post") && ap(".infinite-scroll")[0]) {
              infiniteScroll();
            }
            let dj;
            let dk = c.pageYOffset;
            let dl = ap("#sticky");
            let dm = ap('header')[0];
            if (dl) {
              dj = c.getComputedStyle(dl).getPropertyValue('top');
            }
            b.addEventListener("scroll", () => {
              let dn = c.pageYOffset;
              let dp = ap(".totop")[0];
              if (500 < c.pageYOffset) {
                dp.classList.add('show');
              } else {
                dp.classList.remove("show");
              }
              dp.addEventListener("click", () => {
                b.documentElement.scrollIntoView({
                  'top': 0,
                  'behavior': "smooth"
                });
              });
              if (dk > dn) {
                dm.classList.remove("hide");
                if (dl) {
                  dl.style.top = parseInt(dj) + dm.offsetHeight + 'px';
                }
              } else {
                dm.classList.add("hide");
                if (dl) {
                  dl.removeAttribute("style");
                }
              }
              dk = dn;
            });
            let dq = () => {
              let dr = ap('*[data-src]');
              let ds = ap(".swipe-up");
              if (0 < dr.length) {
                dr.forEach(dt => {
                  let du = dt.getBoundingClientRect();
                  if (dt.hasAttribute("data-src") && du.top < c.innerHeight) {
                    dt.setAttribute('src', dt.getAttribute('data-src'));
                    if (dt.getAttribute("data-srcset")) {
                      dt.setAttribute("srcset", dt.getAttribute("data-srcset"));
                      dt.removeAttribute("data-srcset");
                    }
                    if (dt.getAttribute("data-sizes")) {
                      dt.setAttribute("sizes", dt.getAttribute("data-sizes"));
                      dt.removeAttribute("data-sizes");
                    }
                    dt.removeAttribute("data-src");
                    dt.classList.remove('lazy');
                    dt.classList.add("lazyloaded");
                  }
                });
              }
              if (0 < ds.length) {
                ds.forEach(dv => {
                  if (dv.getBoundingClientRect().top < c.innerHeight) {
                    dv.classList.add("swiped");
                  }
                });
              }
            };
            let dw = JSON.parse(localStorage.getItem("gurudzgnBookmark")) || [];
            ap(".bookmark")[0].querySelector('i').innerHTML = dw.length;
            let dx = () => {
              if (0 < dw.length) {
                dw.forEach(dy => {
                  let dz = b.querySelectorAll('#bm-' + dy.id);
                  if (0 < dz.length) {
                    dz.forEach(ea => {
                      ea.checked = true;
                    });
                  }
                });
              }
            };
            let eb = () => {
              localStorage.setItem('gurudzgnBookmark', JSON.stringify(dw));
              ap('.bookmark')[0].querySelector('i').innerHTML = dw.length;
              let ec = ap('.bookmark-inner')[0];
              let ed = ap(".gurudzgnBookmarks")[0];
              let ee = '';
              if (0 < dw.length) {
                let ef = j.bookmark.maxWidget;
                let eg = false;
                if (b.location.pathname == j.bookmark.morePage) {
                  ef = j.bookmark.maxAll;
                } else {
                  ef = j.bookmark.maxWidget;
                  if (dw.length > ef) {
                    eg = true;
                  }
                }
                dw.slice(0, ef).forEach(eh => {
                  ee += "<li data-id=\"" + eh.id + "\" class=\"f\"><div class=\"bm-thumb\"><a href=\"" + eh.url + "\" title=\"" + eh.title + "\"><img alt=\"" + eh.title + "\" class=\"gurudzgnSquircle\" src=\"" + eh.img + "\" height=\"65\" title=\"" + eh.title + "\" width=\"65\"></a></div><div class=\"bm-title\"><a class=\"tx-75\" href=\"" + eh.url + "\" title=\"" + eh.title + "\">" + eh.title + "</a></div><div class=\"bm-delete pointer\" role=\"button\"><svg viewBox=\"0 0 24 24\"><path d=\"M18.8892 9.5542C18.8892 17.5732 20.0435 21.198 12.2797 21.198C4.5149 21.198 5.693 17.5732 5.693 9.5542\"/><path d=\"M20.3651 6.47985H4.2146\"/><path d=\"M15.7148 6.47983C15.7148 6.47983 16.2434 2.71411 12.2891 2.71411C8.33578 2.71411 8.86435 6.47983 8.86435 6.47983\"/></svg></div></li>";
                });
                if (b.location.pathname == j.bookmark.morePage) {
                  ec.innerHTML = j.bookmark.currentText;
                  if (ed) {
                    ed.innerHTML = "<ul class=\"f\">" + ee + "</ul>";
                  }
                } else {
                  if (eg) {
                    ee += "<li class=\"bm-more\"><a class=\"tx-primary\" href=\"" + j.bookmark.morePage + "\" title=\"" + j.bookmark.moreText + "\">" + j.bookmark.moreText + " (+" + (dw.length - ef) + ")</a></li>";
                  }
                  ec.innerHTML = "<ul class=\"f\">" + ee + '</ul>';
                }
              } else {
                if (ec) {
                  ec.innerHTML = j.bookmark.emptyText;
                }
                if (ed) {
                  ed.innerHTML = j.bookmark.emptyText;
                }
              }
              ei();
            };
            let ej = ek => {
              dw = dw.filter(em => em.id !== ek);
              eb();
              let eo = b.querySelectorAll("#bm-" + ek);
              if (0 < eo.length) {
                eo.forEach(ep => {
                  ep.checked = false;
                });
              }
            };
            let ei = () => {
              let eq = ap(".bm-delete");
              if (0 < eq.length) {
                eq.forEach(er => {
                  let es = er.parentNode.getAttribute('data-id');
                  er.addEventListener('click', () => {
                    ej(es);
                  });
                });
              }
            };
            if (b.location.pathname == j.bookmark.morePage) {
              eb();
            }
            ap(".bookmark")[0].addEventListener("click", () => {
              eb();
            });
            let et = ap(".Feed .widget-content");
            if (0 < et.length) {
              et.forEach(eu => {
                let ev = eu.getAttribute("data-author");
                let ew = eu.getAttribute("data-date");
                let ex = eu.getAttribute('data-num');
                let ey = eu.getAttribute('data-newtab');
                bi('GET', "/feeds/posts/summary?alt=json&max-results=" + ex).then(ez => {
                  let fa;
                  let fb;
                  let fc;
                  let fd;
                  let fe;
                  let ff;
                  let fg = ez.feed.entry;
                  let fh = '';
                  for (let fj = 0; fj < fg.length; fj++) {
                    for (let fk = 0; fk < fg[fj].link.length; fk++) {
                      fa = fg[fj].author[0].name.$t;
                      fc = fg[fj].published.$t;
                      fe = (fd = new Date(Date.parse(fc))).toLocaleDateString(ap("html")[0].getAttribute("lang"), {
                        'year': 'numeric',
                        'month': "long",
                        'day': "numeric"
                      });
                      fb = "alternate" == fg[fj].link[fk].rel ? fg[fj].link[fk].href : '#';
                      ff = fg[fj].title.$t;
                    }
                    fh += "<li>";
                    if ("true" === ew || 'true' === ev) {
                      fh += "<div class=\"feed-info tx-50 tx-md f\">";
                      if ("true" === ew) {
                        fh += "<time class=\"feed-date\" datetime=\"" + fc + "\" title=\"" + fc + "\">" + fe + "</time>";
                      }
                      if ("true" === ev) {
                        fh += "<span class=\"feed-author\">" + fa + "</span>";
                      }
                      fh += "</div>";
                    }
                    fh += "<div class=\"feed-content\"><a href=\"" + fb + "\" rel=\"noopener\"" + ("true" === ey ? " target=\"_blank\" " : '') + "title=\"" + ff + "\">" + ff + "</a></div>";
                    fh += '</li>';
                  }
                  eu.innerHTML = '<ul>' + fh + "</ul>";
                }).catch(fl => {
                  console.warn("(uiplexpro) Recent post error: " + fl.status);
                });
              });
            }
            if (-1 == b.location.href.indexOf('?m=1') && 0 < ap(".swipe").length) {
              ap(".swipe").forEach(fm => {
                let fn = (fm.querySelectorAll('li')[0] || fm.querySelectorAll(".article")[0] || fm.querySelectorAll(".gallery img")[0] || fm.querySelectorAll(".skeleton")[0]).clientWidth;
                let fo = fm.querySelector(".swipe-inner");
                if (fo.parentNode.classList.contains("gallery")) {
                  let fp = b.createElement("div");
                  fp.className = "swipe-outer r";
                  fo.replaceWith(fp);
                  fp.appendChild(fo);
                }
                let fq = b.createElement('div');
                fq.className = "swipe-arrow";
                fq.innerHTML = "<button aria-label=\"Previous\" class=\"tx-75 tx-sm arrow prev round h f a\">&#10094;</button><button aria-label=\"Next\" class=\"tx-75 tx-sm arrow next round f a\">&#10095;</button>";
                let fr = fm.querySelector('.swipe-outer');
                if (fr) {
                  fr.appendChild(fq);
                } else {
                  fm.classList.add('r');
                  fo.insertAdjacentElement("afterend", fq);
                }
                fm.addEventListener("click", fs => {
                  if (fs.target.closest(".prev")) {
                    fo.scrollTo({
                      'left': fo.scrollLeft + -1 * fn,
                      'behavior': "smooth"
                    });
                  }
                });
                fm.addEventListener("click", ft => {
                  if (ft.target.closest(".next")) {
                    fo.scrollTo({
                      'left': fo.scrollLeft + 1 * fn,
                      'behavior': "smooth"
                    });
                  }
                });
                fo.addEventListener("scroll", () => {
                  if (20 < fo.scrollLeft) {
                    if (fm.querySelector(".prev")) {
                      fm.querySelector(".prev").classList.remove('h');
                    }
                  } else if (fm.querySelector(".prev")) {
                    fm.querySelector(".prev").classList.add('h');
                  }
                  let fu = fo.scrollWidth - fo.clientWidth - 20;
                  if (fo.scrollLeft > fu) {
                    if (fm.querySelector(".next")) {
                      fm.querySelector(".next").classList.add('h');
                    }
                  } else if (fm.querySelector(".next")) {
                    fm.querySelector(".next").classList.remove('h');
                  }
                });
              });
            }
            if (e.classList.contains("home")) {
              let fv = ap(".slider .widget-content")[0];
              let fw = ap(".custom-post-1 .widget-content");
              let fx = ap(".custom-post-2 .widget-content");
              let fy = ap(".custom-post-3 .widget-content");
              let fz = ap(".custom-post-4 .widget-content");
              if (fv || 0 < fw.length || 0 < fx.length || 0 < fy.length || 0 < fz.length) {
                let ga = () => {
                  if (fv) {
                    let gb;
                    let gc;
                    let ge;
                    let gf = fv.parentNode.getAttribute('id');
                    let gg = eval(gf + 'ar');
                    if (gg) {
                      for (let gh = 0; gh < gg.length; gh++) {
                        if (gg[gh]) {
                          gb = gg[gh].label;
                          gc = gg[gh].num;
                          ge = gg[gh].showLabel;
                        } else {
                          gb = "random";
                          gc = '6';
                          ge = true;
                        }
                      }
                    }
                    let gj = Math.floor(Math.random() * (ba - gc - 1)) + 1;
                    if (fv.classList.contains('glide')) {
                      let gk = document.createElement("script");
                      gk.src = "https://cdn.jsdelivr.net/npm/@glidejs/glide";
                      gk.async = true;
                      gk.onload = () => {
                        bi("GET", "random" == gb.toLowerCase() || '' == gb ? "/feeds/posts/summary?alt=json&start-index=" + gj + "&max-results=" + gc : '/feeds/posts/summary/-/' + gb.replace(/\&amp; /g, '&').replace(/\//g, "%2F") + "?alt=json&max-results=" + gc).then(gl => {
                          let gm;
                          let gn;
                          let go;
                          let gp;
                          let gq;
                          let gr = bp(gl.feed.entry);
                          let gs = '';
                          let gu = '';
                          let gv = 0;
                          for (let gw = gr.length; gv < gw; gv++) {
                            let gx = 0;
                            for (let gy = gr[gv].link.length; gx < gy; gx++) {
                              gm = "alternate" == gr[gv].link[gx].rel ? gr[gv].link[gx].href : '#';
                              go = gr[gv].title.$t;
                              gn = "media$thumbnail" in gr[gv] ? regex(gr[gv].media$thumbnail.url, "w480-h360-p-k-no-rw") : regex(j.noimage, "w480-h360-p-k-no-rw");
                              if (gr[gv].category) {
                                gp = true;
                                gq = gr[gv].category[0].term;
                              } else {
                                gp = false;
                                gq = 'Uncategorized';
                              }
                            }
                            gs += "<li class=\"glide__slide\">";
                            gs += "<div class=\"slider-thumb\"><a href=\"" + gm + "\" title=\"" + go + "\"><img alt=\"" + go + "\" src=\"" + gn + "\" title=\"" + go + "\" width=\"480\" height=\"360\"/></a></div>";
                            gs += "<div class=\"slider-inner a\">";
                            if (ge) {
                              gs += "<div class=\"slider-label tx-sm\">";
                              gs += gp ? "<a class=\"btn-primary\" href=\"" + b.location.origin + "/search/label/" + gq + "\" title=\"" + gq + "\">" + gq + '</a>' : "<span class=\"not-allowed bg-100 tx-100\">" + gq + "</span>";
                              gs += '</div>';
                            }
                            gs += "<div class=\"slider-text t\"><a href=\"" + gm + "\" title=\"" + go + "\">" + go + "</a></div>";
                            gs += '</div>';
                            gs += "</li>";
                            gu += "<button data-glide-dir=\"=" + gv + "\"/>";
                          }
                          fv.innerHTML = "<div class=\"glide__track lazy\" data-glide-el=\"track\"><ul class=\"glide__slides\">" + gs + "</ul></div><div class=\"glide__dots a f\" data-glide-el=\"controls[nav]\">" + gu + "</div>";
                          fv.style.height = "auto";
                          new Glide(".glide", {
                            'type': "carousel",
                            'focusAt': 0,
                            'autoplay': 3000,
                            'hoverpause': true,
                            'startAt': 0,
                            'gap': 0,
                            'peek': 0,
                            'perView': 3,
                            'breakpoints': {
                              900: {
                                'perView': 2,
                                'peek': 0
                              },
                              768: {
                                'perView': 1
                              }
                            }
                          }).mount();
                          fv.classList.add("fade");
                          ap(".glide__track")[0].classList.remove('lazy');
                          ap(".glide__track")[0].classList.add('lazyloaded');
                        }).catch(gz => {
                          console.warn("(uiplexpro) Glide error: " + gz.status);
                        });
                      };
                      ap("head")[0].appendChild(gk);
                    } else {
                      bi("GET", "random" == gb.toLowerCase() || '' == gb ? "/feeds/posts/summary?alt=json&start-index=" + gj + "&max-results=" + gc : '/feeds/posts/summary/-/' + gb.replace(/\&amp; /g, '&').replace(/\//g, "%2F") + "?alt=json&max-results=" + gc).then(ha => {
                        let hb;
                        let hc;
                        let hd;
                        let he;
                        let hf;
                        let hg = bp(ha.feed.entry);
                        let hh = '';
                        let hi = 0;
                        for (let hj = hg.length; hi < hj; hi++) {
                          let hk = 0;
                          for (let hl = hg[hi].link.length; hk < hl; hk++) {
                            hb = "alternate" == hg[hi].link[hk].rel ? hg[hi].link[hk].href : '#';
                            hd = hg[hi].title.$t;
                            hc = 'media$thumbnail' in hg[hi] ? regex(hg[hi].media$thumbnail.url, "w480-h360-p-k-no-rw") : regex(j.noimage, "w480-h360-p-k-no-rw");
                            if (hg[hi].category) {
                              he = true;
                              hf = hg[hi].category[0].term;
                            } else {
                              he = false;
                              hf = 'Uncategorized';
                            }
                          }
                          hh += "<li>";
                          hh += "<div class=\"slider-thumb\"><a href=\"" + hb + "\" title=\"" + hd + "\"><img alt=\"" + hd + "\" src=\"" + hc + "\" title=\"" + hd + "\" width=\"480\" height=\"360\"/></a></div>";
                          hh += "<div class=\"slider-inner a\">";
                          if (ge) {
                            hh += "<div class=\"slider-label tx-sm\">";
                            hh += he ? "<a class=\"btn-primary\" href=\"" + b.location.origin + '/search/label/' + hf + "\" title=\"" + hf + "\">" + hf + "</a>" : "<span class=\"not-allowed bg-100 tx-100\">" + hf + "</span>";
                            hh += '</div>';
                          }
                          hh += "<div class=\"slider-text t\"><a href=\"" + hb + "\" title=\"" + hd + "\">" + hd + "</a></div>";
                          hh += "</div>";
                          hh += '</li>';
                        }
                        fv.querySelector('ul').innerHTML = hh;
                        fv.querySelector('ul').classList.remove("skeleton");
                        fv.style.height = 'auto';
                        fv.querySelector('ul').classList.add("fade");
                      }).catch(hm => {
                        console.warn("(uiplexpro) Slider swipe error: ", hm.status);
                      });
                    }
                  }
                  let hn = false;
                  c.addEventListener('scroll', () => {
                    if (0 != b.documentElement.scrollTop && false === hn || 0 != e.scrollTop && false === hn) {
                      if (0 < fw.length) {
                        fw.forEach(ho => {
                          let hp;
                          let hq;
                          let hr;
                          let hs;
                          let ht;
                          let hu;
                          let hv;
                          let hw = ho.parentNode.getAttribute('id');
                          let hx = eval(hw + 'ar');
                          if (hx) {
                            for (let hy = 0; hy < hx.length; hy++) {
                              if (hx[hy]) {
                                hp = hx[hy].label;
                                hq = hx[hy].num;
                                hr = hx[hy].showComment;
                                ht = hx[hy].showSnippet;
                                hu = hx[hy].showTime;
                                hv = hx[hy].showText;
                                hs = ("random" == hp.toLowerCase() || '' == hp) && hx[hy].showLabel;
                              } else {
                                hp = "random";
                                hq = '6';
                                hr = true;
                                hs = true;
                                ht = true;
                                hu = true;
                                hv = "Show All";
                              }
                            }
                          }
                          let hz = Math.floor(Math.random() * (ba - hq - 1)) + 1;
                          bi("GET", "random" == hp.toLowerCase() || '' == hp ? "/feeds/posts/summary?alt=json&start-index=" + hz + "&max-results=" + hq : '/feeds/posts/summary/-/' + hp.replace(/\&amp; /g, '&').replace(/\//g, "%2F") + "?alt=json&max-results=" + hq).then(ia => {
                            let ib;
                            let ic;
                            let ie;
                            let ig;
                            let ih;
                            let ii;
                            let ij;
                            let ik;
                            let il;
                            let im;
                            let io;
                            let ip;
                            let iq;
                            let ir;
                            let it = bp(ia.feed.entry);
                            let iu = '';
                            let iv = 0;
                            for (let iw = it.length; iv < iw; iv++) {
                              let ix = 0;
                              for (let iy = it[iv].link.length; ix < iy; ix++) {
                                ib = "alternate" == it[iv].link[ix].rel ? it[iv].link[ix].href : '#';
                                ip = it[iv].title.$t;
                                ik = it[iv].summary.$t.substring(0, 150);
                                iq = it[iv].id.$t.split('.post-')[1];
                                if (it[iv].thr$total) {
                                  ie = true;
                                  ig = ib + "#comment-form";
                                  ih = it[iv].thr$total ? it[iv].thr$total.$t : '-';
                                } else {
                                  ie = false;
                                }
                                im = it[iv].published.$t;
                                io = (il = new Date(Date.parse(im))).toLocaleDateString(ap("html")[0].getAttribute("lang"), {
                                  'year': 'numeric',
                                  'month': 'long',
                                  'day': "numeric"
                                });
                                if (it[iv].category) {
                                  ii = true;
                                  ij = it[iv].category[0].term;
                                } else {
                                  ii = false;
                                  ij = "Uncategorized";
                                }
                                if ('media$thumbnail' in it[iv]) {
                                  ic = regex(it[iv].media$thumbnail.url, "w280-h187-p-k-no-rw");
                                  ir = it[iv].media$thumbnail.url;
                                } else {
                                  ic = regex(j.noimage, 'w280-h187-p-k-no-rw');
                                  ir = regex(j.noimage, 'w72-h72-p-k-no-rw');
                                }
                              }
                              iu += "<article class=\"article hentry swipe-up f\">";
                              iu += "<div class=\"posts\">";
                              iu += "<div class=\"snippet-thumb r\">";
                              iu += "<a href=\"" + ib + "\" title=\"" + ip + "\"><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAACCAQAAAA3fa6RAAAADklEQVR42mNkAANGCAUAACMAA2w/AMgAAAAASUVORK5CYII=\" data-src=\"" + ic + "\" alt=\"" + ip + "\" class=\"lazy\" title=\"" + ip + "\" width=\"300\" height=\"200\"/></a>";
                              if (iq) {
                                iu += "<div class=\"bm a\"><input class=\"h\" id=\"bm-" + iq + "\" type=\"checkbox\"/><label aria-label=\"Bookmark\" class=\"bm-icon gurudzgnSquircle pointer f\" data-img=\"" + ir + "\" data-title=\"" + ip + "\" data-url=\"" + ib + "\" for=\"bm-" + iq + "\"><svg viewBox=\"0 0 24 24\"><path d=\"M16.8199 2H7.17995C5.04995 2 3.31995 3.74 3.31995 5.86V19.95C3.31995 21.75 4.60995 22.51 6.18995 21.64L11.0699 18.93C11.5899 18.64 12.4299 18.64 12.9399 18.93L17.8199 21.64C19.3999 22.52 20.6899 21.76 20.6899 19.95V5.86C20.6799 3.74 18.9499 2 16.8199 2Z\"/><path d=\"M12 8.20996V13.21\" class=\"x\"/><path d=\"M14.5 10.6499H9.5\" class=\"x\"/><path d=\"M9.58997 11L11.09 12.5L15.09 8.5\" class=\"y\"/></svg></label></div>";
                              }
                              iu += "</div>";
                              iu += "<div class=\"post-inner\">";
                              if (hu) {
                                iu += "<div class=\"post-timestamp tx-50 tx-md\"><time class=\"published updated\"  datetime=\"" + im + "\" title=\"" + im + "\">" + io + "</time></div>";
                              }
                              iu += "<h2 class=\"post-title\"><a href=\"" + ib + "\" title=\"" + ip + "\">" + ip + "</a></h2>";
                              if (ht) {
                                iu += "<div class=\"post-snippet tx-75\">" + ik + "</div>";
                              }
                              iu += "</div>";
                              iu += '</div>';
                              if (hr || hs) {
                                iu += "<div class=\"post-footer tx-md\"><div class=\"post-footer-inner f\">";
                                if (hs) {
                                  iu += "<span class=\"post-labels\">";
                                  if (ii) {
                                    let iz;
                                    iz = "random" != hp.toLowerCase() && '' != hp ? hp : ij;
                                    iu += "<a class=\"tx-primary\" href=\"" + b.location.origin + '/search/label/' + iz + "\" title=\"" + iz + "\">" + iz + "</a>";
                                  } else {
                                    iu += "<span class=\"not-allowed tx-50\">" + ij + '</span>';
                                  }
                                  iu += "</span>";
                                }
                                if (hr && ie) {
                                  iu += "<span class=\"post-comments r\"><a class=\"tx-primary f\" href=\"" + ig + "\" title=\"" + ih + " Comments\"><svg class=\"stroke-primary\" viewBox=\"0 0 24 24\"><path d=\"M7 18.4299H11L15.45 21.39C16.11 21.83 17 21.3599 17 20.5599V18.4299C20 18.4299 22 16.4299 22 13.4299V7.42993C22 4.42993 20 2.42993 17 2.42993H7C4 2.42993 2 4.42993 2 7.42993V13.4299C2 16.4299 4 18.4299 7 18.4299Z\"/></svg><i class=\"tx-primary tx-sm a\">" + ih + '</i></a></span>';
                                }
                                iu += "</div></div>";
                              }
                              iu += "</article>";
                            }
                            let ja = ho.querySelector(".custom-1-inner");
                            let jb = ho.parentNode.querySelector(".title-label");
                            ja.innerHTML = "<div class=\"blog-posts f\">" + iu + "</div>";
                            ja.classList.add("fade");
                            if ("random" != hp.toLowerCase() && '' != hp) {
                              jb.innerHTML = "<a class=\"tx-primary\" href=\"" + b.location.origin + "/search/label/" + hp + "\" title=\"" + hp + "\">" + hv + "</a>";
                            } else {
                              jb.remove();
                            }
                          }).catch(jc => {
                            console.warn("(uiplexpro) Custom post 1 error: ", jc);
                          });
                        });
                      }
                      if (0 < fx.length) {
                        fx.forEach(jd => {
                          let je;
                          let jf;
                          let jg;
                          let jh;
                          let ji;
                          let jj = jd.parentNode.getAttribute('id');
                          let jk = eval(jj + 'ar');
                          if (jk) {
                            for (let jl = 0; jl < jk.length; jl++) {
                              if (jk[jl]) {
                                je = jk[jl].label;
                                jf = jk[jl].num;
                                jg = jk[jl].showComment;
                                ji = jk[jl].showText;
                                jh = ("random" == je.toLowerCase() || '' == je) && jk[jl].showLabel;
                              } else {
                                je = "random";
                                jf = '6';
                                jg = true;
                                jh = true;
                                ji = "Show All";
                              }
                            }
                          }
                          let jm = Math.floor(Math.random() * (ba - jf - 1)) + 1;
                          bi("GET", "random" == je.toLowerCase() || '' == je ? "/feeds/posts/summary?alt=json&start-index=" + jm + "&max-results=" + jf : '/feeds/posts/summary/-/' + je.replace(/\&amp; /g, '&').replace(/\//g, "%2F") + "?alt=json&max-results=" + jf).then(jn => {
                            let jo;
                            let jp;
                            let jq;
                            let jr;
                            let js;
                            let jt;
                            let ju;
                            let jv;
                            let jw;
                            let jx = bp(jn.feed.entry);
                            let jy = '';
                            let jz = 0;
                            for (let ka = jx.length; jz < ka; jz++) {
                              let kb = 0;
                              for (let kc = jx[jz].link.length; kb < kc; kb++) {
                                jo = 'alternate' == jx[jz].link[kb].rel ? jx[jz].link[kb].href : '#';
                                jw = jx[jz].title.$t;
                                jv = jx[jz].summary.$t.substring(0, 150);
                                if (jx[jz].thr$total) {
                                  jq = true;
                                  jr = jo + "#comment-form";
                                  js = jx[jz].thr$total ? jx[jz].thr$total.$t : '-';
                                } else {
                                  jq = false;
                                }
                                if (jx[jz].category) {
                                  jt = true;
                                  ju = jx[jz].category[0].term;
                                } else {
                                  jt = false;
                                  ju = 'Uncategorized';
                                }
                                jp = "media$thumbnail" in jx[jz] ? regex(jx[jz].media$thumbnail.url, "w150-h150-p-k-no-rw") : regex(j.noimage, 'w150-h150-p-k-no-rw');
                              }
                              jy += "<li class=\"hover-zoom f\">";
                              jy += "<div class=\"custom-2-thumb gurudzgnSquircle\"><a href=\"" + jo + "\" title=\"" + jw + "\"><img alt=\"" + jw + "\" height=\"150\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAACCAQAAAA3fa6RAAAADklEQVR42mNkAANGCAUAACMAA2w/AMgAAAAASUVORK5CYII=\" data-src=\"" + jp + "\" class=\"lazy\" title=\"" + jw + "\" width=\"150\"/></a></div>";
                              jy += "<div class=\"post-inner f\">";
                              jy += "<h2 class=\"post-title\"><a href=\"" + jo + "\" title=\"" + jw + "\">" + jw + '</a></h2>';
                              if (jg || jh) {
                                jy += "<div class=\"post-footer tx-md\"><div class=\"post-footer-inner f\">";
                                if (jh) {
                                  jy += "<span class=\"post-labels\">";
                                  if (jt) {
                                    let kd;
                                    kd = "random" != je.toLowerCase() && '' != je ? je : ju;
                                    jy += "<a class=\"tx-primary\" href=\"" + b.location.origin + "/search/label/" + kd + "\" title=\"" + kd + "\">" + kd + "</a>";
                                  } else {
                                    jy += "<span class=\"not-allowed tx-50\">" + ju + "</span>";
                                  }
                                  jy += "</span>";
                                }
                                if (jg && jq) {
                                  jy += "<span class=\"post-comments r\"><a class=\"tx-primary f\" href=\"" + jr + "\" title=\"" + js + " Comments\"><svg viewBox=\"0 0 24 24\"><path d=\"M7 18.4299H11L15.45 21.39C16.11 21.83 17 21.3599 17 20.5599V18.4299C20 18.4299 22 16.4299 22 13.4299V7.42993C22 4.42993 20 2.42993 17 2.42993H7C4 2.42993 2 4.42993 2 7.42993V13.4299C2 16.4299 4 18.4299 7 18.4299Z\"/></svg><i class=\"tx-primary tx-sm a\">" + js + "</i></a></span>";
                                }
                                jy += "</div></div>";
                              }
                              jy += '</div>';
                              jy += "</li>";
                            }
                            let ke = jd.querySelector(".custom-2-inner");
                            let kf = jd.parentNode.querySelector(".title-label");
                            ke.innerHTML = jy;
                            ke.classList.add('fade');
                            if ("random" != je.toLowerCase() && '' != je) {
                              kf.innerHTML = "<a class=\"tx-primary\" href=\"" + b.location.origin + '/search/label/' + je + "\" title=\"" + je + "\">" + ji + '</a>';
                            } else {
                              kf.remove();
                            }
                          }).catch(kg => {
                            console.warn("(uiplexpro) Custom post 2 error: ", kg);
                          });
                        });
                      }
                      if (0 < fy.length) {
                        fy.forEach(kh => {
                          let ki;
                          let kj;
                          let kk;
                          let kl;
                          let km;
                          let kn;
                          let ko;
                          let kp = kh.parentNode.getAttribute('id');
                          let kq = eval(kp + 'ar');
                          if (kq) {
                            for (let kr = 0; kr < kq.length; kr++) {
                              if (kq[kr]) {
                                ki = kq[kr].label;
                                kj = kq[kr].num;
                                kk = kq[kr].showComment;
                                km = kq[kr].showSnippet;
                                kn = kq[kr].showTime;
                                ko = kq[kr].showText;
                                kl = ('random' == ki.toLowerCase() || '' == ki) && kq[kr].showLabel;
                              } else {
                                ki = "random";
                                kj = '6';
                                kk = true;
                                kl = true;
                                km = true;
                                kn = true;
                                ko = "Show All";
                              }
                            }
                          }
                          let ks = Math.floor(Math.random() * (ba - kj - 1)) + 1;
                          bi('GET', "random" == ki.toLowerCase() || '' == ki ? "/feeds/posts/summary?alt=json&start-index=" + ks + "&max-results=" + kj : '/feeds/posts/summary/-/' + ki.replace(/\&amp; /g, '&').replace(/\//g, "%2F") + "?alt=json&max-results=" + kj).then(kt => {
                            let ku;
                            let kv;
                            let kw;
                            let kx;
                            let ky;
                            let kz;
                            let la;
                            let lb;
                            let lc;
                            let ld;
                            let le;
                            let lf;
                            let lg;
                            let lh;
                            let lj = bp(kt.feed.entry);
                            let lk = '';
                            let ll = 0;
                            for (let lm = lj.length; ll < lm; ll++) {
                              let ln = 0;
                              for (let lo = lj[ll].link.length; ln < lo; ln++) {
                                ku = "alternate" == lj[ll].link[ln].rel ? lj[ll].link[ln].href : '#';
                                lf = lj[ll].title.$t;
                                lb = lj[ll].summary.$t.substring(0, 150);
                                lg = lj[ll].id.$t.split('.post-')[1];
                                if (lj[ll].thr$total) {
                                  kw = true;
                                  kx = ku + "#comment-form";
                                  ky = lj[ll].thr$total ? lj[ll].thr$total.$t : '-';
                                } else {
                                  kw = false;
                                }
                                ld = lj[ll].published.$t;
                                le = (lc = new Date(Date.parse(ld))).toLocaleDateString(ap("html")[0].getAttribute("lang"), {
                                  'year': "numeric",
                                  'month': 'long',
                                  'day': 'numeric'
                                });
                                if (lj[ll].category) {
                                  kz = true;
                                  la = lj[ll].category[0].term;
                                } else {
                                  kz = false;
                                  la = "Uncategorized";
                                }
                                if ("media$thumbnail" in lj[ll]) {
                                  kv = regex(lj[ll].media$thumbnail.url, 'w280-h187-p-k-no-rw');
                                  lh = lj[ll].media$thumbnail.url;
                                } else {
                                  kv = regex(j.noimage, "w280-h187-p-k-no-rw");
                                  lh = regex(j.noimage, 'w72-h72-p-k-no-rw');
                                }
                              }
                              lk += "<article class=\"article hentry swipe-up f\">";
                              lk += "<div class=\"posts\">";
                              lk += "<div class=\"snippet-thumb r\">";
                              lk += "<a href=\"" + ku + "\" title=\"" + lf + "\"><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAACCAQAAAA3fa6RAAAADklEQVR42mNkAANGCAUAACMAA2w/AMgAAAAASUVORK5CYII=\" data-src=\"" + kv + "\" alt=\"" + lf + "\" class=\"lazy\" title=\"" + lf + "\" width=\"300\" height=\"200\"/></a>";
                              if (lg) {
                                lk += "<div class=\"bm a\"><input class=\"h\" id=\"bm-" + lg + "\" type=\"checkbox\"/><label aria-label=\"Bookmark\" class=\"bm-icon gurudzgnSquircle pointer f\" data-img=\"" + lh + "\" data-title=\"" + lf + "\" data-url=\"" + ku + "\" for=\"bm-" + lg + "\"><svg viewBox=\"0 0 24 24\"><path d=\"M16.8199 2H7.17995C5.04995 2 3.31995 3.74 3.31995 5.86V19.95C3.31995 21.75 4.60995 22.51 6.18995 21.64L11.0699 18.93C11.5899 18.64 12.4299 18.64 12.9399 18.93L17.8199 21.64C19.3999 22.52 20.6899 21.76 20.6899 19.95V5.86C20.6799 3.74 18.9499 2 16.8199 2Z\"/><path d=\"M12 8.20996V13.21\" class=\"x\"/><path d=\"M14.5 10.6499H9.5\" class=\"x\"/><path d=\"M9.58997 11L11.09 12.5L15.09 8.5\" class=\"y\"/></svg></label></div>";
                              }
                              lk += "</div>";
                              lk += "<div class=\"post-inner\">";
                              if (kn) {
                                lk += "<div class=\"post-timestamp tx-50 tx-md\"><time class=\"published updated\"  datetime=\"" + ld + "\" title=\"" + ld + "\">" + le + "</time></div>";
                              }
                              lk += "<h2 class=\"post-title\"><a href=\"" + ku + "\" title=\"" + lf + "\">" + lf + "</a></h2>";
                              if (km) {
                                lk += "<div class=\"post-snippet tx-75\">" + lb + '</div>';
                              }
                              lk += '</div>';
                              lk += "</div>";
                              if (kk || kl) {
                                lk += "<div class=\"post-footer tx-md\"><div class=\"post-footer-inner f\">";
                                if (kl) {
                                  lk += "<span class=\"post-labels\">";
                                  lk += kz ? "<a class=\"tx-primary\" href=\"" + b.location.origin + "/search/label/" + la + "\" title=\"" + la + "\">" + la + '</a>' : "<span class=\"not-allowed tx-50\">" + la + '</span>';
                                  lk += "</span>";
                                }
                                if (kk && kw) {
                                  lk += "<span class=\"post-comments r\"><a class=\"tx-primary f\" href=\"" + kx + "\" title=\"" + ky + " Comments\"><svg class=\"stroke-primary\" viewBox=\"0 0 24 24\"><path d=\"M7 18.4299H11L15.45 21.39C16.11 21.83 17 21.3599 17 20.5599V18.4299C20 18.4299 22 16.4299 22 13.4299V7.42993C22 4.42993 20 2.42993 17 2.42993H7C4 2.42993 2 4.42993 2 7.42993V13.4299C2 16.4299 4 18.4299 7 18.4299Z\"/></svg><i class=\"tx-primary tx-sm a\">" + ky + "</i></a></span>";
                                }
                                lk += "</div></div>";
                              }
                              lk += "</article>";
                            }
                            let lp = kh.querySelector(".swipe-inner");
                            let lq = kh.parentNode.querySelector('.title-label');
                            lp.innerHTML = lk;
                            lp.classList.add("blog-posts", "fade");
                            if ('random' != ki.toLowerCase() && '' != ki) {
                              lq.innerHTML = "<a class=\"tx-primary\" href=\"" + b.location.origin + '/search/label/' + ki + "\" title=\"" + ki + "\">" + ko + '</a>';
                            } else {
                              lq.remove();
                            }
                          }).catch(lr => {
                            console.warn("(uiplexpro) Custom post 3 error: ", lr);
                          });
                        });
                      }
                      if (0 < fz.length) {
                        fz.forEach(ls => {
                          let lu;
                          let lv;
                          let lw;
                          let lx;
                          let ly = ls.parentNode.getAttribute('id');
                          let lz = eval(ly + 'ar');
                          if (lz) {
                            for (let ma = 0; ma < lz.length; ma++) {
                              if (lz[ma]) {
                                lu = lz[ma].label;
                                lv = lz[ma].num;
                                lx = lz[ma].showText;
                                lw = ("random" == lu.toLowerCase() || '' == lu) && lz[ma].showLabel;
                              } else {
                                lu = 'random';
                                lv = '6';
                                lw = true;
                                lx = "Show All";
                              }
                            }
                          }
                          let mb = Math.floor(Math.random() * (ba - lv - 1)) + 1;
                          bi("GET", "random" == lu.toLowerCase() || '' == lu ? "/feeds/posts/summary?alt=json&start-index=" + mb + "&max-results=" + lv : '/feeds/posts/summary/-/' + lu.replace(/\&amp; /g, '&').replace(/\//g, "%2F") + "?alt=json&max-results=" + lv).then(mc => {
                            let mf;
                            let mg;
                            let mh;
                            let mi;
                            let mj;
                            let mk;
                            let ml;
                            let mm = bp(mc.feed.entry);
                            let mn = '';
                            let mo = 0;
                            for (let mp = mm.length; mo < mp; mo++) {
                              let mq = 0;
                              for (let mr = mm[mo].link.length; mq < mr; mq++) {
                                mf = "alternate" == mm[mo].link[mq].rel ? mm[mo].link[mq].href : '#';
                                mj = mm[mo].title.$t;
                                mk = mm[mo].id.$t.split(".post-")[1];
                                if (mm[mo].category) {
                                  mh = true;
                                  mi = mm[mo].category[0].term;
                                } else {
                                  mh = false;
                                  mi = 'Uncategorized';
                                }
                                if ("media$thumbnail" in mm[mo]) {
                                  mg = regex(mm[mo].media$thumbnail.url, "w300-h450-p-k-no-rw");
                                  ml = mm[mo].media$thumbnail.url;
                                } else {
                                  mg = regex(j.noimage, "w300-h450-p-k-no-rw");
                                  ml = regex(j.noimage, "w72-h72-p-k-no-rw");
                                }
                              }
                              mn += "<li class=\"swipe-up r\">";
                              mn += "<div class=\"snippet-thumb\">";
                              mn += "<a href=\"" + mf + "\" title=\"" + mj + "\"><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAACCAQAAAA3fa6RAAAADklEQVR42mNkAANGCAUAACMAA2w/AMgAAAAASUVORK5CYII=\" data-src=\"" + mg + "\" alt=\"" + mj + "\" class=\"lazy\" title=\"" + mj + "\" width=\"300\" height=\"450\"/></a>";
                              if (mk) {
                                mn += "<div class=\"bm a\"><input class=\"h\" id=\"bm-" + mk + "\" type=\"checkbox\"/><label aria-label=\"Bookmark\" class=\"bm-icon gurudzgnSquircle pointer f\" data-img=\"" + ml + "\" data-title=\"" + mj + "\" data-url=\"" + mf + "\" for=\"bm-" + mk + "\"><svg viewBox=\"0 0 24 24\"><path d=\"M16.8199 2H7.17995C5.04995 2 3.31995 3.74 3.31995 5.86V19.95C3.31995 21.75 4.60995 22.51 6.18995 21.64L11.0699 18.93C11.5899 18.64 12.4299 18.64 12.9399 18.93L17.8199 21.64C19.3999 22.52 20.6899 21.76 20.6899 19.95V5.86C20.6799 3.74 18.9499 2 16.8199 2Z\"/><path d=\"M12 8.20996V13.21\" class=\"x\"/><path d=\"M14.5 10.6499H9.5\" class=\"x\"/><path d=\"M9.58997 11L11.09 12.5L15.09 8.5\" class=\"y\"/></svg></label></div>";
                              }
                              mn += "</div>";
                              mn += "<div class=\"post-inner a\">";
                              if (lw) {
                                mn += "<div class=\"post-labels tx-sm\">";
                                mn += mh ? "<a class=\"btn-primary\" href=\"" + b.location.origin + "/search/label/" + mi + "\" title=\"" + mi + "\">" + mi + "</a>" : "<span class=\"not-allowed bg-100 tx-100\">" + mi + "</span>";
                                mn += '</div>';
                              }
                              mn += "<div class=\"post-title\"><a href=\"" + mf + "\" title=\"" + mj + "\">" + mj + '</a></div>';
                              mn += "</div>";
                              mn += '</li>';
                            }
                            let ms = ls.querySelector('.swipe-inner');
                            let mt = ls.parentNode.querySelector(".title-label");
                            ms.innerHTML = mn;
                            ms.classList.add('fade');
                            if ('random' != lu.toLowerCase() && '' != lu) {
                              mt.innerHTML = "<a class=\"tx-primary\" href=\"" + b.location.origin + "/search/label/" + lu + "\" title=\"" + lu + "\">" + lx + "</a>";
                            } else {
                              mt.remove();
                            }
                          }).catch(mu => {
                            console.warn("(uiplexpro) Custom post 4 error: ", mu);
                          });
                        });
                      }
                      hn = true;
                    }
                  }, true);
                };
                if (localStorage.getItem("ign_si") || null !== localStorage.getItem("ign_si")) {
                  ba = localStorage.getItem("ign_si");
                  ga();
                } else if (-1 == c.navigator.userAgent.indexOf(q('004C00690067006800740068006F007500730065')) && -1 == c.navigator.userAgent.indexOf(q("00470054006D00650074007200690078")) && -1 == c.navigator.userAgent.indexOf(q("00530070006500650064"))) {
                  bi("GET", "/feeds/posts/summary?alt=json&max-results=0").then(mv => {
                    ba = mv.feed.openSearch$totalResults.$t;
                    localStorage.setItem("ign_si", mv.feed.openSearch$totalResults.$t);
                    ga();
                  }).catch(mw => {
                    console.warn("(uiplexpro) Cannot fetch feed: ", mw.status);
                  });
                }
              }
            }
            if (e.classList.contains("single")) {
              if (ap("#share")) {
                ap("#share").addEventListener("change", mx => {
                  if (mx.target.checked) {
                    ap(".post-action")[0].style.zIndex = '3';
                  } else {
                    ap('.post-action')[0].removeAttribute('style');
                  }
                });
              }
              let my = ap('.share-more-copy')[0];
              if (my) {
                my.addEventListener("click", () => {
                  let mz = b.querySelector("link[rel=\"canonical\"]") ? b.querySelector("link[rel=canonical]").href : b.location.href;
                  let na = b.createElement("textarea");
                  na.className = "clipboard";
                  na.textContent = mz;
                  e.appendChild(na);
                  na.select();
                  b.execCommand("copy");
                  na.remove();
                  ap(".share-copy-info")[0].classList.add("success");
                  setTimeout(() => {
                    ap('.share-copy-info')[0].classList.remove("success");
                  }, 500);
                });
              }
              let nb = {
                'title': b.title,
                'url': b.querySelector("link[rel=\"canonical\"]") ? b.querySelector("link[rel=canonical]").href : b.location.href
              };
              if (ap(".share-mobile")[0]) {
                if (navigator.share) {
                  ap('.share-mobile')[0].addEventListener("click", async () => {
                    try {
                      await navigator.share(nb);
                    } catch (nc) {
                      console.warn("(uiplexpro) Share error: " + nc.status);
                    }
                  });
                } else {
                  ap(".share-mobile")[0].setAttribute("for", "share");
                }
              }
              let nd = ap(".post-body")[0].innerText;
              let ne = nd.trim().split(/\s+/).length;
              let nf = Math.ceil(ne / 225);
              if (ap(".read-time")[0]) {
                ap(".read-time i")[0].innerText = nf;
              }
              if (0 < ap('.tabs').length) {
                ap(".tabs").forEach(ng => {
                  let nh = ng.querySelectorAll('li');
                  let ni = ng.querySelectorAll(".content");
                  let nj = ng.querySelector('ul');
                  for (let nk = 0; nk < nh.length; nk++) {
                    nh[nk].addEventListener("click", function () {
                      for (let nl = 0; nl < nh.length; nl++) {
                        nh[nl].classList.remove("current");
                        ni[nl].classList.remove('visible');
                      }
                      this.classList.add("current");
                      ni[nk].classList.add('visible');
                    });
                  }
                  let nm = () => {
                    if (!(nj.scrollWidth > nj.clientWidth)) {
                      if (ng.querySelector('.prev') && ng.querySelector('.next')) {
                        ng.querySelector(".prev").remove();
                        ng.querySelector(".next").remove();
                      }
                    } else {
                      if (!ng.querySelector(".prev") && !ng.querySelector('.next')) {
                        let nn = b.createElement("div");
                        let np = b.createElement("div");
                        nn.className = "arrow prev pointer a";
                        nn.innerHTML = "&#10094;";
                        nj.parentNode.insertBefore(nn, nj);
                        np.className = "arrow next pointer a active";
                        np.innerHTML = "&#10095;";
                        nj.parentNode.insertBefore(np, nj);
                        nj.addEventListener('scroll', () => {
                          if (20 < nj.scrollLeft) {
                            if (ng.querySelector(".prev")) {
                              ng.querySelector(".prev").classList.add('active');
                            }
                          } else if (ng.querySelector(".prev")) {
                            ng.querySelector(".prev").classList.remove('active');
                          }
                          let nq = nj.scrollWidth - nj.clientWidth - 20;
                          if (nj.scrollLeft > nq) {
                            if (ng.querySelector(".next")) {
                              ng.querySelector(".next").classList.remove("active");
                            }
                          } else if (ng.querySelector('.next')) {
                            ng.querySelector('.next').classList.add("active");
                          }
                        });
                      }
                    }
                  };
                  nm();
                  c.addEventListener("resize", nm);
                });
              }
              let nr = ap(".post-body")[0].querySelectorAll("img");
              if (0 < nr.length) {
                nr.forEach(ns => {
                  if ('A' == ns.parentElement.nodeName) {
                    nt.preventDefault();
                    ns.parentNode.addEventListener('click', nt => false);
                  }
                  ns.addEventListener("click", () => {
                    if (!ap(".lightbox")[0]) {
                      let nu = b.createElement("label");
                      nu.ariaLabel = 'Image';
                      nu.className = "lightbox fi f";
                      nu.htmlFor = "lightbox";
                      if ('A' == ns.parentElement.nodeName) {
                        nu.innerHTML = "<img class=\"lightbox-open\" src=\"" + ns.parentNode.getAttribute("href") + "\"/>";
                      } else {
                        ns.classList.add("lightbox-open", 'fi', 'f');
                      }
                      ap(".post-body")[0].appendChild(nu);
                      ap("#lightbox").checked = true;
                      e.classList.add("noscroll");
                    }
                  });
                });
                ap("#lightbox").addEventListener("change", () => {
                  if (ap(".lightbox")[0]) {
                    let nv = ap(".post-body")[0].querySelectorAll('img.lightbox-open');
                    if (0 < nv.length) {
                      nv.forEach(nw => {
                        if ("LABEL" != nw.parentElement.nodeName) {
                          nw.classList.remove('lightbox-open', 'fi', 'f');
                        }
                      });
                    }
                    e.classList.remove('noscroll');
                    setTimeout(() => {
                      ap(".lightbox")[0].remove();
                    }, 100);
                  }
                });
              }
              if (0 < ap(".carousel").length) {
                ap(".carousel").forEach(nx => {
                  let ny;
                  let nz = nx.querySelectorAll("img");
                  let oa = nx.querySelector('.carousel-inner');
                  let ob = b.createElement("div");
                  let oc = b.createElement('div');
                  let od = b.createElement("div");
                  let oe = '';
                  let of = 0;
                  if (1 < nz.length) {
                    let og = b.createElement("div");
                    og.className = "carousel-outer r";
                    oa.replaceWith(og);
                    og.appendChild(oa);
                    ny = nz[0].width;
                    c.addEventListener("resize", () => {
                      for (let oh = 0; oh < nz.length; oh++) {
                        nz[oh].width = ap(".post-body")[0].clientWidth;
                        nz[oh].style.width = ap(".post-body")[0].clientWidth + 'px';
                        ny = ap(".post-body")[0].clientWidth;
                      }
                    });
                    if (nx.querySelector(".carousel-outer")) {
                      let oi = nx.querySelector(".carousel-outer");
                      ob.className = "carousel-tx tx-sm round f a";
                      ob.innerHTML = "<i>1</i>/" + nz.length;
                      oi.appendChild(ob);
                      if (-1 == b.location.href.indexOf("?m=1")) {
                        oc.className = 'carousel-arrow';
                        oc.innerHTML = "<button aria-label=\"Previous\" class=\"tx-75 tx-sm arrow prev round h f a\">&#10094;</button><button aria-label=\"Next\" class=\"tx-75 tx-sm arrow next round f a\">&#10095;</button>";
                        oi.appendChild(oc);
                      }
                      for (let oj = 0; oj < nz.length; oj++) {
                        oe += 0 == oj ? "<span class=\"dot round active\"></span>" : "<span class=\"dot round\"></span>";
                      }
                      od.className = "carousel-dot f a";
                      od.innerHTML = oe;
                      oi.appendChild(od);
                    }
                    if (nx.querySelector('.carousel-dot')) {
                      let om = nx.querySelectorAll('.dot');
                      for (let on = 0; on < om.length; on++) {
                        ap(".carousel-inner")[0].addEventListener("scroll", function () {
                          if (150 > nz[on].getBoundingClientRect().x && nz[on].getBoundingClientRect().x > -(1 * (nx.clientWidth - nx.getBoundingClientRect().x))) {
                            om[on].classList.add('active');
                            nx.querySelector('i').innerHTML = on + 1;
                            of = on;
                          } else {
                            om[on].classList.remove("active");
                          }
                        });
                      }
                    }
                    nx.addEventListener("click", oo => {
                      if (oo.target.closest(".prev")) {
                        oa.scrollTo({
                          'left': ny * (of - 1),
                          'behavior': "smooth"
                        });
                      }
                    });
                    nx.addEventListener("click", op => {
                      if (op.target.closest(".next")) {
                        oa.scrollTo({
                          'left': ny * (of + 1),
                          'behavior': "smooth"
                        });
                      }
                    });
                    oa.addEventListener("scroll", () => {
                      if (20 < oa.scrollLeft) {
                        if (nx.querySelector(".prev")) {
                          nx.querySelector(".prev").classList.remove('h');
                        }
                      } else if (nx.querySelector(".prev")) {
                        nx.querySelector('.prev').classList.add('h');
                      }
                      let oq = oa.scrollWidth - oa.clientWidth - 20;
                      if (oa.scrollLeft > oq) {
                        if (nx.querySelector(".next")) {
                          nx.querySelector(".next").classList.add('h');
                        }
                      } else if (nx.querySelector(".next")) {
                        nx.querySelector(".next").classList.remove('h');
                      }
                    });
                  }
                });
              }
              if (0 < ap(".grid").length) {
                ap(".grid").forEach(or => {
                  let os = or.querySelectorAll('img');
                  if (1 < os.length) {
                    if (4 < os.length) {
                      or.classList.add("more");
                    }
                    let ot;
                    for (let ou = 0; ou < os.length; ou++) {
                      ot = b.createElement("figure");
                      if (ou == 4) {
                        ot.className = "expand pointer r";
                        ot.dataset.more = os.length - 4;
                      }
                      if (ou > 4) {
                        ot.className = 'h';
                      }
                      os[ou].replaceWith(ot);
                      ot.appendChild(os[ou]);
                    }
                    c.addEventListener("click", ov => {
                      if (ov.target.closest(".grid-inner .expand")) {
                        or.classList.remove("more");
                        or.querySelectorAll("figure").forEach(ow => {
                          ow.removeAttribute("class");
                          ow.removeAttribute("data-more");
                        });
                      }
                    });
                  }
                });
              }
              if (0 < ap(".comment-permalink").length) {
                ap(".comment-permalink").forEach(ox => {
                  ox.addEventListener('click', () => {
                    let oy = ox.parentNode.getAttribute("data-permalink");
                    let oz = b.createElement("textarea");
                    oz.className = "clipboard";
                    oz.textContent = oy;
                    e.appendChild(oz);
                    oz.select();
                    b.execCommand("copy");
                    oz.remove();
                    ox.innerHTML += "<strong>&check; OK</strong>";
                    setTimeout(() => {
                      ox.querySelector("strong").remove();
                    }, 500);
                  });
                });
              }
              if (0 < ap(".comment-profile").length) {
                ap(".comment-profile").forEach(pa => {
                  let pb = pa.parentNode.getAttribute("data-profile");
                  pa.addEventListener('click', () => {
                    c.open(pb, '_blank');
                  });
                });
              }
              let pc = ap(".gurudzgnPagination");
              if (0 < pc.length) {
                let pd;
                let pe = decodeURIComponent(b.location.search.substring(1)).split('&');
                let pf = '';
                let pg = '';
                let ph;
                for (let pi = 0; pi < pe.length; pi++) {
                  ph = pe[pi].split('=');
                  if ("page" === ph[0]) {
                    pd = ph[1];
                  }
                }
                for (let pj = 0; pj < pc.length; pj++) {
                  pc[pj].classList.add('h');
                  if (0 === pd || "all" === pd) {
                    pc[pj].classList.remove('h');
                  } else if (undefined === pd || pd > pc.length) {
                    pc[0].classList.remove('h');
                  } else {
                    pc[pd - 1].classList.remove('h');
                  }
                }
                for (let pk = 1; pk < pc.length + 1; pk++) {
                  pf += "<li class=\"f\">";
                  pf += pk == pd ? "<span class=\"selected\">" + pk + "</span>" : (undefined === pd || pd > pc.length) && 1 == pk ? "<span class=\"selected\">" + pk + '</span>' : "<a href=\"?page=" + pk + "\" title=\"Page " + pk + "\">" + pk + "</a>";
                  pf += "</li>";
                }
                pg += 0 === pd || "all" === pd ? "<span class=\"selected\">" + j.pagination.allText + "</span>" : "<a href=\"?page=all\" title=\"" + j.pagination.allText + "\">" + j.pagination.allText + '</a>';
                let pl = b.createElement("div");
                pl.className = "post-pagination f";
                pl.innerHTML = "<div class=\"pagination-title t\">" + j.pagination.titleText + "</div><ul class=\"f\">" + pf + "<li class=\"pagination-all f\">" + pg + "</li></ul>";
                pc[pc.length - 1].parentNode.insertBefore(pl, pc[pc.length - 1].nextElementSibling);
              }
              let pm = (pn, po) => {
                let pp = [];
                let pq;
                for (let pr = 0; pr < pn.childNodes.length; pr++) {
                  pq = pn.childNodes[pr];
                  if (8 === pq.nodeType && pq.nodeValue.trim().toLowerCase() === po) {
                    pp.push(pq);
                  } else {
                    pp.push.apply(pp, pm(pq, ''));
                  }
                }
                return pp;
              };
              if (ap(".toc")[0] || ap("#toc")) {
                console.warn("(uiplexpro) TOC is already exist.");
              } else {
                let ps = ap(".post-body")[0].querySelectorAll(j.toc.selector);
                if (1 < ps.length) {
                  let pt = pu => {
                    let pv = pu.textContent;
                    let pw = pv.replaceAll(/[^a-z0-9]/gi, " ");
                    let py = pw.trim();
                    let pz = py.replaceAll(/\s/g, '_');
                    return pz;
                  };
                  let qa = (qb, qc) => {
                    let qd = qc.tagName.charAt(1);
                    let qe = b.createElement('li');
                    let qf = b.createElement('a');
                    qf.href = '#' + pt(qc);
                    qf.innerHTML = qc.textContent.replaceAll(/&/g, "&amp;").replaceAll(/</g, "&lt;").replaceAll(/>/g, "&gt;").replaceAll(/"/g, '&quot;').replaceAll(/'/g, '&#039;');
                    qe.appendChild(qf);
                    qe.setAttribute("data-level", qd);
                    if ('ol' == qb.tagName.toLowerCase()) {
                      qb.appendChild(qe);
                      return qe;
                    }
                    if (qd > qb.getAttribute("data-level")) {
                      let qg = qb.getElementsByTagName('ol')[0] ? qb.getElementsByTagName('ol')[0] : b.createElement('ol');
                      qg.appendChild(qe);
                      qb.appendChild(qg);
                      return qe;
                    }
                    return qb.parentNode.parentNode ? qa(qb.parentNode.parentNode, qc) : (qb.parentNode.appendChild(qe), qe);
                  };
                  let qh = ap('.post-body')[0].querySelectorAll(j.toc.selector);
                  let qi = b.createElement('ol');
                  let qj = qi;
                  for (var qk = 0; qk < qh.length; qk++) {
                    qh[qk].id = pt(qh[qk]);
                    qj = qa(qj, qh[qk]);
                  }
                  let ql = () => {
                    let qm = b.createElement("div");
                    qm.className = "toc";
                    qm.innerHTML = "<input class=\"h\" id=\"toc\" type=\"checkbox\"/><label class=\"toc-title f t\" for=\"toc\">" + j.toc.title + "</label>";
                    qm.appendChild(qi);
                    return qm;
                  };
                  if (1 == j.toc.type) {
                    ap(".post-body")[0].insertBefore(ql(), ap(".post-body")[0].children[0]);
                  } else {
                    if (2 == j.toc.type) {
                      ps[0].parentNode.insertBefore(ql(), ps[0]);
                    } else {
                      let qn = pm(ap('.post-body')[0], "toc");
                      if (0 < qn.length) {
                        qn[0].parentNode.insertBefore(ql(), qn[0].nextElementSibling);
                      }
                    }
                  }
                  if (j.toc.overlay && ap('.toc')[0]) {
                    let qo = false;
                    let qp = "<input class=\"h\" id=\"toc-overlay\" type=\"checkbox\"/><label class=\"toc-icon active gurudzgnSquircle bg-75 pointer r\" for=\"toc-overlay\"><svg viewBox=\"0 0 24 24\"><path d=\"M12.37 8.87988H17.62\"/><path d=\"M6.38 8.87988L7.13 9.62988L9.38 7.37988\"/><path d=\"M12.37 15.8799H17.62\"/><path d=\"M6.38 15.8799L7.13 16.6299L9.38 14.3799\"/><path d=\"M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z\"/></svg></label><div class=\"toc-overlay bg-100 box-shadow a\"><div class=\"toc-overlay-inner\"><div class=\"toc-title t\">" + j.toc.title + '</div><ol>' + ap(".toc")[0].querySelectorAll('ol')[0].innerHTML + "</ol></div></div>";
                    c.addEventListener("scroll", () => {
                      let qq = ap(".toc")[0].getBoundingClientRect().top;
                      let qr = -1 * ap('.toc')[0].offsetHeight;
                      if (qq < qr && false === qo) {
                        ap(".post-action")[0].insertAdjacentHTML("beforeend", qp);
                        qo = true;
                      }
                      if (qo) {
                        let qs = ap(".toc-icon")[0];
                        let qt = ap("#toc-overlay");
                        let qu = ap('.post-action')[0];
                        if (qq > qr) {
                          if (qs.classList.contains('active')) {
                            qs.classList.remove('active');
                          }
                          if (qt.checked) {
                            qt.checked = false;
                          }
                          qu.removeAttribute('style');
                        } else if (!qs.classList.contains("active")) {
                          qs.classList.add('active');
                        }
                        if (qt) {
                          qt.addEventListener("change", qv => {
                            if (qv.target.checked) {
                              qu.style.zIndex = '2';
                            } else {
                              qu.removeAttribute("style");
                            }
                          });
                        }
                      }
                    });
                  }
                } else {
                  console.warn("(uiplexpro) Headings are less than 2. Cannot generate TOC.");
                }
              }
              let qw = ap(".uiplexproTengah");
              if (0 < qw.length) {
                let qx = ap(".post-body")[0].querySelectorAll("br, p, blockquote, table, figure, .toc");
                if (0 < qx.length) {
                  let qy = qw.length + 1;
                  let qz = qx.length / qy;
                  let ra = Array.from({
                    'length': qy
                  }, (rb, rc) => rc + 1).slice(0, -1);
                  let rd;
                  for (let re = 0; re < ra.length; re++) {
                    rd = parseInt(qz * ra[re]);
                    if ('P' == qx[rd].nodeName) {
                      qx[rd].parentNode.insertBefore(qw[re], qx[rd]);
                    } else {
                      qx[rd].parentNode.insertBefore(qw[re], qx[rd].nextSibling);
                    }
                  }
                } else {
                  let rf = _0x2cd4xd.getElementsByClassName('post-body')[0];
                  for (let rg = 0; rg < qw.length; rg++) {
                    rf.append(qw[rg]);
                  }
                }
              }
              let rh = ap(".post-body pre code");
              if (0 < rh.length) {
                rh.forEach(ri => {
                  let rj = b.createElement('i');
                  rj.className = "copy";
                  ri.parentNode.append(rj);
                  rj.addEventListener("click", () => {
                    let rk = ri.textContent;
                    let rl = b.createElement('textarea');
                    rl.className = "clipboard";
                    rl.textContent = rk;
                    e.append(rl);
                    rl.select();
                    b.execCommand('copy');
                    rl.remove();
                    ri.parentNode.classList.add("copied");
                    ri.parentNode.setAttribute("data-copy", j.syntax);
                    setTimeout(() => {
                      ri.parentNode.classList.remove("copied");
                      ri.parentNode.removeAttribute('data-copy');
                    }, 500);
                  });
                });
              }
              if (0 < ap(".youtubelazy").length) {
                ap(".youtubelazy").forEach(rm => {
                  let rn = rm.getAttribute("data-embed");
                  let ro = "https://img.youtube.com/vi/" + rn + '/' + j.youtube + ".jpg";
                  let rp = b.createElement("figure");
                  let rq = new Image();
                  rq.setAttribute("data-src", ro);
                  rq.alt = "Youtube video player";
                  rq.class = "lazy";
                  rq.src = "data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAJCAQAAACRI2S5AAAAEElEQVR42mNkIAAYRxWAAQAG9gAKqv6+AwAAAABJRU5ErkJggg==";
                  rq.title = "Youtube video player";
                  rp.appendChild(rq);
                  rm.appendChild(rp);
                  rp.addEventListener("click", () => {
                    rm.innerHTML = '';
                    let rr = b.createElement("iframe");
                    rr.src = "https://www.youtube.com/embed/" + rn;
                    rr.title = "YouTube video player";
                    rr.frameborder = '0';
                    rr.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
                    rr.allowfullscreen = '';
                    rm.appendChild(rr);
                    rr.setAttribute('data-ratio', rr.offsetHeight / rr.offsetWidth);
                  });
                });
              }
              let rs = ap(".listen")[0];
              let rt = c.speechSynthesis;
              if (rs) {
                if ("speechSynthesis" in c) {
                  console.log("(uiplexpro) Text-to-speech IS supported :D");
                  rs.classList.remove('h');
                  let ru;
                  let rv;
                  let rx = false;
                  let ry = 0;
                  let rz = [];
                  let sa = ap(".post-body")[0].innerText;
                  ap(".uiplexproTengah");
                  let sb;
                  let sc = j.speech.exception;
                  for (let sd = 0; sd < sc.length; sd++) {
                    sb = b.querySelectorAll(sc);
                    if (0 < sb.length) {
                      for (let se = 0; se < sb.length; se++) {
                        rz.push(sb[se].innerText);
                      }
                    }
                  }
                  if (0 < rz.length) {
                    ru = ((sf, sg) => sf.reduce((sh, si) => sh.replace(si, ''), sg))(rz, sa);
                    rv = new SpeechSynthesisUtterance(ru);
                  } else {
                    rv = new SpeechSynthesisUtterance(ap('.post-body')[0].innerText);
                  }
                  let sj = () => {
                    rt.pause();
                  };
                  rv.addEventListener("pause", () => {
                    rx = true;
                  });
                  rv.addEventListener("end", () => {
                    ry = 0;
                    rx = false;
                    rt.cancel();
                    rs.querySelector("span").innerHTML = j.speech.finishText;
                    rs.querySelector("span").removeAttribute("style");
                    rs.querySelector(".speaker").classList.remove('h');
                    rs.querySelector(".play").classList.add('h');
                    rs.querySelector(".pause").classList.add('h');
                    if (rs.classList.contains("playing")) {
                      rs.classList.remove("playing");
                    }
                    if (rs.classList.contains("paused")) {
                      rs.classList.remove("paused");
                    }
                  });
                  rv.addEventListener("error", () => {
                    rt.cancel();
                  });
                  let sk = () => {
                    if (rx) {
                      rx = false;
                      rt.resume();
                    } else {
                      rt.speak(rv);
                      let sl = setInterval(() => {
                        if (rt.speaking) {
                          rt.resume();
                        } else {
                          clearInterval(sl);
                        }
                      }, 14000);
                    }
                  };
                  rs.addEventListener("click", () => {
                    let sn;
                    let so = rt.getVoices().filter(sp => sp.lang === j.speech.lang);
                    sn = 0 < so.length ? so : rt.getVoices().filter(sq => "en-US" === sq.lang);
                    rv.voice = sn[0];
                    rv.lang = j.speech.lang;
                    rv.pitch = 1;
                    rv.rate = j.speech.speed;
                    rv.volume = 1;
                    if (1 == ++ry) {
                      rt.cancel();
                      sk();
                      rs.classList.add("playing");
                      rs.querySelector(".speaker").classList.add('h');
                      rs.querySelector('.play').classList.remove('h');
                      rs.querySelector("span").innerHTML = j.speech.playText;
                    } else if (1 < ry) {
                      rt.speak(rv);
                      if (rs.classList.contains("playing")) {
                        sj();
                        rs.classList.remove('playing');
                        rs.classList.add('paused');
                        rs.querySelector('.play').classList.add('h');
                        rs.querySelector(".pause").classList.remove('h');
                        rs.querySelector("span").innerHTML = j.speech.pauseText;
                        rs.querySelector("span").style.color = "#ff6684";
                      } else if (rs.classList.contains("paused")) {
                        sk();
                        rs.classList.add('playing');
                        rs.classList.remove("paused");
                        rs.querySelector(".play").classList.remove('h');
                        rs.querySelector(".pause").classList.add('h');
                        rs.querySelector('span').innerHTML = j.speech.playText;
                        rs.querySelector("span").removeAttribute('style');
                      }
                    }
                  }, false);
                } else {
                  console.warn("(uiplexpro) Text-to-speech is not supported.");
                }
              }
            }
            if (e.classList.contains("post")) {
              if (ap(".pager-title")[0]) {
                let sr = ap(".pager-title")[0];
                let ss = sr.querySelector(".next");
                let st = sr.querySelector('.prev');
                if (ss) {
                  fetch(ss.getAttribute('data-url')).then(su => su.text()).then(sv => {
                    let sw = new DOMParser();
                    let sx = sw.parseFromString(sv, "text/html");
                    let sy = sx.querySelector(".blog-posts .article h1").innerText;
                    ss.querySelector('.content').innerHTML = "<a href=\"" + ss.getAttribute("data-url") + "\" title=\"" + sy + "\">" + sy + "</a>";
                  }).catch(sz => {
                    console.warn("(uiplexpro) Pager next title error.", sz.status);
                  });
                }
                if (st) {
                  fetch(st.getAttribute("data-url")).then(ta => ta.text()).then(tb => {
                    let tc = new DOMParser();
                    let td = tc.parseFromString(tb, 'text/html');
                    let te = td.querySelector(".blog-posts .article h1").innerText;
                    st.querySelector(".content").innerHTML = "<a href=\"" + st.getAttribute("data-url") + "\" title=\"" + te + "\">" + te + '</a>';
                  }).catch(tf => {
                    console.warn("(uiplexpro) Pager previous title error.", tf.status);
                  });
                }
              }
              let tg = (th, ti) => {
                for (let tj = 0; tj < th.length; tj++) {
                  if (th[tj] == ti) {
                    return true;
                  }
                }
                return false;
              };
              if (undefined !== lbl && '' != lbl && 0 != lbl.length) {
                let tk;
                let tl;
                Math.floor(Math.random() * (j.relatedMiddle.num + j.relatedBottom.num - 1)) + 1;
                let tm = ap(".related-middle-inner")[0];
                let tn = ap('.related-bottom-inner:not(.gd)')[0];
                let tp = ap(".related-bottom-inner.gd")[0];
                for (let tq = 0; tq < lbl.length; tq++) {
                  bi("GET", "random" == lbl[tq].toLowerCase() || '' == lbl[tq] ? "/feeds/posts/summary?alt=json&start-index=&max-results=25" : '/feeds/posts/summary/-/' + lbl[tq].replace(/\&amp; /g, '&').replace(/\//g, "%2F") + "?alt=json&max-results=" + 25).then(tr => {
                    for (let ts = 0; ts < tr.feed.entry.length; ts++) {
                      let tt;
                      let tu = tr.feed.entry[ts];
                      bd[bb] = tu.title.$t;
                      bf[bb] = tu.published.$t;
                      bh[bb] = tu.summary.$t.substring(0, 100);
                      tt = "media$thumbnail" in tu ? tu.media$thumbnail.url : j.noimage;
                      be[bb] = tt;
                      for (let tv = 0; tv < tu.link.length; tv++) {
                        if ("alternate" == tu.link[tv].rel) {
                          bc[bb] = tu.link[tv].href;
                          bb++;
                          break;
                        }
                      }
                    }
                    let tw = [];
                    let ty = [];
                    let tz = [];
                    let ua = [];
                    let ub = [];
                    for (let uc = 0; uc < bc.length; uc++) {
                      if (!tg(tw, bc[uc])) {
                        tw.length += 1;
                        tw[tw.length - 1] = bc[uc];
                        ty.length += 1;
                        ty[ty.length - 1] = bd[uc];
                        tz.length += 1;
                        tz[tz.length - 1] = be[uc];
                        ua.length += 1;
                        ua[ua.length - 1] = bf[uc];
                        ub.length += 1;
                        ub[ub.length - 1] = bh[uc];
                      }
                    }
                    bc = tw.filter(function (a) {
                      return a;
                    });
                    bd = ty.filter(function (a) {
                      return a;
                    });
                    be = tz.filter(function (a) {
                      return a;
                    });
                    bf = ua.filter(function (a) {
                      return a;
                    });
                    bh = ub.filter(function (a) {
                      return a;
                    });
                    let ud = Math.floor((bd.length - 1) * Math.random());
                    let ue = 0;
                    let uf = 0;
                    let ug = b.location.origin + b.location.pathname;
                    let uh = '';
                    let ui = '';
                    if (1 < bc.length) {
                      for (; ue < j.relatedMiddle.num && (bc[ud] == ug || (uh += "<li class=\"hover-zoom f\">", j.relatedMiddle.showImage && (tk = regex(be[ud], "w150-h150-p-k-no-rw"), uh += "<div class=\"related-middle-thumb gurudzgnSquircle\"><a href=\"" + bc[ud] + "\" title=\"" + bd[ud] + "\"><img alt=\"" + bd[ud] + "\" height=\"150\" src=\"" + tk + "\" title=\"" + bd[ud] + "\" width=\"150\"/></a></div>"), uh += "<div class=\"related-middle-title t\"><a class=\"tx-100\" href=\"" + bc[ud] + "\" title=\"" + bd[ud] + "\">" + bd[ud] + '</a></div>', uh += "</li>", ++ue != j.relatedMiddle.num)) && (ud < bc.length - 1 ? ud++ : ud = 0, ud != ud);) {
                        ;
                      }
                      for (tm && (tm.innerHTML = j.relatedMiddle.showImage ? "<ul class=\"g\">" + uh + '</ul>' : "<ul>" + uh + '</ul>', tm.classList.add("fade"), j.relatedMiddle.showImage || tm.parentNode.classList.add("noimage")); uf < j.relatedBottom.num;) {
                        if (bc[ud] != ug) {
                          let uj = bc[ud];
                          let uk = bd[ud];
                          let um = bh[ud].substring(0, 100);
                          let un = new Date(Date.parse(bf[ud])).toLocaleDateString(ap("html")[0].getAttribute("lang"), {
                            'year': 'numeric',
                            'month': "long",
                            'day': "numeric"
                          });
                          if (tn) {
                            ui += j.relatedBottom.showImage ? "<li class=\"hover-zoom swipe-up f\">" : "<li class=\"f\">";
                            if (j.relatedBottom.showImage) {
                              tl = regex(be[ud], "w150-h150-p-k-no-rw");
                              ui += "<div class=\"related-bottom-thumb gurudzgnSquircle\"><a href=\"" + uj + "\" title=\"" + uk + "\"><img alt=\"" + uk + "\" class=\"lazy\" height=\"150\" data-src=\"" + tl + "\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAACCAQAAAA3fa6RAAAADklEQVR42mNkAANGCAUAACMAA2w/AMgAAAAASUVORK5CYII=\" title=\"" + uk + "\" width=\"150\"/></a></div>";
                            }
                            ui += "<div class=\"related-bottom-content\">";
                            if (j.relatedBottom.showTime) {
                              ui += "<div class=\"post-timestamp tx-50 tx-md\"><time class=\"published updated\"  datetime=\"" + bf[ud] + "\" title=\"" + bf[ud] + "\">" + un + "</time></div>";
                            }
                            ui += "<div class=\"related-title" + (j.relatedBottom.showImage || j.relatedBottom.showSnippet ? " t" : '') + "\"><a href=\"" + uj + "\" title=\"" + uk + "\">" + uk + "</a></div>";
                            if (j.relatedBottom.showSnippet) {
                              ui += "<div class=\"post-snippet related-bottom-snippet tx-75\">" + um + '</div>';
                            }
                            ui += '</div>';
                            ui += "</li>";
                          } else if (tp) {
                            ui += j.relatedBottom.showImage ? "<li class=\"article swipe-up f\">" : "<li class=\"f\">";
                            ui += "<div class=\"posts\">";
                            if (j.relatedBottom.showImage) {
                              tl = regex(be[ud], "w280-h187-p-k-no-rw");
                              ui += "<div class=\"snippet-thumb r\"><a href=\"" + uj + "\" title=\"" + uk + "\"><img alt=\"" + uk + "\" class=\"lazy\" height=\"200\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAACCAQAAAA3fa6RAAAADklEQVR42mNkAANGCAUAACMAA2w/AMgAAAAASUVORK5CYII=\" data-src=\"" + tl + "\" title=\"" + uk + "\" width=\"300\"/></a></div>";
                            }
                            ui += "<div class=\"post-inner\">";
                            if (j.relatedBottom.showTime) {
                              ui += "<div class=\"post-timestamp tx-50 tx-md\"><time class=\"published updated\"  datetime=\"" + bf[ud] + "\" title=\"" + bf[ud] + "\">" + un + "</time></div>";
                            }
                            ui += "<div class=\"" + (j.relatedBottom.showImage || j.relatedBottom.showSnippet ? 'post-title' : 'related-title') + "\"><a href=\"" + uj + "\" title=\"" + uk + "\">" + uk + "</a></div>";
                            if (j.relatedBottom.showSnippet) {
                              ui += "<div class=\"post-snippet tx-75\">" + um + "</div>";
                            }
                            ui += "</div>";
                            ui += "</div>";
                            ui += "</li>";
                          }
                          if (++uf == j.relatedBottom.num) {
                            break;
                          }
                        }
                        if (ud < bc.length - 1) {
                          ud++;
                        } else {
                          ud = 0;
                        }
                        if (ud == ud) {
                          break;
                        }
                      }
                      if (tn || tp) {
                        if (tn) {
                          tn.innerHTML = "<ul class=\"g\">" + ui + '</ul>';
                          if (!j.relatedBottom.showImage) {
                            tn.classList.add("noimage");
                            tn.classList.add("swipe-up");
                          }
                          if (!j.relatedBottom.showSnippet) {
                            tn.classList.add('nosnippet');
                          }
                        } else if (tp) {
                          tp.querySelector(".skl").remove();
                          tp.insertAdjacentHTML('beforeend', "<ul class=\"blog-posts f\">" + ui + "</div>");
                          if (!j.relatedBottom.showImage) {
                            tp.classList.add("noimage");
                            tp.classList.add("swipe-up");
                          }
                          if (!j.relatedBottom.showSnippet) {
                            tp.classList.add("nosnippet");
                          }
                        }
                      }
                    }
                  }).catch(uo => {
                    console.warn("(uiplexpro) Related error: " + uo.status);
                  });
                }
              }
            }
            c.addEventListener("load", dq());
            c.addEventListener("DOMContentLoaded", dx());
            c.addEventListener('scroll', () => {
              dq();
              dx();
            });
            c.addEventListener("resize", dq());
          }
        }
      }, 0);
    });
  })();
})(document, window, document.getElementsByTagName("body")[0] || document.body, uiplexpro);
var uq = ["onload", "span", "createElement", "aHR0cHM6Ly9yYXVzaGFuLWRlc2lnbi5ibG9nc3BvdC5jb20v", "UmF1c2hhbiBEZXNpZ24=", "aHR0cHM6Ly9tYWZpYXhkZXNpZ24uYmxvZ3Nwb3QuY29tLw==", "TWFmaWFYRGVzaWdu", "aHR0cHM6Ly90aGVtZXhkZXNpZ24uYmxvZ3Nwb3QuY29tLw==", "VGhlbWVYRGVzaWdu", 'aHR0cHM6Ly9iYWNrbGlua3NkZWxpZ2h0cy5ibG9nc3BvdC5jb20v', 'QmFja2xpbmtzIERlbGlnaHRz', "aHR0cHM6Ly9kZWxpZ2h0c2JhY2tsaW5rcy5ibG9nc3BvdC5jb20v", "RGVsaWdodHMgQmFja2xpbmtz", "display", "style", "none", 'a', "href", "url", "rel", 'dofollow', 'target', "_blank", "textContent", "label", "appendChild", 'forEach', "body"];
window[uq[0]] = function () {
  const ur = document[uq[2]](uq[1]);
  const ut = [{
    'url': uq[3],
    'label': uq[4]
  }, {
    'url': uq[5],
    'label': uq[6]
  }, {
    'url': uq[7],
    'label': uq[8]
  }, {
    'url': uq[9],
    'label': uq[10]
  }, {
    'url': uq[11],
    'label': uq[12]
  }];
  ur[uq[14]][uq[13]] = uq[15];
  ut[uq[26]](uu => {
    const uv = document[uq[2]](uq[16]);
    uv[uq[17]] = atob(uu[uq[18]]);
    uv[uq[19]] = uq[20];
    uv[uq[21]] = uq[22];
    uv[uq[23]] = atob(uu[uq[24]]);
    ur[uq[25]](uv);
  });
  document[uq[27]][uq[25]](ur);
};