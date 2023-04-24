"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[855],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var r=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=s(a),h=i,f=d["".concat(c,".").concat(h)]||d[h]||u[h]||n;return a?r.createElement(f,l(l({ref:t},p),{},{components:a})):r.createElement(f,l({ref:t},p))}));function f(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,l=new Array(n);l[0]=h;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[d]="string"==typeof e?e:i,l[1]=o;for(var s=2;s<n;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},2775:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>l,default:()=>p,frontMatter:()=>n,metadata:()=>o,toc:()=>c});var r=a(7462),i=(a(7294),a(3905));const n={},l="StEthPriceFeed",o={unversionedId:"contracts/steth-price-feed",id:"contracts/steth-price-feed",title:"StEthPriceFeed",description:"---",source:"@site/docs/contracts/steth-price-feed.md",sourceDirName:"contracts",slug:"/contracts/steth-price-feed",permalink:"/contracts/steth-price-feed",editUrl:"https://github.com/lidofinance/docs/blob/main/docs/contracts/steth-price-feed.md",tags:[],version:"current",frontMatter:{}},c=[{value:"Warning",id:"warning",children:[],level:3},{value:"Vocabulary",id:"vocabulary",children:[],level:2},{value:"stETH price feed specification",id:"steth-price-feed-specification",children:[],level:2},{value:"Fail conditions",id:"fail-conditions",children:[],level:2},{value:"View Methods",id:"view-methods",children:[{value:"safe_price()",id:"safe_price",children:[],level:3},{value:"current_price()",id:"current_price",children:[],level:3}],level:2},{value:"Methods",id:"methods",children:[{value:"update_safe_price()",id:"update_safe_price",children:[],level:3},{value:"fetch_safe_price()",id:"fetch_safe_price",children:[{value:"Parameters:",id:"parameters",children:[],level:4}],level:3}],level:2}],s={toc:c};function p(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"stethpricefeed"},"StEthPriceFeed"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"warning"},"Warning"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"StEthPriceFeed")," is depracated and not intended to be used as a part of external integrations."),(0,i.kt)("hr",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/lidofinance/steth-price-feed/blob/main/contracts/StEthPriceFeed.vy"},"Source Code")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://etherscan.io/address/0xab55bf4dfbf469ebfe082b7872557d1f87692fe6"},"Deployed Contract"))),(0,i.kt)("p",null,"Lido intends to provide reliable price feed for stETH for protocols that intend to integrate it. Unfortunately, Chainlik is not available for stETH and Uniswap TWAP is not feasible at the moment: we'd want deep liquidity on stETH/ETH pair for this price, but Uni v2 doesn't allow tight curves for similaraly-priced coins."),(0,i.kt)("p",null,'stETH has deep liquidity in the Curve pool but it doesn\'t have a TWAP capability, so that\'s out, too. In the moment Curve price is flashloanable, if not easily. We decided that in a pinch we can provide a "price anchor" that would attest that "stETH/ETH price on Curve used to be around in recent past" (implemented using the ',(0,i.kt)("a",{parentName:"p",href:"./stable-swap-state-oracle"},"StableSwapStateOracle"),") and a price feed that could provide a reasonably safe estimation of current stETH/ETH price."),(0,i.kt)("h2",{id:"vocabulary"},"Vocabulary"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Current price"),"\u2014current price of stETH on Curve pool. Flashloanable."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Historical price"),'\u2014the price of stETH on Curve pool that was at least 15 blocks ago. May be older than 15 blocks: in that case, the pool price that was 15 blocks ago differs from the "historical price" by no more than ',(0,i.kt)("inlineCode",{parentName:"li"},"N"),"%."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Safe price range"),"\u2014the range from ",(0,i.kt)("inlineCode",{parentName:"li"},"historical price - N%")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"min(historical price + N%, 1)"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Safe price"),"\u2014the price that's within the safe price range.")),(0,i.kt)("p",null,"The parameter ",(0,i.kt)("inlineCode",{parentName:"p"},"N")," is configured by the price feed admin; we're planning to initially set it to ",(0,i.kt)("inlineCode",{parentName:"p"},"5%"),"."),(0,i.kt)("h2",{id:"steth-price-feed-specification"},"stETH price feed specification"),(0,i.kt)("p",null,'The feed is used to fetch stETH/ETH pair price in a safe manner. By "safe" we mean that the price should be expensive to significantly manipulate in any direction, e.g. using flash loans or sandwich attacks.'),(0,i.kt)("p",null,"The feed interfaces with two contracts:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Curve stETH/ETH pool: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/curvefi/curve-contract/blob/c6df0cf/contracts/pools/steth/StableSwapSTETH.vy"},"source"),", ",(0,i.kt)("a",{parentName:"li",href:"https://etherscan.io/address/0xdc24316b9ae028f1497c275eb9192a3ea0f67022"},"deployed contract"),"."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"./stable-swap-state-oracle"},"StableSwapStateOracle"))),(0,i.kt)("p",null,"The pool is used as the main price source, and the oracle provides time-shifted price from the same pool used to establish a safe price range."),(0,i.kt)("p",null,"The price is defined as the amount of ETH wei needed to buy 1 stETH. For example, a price equal to ",(0,i.kt)("inlineCode",{parentName:"p"},"10**18")," would mean that stETH is pegged 1:1 to ETH."),(0,i.kt)("p",null,"The safe price is defined as the one that satisfies all of the following conditions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The absolute value of percentage difference between the safe price and the time-shifted price fetched from the Merkle oracle is at most ",(0,i.kt)("inlineCode",{parentName:"li"},"max_safe_price_difference"),"."),(0,i.kt)("li",{parentName:"ul"},"The safe price is at most ",(0,i.kt)("inlineCode",{parentName:"li"},"10**18"),", meaning that stETH cannot be more expensive than ETH.")),(0,i.kt)("h2",{id:"fail-conditions"},"Fail conditions"),(0,i.kt)("p",null,"Price feed can give incorrect data in, as far as we can tell, three situations:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"stETH/ETH price moving suddenly and very quickly. There is a 15 block or greater delay between a price drop and offchain oracle feed providers submitting a new historical price. It is usually longer than 15 blocks, because transactions are not mined instantaneously. Price movements this extreme should not happen normally; while stETH/ETH is volatile, it's not 5%-in-four-minutes volatile."),(0,i.kt)("li",{parentName:"ul"},"oracle feed going stale because feed providers go offline. This is mitigated by the fact it's operated by several very experienced professionals (all of which, e.g., are Chainlink operators too) - and we only need one operational provider to maintain the feed. The only realistic scenario where this feed goes offline is deprecating the oracle alltogether."),(0,i.kt)("li",{parentName:"ul"},"Multi-block flashloan attack. An block producer who is able to reliably get 2 blocks in a row can treat two blocks as an atomic transaction, leading to what is essentially a multiblock flashloan attack to manipulate price. That can lead to a short period of time (a few blocks) where stETH/ETH price feed is artificially manipulated. This attack is not mitigated, but in our opinion, not very realistic. It's very hard to pull off.")),(0,i.kt)("h2",{id:"view-methods"},"View Methods"),(0,i.kt)("h3",{id:"safe_price"},"safe_price()"),(0,i.kt)("p",null,"Returns the cached safe price and its timestamp."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"safe_price() -> (price: uint256, timestamp: uint256)\n")),(0,i.kt)("h3",{id:"current_price"},"current_price()"),(0,i.kt)("p",null,"Returns the current pool price and whether the price is safe."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"current_price() -> (price: uint256, is_safe: bool)\n")),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"update_safe_price"},"update_safe_price()"),(0,i.kt)("p",null,"Sets the cached safe price to the ",(0,i.kt)("inlineCode",{parentName:"p"},"max(current pool price, 1)")," given that the latter is safe."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"update_safe_price() -> uint256\n")),(0,i.kt)("h3",{id:"fetch_safe_price"},"fetch_safe_price()"),(0,i.kt)("p",null,"Returns the cached safe price and its timestamp. Calls ",(0,i.kt)("inlineCode",{parentName:"p"},"update_safe_price()")," prior to that if\nthe cached safe price is older than ",(0,i.kt)("inlineCode",{parentName:"p"},"max_age")," seconds."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"fetch_safe_price(max_age: uint256) -> (price: uint256, timestamp: uint256)\n")),(0,i.kt)("h4",{id:"parameters"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"max_age")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"uint256")),(0,i.kt)("td",{parentName:"tr",align:null},"Amount of seconds last value of safe price considered to be valid")))))}p.isMDXComponent=!0}}]);