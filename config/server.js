module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 3337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'cb1421f8db3614f0090c0302b02dd38e'),
    },
  },
});
