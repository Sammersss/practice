$(function(){
	$('body').on('click', '#buttonOn', createModal);
	$('body').on('click', '.item-delete', removeModal);

	
		var $body = $('body');
		var $modal;
		var $overlay;
	
    function createModal(){
		$overlay = $('<div class="overlay"></div>');
		$modal = $('<div class="modal-wrap"></div>');

		$body.append($overlay);
		$body.append($modal);
        
        var list = $('<div class="modal"><h3>Collected Class</h3><span class="item-delete">&#xe803;</span></div>');
        $modal.append(list);
		getAllClasses('html','.modal');

    }
    /*delete modal window*/			
	    function removeModal(){
        $('.modal-wrap').remove();
        $('.overlay').remove();
	}

});