function run()
	{
	forEach($articles,function(e,t)
		{
		articleAnim(t,e),articleHover(t)
	}
	)
}
function articleAnim(e,t)
	{
	var n=new TimelineMax;
	n.set(e,
		{
		visibility:"visible"
	}
	).from(e.querySelector(".jawangepost"),.5,
		{
		scale:0,delay:.75*t,ease:Elastic.easeOut.config(1.5,1)
	}
	,"article-bubble").from(e,.5,
		{
		delay:.75*t,opacity:0,ease:Elastic.easeOut.config(1.5,1)
	}
	,"article-bubble").from(e.querySelector(".title-partner"),.5,
		{
		x:"25%",opacity:0,ease:Elastic.easeOut.config(1.5,1)
	}
	,"article-teaser").from(e.querySelector(".deskripsi-partner"),.5,
		{
		x:"-25%",opacity:0,ease:Elastic.easeOut.config(1.5,1)
	}
	,"article-teaser")
}
function articleHover(e)
	{
	var t=e.querySelector(".title-partner a");
	e.timeline=new TimelineMax(
		{
		paused:!0
	}
	),e.timeline.to(e.querySelector(".jawangepost"),.15,
		{
		scale:1.25
	}
	),t.addEventListener("mouseenter",function()
		{
		e.timeline.play()
	}
	,!1),t.addEventListener("mouseleave",function()
		{
		e.timeline.reverse()
	}
	,!1)
}
var optimizedResize=function()
	{
	function e()
		{
		a||(a=!0,window.requestAnimationFrame?window.requestAnimationFrame(t):setTimeout(t,66))
	}
	function t()
		{
		i.forEach(function(e)
			{
			e()
		}
		),a=!1
	}
	function n(e)
		{
		e&&i.push(e)
	}
	var i=[],a=!1;
	return
		{
		add:function(t)
			{
			i.length||window.addEventListener("resize",e),n(t)
		}
	}
}
(),forEach=function(e,t,n)
	{
	for(var i=0;
	i<e.length;
	i++)t.call(n,i,e[i])
}
,$articles=document.querySelectorAll(".box-partner");
setTimeout(run,500),eval(function(e,t,n,i,a,r)
	{
	if(a=String,!"".replace(/^/,String))
		{
		for(;
		n--;
		)r[n]=i[n]||n;
		i=[function(e)
			{
			return r[e]
		}
		],a=function()
			{
			return"\\w+"
		}
		,n=1
	}
	for(;
	n--;
	)i[n]&&(e=e.replace(new RegExp("\\b"+a(n)+"\\b","g"),i[n]));
	return e
}
('1 0=2["3"]("4");
0["5"]="6 7 8";
',9,9,"xox|var|document|getElementById|linkBlog|innerHTML|Blog|Jawangepost".split("|"),0,
	{
}
)),optimizedResize.add(function()
	{
	forEach($articles,function(e,t)
		{
		window.matchMedia("(min-width: 768px)").matches?TweenMax.set(t.querySelector(".jawangepost"),
			{
			x:"0%",y:"0%"
		}
		):TweenMax.set(t.querySelector(".jawangepost"),
			{
			x:"-50%",y:"-50%"
		}
		)
	}
	)
}
);
