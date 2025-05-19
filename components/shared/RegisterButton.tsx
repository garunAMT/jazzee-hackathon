'use client';
import React from 'react';
import { Button } from '../ui/button';

const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.jazzeetechnologies.jazzee_edtech&pcampaignid=web_share";
const APP_STORE_URL = "https://apps.apple.com/us/app/jazzee-edtech/id6743542317";

interface RegisterButtonProps {
  text?: string;
  className?: string;
}

const RegisterButton: React.FC<RegisterButtonProps> = ({
  text = "Register Now",
  className = "bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded shadow",
}) => {
  const handleRedirect = () => {
    const userAgent = navigator.userAgent || navigator.vendor;

    if (/android/i.test(userAgent)) {
      window.open(PLAY_STORE_URL, "_blank");
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) {
      window.open(APP_STORE_URL, "_blank");
    } else {
      window.open(PLAY_STORE_URL, "_blank");
    }
  };

  return (
    <Button
      onClick={handleRedirect}
      className={className}
      size={
        'lg'
      }
    >
      {text}
    </Button>
  );
};

export default RegisterButton;
