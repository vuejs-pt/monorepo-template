import { describe, it, expect, beforeEach } from 'vitest'
import { cva } from 'class-variance-authority'
import { addCVAConfig, applyVariants, clearAllCVAConfigs } from './cva-config-manager'

describe('cva-config-manager', () => {
  const buttonTestConfig = cva('text-sm', {
    variants: {
      variant: {
        custom: 'uppercase',
      },
      color: {
        primary: 'red',
      },
    },
  })

  const buttonTestConfig2 = cva('text-lg', {
    variants: {
      variant: {
        custom: 'lowercase',
      },
      color: {
        primary: 'blue',
      },
    },
  })

  beforeEach(() => {
    clearAllCVAConfigs()
  })

  describe('applyVariants', () => {
    it('should handle no variants', () => {
      addCVAConfig('button', buttonTestConfig)
      const result = applyVariants('button')
      expect(result).toBe('text-sm')
    })

    it('should apply variants to a single config', () => {
      addCVAConfig('button', buttonTestConfig)
      const result = applyVariants('button', { variant: 'custom' })
      expect(result).toBe('text-sm uppercase')
    })

    it('should apply variants to multiple configs and merge with cn utility', () => {
      addCVAConfig('button', buttonTestConfig)
      addCVAConfig('button', buttonTestConfig2)
      
      // The second config should override the first one due to cn utility behavior
      const result = applyVariants('button', { variant: 'custom' })
      expect(result).toBe('text-lg lowercase')
    })

    it('should return empty string for non-existent key', () => {
      const result = applyVariants('nonexistent')
      expect(result).toBe('')
    })
  })
})

