import React, { useEffect } from "react";
import { X } from "lucide-react";

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
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
            Privacy Policy
          </h2>
          <button onClick={onClose} aria-label="Close">
            <X className="text-stone-500 hover:text-brown-900" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="px-6 py-5 overflow-y-auto text-sm text-stone-700 space-y-6 leading-relaxed">

          <p>
            At <strong>CardCampus</strong>, we respect your privacy and are
            committed to protecting the personal information you share with us.
            This Privacy Policy explains how we collect, use, store, and
            safeguard your information when you use our website and services.
          </p>

          <section>
            <h3 className="font-semibold text-brown-900 mb-2">
              1. Information We Collect
            </h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Name, phone number, and email address</li>
              <li>Event details such as names, dates, venues, and messages</li>
              <li>Photos or videos shared for invitation customization</li>
              <li>Communication details via WhatsApp, phone, or email</li>
            </ul>
            <p className="mt-2">
              We collect only the information necessary to deliver our services.
            </p>
          </section>

          <section>
            <h3 className="font-semibold text-brown-900 mb-2">
              2. How We Use Your Information
            </h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>To create and deliver digital invitation designs</li>
              <li>To communicate about orders, revisions, and approvals</li>
              <li>To process payments and confirm bookings</li>
              <li>To improve our services and customer experience</li>
            </ul>
            <p className="mt-2">
              We do not sell or rent your personal information to third parties.
            </p>
          </section>

          <section>
            <h3 className="font-semibold text-brown-900 mb-2">
              3. Media & Content Privacy
            </h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Customer photos and videos are used only for invitation creation</li>
              <li>Face Match video content is processed securely</li>
              <li>No personal media is shared publicly without permission</li>
            </ul>
          </section>

          <section>
            <h3 className="font-semibold text-brown-900 mb-2">
              4. Data Storage & Security
            </h3>
            <p>
              We use reasonable technical and organizational measures to protect
              your data. Access is restricted to authorized team members only.
              However, no digital system is completely secure.
            </p>
          </section>

          <section>
            <h3 className="font-semibold text-brown-900 mb-2">
              5. Sharing of Information
            </h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>With trusted tools required to deliver the service</li>
              <li>When required by law or government authorities</li>
            </ul>
            <p className="mt-2">
              We never share customer data for third-party marketing.
            </p>
          </section>

          <section>
            <h3 className="font-semibold text-brown-900 mb-2">
              6. Use of Completed Work
            </h3>
            <p>
              Completed invitation samples may be used for portfolio or
              promotional purposes without revealing sensitive personal
              information. Customers may opt out by informing us in writing.
            </p>
          </section>

          <section>
            <h3 className="font-semibold text-brown-900 mb-2">
              7. Cookies & Website Data
            </h3>
            <p>
              Our website may use basic cookies to improve performance and user
              experience. Cookies do not collect sensitive personal data.
            </p>
          </section>

          <section>
            <h3 className="font-semibold text-brown-900 mb-2">
              8. Third-Party Platforms
            </h3>
            <p>
              CardCampus is not responsible for the privacy practices of
              third-party platforms such as WhatsApp, email providers, or social
              networks.
            </p>
          </section>

          <section>
            <h3 className="font-semibold text-brown-900 mb-2">
              9. User Responsibility
            </h3>
            <p>
              Customers must ensure that all shared content is lawful and does
              not violate privacy, copyright, or other legal rights.
            </p>
          </section>

          <section>
            <h3 className="font-semibold text-brown-900 mb-2">
              10. Data Retention
            </h3>
            <p>
              Customer data is retained only as long as required to complete the
              service and may be archived or deleted thereafter.
            </p>
          </section>

          <section>
            <h3 className="font-semibold text-brown-900 mb-2">
              11. Children’s Privacy
            </h3>
            <p>
              Our services are not intended for individuals under 18 years of
              age. We do not knowingly collect personal data from minors.
            </p>
          </section>

          <section>
            <h3 className="font-semibold text-brown-900 mb-2">
              12. Changes to This Policy
            </h3>
            <p>
              CardCampus may update this Privacy Policy at any time. Continued
              use of our services implies acceptance of the updated policy.
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

export default PrivacyModal;
