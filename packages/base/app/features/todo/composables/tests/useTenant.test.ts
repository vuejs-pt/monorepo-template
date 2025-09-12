import { describe, it, expect, vi, beforeEach } from 'vitest'
import { useTenant } from '../useTenant'

// Mock useRuntimeConfig
const mockUseRuntimeConfig = vi.fn()
vi.mock('nuxt/app', () => ({
  useRuntimeConfig: () => mockUseRuntimeConfig()
}))

describe('useTenant', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('returns clientA configuration', () => {
    mockUseRuntimeConfig.mockReturnValue({
      public: { name: 'clientA' }
    })

    const { tenantConfig, getTenantName, getTenantId, hasFeature } = useTenant()

    expect(tenantConfig.value?.name).toBe('Client A')
    expect(getTenantName()).toBe('Client A')
    expect(getTenantId()).toBe('clientA')
    expect(hasFeature('todoCategories')).toBe(false)
  })

  it('returns clientB configuration', () => {
    mockUseRuntimeConfig.mockReturnValue({
      public: { name: 'clientB' }
    })

    const { tenantConfig, getTenantName, getTenantId, hasFeature } = useTenant()

    expect(tenantConfig.value?.name).toBe('Client B')
    expect(getTenantName()).toBe('Client B')
    expect(getTenantId()).toBe('clientB')
    expect(hasFeature('todoCategories')).toBe(true)
  })

  it('correctly checks for existing features', () => {
    mockUseRuntimeConfig.mockReturnValue({
      public: { name: 'clientB' }
    })

    const { hasFeature } = useTenant()

    expect(hasFeature('todoCategories')).toBe(true)
    expect(hasFeature('nonExistentFeature')).toBe(false)
  })
})
