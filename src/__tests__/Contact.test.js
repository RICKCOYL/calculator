import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '../components/Contact';

describe('Home component test', () => {
  test('should renders welcome text', () => {
    render(<Contact />);
    const text = screen.getByText('Contact');
    expect(text).toBeInTheDocument();
  });

  test('should render the expected output', () => {
    const component = renderer.create(
      <Contact />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
