import Link from "next/link";
import {
  EmailIcon,
  PhoneIcon,
  ContactUsIcon
} from "../public/icons/contact/contacticons";

const ContactUs = () => {

  const handleEmailCheck = () => {
    const mailtoUrl = `mailto:${'kk.opoku@outlook.com'}?subject=${encodeURIComponent('subject')}`;
    window.location.href = mailtoUrl;
  };
  
  return (
    <div className="page-container flex h-screen  bg-[#DACDF0]">
      
      <div className="sidebar-container pl-6">
      <Link href="/" className="text-lg font-semibold text-white">
        Essential
      </Link>
      <a href="/" className="text-xl font-semibold text-[#022568]">
        ERP
      </a>
    </div>

      {/* Main Content */}
      <div className="w-5/6 pt-28 text-heading flex-col justify-center border-separate">
      <div className="container mx-auto max-w-fit max-h-fit bg-slate-200 rounded-lg shadow-lg p-8">
        <div className=" flex flex-col  items-center pt-4">
          <p className=" text-3xl mb-10 text-[#B48DF3]">CONTACT US</p>
          <p className=" text-2xl mb-10 text-black">
            We'd Love to hear from you!
          </p>

     <div className="mb-10"><ContactUsIcon/></div>   

          {/* Static contact information */}
          <div className="icons-container flex flex-row pb-12 gap-20 mb-0">
            <div className="email-item-container flex flex-col items-center">
              <EmailIcon className="mb-4" />
              <p className="text-center">Email</p>
              <Link href="" className="text-center text-[#B48DF3]">
                essentialerp@gmail.com
              </Link>
            </div>
            <div className="phone-item-container flex flex-col items-center">
              <PhoneIcon className="mb-4" />
              <p className="text-center">Phone</p>
              <Link href="" className="text-center text-[#B48DF3]">
                +233509795488
              </Link>
            </div>
          </div>

           
            <button onClick={handleEmailCheck} className="w-38 py-2 px-4 mt-8 rounded-xl shadow-lg text-black bg-[#B48DF3]  item-center font-semibold hover:bg-[#9747FF]" type="submit">
              Send Us an email
            </button>
          </div>
      </div>
    </div>
    </div>
  );
};

export default ContactUs;