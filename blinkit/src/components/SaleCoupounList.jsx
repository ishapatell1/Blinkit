import "../css/banner.css";
export const SaleCoupounList = () => {
    return (
      <>
  
        {/* For smaller screens */}
        <img
          className="hero-image-small"
          src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=900/layout-engine/2024-02/android_feed_mweb-1.png"
          alt="Hero Small"
          loading="lazy"
        />
  
        {/* For larger screens (displayed as a list) */}
        <div className="coupon-list">
          <img
            className="coupon-image"
            src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-07/pharmacy-WEB.jpg" alt="masthead_web_pharma" width="335.40000000000003" height="195" loading="lazy" 
            
          />
          <img
            className="coupon-image" src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-07/Pet-Care_WEB.jpg" alt="masthead_web_pet_care" width="335.40000000000003" height="195" loading="lazy"/>
          <img
            className="coupon-image"
            src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-03/babycare-WEB.jpg"
            alt="coupon 3"
            loading="lazy"
          />
        </div>
      </>
    );
  };
