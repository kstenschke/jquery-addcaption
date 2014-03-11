jquery-addcaption
=================

What is it?
-----------

A jQuery plugin that adds a caption to a given image element.

The caption is rendered by inserting ```<figure>``` and ```<figcaption>``` tags into the DOM.
The caption text is grabbed from a specifiable attribute, e.g. the alt-text of the resp. image.
Optionally CSS and style attributes can be transferred from that image to the rendered figure tag.

__jQuery Plugin Registry:__ https://plugins.jquery.com/addcaption/

Installation
------------

Include script *after* the jQuery library (unless you are packaging scripts somehow else):

```html
<script src="/path/to/jquery.addcaption.js"></script>
```

**Do not include the script directly from GitHub (http://raw.github.com/...).** The file is being served as text/plain and as such being blocked
in Internet Explorer on Windows 7 for instance (because of the wrong MIME type). Bottom line: GitHub is not a CDN.


Usage Example
-------------

Note: all configuration parameters are optional / come with a default value

```javascript
jQuery('img').each(function(index,image) {
          jQuery(image).addCaption({              
          attrCaption:        'alt'             // attribute in image to take caption text from, default: "alt"
          textPrepend:        'Prepended text', // caption text can be extended with prepend- and/or append-text (e.g. "click to enlarge")
          textAppend:         'Appended text',  // textPrepend and textAppend default: ""
          transferStyle:      true,             // transfer the "style" attribute from the image? default: false
          transferCss: ["width"]                // transfer given css attributes? default: []
      });
  });
```


Author
------

**Kay Stenschke**

+ info@stenschke.com
+ http://github.com/kstenschke


Version History
---------------

* **1.0.1** *2014-03-10*
    - Bugfix: Initialization w/o apt images resulted in error
* **1.0.0** *2014-03-10*
    - Initial release


MIT LICENSE
---

Copyright (c) 2014 Kay Stenschke
http://opensource.org/licenses/MIT

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
