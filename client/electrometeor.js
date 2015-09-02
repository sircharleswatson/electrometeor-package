// Write your package code here!
Electrometeor = {}


if (Meteor.isClient) {
    if (typeof window.require !== 'undefined') {
        console.log('window.require')
        Electrometeor.require = window.require('remote').require;
        if (Electrometeor.require) {
            Meteor.isDesktop = true;
            Electrometeor.BrowserWindow = Electrometeor.require('browser-window');
        }
    }
}
