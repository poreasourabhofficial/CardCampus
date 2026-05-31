import React, { useEffect } from "react";
import { X } from "lucide-react";

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TermsModal: React.FC<TermsModalProps> = ({ isOpen, onClose }) => {
  // 🔒 Lock background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="bg-ivory max-w-4xl w-full rounded-lg shadow-xl flex flex-col max-h-[90vh]">

        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-stone-200">
          <h2 className="text-xl font-serif text-brown-900">
            Terms & Conditions
          </h2>
          <button onClick={onClose} aria-label="Close">
            <X className="text-stone-500 hover:text-brown-900" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="px-6 py-5 overflow-y-auto text-sm text-stone-700 space-y-6 leading-relaxed">

          <p>
            Welcome to <strong>CardCampus</strong>. By accessing our website and
            placing an order for our digital invitation services, you agree to
            comply with and be bound by the following Terms & Conditions. Please
            read them carefully before proceeding.
          </p>

          <section>
            <h3 className="font-semibold text-brown-900 mb-2">
              1. Services Offered
            </h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Premium Digital Invitation Cards</li>
              <li>Face Match Video Invitations</li>
              <li>Customized digital invitation designs</li>
            </ul>
            <p className="mt-2">
              All services are delivered digitally only. No physical products
              are shipped.
            </p>
          </section>

          <section>
            <h3 className="font-semibold text-brown-900 mb-2">
              2. Pricing & Payments
            </h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>All prices are in Indian Rupees (₹).</li>
              <li>Promotional prices are time-bound and subject to change.</li>
              <li>Booking is confirmed only after 33% advance payment.</li>
              <li>Remaining balance must be paid before final delivery.</li>
            </ul>
          </section>

          <section>
            <h3 className="font-semibold text-brown-900 mb-2">
              3. Advance Payment Policy
            </h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>33% advance payment is mandatory to start work.</li>
              <li>Advance payments are non-refundable.</li>
            </ul>
          </section>

          <section>
            <h3 className="font-semibold text-brown-900 mb-2">
              4. Customization & Revisions
            </h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Basic revisions are included as per the selected plan.</li>
              <li>Major changes may attract additional charges.</li>
              <li>
                CardCampus is not responsible for errors due to incorrect
                information provided by the customer.
              </li>
            </ul>
          </section>

          <section>
            <h3 className="font-semibold text-brown-900 mb-2">
              5. Delivery Timeline
            </h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Timelines are shared during booking.</li>
              <li>
                Delays due to late content or approvals are not our
                responsibility.
              </li>
              <li>Express delivery may include extra charges.</li>
            </ul>
          </section>

          <section>
            <h3 className="font-semibold text-brown-900 mb-2">
              6. Digital Nature of Product
            </h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>All products are digital and customized.</li>
              <li>No returns or exchanges once delivered.</li>
              <li>Preview links may be shared for approval.</li>
            </ul>
          </section>

          <section>
            <h3 className="font-semibold text-brown-900 mb-2">
              7. Cancellation & Refund Policy
            </h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Orders cannot be cancelled once work has started.</li>
              <li>No refunds for completed or partial work.</li>
              <li>Refunds (if applicable) are at our discretion.</li>
            </ul>
          </section>

          <section>
            <h3 className="font-semibold text-brown-900 mb-2">
              8. Intellectual Property
            </h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>All designs remain property of CardCampus.</li>
              <li>Personal, non-commercial usage only.</li>
              <li>Reselling or redistribution is prohibited.</li>
            </ul>
          </section>

          <section>
            <h3 className="font-semibold text-brown-900 mb-2">
              9. Use of Samples & Promotions
            </h3>
            <p>
              Completed work may be used for portfolio or promotional purposes
              unless requested otherwise in writing.
            </p>
          </section>

          <section>
            <h3 className="font-semibold text-brown-900 mb-2">
              10. Third-Party Platforms
            </h3>
            <p>
              CardCampus is not responsible for issues related to third-party
              platforms or internet connectivity.
            </p>
          </section>

          <section>
            <h3 className="font-semibold text-brown-900 mb-2">
              11. Limitation of Liability
            </h3>
            <p>
              Liability is limited to the amount paid for the specific service.
            </p>
          </section>

          <section>
            <h3 className="font-semibold text-brown-900 mb-2">
              12. Changes to Terms
            </h3>
            <p>
              Terms may be updated at any time. Continued usage implies
              acceptance.
            </p>
          </section>

          <section>
            <h3 className="font-semibold text-brown-900 mb-2">
              13. Contact Information
            </h3>
            <p>
              <strong>CardCampus</strong><br />
              📞 Phone: +91 83278 84825<br />
              📩 Email: support@cardcampus.in
            </p>
          </section>

        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-stone-200 text-right">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm bg-gold-600 text-white rounded hover:bg-gold-700 transition"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};

export default TermsModal;
