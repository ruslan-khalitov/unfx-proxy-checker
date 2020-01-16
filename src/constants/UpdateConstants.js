export const FETCH_CONFIG = {
    url: 'https://api.github.com/repos/assnctr/unfx-proxy-checker/releases',
    json: true,
    timeout: 5000,
    headers: {
        'User-Agent': 'UNFX Version Lookup'
    }
};
