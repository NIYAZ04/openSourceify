import API from "../config/apiClient";


export const getUserForProfileProject = async () => {
  try {
    const response = await API.get("/user");
    return response; 
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
};

interface LoginData {
  email: string;
  password: string;

}
interface RegisterData{
   "email":string,
    "password":string ,
    "confirmPassword":string ,
    "userName":string 
}


export const login = async (data: LoginData) => {
  return API.post("/auth/login", data);
};
export const logout = async () =>  API.get("/auth/logout");


export const register = async (data: RegisterData) => 
     API.post("/auth/register", data);
 


export const verifyEmail = async (verificationCode: string) => {
    return API.get(`/auth/email/verify/${verificationCode}`)
}

 export const sendPasswordResetEmail = async (email: string) =>
    API.post("/auth/password/forgot", { email });

 interface ResetPasswordData {
  verificationCode: string;
  password: string;
}
 export const resetPassword = async (data: ResetPasswordData) => 
  API.post("/auth/password/reset", data);

 // for user login 
 export const getUser = async ()=>API.get("/user")
 export const getSessions = async () => API.get("/sessions");
 export const deleteSession = async (id: string) => API.delete(`/sessions/${id}`);

 // Creatign api for the projects ||   There are 3 end points 
// one is to get data from / porjects (GET )
// one is for Get users project user can get their porjects 
// one is a (POST ) for posting the projects to the webstie

interface ProjectData {
  name: string;
  link: string;
  willPay: boolean;
  license: string;
  domain: string;
  languages: string;
  description: string;
  maintainers: string[];
}

export const getProjectsByDomain = async (domain: string) => API.get(`/projects/domain/${domain}`);


export const createProject = async (data: ProjectData) => API.post("/projects", data);


export const getProjectsByUser = async (userId: string) => 
  API.get(`/projects/user/${userId}`);

//  api to delete the project of the user 
export const deleteProject = async (projectId: string) => {
  return API.delete(`/projects/${projectId}`);
};