import { describe, it, expect, beforeEach } from 'vitest'
import { cva } from 'class-variance-authority'
import { addCVAConfigs, mergeCVAConfig } from './cva-config-manager'

describe('cva-config-manager', () => {
  const buttonTestConfig = cva('text-sm', {
    variants: {
      variant: {
        custom: 'uppercase',
      },
    },
  })

  const buttonTestConfig2 = cva('text-lg', {
    variants: {
      variant: {
        custom: 'lowercase',
      },
    },
  })

  beforeEach(() => {})

  describe('test CVA', () => {
    it('should return the correct class name', () => {
      const result = buttonTestConfig({ variant: 'custom' })
      expect(result).toBe('text-sm uppercase')
    })
  })

  describe('mergeCVAConfig', () => {
    it('should merge configs correctly', () => {
      addCVAConfigs(buttonTestConfig)
      const result = mergeCVAConfig('button', buttonTestConfig2)
      expect(result({ variant: 'custom' })).toBe('text-lg lowercase')
    })
  })
})
