(this["webpackJsonpmesto-react-auth"]=this["webpackJsonpmesto-react-auth"]||[]).push([[0],{29:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),i=n(20),c=n.n(i),o=n(8),r=(n(29),n(24)),u=n(2),l=n(3),p=n.p+"static/media/header__logo.03b78ada.svg",d=n(0);function h(e){return Object(d.jsx)(l.d,{children:Object(d.jsx)(l.b,{path:"/",children:Object(d.jsxs)("nav",{className:e.isOpen?"header__menu header__menu_opened":"header__menu",children:[Object(d.jsx)("p",{className:"header__email",children:e.userData.email}),Object(d.jsx)("button",{className:"header__sign-out",onClick:e.onSignOut,children:"\u0412\u044b\u0439\u0442\u0438"})]})})})}var b=function(e){var t=s.a.useState(!1),n=Object(u.a)(t,2),a=n[0],i=n[1];return Object(d.jsxs)("header",{className:"header",children:[Object(d.jsx)(h,{userData:e.userData,onSignOut:function(){e.onSignOut(),i(!1)},isOpen:a}),Object(d.jsxs)("div",{className:"header__main",children:[Object(d.jsx)("a",{href:".",target:"_top",children:Object(d.jsx)("img",{src:p,className:"header__logo",alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f"})}),Object(d.jsxs)(l.d,{children:[Object(d.jsx)(l.b,{path:"/sign-in",children:Object(d.jsx)(o.b,{to:"/sign-up",className:"header__link",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})}),Object(d.jsx)(l.b,{path:"/sign-up",children:Object(d.jsx)(o.b,{to:"/sign-in",className:"header__link",children:"\u0412\u043e\u0439\u0442\u0438"})}),Object(d.jsx)(l.b,{path:"/",children:Object(d.jsx)("button",{className:a?"header__hamburger-button header__hamburger-button_opened":"header__hamburger-button",onClick:function(){i(!a)}})})]})]})]})},j=s.a.createContext();function _(e){var t=s.a.useContext(j),n=e.card.owner._id===t._id,a=e.card.likes.some((function(e){return e._id===t._id})),i="".concat(n?"card__delete-button":"card__delete-button card__delete-button_hidden"),c="".concat(a?"card__like-button card__like-button_active":"card__like-button");return Object(d.jsxs)("article",{className:"card",children:[Object(d.jsx)("img",{src:e.card.link,className:"card__image",alt:e.card.name,onClick:function(){e.onCardClick(e.card)}}),Object(d.jsx)("button",{className:i,onClick:function(){e.onCardDeleteClick(e.card)},type:"button"}),Object(d.jsxs)("div",{className:"card__caption",children:[Object(d.jsx)("h2",{className:"card__name",children:e.card.name}),Object(d.jsxs)("div",{className:"card__like-display",children:[Object(d.jsx)("button",{className:c,onClick:function(){e.onCardLike(e.card)},type:"button"}),Object(d.jsx)("p",{className:"card__like-counter",name:"",children:e.card.likes.length})]})]})]})}function m(e){var t=s.a.useContext(j);return Object(d.jsxs)("main",{children:[Object(d.jsxs)("section",{className:"profile",children:[Object(d.jsxs)("div",{className:"profile__avatar-container",children:[Object(d.jsx)("img",{src:t.avatar,alt:e.isAvatarLoading?"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430...":"\u0410\u0432\u0430\u0442\u0430\u0440 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f: ".concat(t.name),className:"profile__avatar"}),Object(d.jsx)("button",{className:"profile__avatar-edit",type:"button",onClick:e.onEditAvatar})]}),Object(d.jsxs)("div",{className:"profile__info",children:[Object(d.jsx)("h1",{className:"profile__name",children:e.isUserInfoLoading?"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430...":t.name}),Object(d.jsx)("button",{className:"profile__edit-button",type:"button",onClick:e.onEditProfile}),Object(d.jsx)("p",{className:"profile__caption",children:e.isUserInfoLoading?"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430...":t.about})]}),Object(d.jsx)("button",{className:"profile__add-button",type:"button",onClick:e.onAddPlace})]}),Object(d.jsx)("section",{className:"cards",children:e.cards.map((function(t){return Object(d.jsx)(_,{card:t,onCardClick:e.onCardClick,onCardLike:e.onCardLike,onCardDeleteClick:e.onCardDeleteClick},t._id)}))})]})}var f=function(){return Object(d.jsx)("footer",{className:"footer",children:Object(d.jsx)("p",{className:"footer__copyright",children:"\xa9 2020 Mesto Russia"})})};var O=function(e){return Object(d.jsx)("article",{className:"popup popup_type_".concat(e.name," ").concat(e.isOpen?"popup_opened":""),children:Object(d.jsxs)("form",{action:"#",className:"form popup__container",name:e.name,onSubmit:e.onSubmit,noValidate:!0,children:[Object(d.jsx)("button",{className:"popup__close",type:"button",onClick:e.onClose}),Object(d.jsx)("h2",{className:"popup__caption",children:e.title}),e.children,Object(d.jsx)("button",{disabled:e.isDisabled,className:e.isDisabled?"popup__submit":"popup__submit popup__submit_active",type:"submit",children:e.isLoading?"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430...":e.buttonText})]})})},x=n(13),g=n(9);function v(){var e=s.a.useState({}),t=Object(u.a)(e,2),n=t[0],a=t[1],i=s.a.useState({}),c=Object(u.a)(i,2),o=c[0],r=c[1],l=s.a.useState(!1),p=Object(u.a)(l,2),d=p[0],h=p[1];var b=s.a.useCallback((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];a(e),r(t),h(n)}),[a,r,h]);return{values:n,errors:o,isElementValid:d,handleElementChange:function(e){var t=e.target,s=e.target.name,i=e.target.value;a(Object(g.a)(Object(g.a)({},n),{},Object(x.a)({},s,i))),r(Object(g.a)(Object(g.a)({},o),{},Object(x.a)({},s,t.validationMessage))),h(t.closest(".form").checkValidity())},resetFormInputs:b}}function C(e){var t=v(),n=t.values,a=t.errors,i=t.isElementValid,c=t.handleElementChange,o=t.resetFormInputs,r=s.a.useContext(j);return s.a.useEffect((function(){r&&o(r)}),[r,o,e.isOpen]),Object(d.jsxs)(O,{name:"edit",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onUpdateUser(n)},isDisabled:!i,isLoading:e.isLoading,children:[Object(d.jsx)("input",{type:"text",className:a.name?"popup__text popup__text_type_error":"popup__text",id:"name-input",name:"name",required:!0,minLength:"2",maxLength:"40",value:n.name||"",onChange:c}),Object(d.jsx)("span",{className:a.name?"popup__text-error popup__text-error_visible":"popup__text-error",children:a.name}),Object(d.jsx)("input",{type:"text",className:a.about?"popup__text popup__text_type_error":"popup__text",id:"caption-input",name:"about",required:!0,minLength:"2",maxLength:"200",value:n.about||"",onChange:c}),Object(d.jsx)("span",{className:a.about?"popup__text-error popup__text-error_visible":"popup__text-error",children:a.about})]})}var N=function(e){return Object(d.jsx)("article",{className:"popup popup_type_card-image ".concat(e.isOpen?"popup_opened":""),children:Object(d.jsxs)("figure",{className:"popup__image-container",children:[Object(d.jsx)("button",{className:"popup__close popup__close_type_card-image",type:"button",onClick:e.onClose}),Object(d.jsx)("img",{src:e.card.link,className:"popup__image",alt:e.card.name}),Object(d.jsx)("figcaption",{className:"popup__figcaption",children:e.card.name})]})})};function k(e){var t=v(),n=t.values,a=t.errors,i=t.isElementValid,c=t.handleElementChange,o=t.resetFormInputs;return s.a.useEffect((function(){o()}),[o,e.isOpen]),Object(d.jsxs)(O,{name:"avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onUpdateAvatar(n)},isDisabled:!i,isLoading:e.isLoading,children:[Object(d.jsx)("input",{type:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0430\u0432\u0430\u0442\u0430\u0440\u043a\u0443",className:a.avatar?"popup__text popup__text_type_error":"popup__text",id:"avatar-input",name:"avatar",value:n.avatar||"",onChange:c,required:!0}),Object(d.jsx)("span",{className:a.avatar?"popup__text-error popup__text-error_visible":"popup__text-error",children:a.avatar})]})}function S(e){var t=v(),n=t.values,a=t.errors,i=t.isElementValid,c=t.handleElementChange,o=t.resetFormInputs;return s.a.useEffect((function(){o()}),[o,e.isOpen]),Object(d.jsxs)(O,{name:"add",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onAddPlace(n)},isDisabled:!i,isLoading:e.isLoading,children:[Object(d.jsx)("input",{type:"text",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",className:a.name?"popup__text popup__text_type_error":"popup__text",name:"name",id:"image-input",required:!0,minLength:"2",maxLength:"30",value:n.name||"",onChange:c}),Object(d.jsx)("span",{className:a.name?"popup__text-error popup__text-error_visible":"popup__text-error",children:a.name}),Object(d.jsx)("input",{type:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",className:a.link?"popup__text popup__text_type_error":"popup__text",id:"link-input",name:"link",required:!0,value:n.link||"",onChange:c}),Object(d.jsx)("span",{className:a.link?"popup__text-error popup__text-error_visible":"popup__text-error",children:a.link})]})}function y(e){return Object(d.jsx)(O,{name:"delete",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",buttonText:"\u0414\u0430",isOpen:e.isOpen,isLoading:e.isLoading,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onDeleteCard(e.selectedCard)}})}var L=n(22),E=n(23),U=new(function(){function e(t){Object(L.a)(this,e),this.baseUrl=t.baseUrl,this.headers=t.headers}return Object(E.a)(e,[{key:"_getServerResponse",value:function(e){return e.ok?e.json():Promise.reject("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043e\u0442\u0432\u0435\u0442 \u043e\u0442 \u0441\u0435\u0440\u0432\u0435\u0440\u0430. \u041e\u0448\u0438\u0431\u043a\u0430 ".concat(e.status))}},{key:"getUserInfo",value:function(){return fetch("".concat(this.baseUrl,"/users/me"),{headers:this.headers}).then(this._getServerResponse)}},{key:"setUserInfo",value:function(e){return fetch("".concat(this.baseUrl,"/users/me"),{method:"PATCH",headers:this.headers,body:JSON.stringify({name:e.name,about:e.about})}).then(this._getServerResponse)}},{key:"getCards",value:function(){return fetch("".concat(this.baseUrl,"/cards"),{headers:this.headers}).then(this._getServerResponse)}},{key:"addCard",value:function(e){return fetch("".concat(this.baseUrl,"/cards"),{method:"POST",headers:this.headers,body:JSON.stringify({name:e.name,link:e.link})}).then(this._getServerResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this.baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this.headers}).then(this._getServerResponse)}},{key:"like",value:function(e){return fetch("".concat(this.baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:this.headers}).then(this._getServerResponse)}},{key:"dislike",value:function(e){return fetch("".concat(this.baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:this.headers}).then(this._getServerResponse)}},{key:"changeLikeCardStatus",value:function(e,t){return e?this.dislike(t):this.like(t)}},{key:"setAvatar",value:function(e){return fetch("".concat(this.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this.headers,body:JSON.stringify({avatar:e.avatar})}).then(this._getServerResponse)}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-21",headers:{authorization:"c717fb8f-7e38-4c7d-b617-f552f6e3b5d3","Content-Type":"application/json"}});function D(e){var t=Object(l.h)().pathname;return Object(d.jsxs)("section",{className:"auth",children:[Object(d.jsx)("h2",{className:"auth__title",children:e.title}),Object(d.jsxs)("form",{className:"form auth__form",action:"#",name:e.formName,onSubmit:e.onSubmit,noValidate:!0,children:[e.children,Object(d.jsx)("button",{className:e.isValid?"auth__button auth__button_active":"auth__button",disabled:!e.isValid,type:"submit",children:e.submitButtonText}),"/sign-up"===t&&Object(d.jsxs)("p",{className:"auth__caption",children:["\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b? ",Object(d.jsx)(o.b,{className:"auth__caption_type_link",to:"/sign-in",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})]})}function I(e){var t=v(),n=t.values,a=t.errors,s=t.isElementValid,i=t.handleElementChange,c=t.resetFormInputs;return Object(d.jsxs)(D,{submitButtonText:e.isLoading?"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430...":"\u0412\u043e\u0439\u0442\u0438",title:"\u0412\u0445\u043e\u0434",isValid:s,onSubmit:function(t){t.preventDefault(),e.onSignIn(n),e.isLoggedIn&&c()},formName:"login",children:[Object(d.jsx)("input",{className:"auth__input",placeholder:"Email","aria-label":"\u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0430\u044f \u043f\u043e\u0447\u0442\u0430",type:"email",id:"email",name:"email",value:n.email||"",onChange:i,required:!0}),Object(d.jsx)("span",{className:a.email?"auth__input-error auth__input-error_visible":"auth__input-error",children:a.email}),Object(d.jsx)("input",{className:"auth__input",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",type:"password",id:"password",name:"password",value:n.password||"",onChange:i,required:!0}),Object(d.jsx)("span",{className:a.password?"auth__input-error auth__input-error_visible":"auth__input-error",children:a.password})]})}function w(e){var t=v(),n=t.values,a=t.errors,s=t.isElementValid,i=t.handleElementChange,c=t.resetFormInputs;return Object(d.jsxs)(D,{submitButtonText:e.isLoading?"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430...":"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f",title:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",isValid:s,onSubmit:function(t){t.preventDefault(),e.onSignUp(n),e.isSuccess&&c()},formName:"register",children:[Object(d.jsx)("input",{className:"auth__input",placeholder:"Email","aria-label":"\u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0430\u044f \u043f\u043e\u0447\u0442\u0430",type:"email",id:"email",name:"email",value:n.email||"",onChange:i,required:!0}),Object(d.jsx)("span",{className:a.email?"auth__input-error auth__input-error_visible":"auth__input-error",children:a.email}),Object(d.jsx)("input",{className:"auth__input",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",type:"password",id:"password",name:"password",value:n.password||"",onChange:i,required:!0}),Object(d.jsx)("span",{className:a.password?"auth__input-error auth__input-error_visible":"auth__input-error",children:a.password})]})}function T(e){var t=Object.assign({},e);return Object(d.jsx)(l.b,{children:function(){return t.isLoggedIn?Object(d.jsx)(l.b,Object(g.a)({},t)):Object(d.jsx)(l.a,{to:"/sign-in"})}})}var P=n.p+"static/media/successful-registration.1b6082f8.svg",A=n.p+"static/media/unsuccessful registration.df8eddf6.svg";function V(e){return Object(d.jsx)("article",{className:"popup popup_type_".concat(e.name," ").concat(e.isOpen?"popup_opened":""),children:Object(d.jsxs)("div",{className:"popup__container",children:[Object(d.jsx)("button",{className:"popup__close",type:"button",onClick:e.onClose}),Object(d.jsx)("img",{src:e.isSuccess?P:A,alt:e.usSuccess?"\u0438\u043a\u043e\u043d\u043a\u0430 \u0443\u0441\u043f\u0435\u0448\u043d\u043e\u0439 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438":"\u0438\u043a\u043e\u043d\u043a\u0430 \u043d\u0435\u0443\u0441\u043f\u0435\u0448\u043d\u043e\u0439 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438",className:"popup__icon"}),Object(d.jsx)("p",{className:"popup__message",children:e.isSuccess?"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!":"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437."})]})})}var F="https://auth.nomoreparties.co",R=function(e){return e.ok?e.json():Promise.reject(new Error("\u041e\u0448\u0438\u0431\u043a\u0430 ".concat(e.status,": ").concat(e.statusText)))},q={Accept:"application/json","Content-Type":"application/json"};function J(){var e=s.a.useState(!1),t=Object(u.a)(e,2),n=t[0],a=t[1],i=s.a.useState(!1),c=Object(u.a)(i,2),o=c[0],p=c[1],h=s.a.useState(!1),_=Object(u.a)(h,2),O=_[0],x=_[1],v=s.a.useState(!1),L=Object(u.a)(v,2),E=L[0],D=L[1],P=s.a.useState(!1),A=Object(u.a)(P,2),J=A[0],B=A[1],M=s.a.useState(!1),z=Object(u.a)(M,2),H=z[0],G=z[1],K=s.a.useState({}),Q=Object(u.a)(K,2),W=Q[0],X=Q[1],Y=s.a.useState({}),Z=Object(u.a)(Y,2),$=Z[0],ee=Z[1],te=s.a.useState([]),ne=Object(u.a)(te,2),ae=ne[0],se=ne[1],ie=s.a.useState(!1),ce=Object(u.a)(ie,2),oe=ce[0],re=ce[1],ue=s.a.useState(!1),le=Object(u.a)(ue,2),pe=le[0],de=le[1],he=s.a.useState(!1),be=Object(u.a)(he,2),je=be[0],_e=be[1],me=s.a.useState(!1),fe=Object(u.a)(me,2),Oe=fe[0],xe=fe[1],ge=s.a.useState({}),ve=Object(u.a)(ge,2),Ce=ve[0],Ne=ve[1],ke=s.a.useState(!1),Se=Object(u.a)(ke,2),ye=Se[0],Le=Se[1],Ee=Object(l.g)();function Ue(){a(!1),p(!1),x(!1),D(!1),G(!1),B(!1),X({})}return s.a.useEffect((function(){re(!0),de(!0),U.getUserInfo().then((function(e){ee(e)})).catch((function(e){console.log(e)})).finally((function(){de(!1),re(!1)}))}),[]),s.a.useEffect((function(){U.getCards().then((function(e){se(e)})).catch((function(e){console.log(e)}))}),[]),s.a.useEffect((function(){var e,t=localStorage.getItem("jwt");t&&(e=t,fetch("".concat(F,"/users/me"),{method:"GET",headers:Object(g.a)(Object(g.a)({},q),{},{Authorization:"Bearer ".concat(e)})}).then((function(e){return R(e)}))).then((function(e){xe(!0),Ne(e.data),Ee.push("/")})).catch((function(e){switch(e){case 400:console.log("\u0422\u043e\u043a\u0435\u043d \u043d\u0435 \u043f\u0435\u0440\u0435\u0434\u0430\u043d \u0438\u043b\u0438 \u043f\u0435\u0440\u0435\u0434\u0430\u043d \u043d\u0435 \u0432 \u0442\u043e\u043c \u0444\u043e\u0440\u043c\u0430\u0442\u0435");break;case 401:console.log("\u041f\u0435\u0440\u0435\u0434\u0430\u043d\u043d\u044b\u0439 \u0442\u043e\u043a\u0435\u043d \u043d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u0435\u043d ")}}))}),[Ee]),Object(d.jsx)(j.Provider,{value:$,children:Object(d.jsxs)("div",{className:"page",children:[Object(d.jsx)(b,{userData:Ce,onSignOut:function(){localStorage.removeItem("jwt"),Ee.push("/sign-in"),xe(!1)}}),Object(d.jsxs)(l.d,{children:[Object(d.jsxs)(T,{exact:!0,path:"/",isLoggedIn:Oe,children:[Object(d.jsx)(m,{onEditProfile:function(){p(!o)},onAddPlace:function(){x(!O)},onEditAvatar:function(){a(!n)},onCardClick:function(e){X(e),D(!E)},onCardLike:function(e){var t=e.likes.some((function(e){return e._id===$._id}));U.changeLikeCardStatus(t,e._id).then((function(t){se((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))})).catch((function(e){console.log(e)}))},onCardDeleteClick:function(e){X(e),G(!0)},cards:ae,isAvatarLoading:oe,isUserInfoLoading:pe}),Object(d.jsx)(f,{})]}),Object(d.jsx)(l.b,{path:"/sign-up",children:Object(d.jsx)(w,{onSignUp:function(e){_e(!0),function(e){return fetch("".concat(F,"/signup"),{headers:q,method:"POST",body:JSON.stringify(e)}).then((function(e){return R(e)}))}(e).then((function(e){e&&(Le(!0),B(!0),Ee.push("/sign-in"))})).catch((function(e){B(!0),Le(!1),400===e&&console.log("\u043d\u0435\u043a\u043e\u0440\u0435\u043a\u0442\u043d\u043e \u0437\u0430\u043f\u043e\u043b\u0435\u043d\u043e \u043e\u0434\u043d\u043e \u0438\u0437 \u043f\u043e\u043b\u0435\u0439")})).finally((function(){_e(!1)}))},isSuccess:ye,isLoading:je})}),Object(d.jsx)(l.b,{path:"/sign-in",children:Object(d.jsx)(I,{onSignIn:function(e){_e(!0),function(e){return fetch("".concat(F,"/signin"),{headers:q,method:"POST",body:JSON.stringify(e)}).then((function(e){return R(e)}))}(e).then((function(t){t.token&&(xe(!0),Ne(e),localStorage.setItem("jwt",t.token),Ee.push("/"))})).catch((function(e){switch(Le(!1),B(!0),e){case 400:console.log("\u043d\u0435 \u043f\u0435\u0440\u0435\u0434\u0430\u043d\u043e \u043e\u0434\u043d\u043e \u0438\u0437 \u043f\u043e\u043b\u0435\u0439");break;case 401:console.log("\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0441 email \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d")}})).finally((function(){_e(!1)}))},isLoggedIn:Oe,isLoading:je})}),Object(d.jsx)(l.b,{children:Oe?Object(d.jsx)(l.a,{to:"/"}):Object(d.jsx)(l.a,{to:"/sign-in"})})]}),Object(d.jsx)(C,{isOpen:o,onClose:Ue,onUpdateUser:function(e){_e(!0),de(!0),U.setUserInfo(e).then((function(e){ee(e),Ue()})).catch((function(e){console.log(e)})).finally((function(){de(!1),_e(!1)}))},isLoading:je}),Object(d.jsx)(S,{isOpen:O,onClose:Ue,onAddPlace:function(e){_e(!0),U.addCard(e).then((function(e){se([e].concat(Object(r.a)(ae))),Ue()})).catch((function(e){console.log(e)})).finally((function(){_e(!1)}))},isLoading:je}),Object(d.jsx)(k,{isOpen:n,onClose:Ue,onUpdateAvatar:function(e){re(!0),_e(!0),U.setAvatar(e).then((function(e){ee(e),Ue()})).catch((function(e){console.log(e)})).finally((function(){re(!1),_e(!1)}))},isLoading:je}),Object(d.jsx)(y,{isOpen:H,onClose:Ue,onDeleteCard:function(e){_e(!0),U.deleteCard(e._id).then((function(){se((function(t){return t.filter((function(t){return t._id!==e._id}))})),Ue()})).catch((function(e){console.log(e)})).finally((function(){_e(!1)}))},isLoading:je,selectedCard:W}),Object(d.jsx)(N,{isOpen:E,card:W,onClose:Ue}),Object(d.jsx)(V,{isOpen:J,isSuccess:ye,onClose:Ue})]})})}var B=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,37)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),a(e),s(e),i(e),c(e)}))};c.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(o.a,{children:Object(d.jsx)(J,{})})}),document.getElementById("root")),B()}},[[36,1,2]]]);
//# sourceMappingURL=main.46613d5c.chunk.js.map