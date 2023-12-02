const axios = require('axios'); // Make sure to install axios using npm or yarn

const currentVersion = '2.0.0'; // Replace with your current version
const githubURL = 'https://raw.githubusercontent.com/LeechShares/Shared/main/version.txt'; // Replace with your GitHub version file URL

async function checkVersion() {
  try {
    const response = await axios.get(githubURL);
    const remoteVersion = response.data;

    console.log('Current Version:', currentVersion);
    console.log('Remote (Updated) Version:', remoteVersion.trim());

    if (currentVersion !== remoteVersion.trim()) {
      console.log('Your application is outdated. Please update to the latest version.');
    } else {
      console.log('Your application is up to date.');
    }
  } catch (error) {
    console.error('Error checking version:', error);
  }
}

checkVersion();