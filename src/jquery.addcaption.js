/*
 * jQuery addcaption Plugin v1.0.1
 *
 * Adds a caption to the given image element, the caption text is grabbed from a specifiable attribute, e.g. the alt-text of the resp. image.
 *
 * https://plugins.jquery.com/addcaption/
 * https://github.com/kstenschke/jquery-addcaption
 *
 * Copyright 2014, Kay Stenschke
 * License: GNU General Public License, version 3 (GPL-3.0)
 * http://www.opensource.org/licenses/gpl-3.0.html
 *
 * Usage Example:
 *  jQuery('img').each(function(index,image) {
 *          jQuery(img).addCaption({                // Note: all configuration parameters come with a default value and are optional.
 *          attrCaption:        'alt'               // Attribute in image to take caption text from, or default: "alt"
 *          textPrepend:        'Prepended text',   // Caption text can be extended with prepend- and/or append-text (e.g. "click to enlarge")
 *          textAppend:         'Appended text',
 *          transferStyle:      true,               // Transfer the "style" attribute from the image to the caption's figure tag?
 *          transferCss: ["width"]                  // Given CSS attributes are transferred from the image to the caption's wrapping figure
 *      });
 *  });
 */
(function($) {
    $.addcaption = {
        version:    '1.0.1',
        config:     {}
    };

    $.fn.addCaption = function(config) {
        config  = typeof config == 'undefined' ? {} : config;

        var attrCaption     = 'attrCaption' in config ? config.attrCaption : "alt";
        var textPrepend     = 'textPrepend' in config ? config.textPrepend : "";
        var textAppend      = 'textAppend' in config ? config.textAppend : "";
        var transferStyle   = 'transferStyle' in config ? !!config.transferStyle : false;
        var transferCss     = 'transferCss' in config ? config.transferCss : [];

        var textCaption = this.attr(attrCaption);

        if( textCaption && textCaption.length > 0 ) {
            var htmlTransferAttributes = "";

            if(transferStyle || transferAttributes.length > 0 ) {
                htmlTransferAttributes = " style=\"";
                
                var styleAttr = this.attr("style");
                if( typeof styleAttr != "undefined" ) {
                    htmlTransferAttributes += styleAttr;
                    htmlTransferAttributes += (htmlTransferAttributes.length > 8 && htmlTransferAttributes.indexOf(";", htmlTransferAttributes.length - 1) !== -1 ) ? "" : ";";
                }

                var imageElement = this;
                transferCss.each(function(curCssAttr){
                    htmlTransferAttributes += curCssAttr + ":" + imageElement.css(curCssAttr) +"; ";
                });
                htmlTransferAttributes += "\"";
            }

            jQuery(this).wrapAll( "<figure" + htmlTransferAttributes + "></figure>");
            jQuery("<figcaption>" + textPrepend + textCaption + textAppend + "</figcaption>").insertAfter( jQuery(this) );
        }
    }
}(jQuery));
