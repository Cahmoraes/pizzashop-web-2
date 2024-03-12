import {
  QueryClient,
  QueryClientProvider as QueryProvider,
} from '@tanstack/react-query'
import { ReactNode } from 'react'

export const queryClient = new QueryClient()

interface QueryClientProviderProps {
  children: ReactNode
}

export function QueryClientProvider({ children }: QueryClientProviderProps) {
  return <QueryProvider client={queryClient}>{children}</QueryProvider>
}
