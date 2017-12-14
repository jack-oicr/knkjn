$("div[id^='member-modal']").each(function(){

  var currentModal = $(this);

  //click next
  currentModal.find('.btn-next').click(function(){
    currentModal.modal('hide');
    currentModal.closest("div[id^='member-modal']").nextAll("div[id^='member-modal']").first().modal('show');
  });

  //click prev
  currentModal.find('.btn-prev').click(function(){
    currentModal.modal('hide');
    currentModal.closest("div[id^='member-modal']").prevAll("div[id^='member-modal']").first().modal('show');
  });

});
