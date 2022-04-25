import styled from 'styled-components'
import { categories } from '../../data'

import ServiceItem from './ServiceItem'

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
`

const Services = () => {
  return (
    <Container>
      {categories.map((item) => (
        <ServiceItem item={item} key={item.id} />
      ))}
    </Container>
  )
}

export default Services
