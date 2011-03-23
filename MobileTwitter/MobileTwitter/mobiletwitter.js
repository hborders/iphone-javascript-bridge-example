(function() {
    delete window.mobiletwitter;
    
    var mobiletwitter = {};
    window.mobiletwitter = mobiletwitter;
    
    mobiletwitter.xpathQueryAtDomNode = function(xpathQuery, domNode) {
		var results = [];
		var xpathResult = document.evaluate(xpathQuery, 
                                            domNode ? domNode : document, 
                                            null,
                                            XPathResult.ORDERED_NODE_ITERATOR_TYPE, 
                                            null);
		for (var result = xpathResult.iterateNext(); result; result = xpathResult.iterateNext()) {
			results.push(result);
		}
		return results;
	};
    
    mobiletwitter.joinTextNodes = function(textNodes) {
        return textNodes.map(function(textNode) { return textNode.nodeValue; }).join("");
    };
    
    mobiletwitter.isLocatedOnTweetsList = function() {
        return document.getElementById('tweets-list') != null;
    }
    
    mobiletwitter.login = function(username, password) {
        document.getElementById('username').value = username;
        document.getElementById('password').value = password;
        document.getElementById('signupbutton').click();
    };
    mobiletwitter.logout = function() {
      document.location = "https://mobile.twitter.com/session/destroy";  
    };
    
    mobiletwitter.tweet = function(text) {
        document.getElementById('tweet_text').value = text;
        document.getElementById('tweet_submit').click();
    }
    mobiletwitter.tweetJsons = function() {
        var tweetDivs = mobiletwitter.xpathQueryAtDomNode("//*[@id=\"tweets-list\"]/div[@class=\"list-tweet\"]");
        return tweetDivs.map(function(tweetDiv) {
            var userscreenname = 
                mobiletwitter.joinTextNodes(mobiletwitter.xpathQueryAtDomNode("./descendant::span/strong/text()", tweetDiv));
            var text = 
                mobiletwitter.joinTextNodes(mobiletwitter.xpathQueryAtDomNode("./descendant::span/span[@class=\"status\"]/text()", tweetDiv));
            return JSON.stringify({
                userscreenname: userscreenname,
                text: text
            }); 
        });
    }
})();