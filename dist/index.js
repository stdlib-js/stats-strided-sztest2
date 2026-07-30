"use strict";var E=function(s,e){return function(){try{return e||s((e={exports:{}}).exports,e),e.exports}catch(N){throw e=0,N}}};var P=E(function(nr,p){"use strict";var H=require("@stdlib/stats-base-ztest-alternative-resolve-str"),F=require("@stdlib/math-base-assert-is-nanf"),J=require("@stdlib/stats-base-dists-normal-quantile").factory,L=require("@stdlib/stats-base-dists-normal-cdf").factory,d=require("@stdlib/stats-strided-smean").ndarray,M=require("@stdlib/math-base-special-sqrt"),T=require("@stdlib/math-base-special-abs"),U=require("@stdlib/array-float32"),Z=require("@stdlib/constants-float32-pinf"),$=require("@stdlib/constants-float32-ninf"),l=require("@stdlib/number-float64-base-to-float32"),I=L(0,1),O=J(0,1),n=new U(2);function f(s,e,N,a,v,i,x,V,R,q,z,m,G,r){var y,c,A,C,_,b,t,j,u;return j=H(N),s<=0||e<=0||F(a)||F(v)||F(i)||F(q)||i<=0||q<=0||a<0||a>1?(n[0]=NaN,n[1]=NaN,r.rejected=!1,r.alternative=j,r.alpha=NaN,r.pValue=NaN,r.statistic=NaN,r.ci=n,r.nullValue=NaN,r.xmean=NaN,r.ymean=NaN,r):(a=l(a),v=l(v),i=l(i),q=l(q),_=i*i,b=q*q,c=M(_/s+b/e),A=d(s,x,V,R),C=d(e,z,m,G),t=(A-C-v)/c,j==="less"?(y=I(t),u=O(1-a),n[0]=$,n[1]=v+(t+u)*c):j==="greater"?(y=1-I(t),u=O(1-a),n[0]=v+(t-u)*c,n[1]=Z):(y=2*I(-T(t)),u=O(1-a/2),n[0]=v+(t-u)*c,n[1]=v+(t+u)*c),r.rejected=y<=a,r.alpha=a,r.pValue=l(y),r.statistic=l(t),r.ci=n,r.alternative=j,r.nullValue=l(v),r.xmean=A,r.ymean=C,r)}p.exports=f});var K=E(function(tr,D){"use strict";var w=require("@stdlib/strided-base-stride2offset"),o=P();function X(s,e,N,a,v,i,x,V,R,q,z,m){return o(s,e,N,a,v,i,x,V,w(s,V),R,q,z,w(e,z),m)}D.exports=X});var k=E(function(sr,W){"use strict";var Y=require("@stdlib/utils-define-nonenumerable-read-only-property"),Q=K(),h=P();Y(Q,"ndarray",h);W.exports=Q});var g=require("path").join,rr=require("@stdlib/utils-try-require"),er=require("@stdlib/assert-is-error"),ar=k(),S,B=rr(g(__dirname,"./native.js"));er(B)?S=ar:S=B;module.exports=S;
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
