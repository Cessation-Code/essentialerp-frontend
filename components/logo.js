import  Link  from 'next/link';

export default function Logo() {
    return(
        <div >
            <Link href="/" className="text-lg font-semibold text-[#6C63FF]">
                Essential
            </Link>
            <Link href="/" className="text-xl font-semibold text-[#022568]">
                ERP
            </Link>
        </div>
        );
    }