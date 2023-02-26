export const isSafari = () => {
    const ua = window.navigator.userAgent
    const iOS = !!ua.match(/iP(ad|od|hone)/i)
    const hasSafariInUa = !!ua.match(/Safari/i)
    const noOtherBrowsersInUa = !ua.match(/Chrome|CriOS|OPiOS|mercury|FxiOS|Firefox/i)
    let result = false
    if (iOS) {
      // detecting Safari in IOS mobile browsers
      const webkit = !!ua.match(/WebKit/i)
      result = webkit && hasSafariInUa && noOtherBrowsersInUa
      // @ts-ignore
    } else if (window.safari !== undefined) {
      // detecting Safari in Desktop Browsers
      result = true
    } else {
      // detecting Safari in other platforms
      result = hasSafariInUa && noOtherBrowsersInUa
    }
  
    return result
  }

import { useEffect, useState } from 'react'

export function useIsSafari() {
  const [state, setState] = useState<null | boolean>(null)

  useEffect(() => {
    setState(isSafari())
  }, [])

  return state
}
