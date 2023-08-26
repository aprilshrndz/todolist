import { render, fireEvent } from "@testing-library/react"
import Navbar from "./navbar"
import { BrowserRouter as Router } from 'react-router-dom';

describe('Navbar', () => {
    test('renders correctly', () => {
        const { getByText, getAllByAltText, getAllByText } = render(
            <Router>
              <Navbar />
            </Router>
          );

          const toggle = getByText("", {selector: "button"})
          expect(toggle).toBeInTheDocument()

          const nav = getAllByText("", {selector: "nav"})
          expect(nav.length).toEqual(2)
      
          const logoImage = getAllByAltText('logo');
          expect(logoImage.length).toEqual(2);
      
          const homeLink = getAllByText('Home');
          const dashboardLink = getAllByText('Dashboard');
          const tasklink = getAllByText('Task');
          const signoutLink = getAllByText('Sign out')
          expect(homeLink.length).toEqual(2);
          expect(dashboardLink.length).toEqual(2);
          expect(tasklink.length).toEqual(2);
          expect(signoutLink.length).toEqual(2);
    })

    test('click menu button', () => {
        const { getByText } = render(
            <Router>
              <Navbar />
            </Router>
          );

        const menuBtn = getByText('', { selector: 'button' })
        fireEvent.click(menuBtn)
    })

    test('click sign out button', () => {
        const mockNavigate = jest.fn(); // Create a mock navigate function
        jest.mock('react-router-dom', () => ({
            ...jest.requireActual('react-router-dom'), // Use the actual react-router-dom module, but override useNavigate
            useNavigate: () => mockNavigate,
        }));

        const { getAllByText } = render(
            <Router>
                <Navbar />
            </Router>
        );

        const signOutLink = getAllByText('Sign out');
        fireEvent.click(signOutLink[0]);
        fireEvent.click(signOutLink[1]);

        // expect(mockNavigate).toHaveBeenCalledTimes(1)
    })

})