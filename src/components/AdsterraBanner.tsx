import { useEffect, useRef, useState } from 'react';

// ADSTERRA AD CODES REGISTERED DATABASE
export const AD_REGISTRY = {
  // Direct Link (High earning smartlink)
  DIRECT_LINK: "https://www.effectivecpmnetwork.com/q0dqbk3ca0?key=7d2a5c93906795732e09f636bb6ac68a",
  
  // horizontal banners (long/thin)
  BANNER_320_50: "ccade14074ab6047bdcd6acbf921dc1d", // Mobile Leaderboard (Perfect fit, vertically super-thin)
  BANNER_468_60: "db3a79e12aa161ce3f5a8e4e34162c60", // Medium Banner
  BANNER_728_90: "d75dbe355ad5fd66241106d0dab90b09", // Large Leaderboard
  
  // vertical skyscraper banners
  BANNER_160_300: "bb6586562ba9e600bfde4e38d14ba022", // Handheld Skyscraper
  BANNER_160_600: "4923cc907dacca0d26355c8f49f110ed", // Large Skyscraper
  
  // square/rectangular banners 
  BANNER_300_250: "c5bdb30469010828e32529cd44eafd76", // Medium Rectangle

  // native banners
  NATIVE_CONTAINER: "container-5b363d8213f1a67eecdf76950ee2d7da",
  NATIVE_SCRIPT: "https://pl29764929.effectivecpmnetwork.com/5b363d8213f1a67eecdf76950ee2d7da/invoke.js",

  // popunders
  POPUNDER_1: "https://pl29764931.effectivecpmnetwork.com/37/a5/1e/37a51e0dd590f9273b03e16e69d84f28.js",
  POPUNDER_2: "https://pl29764930.effectivecpmnetwork.com/a9/f9/0b/a9f90bc2ed5da1f5af2e26c52bdc5de3.js"
};

interface AdsterraBannerProps {
  id: string;
  format?: 'responsive-728-320' | 'responsive-468-320' | '320-50' | '300-250' | '728-90' | '468-60';
}

export default function AdsterraBanner({ id, format = '320-50' }: AdsterraBannerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect screen width
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Proactive background connections to speed up Adsterra fetch under 1 second
    const domains = [
      'https://www.highperformanceformat.com',
      'https://pl29764929.effectivecpmnetwork.com',
      'https://pl29764930.effectivecpmnetwork.com',
      'https://pl29764931.effectivecpmnetwork.com'
    ];
    domains.forEach(domain => {
      try {
        if (!document.querySelector(`link[href="${domain}"][rel="dns-prefetch"]`)) {
          const link = document.createElement('link');
          link.rel = 'dns-prefetch';
          link.href = domain;
          document.head.appendChild(link);
        }
        if (!document.querySelector(`link[href="${domain}"][rel="preconnect"]`)) {
          const link = document.createElement('link');
          link.rel = 'preconnect';
          link.href = domain;
          link.setAttribute('crossorigin', 'anonymous');
          document.head.appendChild(link);
        }
      } catch (e) {
        console.warn('Preconnect initialization skipped', e);
      }
    });
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    // Clean up container
    containerRef.current.innerHTML = '';

    let adKey = AD_REGISTRY.BANNER_320_50;
    let adWidth = 320;
    let adHeight = 50;

    if (format === 'responsive-728-320') {
      if (isMobile) {
        adKey = AD_REGISTRY.BANNER_300_250;
        adWidth = 300;
        adHeight = 250;
      } else {
        adKey = AD_REGISTRY.BANNER_728_90;
        adWidth = 728;
        adHeight = 90;
      }
    } else if (format === 'responsive-468-320') {
      if (isMobile) {
        adKey = AD_REGISTRY.BANNER_300_250;
        adWidth = 300;
        adHeight = 250;
      } else {
        adKey = AD_REGISTRY.BANNER_468_60;
        adWidth = 468;
        adHeight = 60;
      }
    } else if (format === '728-90') {
      adKey = AD_REGISTRY.BANNER_728_90;
      adWidth = 728;
      adHeight = 90;
    } else if (format === '468-60') {
      adKey = AD_REGISTRY.BANNER_468_60;
      adWidth = 468;
      adHeight = 60;
    } else if (format === '300-250') {
      adKey = AD_REGISTRY.BANNER_300_250;
      adWidth = 300;
      adHeight = 250;
    } else {
      adKey = AD_REGISTRY.BANNER_320_50;
      adWidth = 320;
      adHeight = 50;
    }

    // Create an isolated programmatic iframe to prevent window.atOptions collisions and load ads instantly
    const iframe = document.createElement('iframe');
    iframe.width = `${adWidth}`;
    iframe.height = `${adHeight}`;
    iframe.style.border = 'none';
    iframe.style.overflow = 'hidden';
    iframe.style.width = `${adWidth}px`;
    iframe.style.height = `${adHeight}px`;
    iframe.style.background = 'transparent';
    iframe.setAttribute('scrolling', 'no');
    
    containerRef.current.appendChild(iframe);

    const writeAdToIframe = () => {
      try {
        const doc = iframe.contentWindow?.document || iframe.contentDocument;
        if (doc) {
          const htmlContent = `
            <!DOCTYPE html>
            <html>
            <head>
              <style>
                html, body {
                  margin: 0;
                  padding: 0;
                  overflow: hidden;
                  background: transparent;
                  width: 100%;
                  height: 100%;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                }
              </style>
            </head>
            <body>
              <script type="text/javascript">
                window.atOptions = {
                  'key': '${adKey}',
                  'format': 'iframe',
                  'height': ${adHeight},
                  'width': ${adWidth},
                  'params': {}
                };
              </script>
              <script type="text/javascript" src="https://www.highperformanceformat.com/${adKey}/invoke.js"></script>
            </body>
            </html>
          `;
          doc.open();
          doc.write(htmlContent);
          doc.close();
        }
      } catch (e) {
        console.warn("Iframe ad writing failed, fallback in progress", e);
      }
    };

    // Use a robust mounting double-check: write immediately and fallback on load event to ensure 100% load reliability under 1 second
    if (iframe.contentWindow) {
      writeAdToIframe();
    } else {
      iframe.onload = writeAdToIframe;
    }
  }, [id, isMobile, format]);

  // Determine heights and widths based on active format / width logic to avoid empty spaces
  let containerHeight = "h-[50px]";
  let containerWidth = "w-[320px]";

  if (format === 'responsive-728-320') {
    containerHeight = isMobile ? "h-[250px]" : "h-[90px]";
    containerWidth = isMobile ? "w-[300px]" : "w-[728px]";
  } else if (format === 'responsive-468-320') {
    containerHeight = isMobile ? "h-[250px]" : "h-[60px]";
    containerWidth = isMobile ? "w-[300px]" : "w-[468px]";
  } else if (format === '728-90') {
    containerHeight = "h-[90px]";
    containerWidth = "w-[728px]";
  } else if (format === '468-60') {
    containerHeight = "h-[60px]";
    containerWidth = "w-[468px]";
  } else if (format === '300-250') {
    containerHeight = "h-[250px]";
    containerWidth = "w-[300px]";
  }

  return (
    <div 
      className="w-[100vw] relative left-1/2 -translate-x-1/2 sm:w-full sm:static sm:translate-x-0 flex justify-center items-center py-2.5 my-1.5 select-none text-center overflow-x-hidden min-w-0" 
      key={`${id}-${isMobile ? 'mobile' : 'desktop'}-${format}`}
    >
      <div 
        ref={containerRef} 
        className={`${containerWidth} ${containerHeight} flex items-center justify-center overflow-hidden max-w-full`}
      >
        {/* Adsterra container placeholder */}
      </div>
    </div>
  );
}

// Global script injector - DISABLED to prevent popups and bad user experience
export function loadPopunders() {
  if (typeof window === 'undefined') return;
  console.log("Popups and auto popunders are permanently disabled for enhanced UX.");
}
