/* ==========================================================================
   Get an Inquiry — Dynamic Popup Form
   Injects a reusable inquiry modal into any page and wires open/close,
   validation, and submission. Any element with [data-inquiry-open]
   triggers the popup.
   ========================================================================== */

(function () {
  'use strict';

  var COMPANY_EMAIL = 'infinitypowerindia@gmail.com';

  /* ---- Build modal markup dynamically ---- */
  function buildModal() {
    if (document.getElementById('inquiryModal')) return;

    var wrap = document.createElement('div');
    wrap.id = 'inquiryModal';
    wrap.className = 'inquiry-modal';
    wrap.setAttribute('role', 'dialog');
    wrap.setAttribute('aria-modal', 'true');
    wrap.setAttribute('aria-labelledby', 'inquiryTitle');

    wrap.innerHTML =
      '<div class="inquiry-modal__overlay" data-inquiry-close></div>' +
      '<div class="inquiry-modal__dialog">' +
      '  <button type="button" class="inquiry-modal__close" data-inquiry-close aria-label="Close inquiry form">&times;</button>' +
      '  <span class="inquiry-modal__badge">Get an Inquiry</span>' +
      '  <h3 class="inquiry-modal__title" id="inquiryTitle">Request a Free Quote</h3>' +
      '  <p class="inquiry-modal__sub">Fill in your details and our automation experts will get back to you within 24 hours.</p>' +
      '  <form id="inquiryForm" novalidate>' +
      '    <div class="inq-row">' +
      '      <div class="inq-field">' +
      '        <label for="inqName">Full Name <span class="req">*</span></label>' +
      '        <input type="text" id="inqName" name="name" placeholder="Enter your full name" required />' +
      '        <span class="inq-error-msg">Please enter your name.</span>' +
      '      </div>' +
      '      <div class="inq-field">' +
      '        <label for="inqPhone">Phone Number <span class="req">*</span></label>' +
      '        <input type="tel" id="inqPhone" name="phone" placeholder="Enter your phone number" required />' +
      '        <span class="inq-error-msg">Please enter a valid phone number.</span>' +
      '      </div>' +
      '    </div>' +
      '    <div class="inq-row">' +
      '      <div class="inq-field">' +
      '        <label for="inqEmail">Email Address <span class="req">*</span></label>' +
      '        <input type="email" id="inqEmail" name="email" placeholder="you@company.com" required />' +
      '        <span class="inq-error-msg">Please enter a valid email address.</span>' +
      '      </div>' +
      '      <div class="inq-field">' +
      '        <label for="inqCompany">Company Name</label>' +
      '        <input type="text" id="inqCompany" name="company" placeholder="Your company / organization" />' +
      '      </div>' +
      '    </div>' +
      '    <div class="inq-field">' +
      '      <label for="inqInterest">I\'m Interested In <span class="req">*</span></label>' +
      '      <select id="inqInterest" name="interest" required>' +
      '        <option value="" selected disabled>Select a product or service</option>' +
      '        <option>PLC & Control Systems</option>' +
      '        <option>HMI & SCADA Solutions</option>' +
      '        <option>VFD & Drives</option>' +
      '        <option>Servo Motors & Motion Control</option>' +
      '        <option>Industrial Networking</option>' +
      '        <option>Control Panels & MCC</option>' +
      '        <option>Sensors & Instrumentation</option>' +
      '        <option>Automation Services & Support</option>' +
      '        <option>Other</option>' +
      '      </select>' +
      '      <span class="inq-error-msg">Please select what you are interested in.</span>' +
      '    </div>' +
      '    <div class="inq-field">' +
      '      <label for="inqMessage">Message <span class="req">*</span></label>' +
      '      <textarea id="inqMessage" name="message" placeholder="Tell us about your requirement..." required></textarea>' +
      '      <span class="inq-error-msg">Please enter a short message.</span>' +
      '    </div>' +
      '    <button type="submit" class="inquiry-submit">Submit Inquiry &#8594;</button>' +
      '  </form>' +
      '  <p class="inquiry-note">Prefer email? Write to us at <a href="mailto:' + COMPANY_EMAIL + '">' + COMPANY_EMAIL + '</a></p>' +
      '  <div class="inquiry-success" id="inquirySuccess">' +
      '    <div class="inquiry-success__icon">&#10003;</div>' +
      '    <h4>Inquiry Submitted Successfully!</h4>' +
      '    <p>Thank you for reaching out. Our team will contact you within 24 hours.<br />Your email client has been opened with your inquiry details.</p>' +
      '  </div>' +
      '</div>';

    document.body.appendChild(wrap);
  }

  /* ---- Open / close helpers ---- */
  var lastFocused = null;

  function openModal() {
    buildModal();
    var modal = document.getElementById('inquiryModal');
    lastFocused = document.activeElement;
    modal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    var first = modal.querySelector('#inqName');
    if (first) first.focus();
  }

  function closeModal() {
    var modal = document.getElementById('inquiryModal');
    if (!modal) return;
    modal.classList.remove('is-open');
    document.body.style.overflow = '';
    resetForm();
    if (lastFocused && typeof lastFocused.focus === 'function') lastFocused.focus();
  }

  function resetForm() {
    var modal = document.getElementById('inquiryModal');
    if (!modal) return;
    var form = modal.querySelector('#inquiryForm');
    var success = modal.querySelector('#inquirySuccess');
    if (form) {
      form.reset();
      form.style.display = '';
      form.querySelectorAll('.has-error').forEach(function (f) { f.classList.remove('has-error'); });
    }
    if (success) success.classList.remove('is-visible');
  }

  /* ---- Validation ---- */
  function setError(id, hasError) {
    var input = document.getElementById(id);
    if (input && input.closest('.inq-field')) {
      input.closest('.inq-field').classList.toggle('has-error', hasError);
    }
    return !hasError;
  }

  function validate() {
    var ok = true;
    var name = document.getElementById('inqName').value.trim();
    var phone = document.getElementById('inqPhone').value.trim();
    var email = document.getElementById('inqEmail').value.trim();
    var interest = document.getElementById('inqInterest').value;
    var message = document.getElementById('inqMessage').value.trim();

    ok = setError('inqName', name.length < 2) && ok;
    ok = setError('inqPhone', !/^[+]?[\d\s-]{7,15}$/.test(phone)) && ok;
    ok = setError('inqEmail', !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) && ok;
    ok = setError('inqInterest', !interest) && ok;
    ok = setError('inqMessage', message.length < 5) && ok;
    return ok;
  }

  /* ---- Submit via mailto with composed body ---- */
  function submitForm(e) {
    e.preventDefault();
    if (!validate()) return;

    var v = function (id) { return document.getElementById(id).value.trim(); };
    var subject = 'Inquiry: ' + v('inqInterest') + ' — ' + v('inqName');
    var body =
      'New Inquiry from Website\n' +
      '------------------------\n' +
      'Name: ' + v('inqName') + '\n' +
      'Phone: ' + v('inqPhone') + '\n' +
      'Email: ' + v('inqEmail') + '\n' +
      'Company: ' + (v('inqCompany') || '-') + '\n' +
      'Interested In: ' + v('inqInterest') + '\n\n' +
      'Message:\n' + v('inqMessage') + '\n';

    window.location.href =
      'mailto:' + COMPANY_EMAIL +
      '?subject=' + encodeURIComponent(subject) +
      '&body=' + encodeURIComponent(body);

    var form = document.getElementById('inquiryForm');
    var success = document.getElementById('inquirySuccess');
    if (form) form.style.display = 'none';
    if (success) success.classList.add('is-visible');

    setTimeout(closeModal, 3500);
  }

  /* ---- Wire events (delegated so injected markup works) ---- */
  document.addEventListener('click', function (e) {
    // Open triggers
    var opener = e.target.closest('[data-inquiry-open]');
    if (opener) {
      e.preventDefault();
      openModal();
      return;
    }
    // Close triggers
    if (e.target.closest('[data-inquiry-close]')) {
      closeModal();
      return;
    }
    // Clear field error on input
    var field = e.target.closest('.inq-field.has-error');
    if (field) field.classList.remove('has-error');
  });

  document.addEventListener('submit', function (e) {
    if (e.target && e.target.id === 'inquiryForm') submitForm(e);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      var modal = document.getElementById('inquiryModal');
      if (modal && modal.classList.contains('is-open')) closeModal();
    }
  });

  /* ---- Convert existing "Get an Inquiry" buttons to popup triggers ---- */
  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('a[href="contact.html"]').forEach(function (a) {
      if (/get an inquiry/i.test(a.textContent)) {
        a.setAttribute('data-inquiry-open', '');
        a.removeAttribute('href');
        a.style.cursor = 'pointer';
      }
    });
  });
})();