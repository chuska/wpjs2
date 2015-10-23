/* ImageViewer */
var ImageViewer = {
	images : [ "국화:Chrysanthemum.jpg", "사막:Desert.jpg", "수국:Hydrangeas.jpg",
			"해파리:Jellyfish.jpg", "코알라:Koala.jpg", "등대:Lighthouse.jpg",
			"펭귄:Penguins.jpg", "툴립:Tulips.jpg" ],
	__onButtonClicked : function() {
		// 랜덤 변수
		var result = Math.floor(Math.random() * ImageViewer.images.length);
		// 데이터 분리
		var datas = ImageViewer.images[result].split(":");
		// img element 속성 변경
		$("img").attr({
			"src" : "images/" + datas[1],
			"alt" : datas[0]
		});
	},
	__onImgDBLClicked : function() {
		var $img = $(this);
		var title = $img.attr("alt");
		alert(title);
	},
	init : function() {
		this.__onImgMousedown = this.__onButtonClicked;
		$("button").click(this.__onButtonClicked);
		$("img").dblclick(this.__onImgDBLClicked).mousedown(
				this.__onImgMousedown);
	}
};