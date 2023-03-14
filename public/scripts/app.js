import * as WebApiClient from 'xrm-webapi-client';
WebApiClient.
let Xrm = window.parent.Xrm == null ? window.parent.parent.Xrm : window.parent.Xrm;

console.log(Xrm)
console.log(Xrm._page)