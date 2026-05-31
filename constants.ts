import { Crown, Smartphone, Share2, Clock, Heart, Phone } from "lucide-react";
import { Feature, PricingPlan, WhyChooseItem, InviteSample } from "./types";

/* =========================
   CONTACT & SOCIAL
========================= */

export const WHATSAPP_NUMBER = "918327884825";
export const WHATSAPP_MESSAGE =
  "Hi CardCampus %0AI'm interested in booking a digital invitation.%0APlease guide me with the next steps.";

export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

export const SOCIAL_LINKS = {
  INSTAGRAM: "https://www.instagram.com/cardcampus",
  FACEBOOK: "https://www.facebook.com/profile.php?id=61586158053041",
  PHONE: "tel:+918327884825",
  PINTEREST: "https://in.pinterest.com/CardCampus",
  YOUTUBE: "https://www.youtube.com/@card_campus",
};

/* =========================
   FEATURES
========================= */

export const FEATURES: Feature[] = [
  {
    title: "Cinematic Video Invites",
    description: "Premium animated wedding invites with cinematic storytelling",
  },
  {
    title: "Ultra-Real Face Match Invites",
    description: "AI-powered face matching for realistic cinematic visuals",
  },
  {
    title: "Event & Celebration Invites",
    description: "Haldi, Mehendi, Wedding, Reception & more",
  },
];

/* =========================
   WHY CHOOSE US
========================= */

export const WHY_CHOOSE: WhyChooseItem[] = [
  { icon: Crown, text: "Premium Bespoke Designs" },
  { icon: Smartphone, text: "100% Digital – No Printing Required" },
  { icon: Share2, text: "Easy Sharing on WhatsApp & Instagram" },
  { icon: Clock, text: "Fast Turnaround Time" },
  { icon: Heart, text: "Designed for Modern Couples" },
  { icon: Phone, text: "Dedicated Customer Support" },
];

/* =========================
   PRICING
========================= */

export const PRICING: PricingPlan[] = [
  {
    price: "₹4,999",
    title: "Premium Invite",
    features: [
      "Cinematic Video Design",
      "Portrait Format (9:16)",
      "No Face Matching",
      "WhatsApp & Instagram Ready",
    ],
  },
  {
    price: "₹6,999",
    title: "Ultra-Real Face Match Invite",
    features: [
      "AI Face Match Technology",
      "Advanced Customization",
      "Portrait & Landscape Formats",
      "Premium Cinematic Effects",
    ],
  },
];

/* =========================
   VIDEO SAMPLES
========================= */

export const SAMPLES_PREMIUM: InviteSample[] = [
  {
    id: 1,
    title: "Premium Invite 1",
    type: "portrait",
    mediaType: "video",
    videoUrl: "https://pub-dbae2461049248d1b4db430fba3b5577.r2.dev/premium1.mp4",
    thumb: "https://pub-dbae2461049248d1b4db430fba3b5577.r2.dev/premium1.jpg",
  },
  {
    id: 2,
    title: "Premium Invite 2",
    type: "portrait",
    mediaType: "video",
    videoUrl: "https://pub-dbae2461049248d1b4db430fba3b5577.r2.dev/premium2.mp4",
    thumb: "https://pub-dbae2461049248d1b4db430fba3b5577.r2.dev/premium2.jpg",
  },
  {
    id: 3,
    title: "Premium Invite 3",
    type: "portrait",
    mediaType: "video",
    videoUrl: "https://pub-dbae2461049248d1b4db430fba3b5577.r2.dev/premium3.mp4",
    thumb: "https://pub-dbae2461049248d1b4db430fba3b5577.r2.dev/premium3.jpg",
  },
  {
    id: 4,
    title: "Premium Invite 4",
    type: "portrait",
    mediaType: "video",
    videoUrl: "https://pub-dbae2461049248d1b4db430fba3b5577.r2.dev/premium4.mp4",
    thumb: "https://pub-dbae2461049248d1b4db430fba3b5577.r2.dev/premium4.jpg",
  },
];

export const SAMPLES_FACEMATCH: InviteSample[] = [
  {
    id: 5,
    title: "Face Match 1",
    type: "portrait",
    mediaType: "video",
    videoUrl: "https://pub-dbae2461049248d1b4db430fba3b5577.r2.dev/face1.mp4",
    thumb: "https://pub-dbae2461049248d1b4db430fba3b5577.r2.dev/face1.jpg",
  },
  {
    id: 6,
    title: "Face Match 2",
    type: "landscape",
    mediaType: "video",
    videoUrl: "https://pub-dbae2461049248d1b4db430fba3b5577.r2.dev/face2.mp4",
    thumb: "https://pub-dbae2461049248d1b4db430fba3b5577.r2.dev/face2.jpg",
  },
  {
    id: 7,
    title: "Face Match 3",
    type: "portrait",
    mediaType: "video",
    videoUrl: "https://pub-dbae2461049248d1b4db430fba3b5577.r2.dev/face3.mp4",
    thumb: "https://pub-dbae2461049248d1b4db430fba3b5577.r2.dev/face3.jpg",
  },
  {
    id: 8,
    title: "Face Match 4",
    type: "landscape",
  mediaType: "video",
  videoUrl: "https://pub-dbae2461049248d1b4db430fba3b5577.r2.dev/face4.mp4",
    thumb: "https://pub-dbae2461049248d1b4db430fba3b5577.r2.dev/face4.jpg",
  },
];
