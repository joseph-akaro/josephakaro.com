'use client'
import { PixelatedCanvas } from '@/components/ui/pixelated-canvas'

export const PixeltedMe = () => {
  return (
    <div className='mx-auto mt-8'>
        <PixelatedCanvas
            src='https://www.freepik.com/pikaso/explore/wK467EIQVN'
            // width={400}
            // height={400}
            cellSize={3}
            dotScale={0.9}
            shape='square'
            dropoutStrength={0.4}
            interactive
            distortionStrength={3}
            distortionRadius={80}
            distortionMode="swirl"
            followSpeed={0.2}
            jitterStrength={4}
            jitterSpeed={4}
            sampleAverage
            tintColor="#FFFFFF"
            tintStrength={0.2}
        />
    </div>
  )
}