$.getJSON('https://api.github.com/repos/Ryochan7/DS4Windows/releases/latest', function(data) {
        var version = data.tag_name;
	version = version.replace('v', '');
	$("#changelog > div > h3[name='version']").html("Current version: " + version);
});
