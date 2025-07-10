export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 max-sm:px-2 px-4">
      <div className="relative w-full max-w-2xl max-h-[95vh] overflow-y-auto rounded-[16px] bg-[#EEEEEE] p-6 shadow-lg">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-6 text-xl text-[#333] hover:text-black"
        >
          ✕
        </button>

        {children}
      </div>
    </div>
  );
}
