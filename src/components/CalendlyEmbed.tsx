import { useEffect } from 'react';

export default function CalendlyEmbed() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div 
      id="book"
      className="calendly-inline-widget w-full h-[700px] rounded-2xl overflow-hidden border border-white/10 glass" 
      data-url={`${process.env.VITE_CALENDLY_URL || 'https://calendly.com/joeycatanzaro95'}?hide_landing_page_details=1&hide_gdpr_banner=1`}
    />
  );
}
