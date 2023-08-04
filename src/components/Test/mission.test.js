import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Missions from '../Missions';
import '@testing-library/jest-dom/extend-expect';

describe('Missions component', () => {
  const mockStore = configureStore();

  const initialState = {
    mission: {
      missions: [
        {
          mission_id: 1,
          mission_name: 'Test Mission',
          description: 'This is a test mission',
          joined_mission: true,
        },
      ],
      isLoading: false,
      isError: false,
      error: null,
    },
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders loading state when isLoading is true', () => {
    const loadingState = { ...initialState.mission, isLoading: true };
    const store = mockStore({ mission: loadingState });

    render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );

    expect(screen.getByText('LOADING...')).toBeInTheDocument();
  });

  test('renders error state when isError is true', () => {
    const errorMessage = 'Some error message';
    const errorState = { ...initialState.mission, isError: true, error: errorMessage };
    const store = mockStore({ mission: errorState });

    render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );

    expect(screen.getByText('Opps! Error occured: Some error message')).toBeInTheDocument();
  });

  test('renders mission data when isLoading and isError are false', () => {
    const missionDataState = { ...initialState.mission };
    const store = mockStore({ mission: missionDataState });

    const { getByText, getByRole } = render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );

    // Check if mission data is displayed correctly
    const missionName = getByText('Test Mission');
    const missionDescription = getByText('This is a test mission');
    const missionStatus = getByText('active member');
    const missionActionButton = getByRole('button');

    expect(missionName).toBeInTheDocument();
    expect(missionDescription).toBeInTheDocument();
    expect(missionStatus).toBeInTheDocument();
    expect(missionActionButton).toBeInTheDocument();

    // Test the button click action
    fireEvent.click(missionActionButton);
    // Add additional assertions based on your expected behavior when clicking the button
  });
});
