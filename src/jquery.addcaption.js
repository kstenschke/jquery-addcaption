/*
 * jQuery addcaption Plugin v1.0.1
 *
 * Adds a caption to the given image element, the caption text is grabbed from a specifiable attribute, e.g. the alt-text of the resp. image.
 *
 * https://plugins.jquery.com/addcaption/
 * https://github.com/kstenschke/jquery-addcaption
 *
 * Copyright 2014, Kay Stenschke
 * License: MIT LICENSE 
 * http://opensource.org/licenses/MIT
 *
 * Usage Example:
 *  jQuery('img').each(function(index,image) {
 *          jQuery(img).addCaption({              // Note: all configuration parameters come with a default value and are optional.
 *          attrCaption:        'alt'             // attribute in image to take caption text from, or default: "alt"
 *          textPrepend:        'Prepended text', // caption text can be extended with prepend- and/or append-text (e.g. "click to enlarge")
 *          textAppend:         'Appended text',
 *          transferStyle:      true,             // transfer the "style" attribute from the image to the caption's figure tag?
 *          transferCss: ["width"]                // given css attributes are transferred from the image to the caption's wrapping figure
 *      });
 *  });
 */
(function($) {
    $.fn.addCaption = function(config) {
        config  = typeof config == 'undefined' ? {} : config;

        attrCaption     = 'attrCaption' in config ? config.attrCaption : "alt";
        textPrepend     = 'textPrepend' in config ? config.textPrepend : "";
        textAppend      = 'textAppend' in config ? config.textAppend : "";
        transferStyle   = 'transferStyle' in config ? !!config.transferStyle : false;
        transferCss     = 'transferCss' in config ? config.transferCss : [];

        var textCaption = this.attr(attrCaption);

        if( textCaption && textCaptiontextCaption.length > 0 ) {
            var htmlTransferAttributes;
            if(transferStyle || transferAttributes.length > 0 ) {
                htmlTransferAttributes = " style=\"";
                htmlTransferAttributes += transferStyle ? this.attr("style") : "";
                htmlTransferAttributes += (htmlTransferAttributes.indexOf(";", htmlTransferAttributes.length - 1) !== -1 ) ? "" : "; ";

                var imageElement = this;
                transferCss.each(function(curCssAttr){
                    htmlTransferAttributes += curCssAttr + ":" + imageElement.css(curCssAttr) +"; ";
                });
                htmlTransferAttributes += "\"";
            } else {
                htmlTransferAttributes = "";
            }

            jQuery(this).wrapAll( "<figure" + htmlTransferAttributes + "></figure>");
            jQuery("<figcaption>" + textPrepend + textCaption + " " + textAppend + "</figcaption>").insertAfter( jQuery(this) );
        }
    }
}(jQuery));
