(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],{15:function(e,t,i){},16:function(e,t,i){},17:function(e,t,i){},19:function(e,t,i){"use strict";i.r(t);var a=i(6),n=i.n(a),c=(i(14),i(9)),s=i(2),r=(i(15),i(1)),l=(i(16),i(17),i(0)),o=function(e){var t=e.movie;return Object(l.jsxs)("div",{className:"card","data-cy":"movie-card",children:[Object(l.jsx)("div",{className:"card-image",children:Object(l.jsx)("figure",{className:"image is-4by3",children:Object(l.jsx)("img",{src:t.imgUrl,alt:"Film logo"})})}),Object(l.jsxs)("div",{className:"card-content",children:[Object(l.jsxs)("div",{className:"media",children:[Object(l.jsx)("div",{className:"media-left",children:Object(l.jsx)("figure",{className:"image is-48x48",children:Object(l.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(l.jsx)("div",{className:"media-content",children:Object(l.jsx)("p",{className:"title is-8",children:t.title})})]}),Object(l.jsxs)("div",{className:"content",children:[t.description,Object(l.jsx)("br",{}),Object(l.jsx)("a",{href:t.imdbUrl,children:"IMDB"})]})]})]})},d=function(e){var t=e.movies;return Object(l.jsx)("div",{className:"movies",children:t.map((function(e){return Object(l.jsx)(o,{movie:e},e.imdbId)}))})},m=i(7),j=i.n(m);var b=function(e){var t=e.name,i=e.value,a=e.label,n=void 0===a?t:a,c=e.placeholder,o=void 0===c?"Enter ".concat(n):c,d=e.required,m=void 0!==d&&d,b=e.hasUrlError,u=e.onChange,h=void 0===u?function(){}:u,O=e.onBlur,g=void 0===O?function(){}:O,p=Object(r.useState)((function(){return"".concat(t,"-").concat(Math.random().toFixed(16).slice(2))})),v=Object(s.a)(p,1)[0],f=Object(r.useState)(!1),w=Object(s.a)(f,2),x=w[0],M=w[1],N=x&&m&&!i;return Object(l.jsxs)("div",{className:"field",children:[Object(l.jsx)("label",{className:"label",htmlFor:v,children:n}),Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("input",{type:"text",id:v,"data-cy":"movie-".concat(t),className:j()("input",{"is-danger":N}),placeholder:o,value:i,onChange:function(e){return h(e.target.value)},onBlur:function(){g(),h(i.trim()),M(!0)}})}),N&&Object(l.jsx)("p",{className:"help is-danger",children:"".concat(n," is required")}),b&&Object(l.jsx)("p",{className:"help is-danger",children:"Enter the correct URL"})]})},u=/^((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@,.\w_]*)#?(?:[,.!/\\\w]*))?)$/,h=function(e){return!u.test(e)},O=function(e){var t=e.onAdd,i=Object(r.useState)(0),a=Object(s.a)(i,2),n=a[0],c=a[1],o=Object(r.useState)(""),d=Object(s.a)(o,2),m=d[0],j=d[1],u=Object(r.useState)(""),O=Object(s.a)(u,2),g=O[0],p=O[1],v=Object(r.useState)(""),f=Object(s.a)(v,2),w=f[0],x=f[1],M=Object(r.useState)(""),N=Object(s.a)(M,2),U=N[0],y=N[1],B=Object(r.useState)(""),I=Object(s.a)(B,2),T=I[0],_=I[1],S=Object(r.useState)(!1),k=Object(s.a)(S,2),z=k[0],A=k[1],D=Object(r.useState)(!1),C=Object(s.a)(D,2),V=C[0],Y=C[1],F=m&&w&&U&&T;return Object(l.jsxs)("form",{className:"NewMovie",onSubmit:function(e){(e.preventDefault(),z||V)||(t({title:m,description:g,imgUrl:w,imdbUrl:U,imdbId:T}),c((function(e){return e+1})),j(""),p(""),x(""),y(""),_(""),A(!1),Y(!1))},children:[Object(l.jsx)("h2",{className:"title",children:"Add a movie"}),Object(l.jsx)(b,{name:"title",label:"Title",value:m,onChange:function(e){j(e)},required:!0}),Object(l.jsx)(b,{name:"description",label:"Description",value:g,onChange:function(e){p(e)}}),Object(l.jsx)(b,{name:"imgUrl",label:"Image URL",value:w,onChange:function(e){x(e)},hasUrlError:z,required:!0}),Object(l.jsx)(b,{name:"imdbUrl",label:"Imdb URL",value:U,onChange:function(e){y(e)},hasUrlError:V,required:!0}),Object(l.jsx)(b,{name:"imdbId",label:"Imdb ID",value:T,onChange:function(e){_(e)},required:!0}),Object(l.jsx)("div",{className:"field is-grouped",children:Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("button",{type:"submit","data-cy":"submit-button",className:"button is-link",onClick:function(){A(h(w)),Y(h(U))},disabled:!F,children:"Add"})})})]},n)},g=i(8),p=function(){var e=Object(r.useState)(g),t=Object(s.a)(e,2),i=t[0],a=t[1];return Object(l.jsxs)("div",{className:"page",children:[Object(l.jsx)("div",{className:"page-content",children:Object(l.jsx)(d,{movies:i})}),Object(l.jsx)("div",{className:"sidebar",children:Object(l.jsx)(O,{onAdd:function(e){a((function(t){return[].concat(Object(c.a)(t),[e])}))}})})]})};n.a.render(Object(l.jsx)(p,{}),document.getElementById("root"))},8:function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')}},[[19,1,2]]]);
//# sourceMappingURL=main.03dd4c00.chunk.js.map