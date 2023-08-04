import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import '@testing-library/jest-dom/extend-expect';
import Rockets from '../Rockets';
import { reserveRocket } from '../../redux/rocket/rocketSlice';

const mockStore = configureMockStore();
const initialState = {
  rocket: {
    rocket: [
      {
        id: 1,
        rocket_name: 'Falcon 1',
        flickr_images: ['image1.jpg'],
        reserved: false,
        description: 'Rocket description',
      },
    ],
  },
};
const store = mockStore(initialState);

describe('Rockets component', () => {
  it('renders the rockets with correct data', () => {
    const { getByText } = render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );

    expect(getByText('Falcon 1')).toBeInTheDocument();
    expect(getByText('Rocket description')).toBeInTheDocument();

    expect(getByText('Reserve Rocket')).toBeInTheDocument();
  });

  it('dispatches reserveRocket action and cancelReservation action when button click', () => {
    const { getByText } = render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );

    fireEvent.click(getByText('Reserve Rocket'));

    const actions = store.getActions();
    expect(actions).toContainEqual(reserveRocket(1));
  });
});
