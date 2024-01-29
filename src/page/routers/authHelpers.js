export const isAdmin = () => {
    const roleName = JSON.parse(localStorage.getItem('role'));
    return roleName === 'ADMIN';
  };