(()=>{var o={n:n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return o.d(e,{a:e}),e},d:(n,e)=>{for(var r in e)o.o(e,r)&&!o.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},o:(o,n)=>Object.prototype.hasOwnProperty.call(o,n),r:o=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})}},n={};(()=>{"use strict";o.r(n),o.d(n,{extend:()=>E});const e=flarum.core.compat["forum/app"];var r=o.n(e);const s=flarum.core.compat["common/extend"],t=flarum.core.compat["forum/utils/UserControls"];var a=o.n(t);const i=flarum.core.compat["common/components/Button"];var c=o.n(i);const u=flarum.core.compat["forum/components/CommentPost"];var f=o.n(u);const l=flarum.core.compat["common/components/LinkButton"];var d=o.n(l);const p=flarum.core.compat["forum/components/UserPage"];var g=o.n(p);const h=flarum.core.compat["common/models/Discussion"];var v=o.n(h);const b=flarum.core.compat["common/models/User"];var y=o.n(b);const _=flarum.core.compat["common/components/Badge"];var U=o.n(_);const P=flarum.core.compat["common/components/FieldSet"];var x=o.n(P);const B=flarum.core.compat["common/components/SettingsPage"];var N=o.n(B);const w=flarum.core.compat["common/components/Switch"];var S=o.n(w);const k=flarum.core.compat["common/utils/ItemList"];var O=o.n(k);const I=flarum.core.compat["common/extenders"];var j=o.n(I);function D(o,n){return D=Object.setPrototypeOf||function(o,n){return o.__proto__=n,o},D(o,n)}const L=flarum.core.compat["common/helpers/avatar"];var M=o.n(L);const C=flarum.core.compat["common/helpers/username"];var A=o.n(C);const T=flarum.core.compat["common/utils/Stream"];var z=o.n(T);const F=flarum.core.compat["common/components/Placeholder"];var G=o.n(F);const H=flarum.core.compat["common/components/LoadingIndicator"];var R=o.n(H),q=function(o){var n,e;function s(){return o.apply(this,arguments)||this}e=o,(n=s).prototype=Object.create(e.prototype),n.prototype.constructor=n,D(n,e);var t=s.prototype;return t.oninit=function(n){o.prototype.oninit.call(this,n),this.loading=!0,this.ignoredUsers=r().session.user.ignoredUsers(),this.loadUser(r().session.user.username()),this.loading=!1},t.content=function(){var o=this;return this.loading?m("div",{className:"DiscussionList"},m(R(),null)):0===this.ignoredUsers.length?m("div",{className:"DiscussionList"},m(G(),{text:r().translator.trans("fof-ignore-users.forum.profile_page.no_ignored")})):m("table",{className:"NotificationGrid"},this.ignoredUsers.map((function(n,e){return m("tr",null,m("td",null,m("a",{href:r().route.user(n),config:m.route},m("h3",null,M()(n,{className:"ignorePage-avatar"})," ",A()(n)))),m("td",{className:"ignorePage-button"},c().component({icon:"fas fa-comment",type:"button",className:"Button Button--warning",onclick:function(){confirm(r().translator.trans("fof-ignore-users.forum.user_controls.unignore_confirmation"))&&(n.save({ignored:!1}),o.ignoredUsers.splice(e,1),r().session.user.ignoredUsers=z()(o.ignoredUsers))}.bind(n)},r().translator.trans("fof-ignore-users.forum.user_controls.unignore_button"))))})))},t.show=function(o){this.user=r().session.user,m.redraw()},s}(g());const E=[new(j().Model)(y()).attribute("ignored").hasMany("ignoredUsers").attribute("canBeIgnored"),(new(j().Routes)).add("user.ignoredUsers","/ignoredUsers",q)];r().initializers.add("fof-ignore-users",(function(){(0,s.extend)(a(),"userControls",(function(o,n){r().session.user!==n&&r().session.user&&n.canBeIgnored()&&(n.ignored()?o.add("unignore",m(c(),{icon:"fas fa-comment",onclick:function(){confirm(r().translator.trans("fof-ignore-users.forum.user_controls.unignore_confirmation"))&&this.save({ignored:!1})}.bind(n)},r().translator.trans("fof-ignore-users.forum.user_controls.unignore_button"))):o.add("ignore",m(c(),{icon:"fas fa-comment-slash",onclick:function(){confirm(r().translator.trans("fof-ignore-users.forum.user_controls.ignore_confirmation"))&&this.save({ignored:!0})}.bind(n)},r().translator.trans("fof-ignore-users.forum.user_controls.ignore_button"))))})),(0,s.extend)(f().prototype,"elementAttrs",(function(o){var n=this.attrs.post.user();return n&&n.ignored()&&(o.className+=" Post--hidden"),o})),(0,s.extend)(f().prototype,"headerItems",(function(o){var n=this.attrs.post;!n.isHidden()&&n.user()&&n.user().ignored()&&o.add("ignore-toggle",c().component({className:"Button Button--default Button--more",icon:"fas fa-ellipsis-h",onclick:this.toggleContent.bind(this)}))})),(0,s.extend)(g().prototype,"navItems",(function(o){r().session.user&&r().session.user===this.user&&o.add("ignored-users",m(d(),{href:r().route("user.ignoredUsers"),icon:"fas fa-user-slash"},r().translator.trans("fof-ignore-users.forum.profile_link")))})),(0,s.extend)(v().prototype,"badges",(function(o){var n;this.user()&&this.user().ignored()&&(n=U().component({label:r().translator.trans("fof-ignore-users.forum.badge.discussion_label"),icon:"fas fa-user-slash",type:"ignored"})),n&&o.add("user-discussion-ignored",n)})),(0,s.extend)(y().prototype,"badges",(function(o){var n;this.ignored()&&(n=U().component({label:r().translator.trans("fof-ignore-users.forum.badge.user_label"),icon:"fas fa-user-slash",type:"ignored"})),n&&o.add("user-ignored",n)})),(0,s.extend)(N().prototype,"settingsItems",(function(o){o.add("check-ignore-discussion",x().component({label:app.translator.trans("fof-ignore-users.forum.settings.discussion"),className:"ignore-discussion"},this.ignorediscussion().toArray()))})),N().prototype.ignorediscussion=function(){var o=this,n=new(O());return n.add("check-ignore-discussion",S().component({state:this.user.preferences().ignoreDiscussion,onchange:function(n){o.ignoreDiscussion=n,o.user.savePreferences({ignoreDiscussion:n}).then((function(){m.redraw()}))}},app.translator.trans("fof-ignore-users.forum.settings.discussion"))),n}}))})(),module.exports=n})();
//# sourceMappingURL=forum.js.map