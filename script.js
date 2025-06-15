// Simple smooth scroll for CTA button
function scrollToFeatures() {
  document.getElementById('features').scrollIntoView({ behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', function() {
  var cta = document.getElementById('cta-btn');
  if (cta) cta.addEventListener('click', scrollToFeatures);
});
