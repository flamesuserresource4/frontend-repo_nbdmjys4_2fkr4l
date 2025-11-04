import { Suspense } from 'react';
import Spline from '@splinetool/react-spline';

export default function Coffee3DModel({ sceneUrl }) {
  return (
    <div className="relative w-full" style={{ height: '60vh' }}>
      <div className="absolute inset-0">
        <Suspense fallback={<div className="w-full h-full bg-gradient-to-b from-[#0b2b22] to-[#0a1f1a]" />}> 
          <Spline scene={sceneUrl} style={{ width: '100%', height: '100%' }} />
        </Suspense>
      </div>
      {/* Soft gradient overlay to improve contrast */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/10 via-transparent to-[#0a1f1a]/60" />
    </div>
  );
}
