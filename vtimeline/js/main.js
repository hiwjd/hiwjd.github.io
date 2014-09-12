(function($){
	/**
	 * type: location, picture, movie
	 */
	var demo = new Vue({
	    el: '#cd-timeline',
	    data: {
	        events: [
	        	{
					date: "2014.09.11",
					note: "",
					type: "picture",
					title: "",
					imgs: [{
						src: "http://wangyuye.qiniudn.com/xy.png-blog",
						width: "",
						alt: ""
					}]
				},
	        	{
					date: "2014.09.05",
					note: "",
					type: "picture",
					title: "快看！快看！！      我的下巴",
					imgs: [{
						src: "http://wangyuye.qiniudn.com/IMG_0453.JPG-blog",
						width: "",
						alt: ""
					}]
				},
	        	{
					date: "2014.09.04",
					note: "",
					type: "picture",
					title: "",
					imgs: [{
						src: "http://wangyuye.qiniudn.com/IMG_0443.JPG-blog",
						width: "",
						alt: ""
					}]
				},
	        	{
					date: "2014.08.30",
					note: "",
					type: "picture",
					title: "",
					imgs: [{
						src: "http://wangyuye.qiniudn.com/IMG_0440.JPG-blog",
						width: "",
						alt: ""
					}]
				},
	        	{
					date: "2014.08.26",
					note: "",
					type: "picture",
					title: "Happy!!",
					imgs: [{
						src: "http://wangyuye.qiniudn.com/IMG_0433.JPG-blog",
						width: "",
						alt: ""
					}]
				},
	        	{
					date: "2014.08.21",
					note: "",
					type: "picture",
					title: "忧桑～",
					imgs: [{
						src: "http://wangyuye.qiniudn.com/IMG_0401.JPG-blog",
						width: "",
						alt: ""
					}]
				},
	        	{
					date: "2014.08.18",
					note: "",
					type: "picture",
					title: "",
					imgs: [{
						src: "http://wangyuye.qiniudn.com/IMG_0391.JPG-blog",
						width: "",
						alt: ""
					}]
				},
	        	{
					date: "2014.08.16",
					note: "",
					type: "picture",
					title: "",
					imgs: [{
						src: "http://wangyuye.qiniudn.com/IMG_0387.JPG-blog",
						width: "",
						alt: ""
					}]
				},
	        	{
					date: "2014.08.15",
					note: "",
					type: "picture",
					title: "",
					imgs: [{
						src: "http://wangyuye.qiniudn.com/IMG_0377.JPG-blog",
						width: "",
						alt: ""
					}]
				},
	        	{
					date: "2014.07.30",
					note: "",
					type: "picture",
					title: "",
					imgs: [{
						src: "http://wangyuye.qiniudn.com/IMG_0373.JPG-blog",
						width: "",
						alt: ""
					}]
				},
	            {
					date: "2014.07.27",
					note: "",
					type: "picture",
					title: "",
					imgs: [{
						src: "http://wangyuye.qiniudn.com/IMG_0366.JPG",
						width: "",
						alt: ""
					}]
				},
	            {
					date: "2014.07.26",
					note: "",
					type: "picture",
					title: "",
					imgs: [{
						src: "http://wangyuye.qiniudn.com/IMG_0361.JPG",
						width: "",
						alt: ""
					}]
				},
	            {
					date: "2014.07.24",
					note: "",
					type: "movie",
					title: "",
					imgs: [{
						src: "http://wangyuye.qiniudn.com/IMG_0347.JPG-blog",
						width: "",
						alt: ""
					}]
				},
	            {
					date: "2014.07.22",
					note: "",
					type: "picture",
					title: "伐开心，要抱抱。。",
					imgs: [{
						src: "http://wangyuye.qiniudn.com/IMG_0326.JPG-blog",
						width: "",
						alt: ""
					}]
				},
	            {
					date: "2014.07.21",
					note: "",
					type: "movie",
					title: "",
					imgs: [{
						src: "http://wangyuye.qiniudn.com/wyy5.jpg",
						width: "",
						alt: ""
					}]
				},
	            {
					date: "2014.07.05",
					note: "",
					type: "picture",
					title: "",
					imgs: [{
						src: "http://wangyuye.qiniudn.com/IMG_0317.JPG-blog",
						width: "",
						alt: ""
					}]
				},
	            {
					date: "2014.06.29",
					note: "",
					type: "picture",
					title: "哇！这特么就是地球？",
					imgs: [{
						src: "http://wangyuye.qiniudn.com/wyy1.JPG-blog",
						width: "",
						alt: ""
					}]
				}
	        ]
	    }
	})
})(jQuery)
jQuery(document).ready(function($){
	var $timeline_block = $('.cd-timeline-block');

	//hide timeline blocks which are outside the viewport
	$timeline_block.each(function(){
		if($(this).offset().top > $(window).scrollTop()+$(window).height()*0.75) {
			$(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
		}
	});

	//on scolling, show/animate timeline blocks when enter the viewport
	$(window).on('scroll', function(){
		$timeline_block.each(function(){
			if( $(this).offset().top <= $(window).scrollTop()+$(window).height()*0.75 && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) {
				$(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
			}
		});
	});
});