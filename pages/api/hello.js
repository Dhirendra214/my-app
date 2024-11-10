// utils/api.ts
export const fetchUsers = async () => {
  try {
   const url = `https://script.googleusercontent.com/macros/echo?user_content_key=0nPo4EbMOebieLgawOOI60U-OsYR0vUD0FgRxd1oplGp-nh_d2a4u5YyGtcV42b-lVvq2145_aY958mq0Kr4vynN2EaP1TXYm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnF-jD0F2w9lemU2YWckAwvvhfnjJqp6BHN6SHL78RQBv_KKFI6FtzuF1uuSR1ObvTwwq1SPvkyehPDeVA8Lpx1LmZsPNNhlRMNz9Jw9Md8uu&lib=MVGu8lx8Nv9D1F0KoGhfyvaO6pltYgrts`

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch users: ${response.status}`);
  }

  // Parse the response as JSON
  const result = await response.json();
  return result.data
  } catch (err) {
    return []
  }
};
