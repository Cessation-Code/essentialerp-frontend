import { Link } from 'next/link';

export default function Logo() {
    <div className="flex items-center justify-between">
        <div className="basis-1/5 z-50 text-center">
            <Link href="/" className="text-lg font-semibold text-white">
                Essential
            </Link>
            <Link href="/" className="text-xl font-semibold text-[#022568]">
                ERP
            </Link>
        </div>
    </div>
}