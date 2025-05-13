import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    rollno: '',
    branch: '',
    phone: '',
    amount: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.id]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, rollno, branch, phone, amount } = formData;
    if (!name || !rollno || !branch || !phone || !amount) {
      alert('Please fill in all the required fields.');
      return;
    }
    try {
      const existingPayments = JSON.parse(localStorage.getItem('feePayments')) || [];
      existingPayments.push(formData);
      localStorage.setItem('feePayments', JSON.stringify(existingPayments));
      setFormData({name: '', rollno: '', branch: '', phone: '', amount: ''});
      alert('Payment details submitted successfully!');
    } catch (error) {
      console.error('Error parsing JSON data:', error);
    }
  };

  const handlePayment = (e) => {
    e.preventDefault();
    const totalPay = formData.amount * 1000; // amount in paise
    const options = {
      key: "rzp_test_KzC8tI0DjNcjSD",
      amount: totalPay,
      currency: "INR",
      name: "MyShop Checkout",
      description: "This is your order",
      theme: { color: "#000" },
      image: "https://www.mintformations.co.uk/blog/wp-content/uploads/2020/05/shutterstock_583717939.jpg",
    };
    const rzpy1 = new window.Razorpay(options);
    rzpy1.open();
  };

  return (
    <div className="container" style={{display: 'flex', maxWidth: '900px', margin: 'auto', backgroundColor: 'white', borderRadius: '10px', boxShadow: '0 0 20px rgba(0,0,0,0.1)', overflow: 'hidden'}}>
      <div className="contact-info" style={{background: "url('/img/1600944939php0YWR6t.png') no-repeat center center", backgroundSize: 'cover', padding: '40px', color: 'white', flex: 1, position: 'relative'}}>
        <h2>Contact us</h2>
        <div className="info" style={{background: 'rgba(255,255,255,0.9)', borderRadius: '10px', padding: '20px', position: 'absolute', bottom: '20px', left: '20px', right: '20px'}}>
          <p><i className="fas fa-phone"></i> +91 7081583323</p>
          <p><i className="fas fa-envelope"></i> <a href="mailto:abhishek708158@gmail.com" style={{color: '#333', textDecoration: 'none'}}>abhishek708158@gmail.com</a></p>
          <p><i className="fas fa-map-marker-alt"></i> Buddha Degree College</p>
        </div>
      </div>
      <div className="contact-form" style={{flex: 1, padding: '40px'}}>
        <h2>Pay your Fee</h2>
        <form id="fee-form" onSubmit={handleSubmit}>
          <div className="form-group" style={{marginBottom: '20px'}}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Name" value={formData.name} onChange={handleChange} />
          </div>
          <div className="form-group" style={{marginBottom: '20px'}}>
            <label htmlFor="rollno">Roll No</label>
            <input type="number" id="rollno" placeholder="Roll No" value={formData.rollno} onChange={handleChange} />
          </div>
          <div className="form-group" style={{marginBottom: '20px'}}>
            <label htmlFor="branch">Branch</label>
            <input type="text" id="branch" placeholder="Branch" value={formData.branch} onChange={handleChange} />
          </div>
          <div className="form-group" style={{marginBottom: '20px'}}>
            <label htmlFor="phone">Phone</label>
            <input type="number" id="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} />
          </div>
          <div className="form-group" style={{marginBottom: '20px'}}>
            <label htmlFor="amount">Amount</label>
            <input type="number" id="amount" placeholder="Amount" value={formData.amount} onChange={handleChange} />
          </div>
          <div className="form-group" style={{marginBottom: '20px'}}>
            <button type="submit">Save</button>
            <button id="rzp-button1" onClick={handlePayment}>Pay</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
