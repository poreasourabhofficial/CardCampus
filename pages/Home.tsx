import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Layout/Header';
import { Button } from '../components/UI/Button';
import { WHATSAPP_LINK, FEATURES, WHY_CHOOSE, PRICING } from '../constants';
{/* import OfferPopup from "../components/OfferPopup";*/}


const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleOpenWhatsApp = () => {
    window.open(WHATSAPP_LINK, '_blank');
  };

  const handleViewSamples = () => {
    navigate('/samples');
  };

  return (
    <>
      <Header />
       {/* <OfferPopup /> */}

      {/* GLOBAL BACKGROUND WRAPPER */}
      <div className="bg-ivory min-h-screen">

        {/* HERO SECTION */}
        <section className="relative pt-6 pb-20 px-4 overflow-hidden">
          <div className="container mx-auto flex flex-col lg:flex-row items-center lg:justify-between max-w-6xl">
            
            {/* Text Content */}
            <div className="lg:w-1/2 text-center lg:text-left z-10 mb-12 lg:mb-0">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl leading-[1.1] text-gold-600 mb-6">
                THE NEW ERA OF <br/>
                <span className="text-brown-800">DIGITAL</span> <br/>
                INVITATIONS
              </h1>
              <p className="font-sans text-stone-500 text-lg mb-8 max-w-md mx-auto lg:mx-0">
                Premium digital wedding & event invites designed to share, not print
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button onClick={handleOpenWhatsApp}>
                  BOOK NOW
                </Button>
                <Button variant="outline" onClick={handleViewSamples}>
                  View Sample Invites
                </Button>
              </div>
            </div>

            {/* Phone Mockup Image */}
            <div className="lg:w-1/2 flex justify-center lg:justify-end relative">
              <div className="relative w-64 md:w-80 lg:w-[360px] transform rotate-[-6deg] hover:rotate-0 transition-transform duration-700 ease-out z-10 shadow-2xl rounded-[3rem] border-8 border-stone-800 bg-stone-900 overflow-hidden">
                <img 
                  src="https://pub-dbae2461049248d1b4db430fba3b5577.r2.dev/phone.jpg" 
                  alt="Wedding Invite Sample"
                  className="w-full h-full object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none"></div>
              </div>
              
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gold-400/20 blur-[100px] rounded-full -z-0"></div>
            </div>
          </div>
        </section>

        {/* WHAT WE CREATE */}
        <section className="py-5 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="font-serif text-4xl text-gold-600 mb-20 text-center">
              What We Create
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {FEATURES.map((feature, idx) => (
                <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-stone-100 flex flex-col h-full justify-between">
                  <div>
                    <h3 className="font-serif text-2xl text-brown-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-stone-500 font-sans leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                  <div className="mt-6 w-12 h-1 bg-gold-200 rounded-full"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY CHOOSE */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="font-serif text-4xl text-gold-600 mb-20 text-center">
              Why Choose CardCampus
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-16">
              {WHY_CHOOSE.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="text-brown-800 mt-1">
                    <item.icon size={24} strokeWidth={1.5} />
                  </div>
                  <span className="font-sans text-lg text-brown-800">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section className="py-5 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="font-serif text-4xl text-gold-600 mb-20 text-center">
              Pricing Plans
            </h2>
            
            <div className="flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
                {PRICING.map((plan, idx) => (
                  <div key={idx} className="bg-white rounded-3xl p-8 shadow-xl border border-stone-100 flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden group">
                    
                    <div className="absolute inset-0 bg-gradient-to-r from-gold-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                    <div className="flex-1 text-center sm:text-left z-10">
                      <h3 className="font-bold text-brown-900 mb-1">
                        {plan.title}
                      </h3>
                      <div className="text-stone-500 text-sm mb-2">
                        {plan.features.map((feat, i) => (
                          <span key={i} className="block">{feat}</span>
                        ))}
                      </div>
                    </div>

                    <div className="z-10">
                      <span className="font-serif text-4xl text-gold-600">
                        {plan.price}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CALL TO ACTION */}
        <section className="py-24 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="font-serif text-4xl md:text-5xl text-gold-600 mb-8">
              Ready to Create Your<br/>Digital Invite?
            </h2>
            
            <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-12 max-w-2xl mx-auto aspect-video">
              <img 
                src="https://pub-dbae2461049248d1b4db430fba3b5577.r2.dev/couple.jpg" 
                alt="Happy Couple"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white text-sm font-light tracking-widest uppercase">
                Trusted by Modern Couples for Premium Digital Invites
              </div>
            </div>

            <Button onClick={handleOpenWhatsApp} className="px-12 py-4 text-lg">
              BOOK NOW
            </Button>
          </div>
        </section>

      </div>
    </>
  );
};

export default Home;
