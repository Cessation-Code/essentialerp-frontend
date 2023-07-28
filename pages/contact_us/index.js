import Link from "next/link";
import {
  EmailIcon,
  PhoneIcon,
  ContactUsIcon,
} from "../../public/icons/contact_us_page/contact_icons";
import Logo from "../../components/logo";

export default function ContactUs() {
  const handleEmailCheck = () => {
    const mailtoUrl = `mailto:${"kk.opoku@.com"}?subject=${encodeURIComponent(
      "EssentialERP Customer Mail"
    )}`;
    window.location.href = mailtoUrl;
  };

  return (
    <body className="flex flex-col w-screen h-screen">
      <div className="bg-[#C4D7F8] p-5">
        <Logo />
      </div>
      {/* Main Content */}
      <main className="mt-auto h-full bg-[#C4D7F8]">
        <div className="max-w-3xl mx-auto bg-slate-200   rounded-lg shadow-lg p-8">
          <div className=" flex flex-col  items-center pt-4">
            <p className=" text-3xl mb-10 text-[#B48DF3]">CONTACT US</p>
            <p className=" text-2xl mb-10 text-black">
              We'd Love to hear from you!
            </p>

            <div className="mb-10">
              <ContactUsIcon />
            </div>

            {/* Static contact information */}
            <div className="flex flex-wrap justify-center gap-8">
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

            <button
              onClick={handleEmailCheck}
              className="w-38 py-2 px-4 mt-8 rounded-xl shadow-lg text-black bg-[#B48DF3]  item-center font-semibold hover:bg-[#9747FF]"
              type="submit"
            >
              Send Us an email
            </button>
          </div>
        </div>
      </main>
    </body>
  );
}
