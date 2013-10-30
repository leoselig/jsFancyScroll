jsFancyScroll
=============

##Installtion

Include the `plugin.js` and the `style.css` (located in the `build/` directory) in your web page.

Apart from that, you can also clone the repository and build the plugin by yourself. For that, having Node.JS and the grunt plugin installed simply run once:
```
npm install
```
And then:
```
grunt
```

##Benefits
In opposite to other scrollbar plugins such as the TinyScrollbar, this plugin uses a technique also applied by Facbook. The scrolled content is actually scrolled natively by the browser scrolling mechanisms and the FancyScrollbar is kept in sync by bi-directional event listening.
This enables:
 - blazingly high performance
 - scrolling on page search
 - complete touch support

##Usage
To create a vertically scrollable area you just need the following markup.
```
<ul class="scrollY">
    <div class="scrollbarY">
		<div class="thumb"></div>
	</div>
	<div class="viewport">
		<div class="content">
            <!-- Your conent -->
        </div>
	</div>
</ul>
```
That's it - no initialization required! ;)

You might as well use horizontal scrolling:

```
<ul class="scrollX">
    <div class="scrollbarX">
    	<div class="thumb"></div>
	</div>
	<div class="viewport">
		<div class="content">
            <!-- Your conent -->
        </div>
	</div>
</ul>
```

And of course, you can combine these two:

```
<ul class="scrollX scrollY">
    <div class="scrollbarX">
        <div class="thumb"></div>
    </div>
    <div class="scrollbarY">
        <div class="thumb"></div>
    </div>
	<div class="viewport">
		<div class="content">
            <!-- Your conent -->
        </div>
	</div>
</ul>
```

##Contribution
Feel free to file issues, fork and create pull requests. :)
