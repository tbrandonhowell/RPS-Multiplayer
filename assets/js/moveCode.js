// from: https://gist.github.com/stevenmg/b7fa34c49cce34f7cadb704f9aabfb6e

// Usage:
// $('.box').parentToAnimate($('.new-parent'), 200);
// $('.box').parentToAnimate($('.new-parent'), 'slow');
// $('.box').parentToAnimate('.new-parent', 'slow');

jQuery.fn.extend({
    // Modified and Updated by MLM
    // Origin: Davy8 (http://stackoverflow.com/a/5212193/796832)
    parentToAnimate: function(newParent, duration) {
        duration = duration || 'slow';
        
        var $element = $(this);
        
        newParent = $(newParent); // Allow passing in either a JQuery object or selector
        var oldOffset = $element.offset();
        var oldWidth = $element.width();
        var oldHeight = $element.height();
        $(this).appendTo(newParent);
        var newOffset = $element.offset();
        var newWidth = $element.width();
        var newHeight = $element.height();
        
        var temp = $element.clone().removeAttr('id').appendTo('body');
        
        temp.css({
            'position': 'absolute',
            'left': oldOffset.left,
            'top': oldOffset.top,
            'width': oldWidth,
            'height': oldHeight,
            'zIndex': 1000
        });
        
        $element.hide();
            
        temp.animate({
            'top': newOffset.top,
            'left': newOffset.left,
            'width': newWidth,
            'height': newHeight
        }, duration, function() {
            $element.show();
            temp.remove();
        });
    }
});
