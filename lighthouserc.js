module.exports = {
    ci: {
        collect: {
            staticDistDir: './dist',
        },
        upload: {
            target: 'temporary-public-storage',
        },
        assert: {
            assertions: {
                'categories:performance': ['error', { minScore: 0.6 }],
                'categories:accessibility': ['error', { minScore: 0.6 }],
                'categories:best-practices': ['error', { minScore: 0.8 }],
                'categories:seo': ['error', { minScore: 0.8 }],
            },
        },
    },
};
