const ContactUs = () => {
  return (
    <div>
        <h2 className="text-3xl text-center font-poppins font-bold mt-16">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 mb-16 mt-16 border-2 rounded-lg p-6 gap-5">
        <div >
            <img className="rounded-lg" src="images/contact.jpg" alt="" />
        </div>
        <div className="text-center bg-[#F1F1F1] p-8 rounded-lg">
            <h2 className="text-3xl text-center font-poppins font-bold text-[#3A4256] mb-6">Get In Touch</h2>
            <p className="text-xl text-center font-poppins font-medium text-[#3A4256] mb-6">We are always ready to help you. Feel free to contact us anytime.</p>
            <input type="text" placeholder="Enter Your Name" className="input input-bordered w-full max-w-xs" /><br />
            <input type="text" placeholder="Enter Your Email" className="input input-bordered w-full max-w-xs mt-5" /><br />
            <input type="text" placeholder="Subject" className="input input-bordered w-full max-w-xs mt-5" /><br />
            <input type="text" placeholder="Message" className="input input-bordered w-full max-w-xs mt-5" /><br />
            <button className="btn btn-primary w-full max-w-xs mt-5">Submit</button>
        </div>
    </div>
    </div>
  );
};

export default ContactUs;
