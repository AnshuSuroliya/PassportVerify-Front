// import { google } from 'googleapis';
 
// const CLIENT_ID = '414452798257-2upm2aj9ai85a3ttccnhj9n5b1lq8lod.apps.googleusercontent.com';
// const CLIENT_SECRET = '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';
// const REDIRECT_URI = 'http://localhost:3000/verification';
// const oAuth2Client = new google.auth.OAuth2(
//   CLIENT_ID,
//   CLIENT_SECRET,
//   REDIRECT_URI
// );
 
// const SCOPES = ['https://www.googleapis.com/auth/drive'];
 
// export const authenticateWithGoogle = () => {
//   const authUrl = oAuth2Client.generateAuthUrl({
//     access_type: 'offline',
//     scope: SCOPES,
//   });
  
//   window.location.href = authUrl;
// };
 
// export const handleCallback = async (code) => {
//   const { tokens } = await oAuth2Client.getToken(code);
//   oAuth2Client.setCredentials(tokens);
//   return oAuth2Client;
// };
 
// export const listFiles = async (auth) => {
// const drive = google.drive({ version: 'v3', auth });
//   const response = await drive.files.list({
//     pageSize: 10,
//     fields: 'nextPageToken, files(id, name)',
//   });
//   return response.data.files;
// };