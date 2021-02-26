import { render, act } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import Profile from './Profile';

describe('Profile component', () => {

    const mockUserId = '12345';
    const mockUser = {
        name: 'John Doe',
        jobTitle: 'Shark Exorcist',
        bio: ['I\'m a Senior Exorcist', 'I like to play with Sharks'],
        hobbies: ['Sharks', 'Exorcisms'],
        favouriteFood: []
    }
    const server = setupServer(
        rest.get(`/api/users/${mockUserId}`, (req, res, ctx) => {
            return res(ctx.json(mockUser));
        })
    );

    const setup = () => {

        const utils = render(
            <MemoryRouter initialEntries={[`users/${mockUserId}`]}>
                <Route path="users/:userId"><Profile /></Route>
            </MemoryRouter>
        );
        return { ...utils };
    };

    beforeAll(() => server.listen());
    afterEach(() => server.resetHandlers());
    afterAll(() => server.close());

    it('displays the right user name', async () => {
        const { findByRole } = setup();
        expect((await findByRole('Profile-name')).textContent).toBe(
            mockUser.name
        );
    });

    it('displays the right job title', async () => {
        const { findByRole } = setup();
        expect((await findByRole('Profile-jobTitle')).textContent).toBe(
            mockUser.jobTitle
        );
    });

    it('displays the right bio', async () => {
        const { findAllByRole } = setup();
        const paragraphs = await findAllByRole('Profile-bio');
        expect(paragraphs.length).toBe(2);
        paragraphs.forEach((paragraph: Element, index: number) => {
            expect(paragraph.textContent).toBe(mockUser.bio[index]);
        });
    });

    it('displays the right hobbies', async () => {
        const { findByRole } = setup();
        expect((await findByRole('Profile-hobbies')).textContent).toBe(
            mockUser.hobbies.join(', ')
        );
    });
});