import { api } from '@/lib/axios'

export interface RegisterRestaurantBody {
  restaurantName: string
  managerName: string
  email: string
  phone: string
}

export async function registerRestaurant({
  managerName,
  phone,
  restaurantName,
  email,
}: RegisterRestaurantBody): Promise<void> {
  await api.post('/restaurants', {
    managerName,
    phone,
    restaurantName,
    email,
  })
}
