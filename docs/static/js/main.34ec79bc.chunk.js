(this.webpackJsonprhm=this.webpackJsonprhm||[]).push([[0],{146:function(e,n,t){},154:function(e,n,t){"use strict";t.r(n);var c=t(1),i=t.n(c),a=t(51),r=t.n(a),s=t(7),l=t(10),j=(t(145),t(146),t(170)),o=t(169),u=t(168),d=t(175),b=t(174),x=t(171),O=t(173);function h(e,n,t,c){for(var i=t.find((function(e){return e.index===c})),a=function(){if(!i)return{v:i};var c=i,a=c.indexPrev,r=c.changeList;if(c.releaseList.find((function(e){return e.customerIndexList.includes(n)})))return"break";e.unshift.apply(e,Object(s.a)(r.filter((function(e){var t=e.customerIndexList;return!t.length||t.includes(n)})))),i=t.find((function(e){return e.index===a}))};i;){var r=a();if("break"===r)break;if("object"===typeof r)return r.v}return i}function f(e){return e.sort((function(e,n){return e-n})).reduce((function(e,n){return n===e?e+1:e}),0)}function v(e){return e.replace(/^/gm,"    ")}function p(e,n,t,c,i){var a=[-1].concat(Object(s.a)(t.map((function(e){return e.index}))));console.log(i.name),console.group();var r=[];a.forEach((function(t){r.push({lineupIndex:t,releaseHistory:m(e,n,t,c,i)})}));var l=r.filter((function(e){return e.releaseHistory})).map((function(e){var n=e.lineupIndex,c=e.releaseHistory,i=t.find((function(e){return e.index===n}));if(i){var a=i.name;return"<".concat(a,">\n").concat(v(c),"\n</").concat(a,">")}return v(c)})).join("\n");return console.groupEnd(),l}function m(e,n,t,c,i){for(var a=e.find((function(e){return e.index===n})),r=i.index,l=[];a;){var j=a,o=j.name,u=j.indexPrev,d=j.changeList,b=j.releaseList;console.log("Version: ".concat(o,". Previous version: ").concat(u)),console.group();var x=b.find((function(e){if(!e.customerIndexList.includes(r))return!1;var n=e.pkgIndex;return!!c.find((function(e){return e.lineupIndex===t&&e.index===n}))}));if(console.log(x),x){if("break"===function(){var n=x.pkgIndex,t=c.find((function(e){return e.index===n}));if(!t)return"break";var i=t.name,j=t.lineupIndex,o=Object(s.a)(d.filter((function(e){var n=e.customerIndexList,t=e.lineupIndex;return(!n.length||n.includes(r))&&j===t})));a=h(o,r,e,u),l.unshift({pkgName:i,changeList:o})}())break}else a=void 0;console.groupEnd()}return l.map((function(e,n){var t=e.pkgName,c=e.changeList,i=0===n?"[Description]\n".concat(v("- Initial release")):c.map((function(e){var n=e.description,t=e.beforeChange,c=e.afterChange,i=["[Description]",v(n)];return t&&(i.push(v("[Before change]")),i.push(v(v(t)))),c&&(i.push(v("[After change]")),i.push(v(v(c)))),i.join("\n")})).join("\n");return"".concat(t,"\n").concat(v(i))})).join("\n")}var C=t(0);function g(e){var n=e.title,t=e.enumList,i=e.onChange,a=e.usedIndexList,r=Object(c.useState)(-1),j=Object(l.a)(r,2),u=j[0],d=j[1],b=Object(c.useState)(""),h=Object(l.a)(b,2),v=h[0],p=h[1],m=Object(c.useState)(""),g=Object(l.a)(m,2),L=g[0],k=g[1];function I(){if(v&&!t.find((function(e){return e.name===v}))){var e=f(t.map((function(e){return e.index}))),n=[].concat(Object(s.a)(t),[{index:e,name:v}]).sort((function(e,n){return e.name.localeCompare(n.name)}));i(n),p("")}}function S(e){if(L&&!t.find((function(n){return n.index!==e&&n.name===L}))){var n=t.findIndex((function(n){return n.index===e}));if(-1!==n){var c=[].concat(Object(s.a)(t.slice(0,n)),[{index:e,name:L}],Object(s.a)(t.slice(n+1)));i(c),d(-1)}}}return Object(C.jsxs)(x.a,{celled:!0,compact:!0,selectable:!0,children:[Object(C.jsx)(x.a.Header,{children:Object(C.jsxs)(x.a.Row,{children:[Object(C.jsx)(x.a.HeaderCell,{children:n}),Object(C.jsx)(x.a.HeaderCell,{children:"Actions"})]})}),Object(C.jsxs)(x.a.Body,{children:[Object(C.jsxs)(x.a.Row,{active:!0,children:[Object(C.jsx)(x.a.Cell,{children:Object(C.jsx)(o.a,{onSubmit:I,children:Object(C.jsx)(o.a.Field,{disabled:-1!==u,children:Object(C.jsx)("input",{value:v,onChange:function(e){return p(e.target.value)}})})})}),Object(C.jsx)(x.a.Cell,{children:Object(C.jsx)(O.a,{icon:"plus",size:"tiny",onClick:I,disabled:-1!==u})})]}),t.map((function(e){var n=e.index,c=e.name;return n===u?Object(C.jsxs)(x.a.Row,{children:[Object(C.jsx)(x.a.Cell,{children:Object(C.jsx)(o.a,{onSubmit:function(){return S(n)},children:Object(C.jsx)(o.a.Field,{children:Object(C.jsx)("input",{value:L,onChange:function(e){return k(e.target.value)}})})})}),Object(C.jsxs)(x.a.Cell,{children:[Object(C.jsx)(O.a,{icon:"check",size:"tiny",onClick:function(){return S(n)}}),Object(C.jsx)(O.a,{icon:"cancel",size:"tiny",onClick:function(){return d(-1)}})]})]},n):Object(C.jsxs)(x.a.Row,{children:[Object(C.jsx)(x.a.Cell,{children:c}),Object(C.jsxs)(x.a.Cell,{children:[Object(C.jsx)(O.a,{icon:"edit",size:"tiny",onClick:function(){return function(e){var n=t.find((function(n){return n.index===e}));n&&(k(n.name),d(e))}(n)}}),Object(C.jsx)(O.a,{icon:"trash",size:"tiny",onClick:function(){return function(e){if(!a||!a.includes(e)){var n=t.findIndex((function(n){return n.index===e}));if(-1!==n){var c=[].concat(Object(s.a)(t.slice(0,n)),Object(s.a)(t.slice(n+1)));i(c)}}}(n)},disabled:a&&a.includes(n)})]})]},n)}))]})]})}function L(e){var n=e.pkgList,t=e.lineupList,i=e.onChange,a=e.usedPkgIndexList,r=Object(c.useState)(-1),j=Object(l.a)(r,2),u=j[0],d=j[1],b=Object(c.useState)(""),h=Object(l.a)(b,2),v=h[0],p=h[1],m=Object(c.useState)(-1),g=Object(l.a)(m,2),L=g[0],k=g[1],I=Object(c.useState)(""),S=Object(l.a)(I,2),y=S[0],w=S[1],F=Object(c.useState)(-1),z=Object(l.a)(F,2),R=z[0],H=z[1];return Object(C.jsxs)(x.a,{celled:!0,compact:!0,selectable:!0,children:[Object(C.jsx)(x.a.Header,{children:Object(C.jsxs)(x.a.Row,{children:[Object(C.jsx)(x.a.HeaderCell,{children:"Package"}),Object(C.jsx)(x.a.HeaderCell,{children:"Lineup"}),Object(C.jsx)(x.a.HeaderCell,{children:"Actions"})]})}),Object(C.jsxs)(x.a.Body,{children:[Object(C.jsxs)(x.a.Row,{active:!0,children:[Object(C.jsx)(x.a.Cell,{children:Object(C.jsx)(o.a,{children:Object(C.jsx)(o.a.Field,{disabled:-1!==u,children:Object(C.jsx)("input",{value:v,onChange:function(e){return p(e.target.value)}})})})}),Object(C.jsx)(x.a.Cell,{children:Object(C.jsx)(o.a,{children:Object(C.jsx)(o.a.Field,{disabled:-1!==u,children:Object(C.jsxs)("select",{value:L,onChange:function(e){return k(+e.target.value)},children:[Object(C.jsx)("option",{value:-1,children:"(None)"}),t.map((function(e){var n=e.index,t=e.name;return Object(C.jsx)("option",{value:n,children:t},n)}))]})})})}),Object(C.jsx)(x.a.Cell,{children:Object(C.jsx)(O.a,{icon:"plus",size:"tiny",onClick:function(){if(v&&!n.find((function(e){return e.name===v}))){var e=f(n.map((function(e){return e.index}))),t=[].concat(Object(s.a)(n),[{index:e,name:v,lineupIndex:L}]).sort((function(e,n){return e.name.localeCompare(n.name)}));i(t),p("")}},disabled:-1!==u})})]}),n.map((function(e){var c=e.index,r=e.name,l=e.lineupIndex,j=t.find((function(e){return e.index===l})),b=j?j.name:"(None)";return c===u?Object(C.jsxs)(x.a.Row,{children:[Object(C.jsx)(x.a.Cell,{children:Object(C.jsx)(o.a,{children:Object(C.jsx)(o.a.Field,{children:Object(C.jsx)("input",{value:y,onChange:function(e){return w(e.target.value)}})})})}),Object(C.jsx)(x.a.Cell,{children:Object(C.jsx)(o.a,{children:Object(C.jsx)(o.a.Field,{children:Object(C.jsxs)("select",{value:R,onChange:function(e){return H(+e.target.value)},children:[Object(C.jsx)("option",{value:-1,children:"(None)"}),t.map((function(e){var n=e.index,t=e.name;return Object(C.jsx)("option",{value:n,children:t},n)}))]})})})}),Object(C.jsxs)(x.a.Cell,{children:[Object(C.jsx)(O.a,{icon:"check",size:"tiny",onClick:function(){return function(e){if(y&&!n.find((function(n){return n.index!==e&&n.name===y}))){var t=n.findIndex((function(n){return n.index===e}));if(-1!==t){var c=[].concat(Object(s.a)(n.slice(0,t)),[{index:e,name:y,lineupIndex:R}],Object(s.a)(n.slice(t+1)));i(c),d(-1)}}}(c)}}),Object(C.jsx)(O.a,{icon:"cancel",size:"tiny",onClick:function(){return d(-1)}})]})]},c):Object(C.jsxs)(x.a.Row,{children:[Object(C.jsx)(x.a.Cell,{children:r}),Object(C.jsx)(x.a.Cell,{children:b}),Object(C.jsxs)(x.a.Cell,{children:[Object(C.jsx)(O.a,{icon:"edit",size:"tiny",onClick:function(){return function(e){var t=n.find((function(n){return n.index===e}));t&&(w(t.name),H(t.lineupIndex),d(e))}(c)}}),Object(C.jsx)(O.a,{icon:"trash",size:"tiny",onClick:function(){return function(e){if(!a||!a.includes(e)){var t=n.findIndex((function(n){return n.index===e}));if(-1!==t){var c=[].concat(Object(s.a)(n.slice(0,t)),Object(s.a)(n.slice(t+1)));i(c)}}}(c)},disabled:a&&a.includes(c)})]})]},c)}))]})]})}var k=t(172),I=t(166),S=t(76),y=t(83),w=t(117),F=t(167),z=t(105);function R(e){var n=e.enumList,t=e.selectedIndexList,c=e.onChange,i=e.disabled;return Object(C.jsx)(C.Fragment,{children:n.map((function(e){var n=e.index,a=e.name,r=void 0!==t.find((function(e){return e===n})),l=r?"blue":void 0,j=r?"plus":"minus";return Object(C.jsxs)(z.a,{as:"a",color:l,onClick:function(){return function(e){if(!i){var n=t.findIndex((function(n){return n===e})),a=-1===n?[].concat(Object(s.a)(t),[e]):[].concat(Object(s.a)(t.slice(0,n)),Object(s.a)(t.slice(n+1)));c(a)}}(n)},children:[Object(C.jsx)(S.a,{name:j}),a]},n)}))})}function H(e){var n=e.changeList,t=e.lineupList,a=e.customerList,r=e.onChange,j=Object(c.useState)(""),u=Object(l.a)(j,2),d=u[0],b=u[1],h=Object(c.useState)(""),v=Object(l.a)(h,2),p=v[0],m=v[1],g=Object(c.useState)(""),L=Object(l.a)(g,2),k=L[0],S=L[1],y=Object(c.useState)([]),w=Object(l.a)(y,2),F=w[0],z=w[1],H=Object(c.useState)(-1),N=Object(l.a)(H,2),P=N[0],A=N[1],B=Object(c.useState)(-1),E=Object(l.a)(B,2),D=E[0],J=E[1],T=Object(c.useState)(""),V=Object(l.a)(T,2),U=V[0],M=V[1],q=Object(c.useState)(""),G=Object(l.a)(q,2),K=G[0],Q=G[1],W=Object(c.useState)(""),X=Object(l.a)(W,2),Y=X[0],Z=X[1],$=Object(c.useState)([]),_=Object(l.a)($,2),ee=_[0],ne=_[1],te=Object(c.useState)(-1),ce=Object(l.a)(te,2),ie=ce[0],ae=ce[1];function re(){var e=n.findIndex((function(e){return e.index===D}));if(-1!==e){var t=[].concat(Object(s.a)(n.slice(0,e)),[{index:D,description:U,beforeChange:K,afterChange:Y,customerIndexList:ee,lineupIndex:ie}],Object(s.a)(n.slice(e+1)));r(t),J(-1)}}return Object(C.jsxs)(x.a,{celled:!0,compact:!0,selectable:!0,children:[Object(C.jsxs)(x.a.Header,{children:[Object(C.jsxs)(x.a.Row,{children:[Object(C.jsx)(x.a.HeaderCell,{children:"Description"}),Object(C.jsx)(x.a.HeaderCell,{children:"Before change"}),Object(C.jsx)(x.a.HeaderCell,{children:"After change"}),Object(C.jsx)(x.a.HeaderCell,{children:"Lineup"}),Object(C.jsx)(x.a.HeaderCell,{rowSpan:2,children:"Actions"})]}),Object(C.jsx)(x.a.Row,{children:Object(C.jsx)(x.a.HeaderCell,{colSpan:4,children:"Customers"})})]}),Object(C.jsxs)(x.a.Body,{children:[Object(C.jsxs)(x.a.Row,{active:!0,children:[Object(C.jsx)(x.a.Cell,{children:Object(C.jsx)(o.a,{children:Object(C.jsx)(o.a.Field,{disabled:-1!==D,children:Object(C.jsx)(I.a,{value:d,onChange:function(e){return b(e.target.value)},className:"no-resize-textarea"})})})}),Object(C.jsx)(x.a.Cell,{children:Object(C.jsx)(o.a,{children:Object(C.jsx)(o.a.Field,{disabled:-1!==D,children:Object(C.jsx)(I.a,{value:p,onChange:function(e){return m(e.target.value)},className:"no-resize-textarea"})})})}),Object(C.jsx)(x.a.Cell,{children:Object(C.jsx)(o.a,{children:Object(C.jsx)(o.a.Field,{disabled:-1!==D,children:Object(C.jsx)(I.a,{value:k,onChange:function(e){return S(e.target.value)},className:"no-resize-textarea"})})})}),Object(C.jsx)(x.a.Cell,{children:Object(C.jsx)(o.a,{children:Object(C.jsx)(o.a.Field,{disabled:-1!==D,children:Object(C.jsxs)("select",{value:P,onChange:function(e){return A(+e.target.value)},children:[Object(C.jsx)("option",{value:-1,children:"(None)"}),t.map((function(e){var n=e.index,t=e.name;return Object(C.jsx)("option",{value:n,children:t},n)}))]})})})}),Object(C.jsx)(x.a.Cell,{rowSpan:2,children:Object(C.jsx)(O.a,{icon:"plus",size:"tiny",onClick:function(){if(d){var e=f(n.map((function(e){return e.index}))),t=[].concat(Object(s.a)(n),[{index:e,description:d,beforeChange:p,afterChange:k,customerIndexList:F,lineupIndex:P}]);r(t),b(""),m(""),S(""),z([]),A(-1)}},disabled:-1!==D})})]}),Object(C.jsx)(x.a.Row,{active:!0,children:Object(C.jsx)(x.a.Cell,{colSpan:4,children:Object(C.jsx)(R,{enumList:a,selectedIndexList:F,onChange:z,disabled:-1!==D})})}),n.map((function(e){var c=e.index,l=e.description,j=e.beforeChange,u=e.afterChange,d=e.customerIndexList,b=e.lineupIndex,h=t.find((function(e){return e.index===b})),f=h?h.name:"(None)";return c===D?Object(C.jsxs)(i.a.Fragment,{children:[Object(C.jsxs)(x.a.Row,{children:[Object(C.jsx)(x.a.Cell,{children:Object(C.jsx)(o.a,{children:Object(C.jsx)(o.a.Field,{children:Object(C.jsx)(I.a,{value:U,onChange:function(e){return M(e.target.value)},className:"no-resize-textarea"})})})}),Object(C.jsx)(x.a.Cell,{children:Object(C.jsx)(o.a,{children:Object(C.jsx)(o.a.Field,{children:Object(C.jsx)(I.a,{value:K,onChange:function(e){return Q(e.target.value)},className:"no-resize-textarea"})})})}),Object(C.jsx)(x.a.Cell,{children:Object(C.jsx)(o.a,{children:Object(C.jsx)(o.a.Field,{children:Object(C.jsx)(I.a,{value:Y,onChange:function(e){return Z(e.target.value)},className:"no-resize-textarea"})})})}),Object(C.jsx)(x.a.Cell,{children:Object(C.jsx)(o.a,{children:Object(C.jsx)(o.a.Field,{children:Object(C.jsxs)("select",{value:ie,onChange:function(e){return ae(+e.target.value)},children:[Object(C.jsx)("option",{value:-1,children:"(None)"}),t.map((function(e){var n=e.index,t=e.name;return Object(C.jsx)("option",{value:n,children:t},n)}))]})})})}),Object(C.jsxs)(x.a.Cell,{rowSpan:2,children:[Object(C.jsx)(O.a,{icon:"check",size:"tiny",onClick:re}),Object(C.jsx)(O.a,{icon:"cancel",size:"tiny",onClick:function(){return J(-1)}})]})]}),Object(C.jsx)(x.a.Row,{children:Object(C.jsx)(x.a.Cell,{colSpan:4,children:Object(C.jsx)(R,{enumList:a,selectedIndexList:ee,onChange:ne})})})]},c):Object(C.jsxs)(i.a.Fragment,{children:[Object(C.jsxs)(x.a.Row,{children:[Object(C.jsx)(x.a.Cell,{children:Object(C.jsx)(o.a,{children:Object(C.jsx)(o.a.Field,{children:Object(C.jsx)(I.a,{value:l,className:"no-border-textarea no-resize-textarea"})})})}),Object(C.jsx)(x.a.Cell,{children:Object(C.jsx)(o.a,{children:Object(C.jsx)(o.a.Field,{children:Object(C.jsx)(I.a,{value:j,className:"no-border-textarea no-resize-textarea"})})})}),Object(C.jsx)(x.a.Cell,{children:Object(C.jsx)(o.a,{children:Object(C.jsx)(o.a.Field,{children:Object(C.jsx)(I.a,{value:u,className:"no-border-textarea no-resize-textarea"})})})}),Object(C.jsx)(x.a.Cell,{children:f}),Object(C.jsxs)(x.a.Cell,{rowSpan:2,children:[Object(C.jsx)(O.a,{icon:"edit",size:"tiny",onClick:function(){return function(e){var t=n.find((function(n){return n.index===e}));if(t){var c=t.description,i=t.beforeChange,a=t.afterChange,r=t.lineupIndex,s=t.customerIndexList;M(c),Q(i),Z(a),ae(r),ne(s),J(e)}}(c)}}),Object(C.jsx)(O.a,{icon:"trash",size:"tiny",onClick:function(){return function(e){var t=n.findIndex((function(n){return n.index===e})),c=[].concat(Object(s.a)(n.slice(0,t)),Object(s.a)(n.slice(t+1)));r(c)}(c)}})]})]}),Object(C.jsx)(x.a.Row,{children:Object(C.jsx)(x.a.Cell,{colSpan:4,children:a.filter((function(e){return void 0!==d.find((function(n){return e.index===n}))})).map((function(e){return e.name})).join(", ")})})]},c)}))]}),n.map((function(e){return Object(C.jsx)(C.Fragment,{})}))]})}function N(e){var n=e.releaseList,t=e.lineupList,a=e.pkgList,r=e.customerList,j=e.onChange,u=Object(c.useState)(-1),d=Object(l.a)(u,2),b=d[0],h=d[1],v=Object(c.useState)([]),p=Object(l.a)(v,2),m=p[0],g=p[1],L=Object(c.useState)(-1),k=Object(l.a)(L,2),I=k[0],y=k[1],w=Object(c.useState)(-1),F=Object(l.a)(w,2),z=F[0],H=F[1],N=Object(c.useState)([]),P=Object(l.a)(N,2),A=P[0],B=P[1];function E(){if(A.length&&!n.find((function(e){return e.index!==I&&e.pkgIndex===z}))){var e=n.findIndex((function(e){return e.index===I}));if(-1!==e){var t=[].concat(Object(s.a)(n.slice(0,e)),[{index:I,pkgIndex:z,customerIndexList:A}],Object(s.a)(n.slice(e+1)));j(t),y(-1)}}}return Object(C.jsxs)(x.a,{celled:!0,compact:!0,selectable:!0,children:[Object(C.jsxs)(x.a.Header,{children:[Object(C.jsxs)(x.a.Row,{children:[Object(C.jsx)(x.a.HeaderCell,{children:"Package"}),Object(C.jsx)(x.a.HeaderCell,{rowSpan:2,children:"Actions"})]}),Object(C.jsx)(x.a.Row,{children:Object(C.jsx)(x.a.HeaderCell,{children:"Customers"})})]}),Object(C.jsxs)(x.a.Body,{children:[Object(C.jsxs)(x.a.Row,{active:!0,children:[Object(C.jsx)(x.a.Cell,{children:Object(C.jsx)(o.a,{children:Object(C.jsx)(o.a.Field,{disabled:-1!==I,children:Object(C.jsxs)("select",{value:b,onChange:function(e){return h(+e.target.value)},children:[Object(C.jsx)("option",{value:-1,children:"Select a package"}),a.map((function(e){var n=e.index,c=e.name,i=e.lineupIndex,a=t.find((function(e){return e.index===i})),r="- Lineup: ".concat(a?a.name:"(None)");return Object(C.jsxs)("option",{value:n,children:[c," ",r]},n)}))]})})})}),Object(C.jsx)(x.a.Cell,{rowSpan:2,children:Object(C.jsx)(O.a,{icon:"plus",size:"tiny",onClick:function(){if(-1!==b&&m.length&&!n.find((function(e){return e.pkgIndex===b}))){var e=f(n.map((function(e){return e.index}))),t=[].concat(Object(s.a)(n),[{index:e,pkgIndex:b,customerIndexList:m}]);j(t),h(-1),g([])}},disabled:-1!==I})})]}),Object(C.jsx)(x.a.Row,{active:!0,children:Object(C.jsx)(x.a.Cell,{children:Object(C.jsx)(R,{enumList:r,selectedIndexList:m,onChange:g,disabled:-1!==I})})}),n.map((function(e){var c=e.index,l=e.pkgIndex,u=e.customerIndexList,d=a.find((function(e){return e.index===l})),b=d.name,h=d.lineupIndex,f=t.find((function(e){return e.index===h})),v="- Lineup: ".concat(f?f.name:"(None)");return c===I?Object(C.jsxs)(i.a.Fragment,{children:[Object(C.jsxs)(x.a.Row,{children:[Object(C.jsx)(x.a.Cell,{children:Object(C.jsx)(o.a,{children:Object(C.jsx)(o.a.Field,{children:Object(C.jsx)("select",{value:z,onChange:function(e){return H(+e.target.value)},children:a.map((function(e){var n=e.index,c=e.name,i=e.lineupIndex,a=t.find((function(e){return e.index===i})),r="- Lineup: ".concat(a?a.name:"(None)");return Object(C.jsxs)("option",{value:n,children:[c," ",r]},n)}))})})})}),Object(C.jsxs)(x.a.Cell,{rowSpan:2,children:[Object(C.jsx)(O.a,{icon:"check",size:"tiny",onClick:E}),Object(C.jsx)(O.a,{icon:"cancel",size:"tiny",onClick:function(){return y(-1)}})]})]}),Object(C.jsx)(x.a.Row,{children:Object(C.jsx)(x.a.Cell,{children:Object(C.jsx)(R,{enumList:r,selectedIndexList:A,onChange:B})})},"".concat(c,"-lower"))]},c):Object(C.jsxs)(i.a.Fragment,{children:[Object(C.jsxs)(x.a.Row,{children:[Object(C.jsxs)(x.a.Cell,{children:[b," ",v]}),Object(C.jsxs)(x.a.Cell,{rowSpan:2,children:[Object(C.jsx)(O.a,{icon:"edit",size:"tiny",onClick:function(){return function(e){var t=n.find((function(n){return n.index===e}));if(t){var c=t.pkgIndex,i=t.customerIndexList;a.find((function(e){return e.index===c}))&&(H(c),B(i),y(e))}}(c)}}),Object(C.jsx)(O.a,{icon:"trash",size:"tiny",onClick:function(){return function(e){var t=n.findIndex((function(n){return n.index===e}));if(-1!==t){var c=[].concat(Object(s.a)(n.slice(0,t)),Object(s.a)(n.slice(t+1)));j(c)}}(c)}}),Object(C.jsxs)(O.a,{icon:!0,size:"tiny",onClick:function(){return function(e){var t=n.findIndex((function(n){return n.index===e}));if(-1!==t&&0!==t){var c=[].concat(Object(s.a)(n.slice(0,t-1)),[n[t],n[t-1]],Object(s.a)(n.slice(t+1)));j(c)}}(c)},disabled:-1!==I,children:[Object(C.jsx)(S.a,{name:"angle up"}),"Older"]}),Object(C.jsxs)(O.a,{icon:!0,size:"tiny",onClick:function(){return function(e){var t=n.findIndex((function(n){return n.index===e}));if(-1!==t&&t!==n.length-1){var c=[].concat(Object(s.a)(n.slice(0,t)),[n[t+1],n[t]],Object(s.a)(n.slice(t+2)));j(c)}}(c)},disabled:-1!==I,children:[Object(C.jsx)(S.a,{name:"angle down"}),"Newer"]})]})]}),Object(C.jsx)(x.a.Row,{children:Object(C.jsx)(x.a.Cell,{children:r.filter((function(e){return void 0!==u.find((function(n){return e.index===n}))})).map((function(e){return e.name})).join(", ")})})]},c)}))]})]})}function P(e){var n=e.version,t=e.versionList,c=e.lineupList,i=e.pkgList,a=e.customerList,r=e.onChange,s=n.name,l=n.indexPrev,j=n.changeList,o=n.releaseList,u=t.find((function(e){return e.index===l}));return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(F.a,{horizontal:!0,children:Object(C.jsxs)(b.a,{as:"h2",children:[s,Object(C.jsxs)(b.a.Subheader,{children:["Previous version: ",u?u.name:"(None)"]})]})}),Object(C.jsx)(b.a,{as:"h3",children:"Releases"}),Object(C.jsx)(N,{releaseList:o,lineupList:c,pkgList:i,customerList:a,onChange:function(e){n.releaseList;var t=Object(w.a)(n,["releaseList"]),c=Object(y.a)(Object(y.a)({},t),{},{releaseList:e});r(c)}}),Object(C.jsx)(b.a,{as:"h3",children:"Changes"}),Object(C.jsx)(H,{changeList:j,lineupList:c,customerList:a,onChange:function(e){n.changeList;var t=Object(w.a)(n,["changeList"]),c=Object(y.a)(Object(y.a)({},t),{},{changeList:e});r(c)}})]})}function A(e){var n=e.versionList,t=e.onChange,i=e.lineupList,a=e.pkgList,r=e.customerList,j=Object(c.useState)(""),u=Object(l.a)(j,2),d=u[0],b=u[1],h=Object(c.useState)(-1),m=Object(l.a)(h,2),g=m[0],L=m[1],y=Object(c.useState)(-1),w=Object(l.a)(y,2),F=w[0],z=w[1],R=Object(c.useState)(""),H=Object(l.a)(R,2),N=H[0],A=H[1],B=Object(c.useState)(-1),E=Object(l.a)(B,2),D=E[0],J=E[1],T=Object(c.useState)(!1),V=Object(l.a)(T,2),U=V[0],M=V[1],q=Object(c.useState)(""),G=Object(l.a)(q,2),K=G[0],Q=G[1],W=Object(c.useState)(),X=Object(l.a)(W,2),Y=X[0],Z=X[1];function $(){if(N&&!n.find((function(e){return e.index!==F&&e.name===N}))){var e=n.findIndex((function(e){return e.index===F}));if(-1!==e){var c=n[e],i=c.changeList,a=c.releaseList,r=[].concat(Object(s.a)(n.slice(0,e)),[{index:F,name:N,indexPrev:D,changeList:i,releaseList:a}],Object(s.a)(n.slice(e+1)));t(r),z(-1)}}}function _(e){var t=function(e,n,t,c,i){console.log("Publishing release history..."),console.group();var a=[];i.forEach((function(i){a.push({customerIndexList:[i.index],releaseHistory:p(e,n,t,c,i)})}));for(var r=a.length-1;r>=0;r-=1)for(var l=a[r],j=l.customerIndexList,o=l.releaseHistory,u=r-1;u>=0;u-=1){var d=a[u],b=d.customerIndexList;if(o===d.releaseHistory){b.push.apply(b,Object(s.a)(j)),a.splice(r,1);break}}var x=a.filter((function(e){return e.releaseHistory})).map((function(e){var n,t,c=e.customerIndexList,a=e.releaseHistory,r=(n=i,t=c,n.filter((function(e){return t.includes(e.index)})).map((function(e){return e.name}))).join(", ");return"<".concat(r,">\n").concat(v(a),"\n</").concat(r,">")})).join("\n");return console.groupEnd(),x}(n,e,i,a,r);Q(t),M(!0)}var ee=void 0===Y?n[0]:n.find((function(e){return e.index===Y}));return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsxs)(x.a,{celled:!0,compact:!0,selectable:!0,children:[Object(C.jsx)(x.a.Header,{children:Object(C.jsxs)(x.a.Row,{children:[Object(C.jsx)(x.a.HeaderCell,{children:"Version"}),Object(C.jsx)(x.a.HeaderCell,{children:"Previous version"}),Object(C.jsx)(x.a.HeaderCell,{children:"Actions"})]})}),Object(C.jsxs)(x.a.Body,{children:[Object(C.jsxs)(x.a.Row,{active:!0,children:[Object(C.jsx)(x.a.Cell,{children:Object(C.jsx)(o.a,{children:Object(C.jsx)(o.a.Field,{disabled:-1!==F,children:Object(C.jsx)("input",{value:d,onChange:function(e){return b(e.target.value)}})})})}),Object(C.jsx)(x.a.Cell,{children:Object(C.jsx)(o.a,{children:Object(C.jsx)(o.a.Field,{disabled:-1!==F,children:Object(C.jsxs)("select",{value:g,onChange:function(e){return L(+e.target.value)},children:[Object(C.jsx)("option",{value:-1,children:"(None)"}),n.map((function(e){var n=e.index,t=e.name;return Object(C.jsx)("option",{value:n,children:t},n)}))]})})})}),Object(C.jsx)(x.a.Cell,{children:Object(C.jsx)(O.a,{icon:"plus",size:"tiny",onClick:function(){if(d&&!n.find((function(e){return e.name===d}))){var e=f(n.map((function(e){return e.index}))),c=[].concat(Object(s.a)(n),[{index:e,name:d,indexPrev:g,changeList:[],releaseList:[]}]);t(c),b("")}},disabled:-1!==F})})]}),n.map((function(e){var c=e.index,i=e.name,a=e.indexPrev;if(c===F)return Object(C.jsxs)(x.a.Row,{children:[Object(C.jsx)(x.a.Cell,{children:Object(C.jsx)(o.a,{children:Object(C.jsx)(o.a.Field,{children:Object(C.jsx)("input",{value:N,onChange:function(e){return A(e.target.value)}})})})}),Object(C.jsx)(x.a.Cell,{children:Object(C.jsx)(o.a,{children:Object(C.jsx)(o.a.Field,{children:Object(C.jsxs)("select",{value:D,onChange:function(e){return J(+e.target.value)},children:[Object(C.jsx)("option",{value:-1,children:"(None)"}),n.map((function(e){var n=e.index,t=e.name;return Object(C.jsx)("option",{value:n,disabled:n===F,children:t},n)}))]})})})}),Object(C.jsxs)(x.a.Cell,{children:[Object(C.jsx)(O.a,{icon:"check",size:"tiny",onClick:$}),Object(C.jsx)(O.a,{icon:"cancel",size:"tiny",onClick:function(){return z(-1)}})]})]},c);var r=n.find((function(e){return e.index===a})),l=r?r.name:"(None)",j=!!n.find((function(e){return e.indexPrev===c}));return Object(C.jsxs)(x.a.Row,{children:[Object(C.jsx)(x.a.Cell,{children:Object(C.jsx)("button",{className:"a-like-button",onClick:function(){return Z(c)},children:i})}),Object(C.jsx)(x.a.Cell,{children:l}),Object(C.jsxs)(x.a.Cell,{children:[Object(C.jsx)(O.a,{icon:"edit",size:"tiny",onClick:function(){return function(e){var t=n.find((function(n){return n.index===e}));t&&(A(t.name),J(t.indexPrev),z(t.index))}(c)}}),Object(C.jsx)(O.a,{icon:"trash",size:"tiny",disabled:j,onClick:function(){return function(e){var c=n.findIndex((function(n){return n.index===e}));if(-1!==c){var i=[].concat(Object(s.a)(n.slice(0,c)),Object(s.a)(n.slice(c+1)));t(i)}}(c)}}),Object(C.jsx)(O.a,{icon:"list",size:"tiny",onClick:function(){return _(c)}})]})]},c)}))]})]}),ee?Object(C.jsx)(P,{version:ee,versionList:n,lineupList:i,pkgList:a,customerList:r,onChange:function(e){var c=e.index,i=n.findIndex((function(e){return e.index===c}));if(-1!==i){var a=[].concat(Object(s.a)(n.slice(0,i)),[e],Object(s.a)(n.slice(i+1)));t(a)}}}):Object(C.jsx)(C.Fragment,{}),Object(C.jsxs)(k.a,{open:U,onClose:function(){return M(!1)},children:[Object(C.jsx)(k.a.Header,{children:"Release history"}),Object(C.jsx)(k.a.Content,{children:Object(C.jsx)(o.a,{children:Object(C.jsx)(o.a.Field,{children:Object(C.jsx)(I.a,{value:K,rows:24})})})}),Object(C.jsx)(k.a.Actions,{children:Object(C.jsxs)(O.a,{icon:!0,size:"tiny",onClick:function(){return navigator.clipboard.writeText(K)},children:[Object(C.jsx)(S.a,{name:"clipboard"}),"Copy to clipboard"]})})]})]})}var B="Untitled",E="version",D="lineup",J="package",T="customer";var V=function(){var e,n=Object(c.createRef)(),t=Object(c.createRef)(),i=Object(c.useState)(B),a=Object(l.a)(i,2),r=a[0],x=a[1],O=Object(c.useState)([]),h=Object(l.a)(O,2),f=h[0],v=h[1],p=Object(c.useState)([]),m=Object(l.a)(p,2),k=m[0],I=m[1],S=Object(c.useState)([]),y=Object(l.a)(S,2),w=y[0],F=y[1],z=Object(c.useState)([]),R=Object(l.a)(z,2),H=R[0],N=R[1],P=Object(c.useState)(E),V=Object(l.a)(P,2),U=V[0],M=V[1],q=new FileReader;q.onload=function(n){if(e&&n.target){var t=n.target.result;if(!(null===t||t instanceof ArrayBuffer)){var c=e.name,i=c.lastIndexOf("."),a=c.substring(0,i),r=JSON.parse(t),s=r.versionList,l=r.lineupList,j=r.pkgList,o=r.customerList;x(a),v(s),I(l),F(j),N(o)}}};var G=[].concat(Object(s.a)(f.map((function(e){return e.changeList.map((function(e){return e.lineupIndex}))})).reduce((function(e,n){return[].concat(Object(s.a)(e),Object(s.a)(n))}),[])),Object(s.a)(w.map((function(e){return e.lineupIndex})))),K=Object(s.a)(f.map((function(e){return e.releaseList.map((function(e){return e.pkgIndex}))})).reduce((function(e,n){return[].concat(Object(s.a)(e),Object(s.a)(n))}),[])),Q=[].concat(Object(s.a)(f.map((function(e){return e.changeList.map((function(e){return e.customerIndexList})).reduce((function(e,n){return[].concat(Object(s.a)(e),Object(s.a)(n))}),[])})).reduce((function(e,n){return[].concat(Object(s.a)(e),Object(s.a)(n))}),[])),Object(s.a)(f.map((function(e){return e.releaseList.map((function(e){return e.customerIndexList})).reduce((function(e,n){return[].concat(Object(s.a)(e),Object(s.a)(n))}),[])})).reduce((function(e,n){return[].concat(Object(s.a)(e),Object(s.a)(n))}),[])));return Object(C.jsxs)("div",{className:"App",children:[Object(C.jsxs)(j.a,{pointing:!0,children:[Object(C.jsx)(j.a.Item,{onClick:function(){x(B),v([]),I([{index:0,name:"(None)"}]),F([]),N([])},children:"New"}),Object(C.jsx)(j.a.Item,{children:Object(C.jsx)(o.a,{children:Object(C.jsx)(o.a.Field,{children:Object(C.jsx)("input",{value:r,onChange:function(e){return x(e.target.value)}})})})}),Object(C.jsx)(j.a.Item,{onClick:function(){var e;return null===(e=n.current)||void 0===e?void 0:e.click()},children:"Load"}),Object(C.jsx)(j.a.Item,{onClick:function(){return function(){if(null!==t.current){var e=new Blob([JSON.stringify({versionList:f,lineupList:k,pkgList:w,customerList:H})],{type:"application/json"});t.current.download="".concat(r,".json"),t.current.href=window.URL.createObjectURL(e),t.current.click()}}()},children:"Save"}),Object(C.jsxs)(j.a.Menu,{position:"right",children:[Object(C.jsx)(j.a.Item,{active:U===E,onClick:function(){return M(E)},children:"Versions"}),Object(C.jsx)(j.a.Item,{active:U===D,onClick:function(){return M(D)},children:"Lineups"}),Object(C.jsx)(j.a.Item,{active:U===J,onClick:function(){return M(J)},children:"Packages"}),Object(C.jsx)(j.a.Item,{active:U===T,onClick:function(){return M(T)},children:"Customers"})]})]}),Object(C.jsx)("input",{type:"file",accept:".json",hidden:!0,ref:n,onChange:function(n){var t=n.target.files;t&&(e=t[0])&&q.readAsText(e)}}),Object(C.jsx)("a",{href:"#",ref:t,hidden:!0}),U===E?Object(C.jsxs)(u.a,{as:d.a,children:[Object(C.jsx)(b.a,{as:"h1",children:"Versions"}),Object(C.jsx)(A,{versionList:f,onChange:v,lineupList:k,pkgList:w,customerList:H})]}):Object(C.jsx)(C.Fragment,{}),U===D?Object(C.jsxs)(u.a,{as:d.a,children:[Object(C.jsx)(b.a,{as:"h1",children:"Lineups"}),Object(C.jsx)(g,{title:"Lineup",enumList:k,onChange:I,usedIndexList:G})]}):Object(C.jsx)(C.Fragment,{}),U===J?Object(C.jsxs)(u.a,{as:d.a,children:[Object(C.jsx)(b.a,{as:"h1",children:"Packages"}),Object(C.jsx)(L,{pkgList:w,lineupList:k,onChange:F,usedPkgIndexList:K})]}):Object(C.jsx)(C.Fragment,{}),U===T?Object(C.jsxs)(u.a,{as:d.a,children:[Object(C.jsx)(b.a,{as:"h1",children:"Customers"}),Object(C.jsx)(g,{title:"Customer",enumList:H,onChange:N,usedIndexList:Q})]}):Object(C.jsx)(C.Fragment,{})]})},U=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,177)).then((function(n){var t=n.getCLS,c=n.getFID,i=n.getFCP,a=n.getLCP,r=n.getTTFB;t(e),c(e),i(e),a(e),r(e)}))};r.a.render(Object(C.jsx)(i.a.StrictMode,{children:Object(C.jsx)(V,{})}),document.getElementById("root")),U()}},[[154,1,2]]]);
//# sourceMappingURL=main.34ec79bc.chunk.js.map