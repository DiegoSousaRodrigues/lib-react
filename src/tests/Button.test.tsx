import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Button } from '@/components/Button/Button'

describe('Button', () => {
  it('deve renderizar o label corretamente', () => {
    render(<Button label="Salvar" />)

    const button = screen.getByRole('button', {
      name: 'Salvar',
    })

    expect(button).toBeInTheDocument()
  })
})
