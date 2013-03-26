CrossUrl
========

Check existence through list of URLs


Usage
-----

```javascript
//link CrossApp.js
<script src="https://raw.github.com/studioopener/CrossUrl/master/CrossUrl.js"></script>
//Create CrossApp class on a element 
<script language="javascript">
window.onload = function() {  
  var urls = ["youtube://8tUQ4fblukM", //youtube
                "googlechrome://youtu.be/8tUQ4fblukM", //chrome
                "naversearchapp://inappbrowser?url=http%3A%2F%2Fyoutu.be%2F8tUQ4fblukM" //naver
                ];

    var urlChecker = new CrossUrl(document.getElementById('tester'), urls, {
                                    timeout:500,
                                    message:"This device is not yet supported."
                                    });
  };
</script>
```
