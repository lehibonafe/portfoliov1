const btn = document.getElementById('button');


const form = document.getElementById('form');

 form.addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'service_ahj765h';
   const templateID = 'template_2js2a5w';

   emailjs.sendForm(serviceID, templateID, this, 'sRAQeU1PezObodF-0')
    .then(() => {
      btn.value = 'Submit';
      alert('Your message has been sent successfully');
      form.reset();
      
    }, (err) => {
      btn.value = 'Submit';
      alert(JSON.stringify(err));
    });
});