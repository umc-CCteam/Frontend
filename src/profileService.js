const fetchProfile = async () => {
    try {
      const response = await fetch('/api/profile'); // 실제 서버 엔드포인트에 맞게 수정
      const profileData = await response.json();
      return profileData;
    } catch (error) {
      console.error('Error fetching profile:', error);
      throw error;
    }
  };
  
  export { fetchProfile };
  
  const updateProfile = async (updatedProfile) => {
    try {
      const response = await fetch('/api/update-profile', {
        method: 'PUT', // 또는 다른 HTTP 메서드
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedProfile),
      });
      
      const updatedData = await response.json();
      return updatedData;
    } catch (error) {
      console.error('Error updating profile:', error);
      throw error;
    }
  };
  
  export { updateProfile };