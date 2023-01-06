import React, { useEffect, useRef } from 'react'

export default function useEvent(eventName, handler, element = global) {
  useEffect(() => {
    element.addEventListener(eventName, handler);
    return () => {
      element.removeEventListener(eventName, handler);
    };
  }, [eventName, handler, element]);
} 