console.log("Loaded April Fool Redirect");

let every = 7200; // Redirect Every 60 sec
let stateKey = "redirected"
let redirectURL = "https://youtu.be/dQw4w9WgXcQ";
let dateObj = new Date();
let currentData = dateObj.getDate();
let currentMonth = dateObj.getMonth();

const localStorageEx = {
    get: function (key) {
        var value = localStorage[key];
        if (value != null) {
            var model = JSON.parse(value);
            if (model.payload != null && model.expiry != null) {
                var now = new Date();
                if (now > Date.parse(model.expiry)) {
                    localStorage.removeItem(key);
                    return null;
                }
            }
            return JSON.parse(value).payload;
        }
        return null;
    },
    set: function (key, value, expirySeconds) {
        var expiryDate = new Date();
        expiryDate.setSeconds(expiryDate.getSeconds() + expirySeconds);
        localStorage[key] = JSON.stringify({
            payload: value,
            expiry: expiryDate
        });
    }
};
var alreadyReDirected = localStorageEx.get(stateKey);
if (currentData == 1 && currentMonth == 3 && !alreadyReDirected) {
    localStorageEx.set(stateKey, "true",every);
    // Redirect to Rick Roll
    window.location.replace(redirectURL);
}
else {
    console.log("Aleady Ricked Rolled");
}
