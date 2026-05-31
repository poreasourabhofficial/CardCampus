import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { Button } from "./UI/Button";
import { WHATSAPP_LINK } from "../constants";

export default function OfferPopup() {
  const [open, setOpen] = useState(false);

  // OPEN POPUP EVERY TIME PAGE LOADS / USER COMES BACK
  useEffect(() => {
    setOpen(true);
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-2">

      {/* POPUP CONTAINER */}
      <div
        className="
          relative
          w-full max-w-[420px]
          max-h-[90vh]
          bg-[#f9f4ec]
          rounded-2xl
          overflow-hidden
          shadow-xl
          flex flex-col
        "
      >

        {/* HEADER – CLOSE BUTTON */}
        <div className="sticky top-0 z-20 bg-[#f9f4ec] p-3 flex justify-end">
          <button
            onClick={() => setOpen(false)}
            className="bg-white rounded-full p-1.5 shadow"
          >
            <X size={18} />
          </button>
        </div>

        {/* SCROLLABLE BANNER */}
        <div className="flex-1 overflow-y-auto px-3">
          <img
            src="https://pub-dbae2461049248d1b4db430fba3b5577.r2.dev/mahashivareatri_offer.jpg"
            alt="Mahashivratri Offer"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* FOOTER – CTA */}
        <div className="sticky bottom-0 z-20 bg-white border-t px-4 py-3 flex justify-between items-center">
          <span className="text-sm font-semibold">
            Create Your Invitation
          </span>

          <Button
            className="px-5 rounded-full text-sm"
            onClick={() => {
              setOpen(false);
              window.open(WHATSAPP_LINK, "_blank");
            }}
          >
            BOOK NOW
          </Button>
        </div>
      </div>
    </div>
  );
}
