"use strict";var E=function(s,a){return function(){return a||s((a={exports:{}}).exports,a),a.exports}};var P=E(function(nr,p){"use strict";var H=require("@stdlib/stats-base-ztest-alternative-resolve-str"),z=require("@stdlib/math-base-assert-is-nanf"),J=require("@stdlib/stats-base-dists-normal-quantile").factory,L=require("@stdlib/stats-base-dists-normal-cdf").factory,d=require("@stdlib/stats-strided-smean").ndarray,M=require("@stdlib/math-base-special-sqrt"),T=require("@stdlib/math-base-special-abs"),U=require("@stdlib/array-float32"),Z=require("@stdlib/constants-float32-pinf"),$=require("@stdlib/constants-float32-ninf"),l=require("@stdlib/number-float64-base-to-float32"),I=L(0,1),O=J(0,1),n=new U(2);function f(s,a,F,e,v,i,x,j,R,q,V,m,G,r){var N,c,A,C,_,b,t,y,u;return y=H(F),s<=0||a<=0||z(e)||z(v)||z(i)||z(q)||i<=0||q<=0||e<0||e>1?(n[0]=NaN,n[1]=NaN,r.rejected=!1,r.alternative=y,r.alpha=NaN,r.pValue=NaN,r.statistic=NaN,r.ci=n,r.nullValue=NaN,r.xmean=NaN,r.ymean=NaN,r):(e=l(e),v=l(v),i=l(i),q=l(q),_=i*i,b=q*q,c=M(_/s+b/a),A=d(s,x,j,R),C=d(a,V,m,G),t=(A-C-v)/c,y==="less"?(N=I(t),u=O(1-e),n[0]=$,n[1]=v+(t+u)*c):y==="greater"?(N=1-I(t),u=O(1-e),n[0]=v+(t-u)*c,n[1]=Z):(N=2*I(-T(t)),u=O(1-e/2),n[0]=v+(t-u)*c,n[1]=v+(t+u)*c),r.rejected=N<=e,r.alpha=e,r.pValue=l(N),r.statistic=l(t),r.ci=n,r.alternative=y,r.nullValue=l(v),r.xmean=A,r.ymean=C,r)}p.exports=f});var K=E(function(tr,D){"use strict";var w=require("@stdlib/strided-base-stride2offset"),o=P();function X(s,a,F,e,v,i,x,j,R,q,V,m){return o(s,a,F,e,v,i,x,j,w(s,j),R,q,V,w(a,V),m)}D.exports=X});var k=E(function(sr,W){"use strict";var Y=require("@stdlib/utils-define-nonenumerable-read-only-property"),Q=K(),h=P();Y(Q,"ndarray",h);W.exports=Q});var g=require("path").join,rr=require("@stdlib/utils-try-require"),er=require("@stdlib/assert-is-error"),ar=k(),S,B=rr(g(__dirname,"./native.js"));er(B)?S=ar:S=B;module.exports=S;
/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
