function CrossUrl (elem, urls, options) {
	if ( !elem ) {
      console.error('Element not found.')
      return;
    }

    this.element = elem;
    this.urlList = urls;

	this.options = {};

	for ( var prop in CrossUrl.defaults ) {
  		this.options[ prop ] = CrossUrl.defaults[ prop ];
	}

	for ( prop in options ) {
      this.options[ prop ] = options[ prop ];
    }

    this._create();
}

CrossUrl.defaults = {
    timeout:500,
    message:"Sorry, The device is not yet supported."
};

CrossUrl.prototype = {
	_create: function(){
		var checker = this;
		checker.checkframe = document.createElement('iframe');
    checker.checkframe.id = 'checkframe';
		checker.checkframe.style.display = 'none';
		var _body = document.getElementsByTagName('body') [0];
    _body.appendChild(checker.checkframe);
		
		if(checker.element.parentNode.tagName == 'A'){
			checker.element.parentNode.onclick=function(){return false};
		}
		
		checker.element.addEventListener('click', function(){
			checker.tryURL();
		}, false);
	},

	tryURL: function(i) {
		i = typeof i !== 'undefined' ? i : 0;

        var now = new Date();
        var time = now.getTime();
        var checker = this;
        
        setTimeout(function() {
                   var now2 = new Date();
                   var time2 = now2.getTime();
                   if(time2 - now2 < checker.options.timeout*1.1) {
                        if(i+1<checker.urlList.length){
                            checker.tryURL(i+1)
                        }else{
                            alert(checker.options.message);
                            return;
                        }
                   }
                   }, checker.options.timeout);
        checker.checkframe.src = checker.urlList[i];
    }
}
