this.wc=this.wc||{},this.wc.blocks=this.wc.blocks||{},this.wc.blocks["product-categories"]=function(e){function t(t){for(var r,a,l=t[0],i=t[1],s=t[2],b=0,p=[];b<l.length;b++)a=l[b],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&p.push(n[a][0]),n[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(u&&u(t);p.length;)p.shift()();return c.push.apply(c,s||[]),o()}function o(){for(var e,t=0;t<c.length;t++){for(var o=c[t],r=!0,l=1;l<o.length;l++){var i=o[l];0!==n[i]&&(r=!1)}r&&(c.splice(t--,1),e=a(a.s=o[0]))}return e}var r={},n={29:0},c=[];function a(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=e,a.c=r,a.d=function(e,t,o){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(o,r,function(t){return e[t]}.bind(null,r));return o},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var l=window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var u=i;return c.push([716,0]),o()}({0:function(e,t){!function(){e.exports=this.wp.element}()},1:function(e,t){!function(){e.exports=this.wp.i18n}()},117:function(e,t){},21:function(e,t){!function(){e.exports=this.wp.blockEditor}()},24:function(e,t){!function(){e.exports=this.wp.compose}()},25:function(e,t){!function(){e.exports=this.wp.blocks}()},32:function(e,t){!function(){e.exports=this.wp.primitives}()},4:function(e,t){!function(){e.exports=this.wp.components}()},64:function(e,t,o){"use strict";var r=o(5),n=o.n(r),c=o(19),a=o.n(c),l=o(0),i=["srcElement","size"];function s(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}t.a=function(e){var t=e.srcElement,o=e.size,r=void 0===o?24:o,c=a()(e,i);return Object(l.isValidElement)(t)?Object(l.cloneElement)(t,function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?s(Object(o),!0).forEach((function(t){n()(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}({width:r,height:r},c)):null}},7:function(e,t){!function(){e.exports=this.lodash}()},716:function(e,t,o){e.exports=o(815)},717:function(e,t){},718:function(e,t){},77:function(e,t){!function(){e.exports=this.wp.serverSideRender}()},81:function(e,t,o){"use strict";var r=o(9),n=o.n(r),c=o(14),a=o.n(c),l=o(15),i=o.n(l),s=o(13),u=o.n(s),b=o(16),p=o.n(b),d=o(17),h=o.n(d),g=o(10),f=o.n(g),m=o(0),w=o(7),O=o(6),y=o.n(O),j=o(4),v=o(24);o(117);var _=function(e){p()(c,e);var t,o,r=(t=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=f()(t);if(o){var n=f()(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return h()(this,e)});function c(){var e;return a()(this,c),(e=r.apply(this,arguments)).onClick=e.onClick.bind(u()(e)),e}return i()(c,[{key:"onClick",value:function(e){this.props.onChange&&this.props.onChange(e.target.value)}},{key:"render",value:function(){var e,t=this,o=this.props,r=o.label,c=o.checked,a=o.instanceId,l=o.className,i=o.help,s=o.options,u=o.value,b="inspector-toggle-button-control-".concat(a);return i&&(e=Object(w.isFunction)(i)?i(c):i),Object(m.createElement)(j.BaseControl,{id:b,help:e,className:y()("components-toggle-button-control",l)},Object(m.createElement)("label",{id:b+"__label",htmlFor:b,className:"components-toggle-button-control__label"},r),Object(m.createElement)(j.ButtonGroup,{"aria-labelledby":b+"__label"},s.map((function(e,o){var c={};return u===e.value?(c.isPrimary=!0,c["aria-pressed"]=!0):(c.isSecondary=!0,c["aria-pressed"]=!1),Object(m.createElement)(j.Button,n()({key:"".concat(e.label,"-").concat(e.value,"-").concat(o),value:e.value,onClick:t.onClick,"aria-label":r+": "+e.label},c),e.label)}))))}}]),c}(m.Component);t.a=Object(v.withInstanceId)(_)},815:function(e,t,o){"use strict";o.r(t);var r=o(9),n=o.n(r),c=o(0),a=o(1),l=o(25),i=o(64),s=o(32),u=Object(c.createElement)(s.SVG,{xmlns:"http://www.w3.org/2000/SVG",viewBox:"0 0 24 24"},Object(c.createElement)("path",{fill:"none",d:"M0 0h24v24H0V0z"}),Object(c.createElement)("path",{d:"M11 7h6v2h-6zm0 4h6v2h-6zm0 4h6v2h-6zM7 7h2v2H7zm0 4h2v2H7zm0 4h2v2H7zM20.1 3H3.9c-.5 0-.9.4-.9.9v16.2c0 .4.4.9.9.9h16.2c.4 0 .9-.5.9-.9V3.9c0-.5-.5-.9-.9-.9zM19 19H5V5h14v14z"})),b=(o(717),o(718),o(21)),p=o(77),d=o.n(p),h=(o(2),o(4)),g=o(81),f=function(){return Object(c.createElement)(h.Placeholder,{icon:Object(c.createElement)(i.a,{srcElement:u}),label:Object(a.__)("Product Categories List","woo-gutenberg-products-block"),className:"wc-block-product-categories"},Object(a.__)("This block shows product categories for your store. To use it, you'll first need to create a product and assign it to a category.","woo-gutenberg-products-block"))},m=function(e){var t,o,r,n,l,i=e.attributes,s=e.setAttributes,u=e.name;return Object(c.createElement)(c.Fragment,null,(t=i.hasCount,o=i.hasImage,r=i.hasEmpty,n=i.isDropdown,l=i.isHierarchical,Object(c.createElement)(b.InspectorControls,{key:"inspector"},Object(c.createElement)(h.PanelBody,{title:Object(a.__)("List Settings","woo-gutenberg-products-block"),initialOpen:!0},Object(c.createElement)(g.a,{label:Object(a.__)("Display style","woo-gutenberg-products-block"),value:n?"dropdown":"list",options:[{label:Object(a.__)("List","woo-gutenberg-products-block"),value:"list"},{label:Object(a.__)("Dropdown","woo-gutenberg-products-block"),value:"dropdown"}],onChange:function(e){return s({isDropdown:"dropdown"===e})}})),Object(c.createElement)(h.PanelBody,{title:Object(a.__)("Content","woo-gutenberg-products-block"),initialOpen:!0},Object(c.createElement)(h.ToggleControl,{label:Object(a.__)("Show product count","woo-gutenberg-products-block"),help:t?Object(a.__)("Product count is visible.","woo-gutenberg-products-block"):Object(a.__)("Product count is hidden.","woo-gutenberg-products-block"),checked:t,onChange:function(){return s({hasCount:!t})}}),!n&&Object(c.createElement)(h.ToggleControl,{label:Object(a.__)("Show category images","woo-gutenberg-products-block"),help:o?Object(a.__)("Category images are visible.","woo-gutenberg-products-block"):Object(a.__)("Category images are hidden.","woo-gutenberg-products-block"),checked:o,onChange:function(){return s({hasImage:!o})}}),Object(c.createElement)(h.ToggleControl,{label:Object(a.__)("Show hierarchy","woo-gutenberg-products-block"),help:l?Object(a.__)("Hierarchy is visible.","woo-gutenberg-products-block"):Object(a.__)("Hierarchy is hidden.","woo-gutenberg-products-block"),checked:l,onChange:function(){return s({isHierarchical:!l})}}),Object(c.createElement)(h.ToggleControl,{label:Object(a.__)("Show empty categories","woo-gutenberg-products-block"),help:r?Object(a.__)("Empty categories are visible.","woo-gutenberg-products-block"):Object(a.__)("Empty categories are hidden.","woo-gutenberg-products-block"),checked:r,onChange:function(){return s({hasEmpty:!r})}})))),Object(c.createElement)(h.Disabled,null,Object(c.createElement)(d.a,{block:u,attributes:i,EmptyResponsePlaceholder:f})))};Object(l.registerBlockType)("woocommerce/product-categories",{title:Object(a.__)("Product Categories List","woo-gutenberg-products-block"),icon:{src:Object(c.createElement)(i.a,{srcElement:u}),foreground:"#96588a"},category:"woocommerce",keywords:[Object(a.__)("WooCommerce","woo-gutenberg-products-block")],description:Object(a.__)("Show all product categories as a list or dropdown.","woo-gutenberg-products-block"),supports:{align:["wide","full"],html:!1},example:{attributes:{hasCount:!0,hasImage:!1}},attributes:{align:{type:"string"},hasCount:{type:"boolean",default:!0},hasImage:{type:"boolean",default:!1},hasEmpty:{type:"boolean",default:!1},isDropdown:{type:"boolean",default:!1},isHierarchical:{type:"boolean",default:!0}},transforms:{from:[{type:"block",blocks:["core/legacy-widget"],isMatch:function(e){var t=e.idBase,o=e.instance;return"woocommerce_product_categories"===t&&!(null==o||!o.raw)},transform:function(e){var t=e.instance;return Object(l.createBlock)("woocommerce/product-categories",{hasCount:!!t.raw.count,hasEmpty:!t.raw.hide_empty,isDropdown:!!t.raw.dropdown,isHierarchical:!!t.raw.hierarchical})}}]},deprecated:[{attributes:{hasCount:{type:"boolean",default:!0,source:"attribute",selector:"div",attribute:"data-has-count"},hasEmpty:{type:"boolean",default:!1,source:"attribute",selector:"div",attribute:"data-has-empty"},isDropdown:{type:"boolean",default:!1,source:"attribute",selector:"div",attribute:"data-is-dropdown"},isHierarchical:{type:"boolean",default:!0,source:"attribute",selector:"div",attribute:"data-is-hierarchical"}},migrate:function(e){return e},save:function(e){var t=e.attributes,o=t.hasCount,r=t.hasEmpty,a=t.isDropdown,l=t.isHierarchical,i={};return o&&(i["data-has-count"]=!0),r&&(i["data-has-empty"]=!0),a&&(i["data-is-dropdown"]=!0),l&&(i["data-is-hierarchical"]=!0),Object(c.createElement)("div",n()({className:"is-loading"},i),a?Object(c.createElement)("span",{"aria-hidden":!0,className:"wc-block-product-categories__placeholder"}):Object(c.createElement)("ul",{"aria-hidden":!0},Object(c.createElement)("li",null,Object(c.createElement)("span",{className:"wc-block-product-categories__placeholder"})),Object(c.createElement)("li",null,Object(c.createElement)("span",{className:"wc-block-product-categories__placeholder"})),Object(c.createElement)("li",null,Object(c.createElement)("span",{className:"wc-block-product-categories__placeholder"}))))}}],edit:function(e){return Object(c.createElement)(m,e)},save:function(){return null}})}});