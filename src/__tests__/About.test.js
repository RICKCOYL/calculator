import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '../components/About';

describe('Home component test', () => {
  test('should renders welcome text', () => {
    render(<About />);
    const text = screen.getByText('About');
    expect(text).toBeInTheDocument();
  });

  test('should render the expected output', () => {
    const component = renderer.create(
      <About />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
