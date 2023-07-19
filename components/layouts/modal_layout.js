export default function Modal({ children, header }) {
    return (
        <div className="bg-gray-400 bg-opacity-60 fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-8 h-fit w-[60vh]">
                <div className="flex flex-row text-xl font-bold mb-4">{header}</div>
                {children}
            </div>
        </div>
    );
}