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
				},
				{
					date: "2014.09.14",
					note: "",
					type: "picture",
					title: "",
					imgs: [{
						src: "http://wangyuye.qiniudn.com/IMG_2014-09-14.JPG-blog",
						width: "",
						alt: ""
					}]
				},
				{
					date: "2014.09.20",
					note: "",
					type: "picture",
					title: "",
					imgs: [{
						src: "http://wangyuye.qiniudn.com/IMG_2014-09-20.JPG-blog",
						width: "",
						alt: ""
					}]
				},
				{
					date: "2014.09.22",
					note: "",
					type: "picture",
					title: "",
					imgs: [{
						src: "http://wangyuye.qiniudn.com/IMG_2014-09-22.JPG-blog",
						width: "",
						alt: ""
					}]
				},
				{
					date: "2014.09.23",
					note: "",
					type: "picture",
					title: "",
					imgs: [{
						src: "http://wangyuye.qiniudn.com/IMG_2014-09-23.JPG-blog",
						width: "",
						alt: ""
					}]
				},
				{
					date: "2014.10.11",
					note: "",
					type: "picture",
					title: "",
					imgs: [{
						src: "http://wangyuye.qiniudn.com/IMG_2014-10-11.png-blog",
						width: "",
						alt: ""
					}]
				},
				{
					date: "2014.10.18",
					note: "",
					type: "picture",
					title: "",
					imgs: [{
						src: "http://wangyuye.qiniudn.com/IMG_2014-10-18.png-blog",
						width: "",
						alt: ""
					}]
				},
				{
					date: "2014.10.26",
					note: "",
					type: "picture",
					title: "",
					imgs: [{
						src: "http://wangyuye.qiniudn.com/IMG_2014-10-26.JPG-blog",
						width: "",
						alt: ""
					}]
				},
				{
					date: "2014.11.29",
					note: "",
					type: "picture",
					title: "",
					imgs: [{
						src: "http://wangyuye.qiniudn.com/IMG_2014-11-29.JPG-blog",
						width: "",
						alt: ""
					}]
				},
				{
					date: "2014.12.05",
					note: "",
					type: "picture",
					title: "",
					imgs: [{
						src: "http://wangyuye.qiniudn.com/IMG_2014-12-05.JPG-blog",
						width: "",
						alt: ""
					}]
				},
				{
					date: "2014.12.19",
					note: "",
					type: "picture",
					title: "",
					imgs: [{
						src: "http://wangyuye.qiniudn.com/IMG_2014-12-19.JPG-blog",
						width: "",
						alt: ""
					}]
				},
				{
					date: "2014.12.24",
					note: "",
					type: "picture",
					title: "",
					imgs: [{
						src: "http://wangyuye.qiniudn.com/IMG_2014-12-24.JPG-blog",
						width: "",
						alt: ""
					}]
				},
				{
					date: "2014.12.29",
					note: "",
					type: "picture",
					title: "",
					imgs: [{
						src: "http://wangyuye.qiniudn.com/IMG_2014-12-29.JPG-blog",
						width: "",
						alt: ""
					}]
				},
				{
					date: "2015.01.01",
					note: "",
					type: "picture",
					title: "",
					imgs: [{
						src: "http://wangyuye.qiniudn.com/IMG_2015-01-01.JPG-blog",
						width: "",
						alt: ""
					}]
				},
				{
					date: "2015.01.17",
					note: "",
					type: "picture",
					title: "",
					imgs: [{
						src: "http://wangyuye.qiniudn.com/IMG_2015-01-17.JPG-blog",
						width: "",
						alt: ""
					}]
				},
				{
					date: "2015.01.18",
					note: "",
					type: "picture",
					title: "",
					imgs: [{
						src: "http://wangyuye.qiniudn.com/IMG_2015-01-18.JPG-blog",
						width: "",
						alt: ""
					}]
				},
				{
					date: "2015.01.22",
					note: "",
					type: "picture",
					title: "",
					imgs: [{
						src: "http://wangyuye.qiniudn.com/IMG_2015-01-22.JPG-blog",
						width: "",
						alt: ""
					}]
				},
				{
					date: "2015.01.31",
					note: "",
					type: "picture",
					title: "",
					imgs: [{
						src: "http://wangyuye.qiniudn.com/IMG_2015-01-31.JPG-blog",
						width: "",
						alt: ""
					}]
				},
				{
					date: "2015.02.01",
					note: "",
					type: "picture",
					title: "",
					imgs: [{
						src: "http://wangyuye.qiniudn.com/IMG_2015-02-01.JPG-blog",
						width: "",
						alt: ""
					}]
				},
				{
					date: "2015.02.05",
					note: "",
					type: "picture",
					title: "",
					imgs: [{
						src: "http://wangyuye.qiniudn.com/IMG_2015-02-05.JPG-blog",
						width: "",
						alt: ""
					}]
				},
				{
					date: "2015.02.12",
					note: "",
					type: "picture",
					title: "",
					imgs: [{
						src: "http://wangyuye.qiniudn.com/IMG_2015-02-12.JPG-blog",
						width: "",
						alt: ""
					}]
				},
				{
					date: "2015.02.15",
					note: "",
					type: "picture",
					title: "",
					imgs: [{
						src: "http://wangyuye.qiniudn.com/IMG_2015-02-15.JPG-blog",
						width: "",
						alt: ""
					}]
				},
				{
					date: "2015.02.18",
					note: "",
					type: "picture",
					title: "",
					imgs: [{
						src: "http://wangyuye.qiniudn.com/IMG_2015-02-18.JPG-blog",
						width: "",
						alt: ""
					}]
				},
				{
					date: "2015.03.02",
					note: "",
					type: "picture",
					title: "",
					imgs: [{
						src: "http://wangyuye.qiniudn.com/IMG_2015-03-02.JPG-blog",
						width: "",
						alt: ""
					}]
				},
				{
					date: "2015.03.28",
					note: "",
					type: "picture",
					title: "",
					imgs: [{
						src: "http://wangyuye.qiniudn.com/IMG_2015-03-28.JPG-blog",
						width: "",
						alt: ""
					}]
				},
				{
					date: "2015.04.01",
					note: "",
					type: "picture",
					title: "",
					imgs: [{
						src: "http://wangyuye.qiniudn.com/IMG_2015-04-01.JPG-blog",
						width: "",
						alt: ""
					}]
				},
				{
					date: "2015.04.30",
					note: "",
					type: "picture",
					title: "",
					imgs: [{
						src: "http://wangyuye.qiniudn.com/IMG_2015-04-30.JPG-blog",
						width: "",
						alt: ""
					}]
				},
				{
					date: "2015.05.09",
					note: "",
					type: "picture",
					title: "",
					imgs: [{
						src: "http://wangyuye.qiniudn.com/IMG_2015-05-09.JPG-blog",
						width: "",
						alt: ""
					}]
				},
				{
					date: "2015.05.30",
					note: "",
					type: "picture",
					title: "",
					imgs: [{
						src: "http://wangyuye.qiniudn.com/IMG_2015-05-30.JPG-blog",
						width: "",
						alt: ""
					}]
				},
				{
					date: "2015.06.27",
					note: "",
					type: "picture",
					title: "",
					imgs: [{
						src: "http://wangyuye.qiniudn.com/IMG_2015-06-27.JPG-blog",
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

	// browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 300,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 1200,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 700,
		//grab the "back to top" link
		$back_to_top = $('.cd-top');

	//hide or show the "back to top" link
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) { 
			$back_to_top.addClass('cd-fade-out');
		}
	});

	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});
});
