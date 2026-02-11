'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

const PLAY_STORE_URL =
  'https://play.google.com/store/apps/details?id=com.wellnessz.fitterifyapp';
const APP_STORE_URL =
  'https://apps.apple.com/us/app/fitterify/id6756501595';

// Android deep link scheme
const ANDROID_DEEP_LINK_SCHEME = 'fitterify://app/loginClient';
// iOS deep link scheme (fallback if Universal Links don't work)
const IOS_DEEP_LINK_SCHEME = 'fitterify://app/loginClient';

function LoginClientContent() {
  const searchParams = useSearchParams();
  const [isRedirecting, setIsRedirecting] = useState(false);
  const clientID = searchParams.get('clientID');

  useEffect(() => {
    const userAgent = navigator.userAgent || '';
    const isIOS = /iPhone|iPad|iPod/i.test(userAgent);
    const isAndroid = /Android/i.test(userAgent);

    // If not mobile, redirect to main app page
    if (!isIOS && !isAndroid) {
      window.location.href = '/app';
      return;
    }

    // If we reach this point, it means:
    // 1. Universal Links (iOS) or App Links (Android) did NOT intercept the URL
    // 2. This means the app is likely NOT installed
    // 3. We should redirect to the appropriate store

    // Build the deep link URL with query parameters for custom scheme fallback
    const deepLinkUrl = clientID
      ? `${isIOS ? IOS_DEEP_LINK_SCHEME : ANDROID_DEEP_LINK_SCHEME}?clientID=${clientID}`
      : isIOS
      ? IOS_DEEP_LINK_SCHEME
      : ANDROID_DEEP_LINK_SCHEME;

    setIsRedirecting(true);

    // Try custom URL scheme as a last attempt (in case Universal/App Links failed for other reasons)
    const tryCustomScheme = () => {
      // Try to open via custom scheme
      const iframe = document.createElement('iframe');
      iframe.style.display = 'none';
      iframe.src = deepLinkUrl;
      document.body.appendChild(iframe);

      // Remove iframe after a short delay
      setTimeout(() => {
        if (iframe.parentNode) {
          document.body.removeChild(iframe);
        }
      }, 100);
    };

    // Try custom scheme first (quick attempt)
    tryCustomScheme();

    // Then redirect to store after a brief delay
    // This gives the custom scheme a chance to work, but if app isn't installed,
    // we'll redirect to the store
    const redirectTimeout = setTimeout(() => {
      if (isIOS) {
        window.location.href = APP_STORE_URL;
      } else if (isAndroid) {
        window.location.href = PLAY_STORE_URL;
      }
    }, 1500); // 1.5 seconds should be enough

    return () => {
      clearTimeout(redirectTimeout);
    };
  }, [clientID]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#050504] text-white">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
        <p className="text-lg">
          {isRedirecting ? 'Redirecting to app store...' : 'Opening Fitterify app...'}
        </p>
        {clientID && (
          <p className="text-sm text-gray-400 mt-2">Client ID: {clientID}</p>
        )}
      </div>
    </div>
  );
}

export default function LoginClientPage() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-screen bg-[#050504] text-white">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
          <p className="text-lg">Loading...</p>
        </div>
      </div>
    }>
      <LoginClientContent />
    </Suspense>
  );
}
