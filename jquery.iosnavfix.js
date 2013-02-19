/*!
 * iOS Nav Fix - Dropdown menu fix for iOS devices
 *
 * Version:  1.0
 * Released: 19-02-2013
 * Source:   http://github.com/Vheissu/IOSNavFix
 * Plugin:   Iosnavfix
 * Author:   Dwayne Charrington (dwaynecharrington@gmail.com)
 * License:  MIT Licence 
 *           http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright (c) 2013 Dwayne Charrington.
 *
 * Simple usage:
 *
 * $("#navigation ul").iosnavfix();
 *
 */
;(function(w, $) {  

    $.fn.iosnavfix = function() {

        return this.each(function() {

            if ( isIos() ) {
                var $this = $(this);

                $("> li", $this).each(function() {
                    var $this       = $(this);
                    var $parentLink = $("> a", $this);

                    // If we have children
                    if ($this.children('ul').length || $this.children('ol').length) {

                        // Set default clicked state
                        $parentLink.data('clicked', false);

                        // When the link is clicked
                        $parentLink.on("click", function(e) {

                            // if we haven't already clicked, false
                            if ($parentLink.data('clicked') == false) {
                                // Inform everyone we've now clicked
                                $parentLink.data('clicked', true);

                                // Prevent link being followed into next click
                                return false;
                            } else {
                                // Reset link click state
                                $parentLink.data('clicked', false);

                                // Allow link to be followed now
                                return true;
                            }

                        });
                    }
                });
            }

        });

        /** 
         * If a user is pretending to be an iOS device, too bad for them.
         * As if you would imitate an iPad or iPhone for non-testing purposes.
         *
         * Anyway, this function will detect iOS user agents, simple.
         */
        function isIos() {
            if ( (navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i) ) || (navigator.userAgent.match(/iPad/i))) { return true; } else { return false; }
        }

    }

})(window, jQuery);