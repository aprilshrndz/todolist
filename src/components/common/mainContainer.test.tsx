import { render } from '@testing-library/react'
import MainContainer from './mainContainer'
import { BrowserRouter as Router } from 'react-router-dom';

describe('common/MainContainer', () => {
    test('renders correctly', () => {
        const { getByText } = render(<Router><MainContainer>Content</MainContainer></Router>)

        const container = getByText('Content')
        expect(container).toBeInTheDocument()
    })
})