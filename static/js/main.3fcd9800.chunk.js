(this.webpackJsonpanimenetflix=this.webpackJsonpanimenetflix||[]).push([[0],{20:function(e,t,a){e.exports=a(46)},25:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(16),i=a.n(r),c=(a(25),a(18)),o=a(2),l=a(3),m=a(5),u=a(4),p=(a(26),a(19)),d=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).componentDidMount=function(){document.querySelector(".input-box-user-input").addEventListener("keypress",(function(t){"Enter"===t.key&&(e.validate(),t.preventDefault())}))},e.placeholderFun=function(){var e=document.querySelector(".input-box-placeholder"),t=document.querySelector(".input-box-user-input");"Anime name?"===t.textContent&&(t.textContent=null),t.textContent||e.textContent||(e.textContent="Anime name",t.textContent="",t.classList.add("searched-anime"))},e.disableFun=function(){var e=document.querySelector(".input-box-user-input");e.textContent||(e.textContent="Anime name?",e.classList.remove("searched-anime"),document.querySelector(".input-box-placeholder").textContent=null)},e.validate=function(){var t=document.querySelector(".input-box-user-input"),a=t.textContent&&"Anime name?"!==t.textContent?t.textContent:"asdaDaFSaasdadasd";t.blur(),e.props.getData(a)},e.resetState=function(){var t=document.querySelector(".input-box-placeholder"),a=document.querySelector(".input-box-user-input");a.textContent="Anime name?",a.classList.contains("searched-anime")&&a.classList.remove("searched-anime"),t.textContent=null,e.props.clearState()},e}return Object(l.a)(a,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("div",{className:"banner-container"},s.a.createElement("h1",{className:"header-text"},"anime.io"),s.a.createElement("div",{className:"image-overflow"},s.a.createElement("img",{className:"img",onClick:this.resetState,src:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/28402147-92a1-4060-be7f-0444dbae3bf8/dbhehvt-db573295-0c15-47b1-b271-cffb86b6f241.jpg/v1/fill/w_1024,h_640,q_75,strp/anime_collage_wallpaper_by_dinocojv_d8ayeyz_by_sayaky946_dbhehvt-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD02NDAiLCJwYXRoIjoiXC9mXC8yODQwMjE0Ny05MmExLTQwNjAtYmU3Zi0wNDQ0ZGJhZTNiZjhcL2RiaGVodnQtZGI1NzMyOTUtMGMxNS00N2IxLWIyNzEtY2ZmYjg2YjZmMjQxLmpwZyIsIndpZHRoIjoiPD0xMDI0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.YfI-xtIaFkPSvZrIAQu4ZOK6O3o6MIcyAnllwBb_cnk"})),s.a.createElement("div",{className:"search-box"},s.a.createElement("h1",null,"For weebs, by a weeb!"),s.a.createElement("div",{className:"main-input-box"},s.a.createElement("div",{className:"input-box-placeholder"}),s.a.createElement("div",{className:"input-box-user-input placeholder",contentEditable:"true",onClick:this.placeholderFun,onBlur:this.disableFun},"Anime name?")),this.props.status?null:s.a.createElement("div",{className:"scroll"},"Invalid name"),s.a.createElement(p.a,{className:"button",size:"lg",onClick:this.validate},"Search"))))}}]),a}(n.Component),h=(a(27),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:this.props.length!==this.props.anime.LoR?"show-main bottom-border":"show-main"},this.props.anime&&this.props.anime.LoR%2===0&&window.screen.width>1e3?s.a.createElement("div",{className:"container-fluid"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-8"},s.a.createElement("span",{className:"anime-title"}," ",this.props.anime.title," ")," ",s.a.createElement("br",null),s.a.createElement("span",{className:"popularity"}," Popularity Rank: ",this.props.anime.popularityRank)," ",s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("span",{className:"heading"},"Description:")," ",this.props.anime.description," ",s.a.createElement("br",null),s.a.createElement("div",{className:"block-component"},s.a.createElement("span",{className:"heading"},"End Date:")," ",this.props.anime.endDate,"\xa0 \xa0",s.a.createElement("span",{className:"heading"},"Episode Count:")," ",this.props.anime.episodeCount),s.a.createElement("span",{className:"heading"},"Age Rating:")," ",this.props.anime.ageRating," ",s.a.createElement("br",null)),s.a.createElement("div",{className:"col-md-4"},s.a.createElement("img",{src:this.props.anime.poster,className:"anime-poster right"})))):s.a.createElement("div",{className:"container-fluid"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-4"},s.a.createElement("img",{src:this.props.anime.poster,className:"anime-poster"})),s.a.createElement("div",{className:"col-md-8"},s.a.createElement("span",{className:"anime-title"}," ",this.props.anime.title," ")," ",s.a.createElement("br",null),s.a.createElement("span",{className:"popularity"},"Popularity Rank: ",this.props.anime.popularityRank)," ",s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("span",{className:"heading"},"Description:")," ",this.props.anime.description," ",s.a.createElement("br",null),s.a.createElement("div",{className:"block-component"},s.a.createElement("span",{className:"heading"},"End Date:")," ",this.props.anime.endDate,"\xa0 \xa0",s.a.createElement("span",{className:"heading"},"Episode Count:")," ",this.props.anime.episodeCount),s.a.createElement("span",{className:"heading"},"Age Rating:")," ",this.props.anime.ageRating," ",s.a.createElement("br",null)))))}}]),a}(n.Component)),b=(a(28),a(17)),E=a.n(b),v=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={responseSuccess:!0,responseJSON:[]},e.getData=function(t){if(null===t)return e.clearState(),void e.setState({responseSuccess:!1});E.a.get("https://kitsu.io/api/edge/anime?filter[text]=".concat(t)).then((function(t){if(t.data.data.length>0){e.setState({responseSuccess:!0}),e.setState({responseJSON:[]});for(var a=0;a<t.data.data.length;a++){var n=e.restructureData(t.data.data[a],a);e.setState({responseJSON:[].concat(Object(c.a)(e.state.responseJSON),[n])})}document.getElementsByClassName("success-text")[0].style.textDecoration="none",document.querySelector(".success-text").scrollIntoView({behavior:"smooth",block:"start"})}else e.setState({responseSuccess:!1}),e.setState({responseJSON:[]}),document.getElementsByClassName("success-text")[0].style.textDecoration="line-through"}))},e.restructureData=function(e,t){return{title:e.attributes.canonicalTitle,description:e.attributes.description,endDate:e.attributes.endDate,episodeCount:e.attributes.episodeCount,poster:e.attributes.posterImage.large,popularityRank:e.attributes.popularityRank,ageRating:e.attributes.ageRating,LoR:t+1}},e.clearState=function(){e.setState({responseJSON:[]}),e.setState({responseSuccess:!0}),document.getElementsByClassName("success-text")[0].style.textDecoration="line-through"},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement("div",{className:"bottom-border"},s.a.createElement(d,{getData:this.getData,status:this.state.responseSuccess,response:this.state.responseJSON,clearState:this.clearState})),s.a.createElement("div",{className:"show-main-container"},s.a.createElement("br",null),s.a.createElement("p",{className:"success-text"}," Hurray! We've got few result(s) that fit your search key! "),this.state.responseJSON.length>0?this.state.responseJSON.map((function(t){return s.a.createElement(h,{anime:t,length:e.state.responseJSON.length})})):null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.3fcd9800.chunk.js.map