import  Link  from 'next/link';

export default function Logo() {
    return(
        <div >
            <Link href="/" className="text-lg font-semibold text-white">
                Essential
            </Link>
            <Link href="/" className="text-xl font-semibold text-[#022568]">
                ERP
            </Link>
        </div>
        );
    }