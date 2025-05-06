// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - document.querySelector('header').offsetHeight,
        behavior: 'smooth'
      });
    }
  });
});

// Simple tag-filter (if you choose to add data-tag attributes to posts)
function initTagFilter() {
  const posts = Array.from(document.querySelectorAll('#posts article'));
  document.querySelectorAll('.tag-button').forEach(btn => {
    btn.addEventListener('click', () => {
      const tag = btn.dataset.tag;
      posts.forEach(post => {
        post.style.display = post.dataset.tags.split(',').includes(tag) ? '' : 'none';
      });
    });
  });
}
document.addEventListener('DOMContentLoaded', initTagFilter);

