var musicInfoJson = "{\"Information\":[{\"ID\":1,\"Title\":\"Title\",\"Singer\":\"Singer\",\"Image\":\"Image\",\"Text\":\"Text\"},{\"ID\":2,\"Title\":\"Title2\",\"Singer\":\"Singer2\",\"Image\":\"Image2\",\"Text\":\"Text2\"}]}";

var musicInfo = JSON.parse(musicInfoJson);

$.each(musicInfo.Information,function(index,value)
{
	console.log("index : " + index + " (title,singer,image,text): " + value.Title + "," , value.Singer + "," + value.Image +"," + value.Text + "," );
});


