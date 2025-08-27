import { computed } from 'vue'
import { useRuntimeConfig } from 'nuxt/app'

export interface TenantConfig {
  name: string
  features: {
    todoCategories: boolean
    [key: string]: any
  }
}

const TENANT_CONFIGS: Record<string, TenantConfig> = {
  'clientA': {
    name: 'Client A',
    features: {
      todoCategories: false,
    },
  },
  'clientB': {
    name: 'Client B', 
    features: {
      todoCategories: true,
    },
  },
}

export function useTenant() {
  const runtimeConfig = useRuntimeConfig()
  const tenantName = runtimeConfig.public.name as string

  const tenantConfig = computed(() => {
    return TENANT_CONFIGS[tenantName] || TENANT_CONFIGS['clientA']
  })

  const hasFeature = (featureName: string) => {
    return tenantConfig.value?.features[featureName] ?? false
  }

  const getTenantName = () => {
    return tenantConfig.value?.name ?? ''
  }

  return {
    tenantConfig,
    hasFeature,
    getTenantName,
  }
}
