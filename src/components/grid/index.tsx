import React, { FC, Children } from 'react'
import { Container, Row } from './styles' 
import { Block } from './block'

export const Grid: FC = () => {

  return (
    <Container data-cy='grid-container'>
      {Children.toArray(
          [...Array(9)].map((_, rowIndex) => (
            <Row data-cy='grid-row-container' key={rowIndex}>
              {Children.toArray(
                [...Array(9)].map((_, colIndex) => 
                  <Block
                    colIndex={colIndex}
                    rowIndex={rowIndex}
                  />)
              )}
            </Row>
          ))
        )}
    </Container>
  )
}
