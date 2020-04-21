document.addEventListener('DOMContentLoaded', function(event) {

  new Glide('.glide').mount()

  const observer = lozad('.lozad', {
    loaded: function(el) {
      el.classList.add('lozad-fully-loaded');
    }
  });

  observer.observe();

});
