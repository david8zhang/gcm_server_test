var gcm = require('node-gcm');

exports.sendMessage = function(req, res) {
    var message = new gcm.Message();
    message.addData('key1', 'msg1');
    var reg_token =
    "dh-L2Ibng58:APA91bG9Ymq6CDWcEgMiU80R-hFzlvKK_xzpeSMJxbha3TAWCbxPIoaqRIexQCgVEIhN5NuViLfRGkoHMvXh74mHRwyyWYHfTqxvO66epxwiI3wLp_4NwMbXP7sexVyCkNjUCqRZLXY_";
    
    var API_KEY = "AIzaSyAd8KBTB4FZ-_18cCuf3q81Zsu6Yi_KElY";
    var regTokens = [reg_token];
    var sender = new gcm.Sender(API_KEY);
    sender.send(message, { registrationTokens: regTokens }, function(err, response) {
       if(err) console.log(err);
       else console.log(response);
    });
    
    sender.sendNoRetry(message, {topic: '/topic/global'}, function(err, response) {
        if(err) console.log(err);
        else console.log(response);
    });
}
