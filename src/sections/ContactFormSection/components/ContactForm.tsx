import React, { useState, useEffect } from "react";

export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStartTracked, setFormStartTracked] = useState(false);

  useEffect(() => {
    // Track form start when user first interacts with form
    const handleFormStart = () => {
      if (!formStartTracked && typeof window !== 'undefined' && window.gtag) {
        const pathname = window.location.pathname;
        const isServicePage = pathname.includes('-cleaning') || pathname.includes('-washing');
        const eventName = isServicePage ? 'formstart_service' : 'formstart_contact';
        
        window.gtag('event', eventName, {
          event_category: 'Form',
          event_label: isServicePage ? 'Service Page Form Start' : 'Contact Page Form Start'
        });
        setFormStartTracked(true);
      }
    };

    const form = document.querySelector('form');
    if (form) {
      form.addEventListener('focusin', handleFormStart, { once: true });
      form.addEventListener('click', handleFormStart, { once: true });
    }

    return () => {
      if (form) {
        form.removeEventListener('focusin', handleFormStart);
        form.removeEventListener('click', handleFormStart);
      }
    };
  }, [formStartTracked]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (isSubmitting) return;
    
    setIsSubmitting(true);
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      const response = await fetch("https://formspree.io/f/xpqjrnbd", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        window.location.href = "/thank-you";
      } else {
        const data = await response.json();
        if (data.errors) {
          console.error("Form errors:", data.errors);
          alert("There was an error submitting the form. Please try again.");
          setIsSubmitting(false);
        } else {
          window.location.href = "/thank-you";
        }
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("There was an error submitting the form. Please try again.");
      setIsSubmitting(false);
    }
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className="text-sm box-border caret-transparent leading-[20.3px] break-words md:text-[17px] md:leading-[24.65px]"
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-6">
          {/* Name - Full width on mobile, half on desktop */}
          <div className="md:col-span-2">
            <label className="text-white text-base font-semibold block mb-2">
              Name <span className="text-[#17539B]/70">*</span>
            </label>
            <input
              name="name"
              type="text"
              required
              placeholder="Your full name"
              className="w-full px-4 py-3.5 bg-white border-2 border-white/20 rounded-lg text-neutral-900 text-base placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#17539B]/50 focus:border-[#17539B]/50 transition-all duration-200 shadow-sm"
            />
          </div>
          
          {/* Email */}
          <div>
            <label className="text-white text-base font-semibold block mb-2">
              Email <span className="text-[#17539B]/70">*</span>
            </label>
            <input
              name="email"
              type="email"
              required
              placeholder="your.email@example.com"
              className="w-full px-4 py-3.5 bg-white border-2 border-white/20 rounded-lg text-neutral-900 text-base placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#17539B]/50 focus:border-[#17539B]/50 transition-all duration-200 shadow-sm"
            />
          </div>
          
          {/* Phone */}
          <div>
            <label className="text-white text-base font-semibold block mb-2">
              Phone
            </label>
            <input
              name="phone"
              type="tel"
              placeholder="07857 353191"
              className="w-full px-4 py-3.5 bg-white border-2 border-white/20 rounded-lg text-neutral-900 text-base placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#17539B]/50 focus:border-[#17539B]/50 transition-all duration-200 shadow-sm"
            />
          </div>
          
          {/* Address - Full width */}
          <div className="md:col-span-2">
            <label className="text-white text-base font-semibold block mb-2">
              Address
            </label>
            <input
              name="address"
              type="text"
              placeholder="Property address"
              className="w-full px-4 py-3.5 bg-white border-2 border-white/20 rounded-lg text-neutral-900 text-base placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#17539B]/50 focus:border-[#17539B]/50 transition-all duration-200 shadow-sm"
            />
          </div>
          
          {/* Description - Full width */}
          <div className="md:col-span-2">
            <label className="text-white text-base font-semibold block mb-2">
              Brief Description of the Job / Property
            </label>
            <textarea
              name="message"
              rows={5}
              placeholder="Tell us about the work you need..."
              className="w-full px-4 py-3.5 bg-white border-2 border-white/20 rounded-lg text-neutral-900 text-base placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:border-cyan-300 transition-all duration-200 shadow-sm resize-y min-h-[120px]"
            ></textarea>
          </div>
        </div>
        
        {/* Submit Button */}
        <div className="mt-8 flex justify-center md:justify-start">
          <input
            type="submit"
            value={isSubmitting ? "Sending..." : "Send Message"}
            disabled={isSubmitting}
            className="bg-[#8dae23] hover:bg-[#7a9a1f] text-white font-semibold text-base px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 uppercase tracking-wider cursor-pointer min-w-[200px] transform hover:scale-105 active:scale-100 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
          />
        </div>
        
    </form>
  );
};
