import React from 'react'
import {
  Container as UContainer,
  Row as URow,
  Col as UCol,
} from 'react-bootstrap'
import styled from 'styled-components'

const FeaturedProjects = () => {
  return (
    <Wrapper>
      <Row>Projects</Row>
    </Wrapper>
  )
}

const Wrapper = styled(UContainer)`
  width: 100%;
  max-width: 100vw;
  background: rgb(235, 235, 235);
`

const Row = styled(URow)``

const Col = styled(UCol)``

export default FeaturedProjects
