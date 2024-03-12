import { render } from '@testing-library/react'

import { OrderStatus } from './order-status'

describe('OrderStatus', () => {
  it('should display the right text when order status id Pending', () => {
    const wrapper = render(<OrderStatus status="pending" />)
    const statusText = wrapper.getByText('Pendente')
    const badgeElement = wrapper.getByTestId('badge')
    expect(badgeElement).toHaveClass('bg-slate-400')
    expect(statusText).toBeInTheDocument()
  })

  it('should display the right text when order status id Cancel', () => {
    const wrapper = render(<OrderStatus status="canceled" />)
    const statusText = wrapper.getByText('Cancelado')
    const badgeElement = wrapper.getByTestId('badge')
    expect(badgeElement).toHaveClass('bg-rose-500')
    expect(statusText).toBeInTheDocument()
  })

  it('should display the right text when order status id Delivering', () => {
    const wrapper = render(<OrderStatus status="delivering" />)
    const statusText = wrapper.getByText('Em entrega')
    const badgeElement = wrapper.getByTestId('badge')
    expect(badgeElement).toHaveClass('bg-amber-500')
    expect(statusText).toBeInTheDocument()
  })

  it('should display the right text when order status id Processing', () => {
    const wrapper = render(<OrderStatus status="processing" />)
    const statusText = wrapper.getByText('Em preparo')
    const badgeElement = wrapper.getByTestId('badge')
    expect(badgeElement).toHaveClass('bg-amber-500')
    expect(statusText).toBeInTheDocument()
  })

  it('should display the right text when order status id Delivering', () => {
    const wrapper = render(<OrderStatus status="delivered" />)
    const statusText = wrapper.getByText('Entregue')
    const badgeElement = wrapper.getByTestId('badge')
    expect(badgeElement).toHaveClass('bg-emerald-500')
    expect(statusText).toBeInTheDocument()
  })
})
