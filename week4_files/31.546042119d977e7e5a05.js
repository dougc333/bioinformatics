webpackJsonp([31],{"+kzj":function(module,exports,e){(function(t){var r,o;r=[e,exports,module,e("U7vG"),e("AwHF"),e("8k/k"),e("9FwV"),e("MBY5"),e("llyE"),e("jOkS"),e("Lqnx"),e("PtSL"),e("rMvO"),e("CfcV"),e("BALM"),e("5Qp/"),e("Ivv8"),e("vC4y"),e("U97Q"),e("nVTL"),e("4wAy"),e("cjZO"),e("qDvH"),e("iomd"),e("w5FR"),e("lDcb"),e("KxE+"),e("4ivr"),e("6vDQ"),e("7hZU"),e("p4Of")],void 0!==(o=function(require,exports,module){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function _defaults(e,t){for(var r=Object.getOwnPropertyNames(t),o=0;o<r.length;o++){var n=r[o],u=Object.getOwnPropertyDescriptor(t,n);u&&u.configurable&&void 0===e[n]&&Object.defineProperty(e,n,u)}return e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):_defaults(e,t))}var t,r,o=e("U7vG"),n=_interopRequireWildcard(o),u=e("AwHF"),i=_interopRequireDefault(u),s=e("8k/k"),a=_interopRequireDefault(s),d=e("9FwV"),c=_interopRequireDefault(d),l=e("MBY5"),f=_interopRequireDefault(l),p=e("llyE"),v=_interopRequireDefault(p),g=e("jOkS"),h=_interopRequireDefault(g),D=e("Lqnx"),S=_interopRequireDefault(D),y=e("PtSL"),m=_interopRequireDefault(y),I=e("rMvO"),R=e("CfcV"),L=e("BALM"),E=e("5Qp/"),C=e("Ivv8"),O=e("vC4y"),q=e("U97Q"),P=e("nVTL"),w=e("4wAy"),x=e("cjZO"),A=e("qDvH"),k=e("iomd"),H=e("w5FR"),M=_interopRequireDefault(H),G=e("lDcb"),b=_interopRequireDefault(G),F=e("KxE+"),U=_interopRequireDefault(F),T=e("4ivr"),j=_interopRequireDefault(T),V=e("6vDQ"),Q=_interopRequireDefault(V),Z=e("7hZU"),B=_interopRequireDefault(Z),N=e("p4Of"),W=_interopRequireDefault(N),X=(r=t=function(e){function LegacyDataFetch(){return _classCallCheck(this,LegacyDataFetch),_possibleConstructorReturn(this,e.apply(this,arguments))}return _inherits(LegacyDataFetch,e),LegacyDataFetch.prototype.render=function render(){var e=this.props.children;if(!e)return null;return n.cloneElement(e,{})},LegacyDataFetch}(n.Component),t.contextTypes={router:n.PropTypes.object.isRequired,executeAction:n.PropTypes.func.isRequired,getStore:n.PropTypes.func.isRequired},r);module.exports=i.default.compose((0,h.default)(function(){return!1}),(0,v.default)(function(e,t){return{courseSlug:e.params.courseSlug}}),(0,f.default)([U.default,b.default,B.default,M.default,j.default,Q.default],function(e,t,r,o,n,u){return{s12n:o.getS12n(),course:t.getMetadata(),courseId:t.getCourseId(),isEnrolled:r.isEnrolled(),sessionId:e.getSessionId(),isEnrolledInSession:e.isEnrolled(),s12nStoreHasLoaded:o.hasLoaded(),courseStoreHasLoaded:t.hasLoaded(),sessionStoreHasLoaded:e.hasLoaded(),verificationStoreHasLoaded:n.hasLoaded(),courseMembershipStoreHasLoaded:r.hasLoaded(),computedModelStoreHasLoaded:u.hasLoaded(),courseIdentifiersHaveLoaded:t.haveCourseIdentifiersLoaded()}}),(0,S.default)(function(e,t){var r=t.courseSlug;e.executeAction(m.default,r)}),(0,c.default)(function(e){return e.courseIdentifiersHaveLoaded}),(0,c.default)(function(e){return!!e.courseId},n.createElement(W.default,null)),(0,S.default)(function(e,t){var r=t.courseId;e.executeAction(O.loadMembership,r)}),(0,c.default)(function(e){return e.courseMembershipStoreHasLoaded}),(0,c.default)(function(e){var t=e.isEnrolled;return a.default.isSuperuser()||t},n.createElement(W.default,null)),(0,S.default)(function(e,t){var r=t.courseSlug,o=t.courseId;e.executeAction(E.loadComputedModels,{courseSlug:r,courseId:o})}),(0,c.default)(function(e){return e.computedModelStoreHasLoaded}),(0,S.default)(function(e,t){var r=t.courseId,o=t.courseSlug,n=a.default.get().id,u=a.default.isAuthenticatedUser();e.executeAction(R.getCurrentSession,{courseSlug:o}),e.executeAction(P.loadCourseViewGrade,{courseId:r}),e.executeAction(x.loadUserGroupsForCourse,{courseId:r,userId:n}),e.executeAction(k.loadHonorsUserPreferences,{authenticated:u}),e.executeAction(C.loadCertificateData,{courseId:r,userId:n}),e.executeAction(I.getProgress,{authenticated:u,courseId:r,userId:n}),e.executeAction(L.loadInsightsByContextWithProgress,{contextType:"COURSE",contextId:r})}),(0,c.default)(function(e){var t=e.s12nStoreHasLoaded,r=e.courseStoreHasLoaded,o=e.sessionStoreHasLoaded;return t&&r&&o}),(0,S.default)(function(e,t){var r=t.courseId,o=t.course,n=t.s12n,u=t.sessionId,i=a.default.get().id,s=a.default.isAuthenticatedUser(),d=n&&n.getId(),c=o.isVerificationEnabled(),l=e.getStore("CourseStore");e.executeAction(q.loadCourseDeadlines,{userId:i}),l.isCumulativeGradePolicy()&&e.executeAction(A.loadCoursePresentGrade,{userId:i,courseId:r}),e.executeAction(w.loadVerificationDisplay,{authenticated:s,userId:i,courseId:r,isCourseVerificationEnabled:c,s12nId:d}),e.executeAction(x.loadUserSessionGroupForCourse,{courseId:r,userId:i,sessionId:u})}),(0,c.default)(function(e){return e.verificationStoreHasLoaded}))(X)}.apply(exports,r))&&(module.exports=o)}).call(exports,e("U7vG"))},"37IR":function(module,exports,e){var t,r;t=[e,exports,module,e("wKvT"),e("dpgV"),e("41Df")],void 0!==(r=function(require,exports,module){"use strict";var t=e("wKvT"),r=e("dpgV"),o=e("41Df");module.exports=function(e){return t(o.build(r.prototype.resourceName,e))}}.apply(exports,t))&&(module.exports=r)},"5Qp/":function(module,exports,e){var t,r;t=[e,exports,module,e("go2y"),e("narh"),e("eoPD"),e("WXJF"),e("mv2b"),e("eoZB"),e("O88V"),e("6vDQ")],void 0!==(r=function(require,exports,module){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var t=e("go2y"),r=_interopRequireDefault(t),o=e("narh"),n=_interopRequireDefault(o),u=e("eoPD"),i=_interopRequireDefault(u),s=e("WXJF"),a=_interopRequireDefault(s),d=e("mv2b"),c=_interopRequireDefault(d),l=e("eoZB"),f=_interopRequireDefault(l),p=e("O88V"),v=_interopRequireDefault(p),g=e("6vDQ"),h=_interopRequireDefault(g);exports.loadComputedModels=function(e,t){var o=t.courseSlug,u=t.courseId;if(e.getStore(h.default).hasLoaded())return(0,r.default)();return r.default.all([(0,i.default)(e),(0,n.default)(e,u),(0,c.default)(e,o),(0,a.default)(e,u),(0,f.default)(e,u),(0,v.default)(e,u)]).then(function(){e.dispatch("LOAD_COMPUTED_MODELS")})}}.apply(exports,t))&&(module.exports=r)},BALM:function(module,exports,e){var t,r;t=[e,exports,module,e("el12")],void 0!==(r=function(require,exports,module){"use strict";var t=e("el12");exports.loadInsightsByContextWithProgress=function(e,r){var o=r.contextType,n=r.contextId;t.loadInsightsByContextWithProgress(o,n).then(function(t){var r=t.elements;e.dispatch("LEARNER_LOAD_INSIGHTS",{insights:r})}).done()}}.apply(exports,t))&&(module.exports=r)},CIu2:function(module,exports,e){var t,r;t=[e,exports,module,e("go2y"),e("iFGm"),e("LwZ5"),e("8k/k")],void 0!==(r=function(require,exports,module){"use strict";var t=e("go2y"),r=e("iFGm"),o=e("LwZ5"),n=e("8k/k"),u=o("/api/onDemandHomeProgress.v1",{type:"rest"});exports.getHomeProgress=function(e){var o=n.get().id+"~"+e,i=new r(o).addQueryParam("fields","modulesCompleted,modulesPassed");return t(u.get(i.toString()))}}.apply(exports,t))&&(module.exports=r)},Ivv8:function(module,exports,e){var t,r;t=[e,exports,module,e("go2y"),e("rB0C")],void 0!==(r=function(require,exports,module){"use strict";var t=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},r=e("go2y"),o=e("rB0C"),n={showHidden:!0,fields:["courseId","grade"],includes:{vcMembership:{fields:["certificateCode","certificateCodeWithGrade","grade","grantedAt"]},course:{fields:[]}}};exports.loadCertificateData=function(e,u){var i=u.courseId,s=u.userId;if(e.getStore("CertificateStore").hasLoaded())return r();var a=void 0;return a=s?o(t({id:s+"~"+i},n,{rawData:!0})).then(function(t){e.dispatch("LOAD_MEMBERSHIPS",t)}):r().then(function(){e.dispatch("LOAD_MEMBERSHIPS",null)}),a.done(),a}}.apply(exports,t))&&(module.exports=r)},O88V:function(module,exports,e){var t,r;t=[e,exports,module,e("go2y"),e("8k/k"),e("24lr"),e("CIu2")],void 0!==(r=function(require,exports,module){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var t=e("go2y"),r=_interopRequireDefault(t),o=e("8k/k"),n=_interopRequireDefault(o),u=e("24lr"),i=_interopRequireDefault(u),s=e("CIu2");module.exports=function(e,t){if(e.getStore(i.default).hasLoaded())return(0,r.default)();return n.default.isAuthenticatedUser()?(0,s.getHomeProgress)(t).then(function(t){t.elements&&t.elements.length&&e.dispatch("LOAD_HOME_PROGRESS",t.elements[0])}).fail(function(){e.dispatch("LOAD_HOME_PROGRESS",{modulesCompleted:[],modulesPassed:[]})}):(e.dispatch("LOAD_HOME_PROGRESS",{modulesCompleted:[],modulesPassed:[]}),(0,r.default)())}}.apply(exports,t))&&(module.exports=r)},PtSL:function(module,exports,e){var t,r;t=[e,exports,module,e("go2y"),e("X2hd"),e("lDcb")],void 0!==(r=function(require,exports,module){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var t=e("go2y"),r=_interopRequireDefault(t),o=e("X2hd"),n=_interopRequireDefault(o),u=e("lDcb"),i=_interopRequireDefault(u);module.exports=function(e,t){if(e.getStore(i.default).haveCourseIdentifiersLoaded())return(0,r.default)();if(!t)throw new Error("Missing courseSlug");return(0,n.default)(t).then(function(r){var o=r.courseId,n=r.courseCertificates;if(!o)throw new Error("Missing courseId");return e.dispatch("SET_COURSE_IDENTIFIERS",{courseId:o,courseSlug:t,courseCertificates:n}),{courseId:o,courseSlug:t,courseCertificates:n}}).catch(function(o){console.error("Error getting courseId and courseCertificates from courseSlug: "+t+": ",o,o.stack);var n="",u=[];return e.dispatch("SET_COURSE_IDENTIFIERS",{courseId:"",courseSlug:t,courseCertificates:u}),(0,r.default)({courseId:"",courseSlug:t,courseCertificates:u})})}}.apply(exports,t))&&(module.exports=r)},WXJF:function(module,exports,e){var t,r;t=[e,exports,module,e("go2y"),e("uf8H"),e("3dUg"),e("zHM+")],void 0!==(r=function(require,exports,module){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var t=e("go2y"),r=_interopRequireDefault(t),o=e("uf8H"),n=_interopRequireDefault(o),u=e("3dUg"),i=_interopRequireDefault(u),s=e("zHM+"),a=_interopRequireDefault(s);module.exports=function(e,t){if(e.getStore(i.default).hasLoaded())return(0,r.default)();if(!t)return r.default.reject(new a.default("courseId must be provided."));return(0,n.default)(t).then(function(t){e.dispatch("LOAD_COURSE_SCHEDULE",t)})}}.apply(exports,t))&&(module.exports=r)},X2hd:function(module,exports,e){var t,r;t=[e,exports,module,e("go2y"),e("iFGm"),e("2TVH"),e("oq/K")],void 0!==(r=function(require,exports,module){"use strict";var t=e("go2y"),r=e("iFGm"),o=e("2TVH"),n=e("oq/K");module.exports=function(e){var u=new o("/api/courses.v1",{type:"rest"}),i=(new r).addQueryParam("q","slug").addQueryParam("slug",e).addQueryParam("fields","certificates").addQueryParam("showHidden",!0);return t(u.get(i.toString())).then(function(t){if("notFound"===t.errorCode)return null;var r=t.elements[0],o=r.id,u=r.certificates;return n.courseId=o,n.courseSlug=e,{courseId:o,courseCertificates:u}})}}.apply(exports,t))&&(module.exports=r)},ZuLc:function(module,exports,e){var t,r;t=[e,exports,module,e("go2y"),e("iFGm"),e("2TVH")],void 0!==(r=function(require,exports,module){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var t=e("go2y"),r=_interopRequireDefault(t),o=e("iFGm"),n=_interopRequireDefault(o),u=e("2TVH"),i=_interopRequireDefault(u),s=(0,i.default)("/api/onDemandCoursePresentGrades.v1",{type:"rest"});exports.getPresentGrade=function(e){var t=e.userId,o=e.courseId,u=new n.default("/"+t+"~"+o).addQueryParam("fields","grade,relevantItems,passingStateForecast");return(0,r.default)(s.get(u.toString()))}}.apply(exports,t))&&(module.exports=r)},cjZO:function(module,exports,e){(function(_){var t,r;t=[e,exports,module,e("go2y"),e("AwHF"),e("c7Iy"),e("lGU6"),e("1/cZ")],void 0!==(r=function(require,exports,module){"use strict";var t=e("go2y"),_=e("AwHF"),r=e("c7Iy"),o=e("lGU6"),n=e("1/cZ");exports.loadUserGroupsForCourse=function(e,u){var i=u.courseId,s=u.userId;if(e.getStore("GroupSettingStore").hasLoaded())return t();return r.myCourseGroupsWithSettings(s,i).then(function(t){var r=_(t.linked["groupSettings.v1"]).map(function(e){return new n(e)}),u=t.linked["groups.v1"].map(function(e){return new o(e)}),i=t.elements;e.dispatch("LOADED_COURSE_GROUPS",{groups:u,groupSettings:r,groupMemberships:i})}).fail(function(t){e.dispatch("LOADED_COURSE_GROUPS",{})})},exports.loadUserSessionGroupForCourse=function(e,o){var n=o.courseId,u=o.userId,i=o.sessionId;if(e.getStore("GroupSettingStore").hasSessionGroupLoaded())return t();return r.getCourseSessionGroup(u,n,i).then(function(t){var r=t.elements[0];e.dispatch("LOADED_SESSION_GROUP",{sessionGroup:r})}).fail(function(t){e.dispatch("LOADED_SESSION_GROUP",{})})}}.apply(exports,t))&&(module.exports=r)}).call(exports,e("AwHF"))},eoPD:function(module,exports,e){var t,r;t=[e,exports,module,e("go2y"),e("2TVH"),e("lDcb")],void 0!==(r=function(require,exports,module){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var t=e("go2y"),r=_interopRequireDefault(t),o=e("2TVH"),n=_interopRequireDefault(o),u=e("lDcb"),i=_interopRequireDefault(u);module.exports=function(e){var t=(0,n.default)("/api/domains.v1",{type:"rest"});if(void 0!==e.getStore(i.default).domains)return(0,r.default)();return(0,r.default)(t.get("?fields=id,name")).then(function(t){e.dispatch("LOAD_DOMAINS",t.elements)})}}.apply(exports,t))&&(module.exports=r)},eoZB:function(module,exports,e){var t,r;t=[e,exports,module,e("go2y"),e("iFGm"),e("LwZ5")],void 0!==(r=function(require,exports,module){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var t=e("go2y"),r=_interopRequireDefault(t),o=e("iFGm"),n=_interopRequireDefault(o),u=e("LwZ5"),i=_interopRequireDefault(u);module.exports=function(e,t){var o=(0,i.default)("/api/onDemandReferences.v1",{type:"rest"}),u=(new n.default).addQueryParam("courseId",t).addQueryParam("q","courseListed").addQueryParam("fields","name,shortId,slug,content").addQueryParam("includes","assets");return(0,r.default)(o.get(u.toString())).then(function(t){e.dispatch("LOAD_REFERENCES_LIST",t.elements)})}}.apply(exports,t))&&(module.exports=r)},lvLE:function(module,exports,e){var t=e("O9hj"),r=e("37IR");module.exports=t(r)},qDvH:function(module,exports,e){var t,r;t=[e,exports,module,e("go2y"),e("ZuLc")],void 0!==(r=function(require,exports,module){"use strict";var t=e("go2y"),r=e("ZuLc");exports.loadCoursePresentGrade=function(e,o){var n=o.userId,u=o.courseId;if(e.getStore("CoursePresentGradeStore").hasLoaded())return t();return n?t(r.getPresentGrade({userId:n,courseId:u})).then(function(t){var r=t.elements[0];e.dispatch("LOAD_COURSE_PRESENT_GRADE",{presentGrade:r})}).fail(function(t){e.dispatch("LOAD_COURSE_PRESENT_GRADE_FAIL",{})}):(e.dispatch("LOAD_COURSE_PRESENT_GRADE_FAIL",{}),t())}}.apply(exports,t))&&(module.exports=r)},rB0C:function(module,exports,e){(function(_){var t,r;t=[e,exports,module,e("AwHF"),e("lvLE"),e("2294"),e("0jrO"),e("M+4A")],void 0!==(r=function(require,exports,module){"use strict";var _=e("AwHF"),t=e("lvLE"),r=e("2294"),o=e("0jrO"),n=e("M+4A"),u=n.Sessions;module.exports=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t(e).then(function(t){if(t.linked&&t.linked["onDemandSessions.v1"]&&t.linked["onDemandSessionMemberships.v1"]){var n=_(t.linked["onDemandSessions.v1"]).groupBy("courseId"),i=_(t.linked["onDemandSessionMemberships.v1"]).groupBy("sessionId"),s=Object.keys(i);t.elements.forEach(function(e){var t=n[e.courseId]||[];if(t.length){var r=t.filter(function(e){return s.indexOf(e.id)>=0});if(r.length){var o=new u(r).getLastSession();e.onDemandSessionId=o.id,e.onDemandSessionMemberships=r.map(function(e){return i[e.id]})}}})}if(t.linked&&t.linked["v1Details.v1"]&&(t.linked["courses.v1"]=_(t.linked["courses.v1"]).map(function(e){if("v1.session"===e.courseType||"v1.capstone"===e.courseType){e.v1Details=e.id;var r=_(t.linked["v1Sessions.v1"]).reduce(function(t,r){return r.courseId===e.id&&t.push(r.id.toString()),t},[]);e.v1Sessions=r}return e})),t.linked&&t.linked["v2Details.v1"]&&(t.linked["courses.v1"]=_(t.linked["courses.v1"]).map(function(e){return"v2.ondemand"===e.courseType&&(e.v2Details=_(t.linked["v2Details.v1"]).findWhere({id:e.id})),e})),t.linked&&t.linked["vcMemberships.v1"]){var a=_(t.linked["vcMemberships.v1"]).pluck("id");t.elements=_(t.elements).map(function(e){return _(a).contains(e.id)&&(e.vcMembershipId=e.id),e})}if(t.linked&&t.linked["courses.v1"]){var d=_(t.linked["courses.v1"]).pluck("id");t.elements=_(t.elements).chain().filter(function(e){return _(d).contains(e.courseId)}).compact().value()}if(t.linked&&t.linked["signatureTrackProfiles.v1"]&&_(t.elements).each(function(e){e.signatureTrackProfile=e.userId}),e.rawData)return t;if(e.withPaging)return{elements:r(o.prototype.resourceName,t),paging:t.paging};return r(o.prototype.resourceName,t)}).fail(function(t){if(e.rawData)return null;return new o})}}.apply(exports,t))&&(module.exports=r)}).call(exports,e("AwHF"))},tltj:function(module,exports,e){var t,r;t=[e,exports,module,e("go2y"),e("iFGm"),e("LwZ5")],void 0!==(r=function(require,exports,module){"use strict";var t=e("go2y"),r=e("iFGm"),o=e("LwZ5"),n=new o("/api/onDemandCourseSchedules.v1");exports.getCourseSchedule=function(e){var o=new r(e).addQueryParam("fields","defaultSchedule");return t(n.get(o.toString()))}}.apply(exports,t))&&(module.exports=r)},uf8H:function(module,exports,e){var t,r;t=[e,exports,module,e("tltj"),e("WXze")],void 0!==(r=function(require,exports,module){"use strict";var t=e("tltj"),r=t.getCourseSchedule,o=e("WXze");module.exports=function(e){if(!e)throw new Error("`courseId` is required to get course schedule.");return r(e).then(o).then(function(e){return e.elements[0].defaultSchedule.periods})}}.apply(exports,t))&&(module.exports=r)}});
//# sourceMappingURL=31.546042119d977e7e5a05.js.map