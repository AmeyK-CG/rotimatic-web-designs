if (jQuery(window).width() < 768) {
    var open = jQuery('.footer-link .link'), a = jQuery('.footer-link').find('.link');
    open.click(function(e){
        e.preventDefault();
        var $this = jQuery(this),
            speed = 500;
        if($this.hasClass('active') === true) {
            $this.removeClass('active').next('.footer-link .footer-menu').slideUp(speed);
        } else if(a.hasClass('active') === false) {
            $this.addClass('active').next('.footer-link .footer-menu').slideDown(speed);
        } else {
            a.removeClass('active').next('.footer-link .footer-menu').slideUp(speed);                
            $this.addClass('active').next('.footer-link .footer-menu').slideDown(speed);
        }
    });
    var toggleLink = jQuery('.taste-img .test-caption-resposnive'), findLink = jQuery('.taste-img').find('.test-caption-resposnive');
    toggleLink.click(function(e){
        e.preventDefault();
        var $this = jQuery(this),
            speed = 500;
        if($this.hasClass('active') === true) {
            $this.removeClass('active').next('.taste-img .test-desc').slideUp(speed);
            $this.parent().removeClass('openSlide');
        } else if(findLink.hasClass('active') === false) {
            $this.addClass('active').next('.taste-img .test-desc').slideDown(speed);
            $this.parent().addClass('openSlide');
        } else {
            findLink.removeClass('active').next('.taste-img .test-desc').slideUp(speed);
            findLink.parent().removeClass('openSlide');                
            $this.addClass('active').next('.taste-img .test-desc').slideDown(speed);
            $this.parent().addClass('openSlide');
        }
    });

}
        

        