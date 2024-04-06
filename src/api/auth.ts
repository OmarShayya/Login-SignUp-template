import api from "./api";

interface LoginDTO {
  email?: string;
  username?: string;
  password: string;
}

interface createUserDto {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  areaCode: string;
  phoneNumber: string;
  prime: boolean;
  image?: string;
  imageName?: string;
  token?: string;
}

export const login = async (dto: LoginDTO) => {
  const res = await api.post(`/users/login`, dto);
  return res.data;
};

export const SendPasswordResetCodeService = async (dto: {
  username?: string;
}) => {
  const response = await api.post(`users/password-reset`, {
    ...dto,
  });
  return response.data;
};
export const ResetPasswordService = async (dto: {
  username?: string;
  newPassword: string;
  code: number;
}) => {
  const response = await api.put(`users/password-reset`, {
    ...dto,
  });
  return response.data;
};

export const createuser = async (dto: createUserDto) => {
  const response = await api.post(`users`, {
    ...dto,
    prime: dto?.prime ? 1 : 0,
  });
  return response.data;
};

export const verifyEmail = async (dto: { username: string; code: number }) => {
  const response = await api.post(`users/activate-user`, { ...dto });
  return response.data;
};
