/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'themewagon.com'
            },
            {
                hostname: 'white.logodownload.org'
            },
            {
                hostname: 'pictory.ai'
            },
            {
                hostname: 'cdn.dribbble.com'
            },
            {
                hostname: 'qubstudio.com'
            },
            {
                hostname: 'www.gravatar.com'
            },
            {
                hostname: 'upload.wikimedia.org'
            },
            {
                hostname: 'www.cncf.io'
            }
        ]
    }
};

export default nextConfig;
