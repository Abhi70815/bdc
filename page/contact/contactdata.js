// import { db, doc, setDoc } from './firebase';

// const contactForm = document.querySelector('.contact-form');

// contactForm.addEventListener('submit', (e) => {
//   e.preventDefault();

//   const name = document.getElementById('name').value;
//   const email = document.getElementById('email').value;
//   const phone = document.getElementById('phone').value;
//   const communication = document.querySelector('input[name="communication"]:checked').value;
//   const message = document.getElementById('message').value;

//   const contactData = {
//     name,
//     email,
//     phone,
//     communication,
//     message
//   };

//   // Add a new document to the "contacts" collection
//   const contactsRef = db.collection('contacts');
//   const newContactRef = contactsRef.doc();
//   setDoc(newContactRef, contactData)
//     .then(() => {
//       console.log('Contact data saved successfully!');
//       contactForm.reset();
//     })
//     .catch((error) => {
//       console.error('Error saving contact data:', error);
//     });
// });


