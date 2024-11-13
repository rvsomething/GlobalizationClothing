// jwt.js

// Create JWT token and save it as a cookie
exports.sendToken = (admin, statusCode, res) => {
  const token = admin.getJwtToken();
  const options = {
    expires: new Date(
      Date.now() + parseDuration(process.env.COOKIE_EXPIRE || '5d')
    ),
    httpOnly: true,
    sameSite: 'none',
    secure: process.env.NODE_ENV === "production",
  };
  res
    .status(statusCode)
    .cookie('token', token, options)
    .json({
      success: true,
      data: {
        id: admin._id,
        name: admin.name,
        email: admin.email,
        privilege: admin.privilege,
      },
    });
    console.log("Cookie options:", options);
console.log("Cookie set in response:", res.get('Set-Cookie'));
};


// Helper function to parse expiration durations
const parseDuration = (duration) => {
  const time = parseInt(duration);
  if (duration.includes('d')) return time * 24 * 60 * 60 * 1000;
  if (duration.includes('h')) return time * 60 * 60 * 1000;
  return time; // Default to milliseconds if format unrecognized
};
