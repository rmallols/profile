export const getUser = (userId: string) => {
    const users = [
        {
            id: '12345',
            name: 'Richard Mallols',
            jobTitle: 'Software Engineer',
            bio: [
                'I’m a highly motivated Software Engineer with 19 years of commercial experience. I’m passionate ' +
                'about offering timely and accurate guidance, support and training to the team members. I have ' +
                'excellent organizational skills and a fair and consistent approach to managing staff.',
                'Throughout my career, I’ve worked with the majority of the dominating JavaScript libraries and ' +
                'frameworks, including React, Angular and Node.'
            ],
            hobbies: ['Code', 'Cook', '/Play (Table)? Tennis/', 'Watch shark movies'],
            favouriteFood: [
                {
                    name: 'Original Paella',
                    link: 'https://www.youtube.com/watch?v=KaOl0yH1-LY'
                },
                {
                    name: 'All i Pebre',
                    link: 'https://bibimbites.com/stories/valencian-all-i-pebre-a-stew-to-fall-in-love-with/'
                }
            ]
        }
    ];
    return users.find(({ id }) => id === userId);
}