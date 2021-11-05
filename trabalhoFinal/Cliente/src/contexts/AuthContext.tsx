import { createContext, ReactNode, useState } from "react";
import { useToast} from '@chakra-ui/react'
import { useHistory } from 'react-router'
import axios from 'axios'

export type User = {
    token: string,
    username: string;
    avatar: string;
}
  

interface AuthContextProps {
    user: User | undefined,
    authToken:String | null,
    login: (usuario: string, senha: string) => void,
    logout: () => void,
    register: (usuario: string, senha: string, email: string, firstName: string, lastName: string) => void
}

type AuthContextProviderProps = {
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextProps);

export function AuthContextProvider({ children }: AuthContextProviderProps) {

    const [user, setUser] = useState<User | undefined>(() => {
        const user = localStorage.getItem('@ppinfo:user');
        const parsedUser =  user ? JSON.parse(user) : undefined;

        if(parsedUser) { return parsedUser} else {return undefined}
    });

    const [authToken,setAuthToken] = useState<String|null>(()=>{
        const au = localStorage.getItem('@ppinfo:authToken');
        return au
    })

    const history = useHistory();
    const toast = useToast();


    async function login(usuario: string, senha: string){


        await axios.post('http://localhost:8080/authenticate',{username:usuario,password:senha}).then(res =>{
    
            if(res.status == 200){
                console.log("CONSEGUIU")
                const authUsername = res.data.username;
                const authToken = res.data.token;
    
                const user = {
                    token: authToken,
                    username: authUsername,
                    avatar: `https://github.com/${authUsername}.png`
                }
    
                setUser(user);
                setAuthToken(authToken)
                localStorage.setItem('@ppinfo:user', JSON.stringify(user));
                localStorage.setItem('@ppinfo:authToken', authToken);
            }

        }).then(()=>{
            toast({
                title: "Login bem sucedido",
                description: "Você está logado na PPInfo. Boa navegação.",
                status: "success",
                duration: 4000,
                position: 'top',
                isClosable: true,
            });
            
        }).catch((error)=>{
            console.log(`Error = ${error}`)
            toast({
                title: "Erro ao fazer login",
                description: "Usuário ou senha inválido.",
                status: "error",
                duration: 4000,
                position: 'top',
                isClosable: true,
            });
        })

    }

    function logout() {
        setUser(undefined);
        localStorage.removeItem('@ppinfo:user')
        localStorage.removeItem('@ppinfo:authToken')
    }

    async function register(usuario: string, senha: string, email: string, firstName: string, lastName: string) {
        // salvar no bd

        const data = {
            username:usuario,
            password:senha,
            email,
            firstname:firstName,
            lastname:lastName
        }
        await axios.post('http://localhost:8080/user/register',data).then(res=>{

            if(res.status == 201){
                toast({
                    title: "Cadastro bem sucedido",
                    description: "Você está cadastrado na PPInfo. Faça login para navegar.",
                    status: "success",
                    duration: 4000,
                    position: 'top',
                    isClosable: true,
                });
            }

        }).catch((error)=>{
            console.log(`Error = ${error}`)
            toast({
                title: "Erro ao fazer cadastro",
                description: "Email já está em uso.",
                status: "error",
                duration: 4000,
                position: 'top',
                isClosable: true,
            });
        })


    }

    return (
        <AuthContext.Provider value={{ user, login, logout, register, authToken }}>
            {children}
        </AuthContext.Provider>
      );
}