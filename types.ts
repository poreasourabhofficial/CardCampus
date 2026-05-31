export type Feature = {
  title: string;
  description: string;
};

export type PricingPlan = {
  price: string;
  title: string;
  features: string[];
};

export type WhyChooseItem = {
  icon: any;
  text: string;
};

export type InviteSample = {
  id: number;
  title: string;
  type: "portrait" | "landscape";
  mediaType: "video";
  videoUrl: string;     // Cloudflare R2 video
  thumb: string;        // Cloudflare R2 image
};


