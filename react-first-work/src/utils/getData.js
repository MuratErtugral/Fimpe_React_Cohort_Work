import axios from 'axios';

const getData = async (userId) => {
  try {
    const userResponse = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const postsResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);

    const userData = userResponse.data;
    const postsData = postsResponse.data;

    const result = {
      id: userData.id,
      name: userData.name,
      username: userData.username,
      email: userData.email,
      address: userData.address,
      phone: userData.phone,
      website: userData.website,
      company: userData.company,
      posts: postsData,
    };

    return result;
  } catch (error) {
    console.error('Error fetching data:', error.message);
    throw error; // Propagate the error
  }
};

export default getData;
