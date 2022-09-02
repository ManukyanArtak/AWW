import { useCallback, useEffect, useState } from 'react'

export default function useDeviceDetect() {
  const [isMobile, setMobile] = useState(false)

  const updateMobile = useCallback(() => {
    setMobile(window.matchMedia(`(max-width: 1023px)`).matches)
  }, [setMobile])

  useEffect(() => {
    updateMobile()
    window.addEventListener('resize', updateMobile)

    return () => {
      window.removeEventListener('resize', () => updateMobile)
    }
  }, [updateMobile])

  return {
    isMobile,
  }
}
