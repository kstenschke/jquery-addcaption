#jquery-addcaption 1.0.0

A jQuery plugin that adds a caption to a given image element.

The caption text is grabbed from a specifiable attribute, e.g. the alt-text of the resp. image.
Optionally CSS and style attributes can be transferred from that image to the rendered figure tag.

## Installation

Include script *after* the jQuery library (unless you are packaging scripts somehow else):

```html
<script src="/path/to/jquery.addcaption.js"></script>
```

**Do not include the script directly from GitHub (http://raw.github.com/...).** The file is being served as text/plain and as such being blocked
in Internet Explorer on Windows 7 for instance (because of the wrong MIME type). Bottom line: GitHub is not a CDN.

## Usage Example

Note: all configuration parameters are optional / come with a default value

```javascript
jQuery('img').each(function(index,image) {
          jQuery(img).addCaption({              
          attrCaption:        'alt'             // attribute in image to take caption text from, default: "alt"
          textPrepend:        'Prepended text', // caption text can be extended with prepend- and/or append-text (e.g. "click to enlarge")
          textAppend:         'Appended text',  // textPrepend and textAppend default: ""
          transferStyle:      true,             // transfer the "style" attribute from the image? default: false
          transferCss: ["width"]                // transfer given css attributes? default: []
      });
  });
```

###Version History

* **1.0.0** *2014-03-10*
    - Initial release

